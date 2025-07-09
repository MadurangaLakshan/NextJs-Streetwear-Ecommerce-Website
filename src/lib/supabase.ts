// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper function to upload image to Supabase Storage
export async function uploadImage(
  file: File,
  folder: string = "products"
): Promise<string> {
  // Generate unique filename
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substr(2, 9)}.${fileExt}`;
  const filePath = `${folder}/${fileName}`;

  // Upload file to Supabase Storage
  const { data, error } = await supabase.storage
    .from("product-images") // Your bucket name
    .upload(filePath, file);

  if (error) {
    throw new Error(`Error uploading image: ${error.message}`);
  }

  // Get public URL
  const { data: publicUrlData } = supabase.storage
    .from("product-images")
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

// Helper function to delete image from Supabase Storage
export async function deleteImage(imageUrl: string): Promise<void> {
  // Extract file path from URL
  const urlParts = imageUrl.split("/product-images/");
  if (urlParts.length !== 2) return;

  const filePath = urlParts[1];

  const { error } = await supabase.storage
    .from("product-images")
    .remove([filePath]);

  if (error) {
    console.error("Error deleting image:", error);
  }
}
