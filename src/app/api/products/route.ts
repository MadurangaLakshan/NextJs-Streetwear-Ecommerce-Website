import { prisma } from "@/lib/prisma";
import { deleteImage } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: {
          orderBy: {
            order: "asc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, description, price, stock, image, images, category } =
      await request.json();

    // Validate required fields
    if (!name || !description || !price || !stock || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create product in database with images
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        image:
          image ||
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
        category,
        images: {
          create:
            images?.map(
              (img: { url: string; alt?: string }, index: number) => ({
                url: img.url,
                alt: img.alt || `${name} image ${index + 1}`,
                order: index,
              })
            ) || [],
        },
      },
      include: {
        images: {
          orderBy: {
            order: "asc",
          },
        },
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Check if product exists and get the image URLs
    const existingProduct = await prisma.product.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });

    if (!existingProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Delete the product (this will cascade delete images due to onDelete: Cascade)
    await prisma.product.delete({
      where: { id },
    });

    // Delete the main image from Supabase Storage if it exists
    if (existingProduct.image && existingProduct.image.includes("supabase")) {
      try {
        await deleteImage(existingProduct.image);
      } catch (error) {
        console.error("Error deleting main image from storage:", error);
      }
    }

    // Delete all additional images from Supabase Storage
    for (const image of existingProduct.images) {
      if (image.url && image.url.includes("supabase")) {
        try {
          await deleteImage(image.url);
        } catch (error) {
          console.error("Error deleting image from storage:", error);
        }
      }
    }

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
