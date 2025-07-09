// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Plus,
//   Package,
//   Edit,
//   Trash2,
//   Upload,
//   X,
//   Loader2,
//   Image,
// } from "lucide-react";

// const Table = ({
//   children,
//   ...props
// }: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableElement>>) => (
//   <div className="w-full overflow-auto">
//     <table className="w-full caption-bottom text-sm" {...props}>
//       {children}
//     </table>
//   </div>
// );

// const TableHeader = ({
//   children,
//   ...props
// }: React.PropsWithChildren<React.HTMLAttributes<HTMLTableSectionElement>>) => (
//   <thead className="[&_tr]:border-b" {...props}>
//     {children}
//   </thead>
// );

// const TableBody = ({
//   children,
//   ...props
// }: React.PropsWithChildren<React.HTMLAttributes<HTMLTableSectionElement>>) => (
//   <tbody className="[&_tr:last-child]:border-0" {...props}>
//     {children}
//   </tbody>
// );

// const TableRow: React.FC<
//   React.PropsWithChildren<React.HTMLAttributes<HTMLTableRowElement>>
// > = ({ children, ...props }) => (
//   <tr
//     className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
//     {...props}
//   >
//     {children}
//   </tr>
// );

// const TableHead: React.FC<
//   React.PropsWithChildren<
//     { className?: string } & React.ThHTMLAttributes<HTMLTableCellElement>
//   >
// > = ({ children, className = "", ...props }) => (
//   <th
//     className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
//     {...props}
//   >
//     {children}
//   </th>
// );

// const TableCell: React.FC<
//   React.PropsWithChildren<
//     { className?: string } & React.TdHTMLAttributes<HTMLTableCellElement>
//   >
// > = ({ children, className = "", ...props }) => (
//   <td
//     className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
//     {...props}
//   >
//     {children}
//   </td>
// );

// interface ProductImage {
//   id: string;
//   url: string;
//   alt?: string;
//   order: number;
// }

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   stock: number;
//   image: string;
//   category: string;
//   images: ProductImage[];
//   createdAt: string;
//   updatedAt: string;
// }

// const ProductManagement = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     stock: "",
//     image: "",
//     category: "",
//   });

//   const [dragActive, setDragActive] = useState(false);
//   const [uploadedImages, setUploadedImages] = useState<string[]>([]);
//   const [mainImageIndex, setMainImageIndex] = useState(0);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     return () => {
//       uploadedImages.forEach((url) => URL.revokeObjectURL(url));
//     };
//   }, [uploadedImages]);

//   const fetchProducts = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("/api/products");
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }
//       const data = await response.json();
//       setProducts(data);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Failed to fetch products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);

//     if (e.dataTransfer.files) {
//       handleFiles(Array.from(e.dataTransfer.files));
//     }
//   };

//   const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       handleFiles(Array.from(e.target.files));
//     }
//   };

//   const handleFiles = (files: File[]) => {
//     const imageFiles = files.filter((file) => file.type.startsWith("image/"));

//     if (imageFiles.length === 0) {
//       setError("Please select valid image files");
//       return;
//     }

//     const newPreviews = imageFiles.map((file) => URL.createObjectURL(file));

//     setUploadedFiles((prev) => [...prev, ...imageFiles]);
//     setUploadedImages((prev) => [...prev, ...newPreviews]);
//   };

//   const removeImage = (index: number) => {
//     const newImages = uploadedImages.filter((_, i) => i !== index);
//     setUploadedImages(newImages);

//     // Update main image if needed
//     if (index === mainImageIndex) {
//       if (newImages.length > 0) {
//         setMainImageIndex(0);
//         setFormData((prev) => ({
//           ...prev,
//           image: newImages[0],
//         }));
//       } else {
//         setFormData((prev) => ({
//           ...prev,
//           image: "",
//         }));
//       }
//     } else if (index < mainImageIndex) {
//       setMainImageIndex(mainImageIndex - 1);
//     }
//   };

//   const setAsMainImage = (index: number) => {
//     setMainImageIndex(index);
//     setFormData((prev) => ({
//       ...prev,
//       image: uploadedImages[index],
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setError(null);

//     if (
//       !formData.name ||
//       !formData.description ||
//       !formData.price ||
//       !formData.stock ||
//       !formData.category
//     ) {
//       setError("Please fill in all required fields");
//       setSubmitting(false);
//       return;
//     }

//     let imageUrls: string[] = [];

//     try {
//       // Upload images to Supabase (or wherever)
//       if (uploadedFiles.length > 0) {
//         const uploadPromises = uploadedFiles.map(async (file) => {
//           const formData = new FormData();
//           formData.append("file", file);

//           const response = await fetch("/api/upload", {
//             method: "POST",
//             body: formData,
//           });

//           if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.error || "Failed to upload image");
//           }

//           const { imageUrl } = await response.json();
//           return imageUrl;
//         });

//         imageUrls = await Promise.all(uploadPromises);
//       }

//       const productData = {
//         ...formData,
//         image: imageUrls[mainImageIndex] || "",
//         images: imageUrls.map((url, index) => ({
//           url,
//           alt: `${formData.name} image ${index + 1}`,
//         })),
//       };

//       const response = await fetch("/api/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(productData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to create product");
//       }

//       const newProduct = await response.json();
//       setProducts((prev) => [newProduct, ...prev]);

//       // Reset form
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         stock: "",
//         image: "",
//         category: "",
//       });
//       setUploadedImages([]);
//       setUploadedFiles([]);
//       setMainImageIndex(0);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Failed to create product");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const deleteProduct = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this product?")) {
//       return;
//     }

//     try {
//       const response = await fetch(`/api/products?id=${id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete product");
//       }

//       setProducts((prev) => prev.filter((product) => product.id !== id));
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Failed to delete product");
//     }
//   };

//   const getStockBadge = (stock: number) => {
//     if (stock > 50)
//       return (
//         <Badge variant="default" className="bg-green-500 hover:bg-green-600">
//           In Stock
//         </Badge>
//       );
//     if (stock > 20)
//       return (
//         <Badge variant="default" className="bg-yellow-500 hover:bg-yellow-600">
//           Low Stock
//         </Badge>
//       );
//     return <Badge variant="destructive">Very Low</Badge>;
//   };

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price);
//   };

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   return (
//     <div className="container mx-auto p-6 space-y-8">
//       <div className="flex items-center space-x-2">
//         <Package className="h-6 w-6" />
//         <h1 className="text-3xl font-bold">Product Management</h1>
//       </div>

//       {error && (
//         <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//           <p className="text-red-700">{error}</p>
//         </div>
//       )}

//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center space-x-2">
//             <Plus className="h-5 w-5" />
//             <span>Add New Product</span>
//           </CardTitle>
//           <CardDescription>
//             Fill in the details below to add a new product to your inventory
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Product Name</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter product name"
//                   required
//                   disabled={submitting}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="category">Category</Label>
//                 <Input
//                   id="category"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   placeholder="e.g., Electronics, Clothing"
//                   required
//                   disabled={submitting}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="description">Description</Label>
//               <Textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 placeholder="Enter product description"
//                 rows={3}
//                 required
//                 disabled={submitting}
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="price">Price ($)</Label>
//                 <Input
//                   id="price"
//                   name="price"
//                   type="number"
//                   step="0.01"
//                   value={formData.price}
//                   onChange={handleInputChange}
//                   placeholder="0.00"
//                   required
//                   disabled={submitting}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="stock">Stock Quantity</Label>
//                 <Input
//                   id="stock"
//                   name="stock"
//                   type="number"
//                   value={formData.stock}
//                   onChange={handleInputChange}
//                   placeholder="0"
//                   required
//                   disabled={submitting}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label>Product Images</Label>
//               <div
//                 className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
//                   dragActive
//                     ? "border-blue-500 bg-blue-50"
//                     : uploadedImages.length > 0
//                     ? "border-green-500 bg-green-50"
//                     : "border-gray-300 hover:border-gray-400"
//                 }`}
//                 onDragEnter={handleDrag}
//                 onDragLeave={handleDrag}
//                 onDragOver={handleDrag}
//                 onDrop={handleDrop}
//               >
//                 {uploading ? (
//                   <div className="text-center">
//                     <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
//                     <p className="text-sm text-gray-600">Uploading images...</p>
//                   </div>
//                 ) : uploadedImages.length > 0 ? (
//                   <div className="space-y-4">
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                       {uploadedImages.map((url, index) => (
//                         <div key={index} className="relative group">
//                           <img
//                             src={url}
//                             alt={`Product image ${index + 1}`}
//                             className={`w-full h-32 object-cover rounded-lg border-2 ${
//                               index === mainImageIndex
//                                 ? "border-blue-500"
//                                 : "border-gray-200"
//                             }`}
//                           />
//                           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
//                             <div className="opacity-0 group-hover:opacity-100 flex space-x-2">
//                               {index !== mainImageIndex && (
//                                 <Button
//                                   type="button"
//                                   size="sm"
//                                   variant="secondary"
//                                   onClick={() => setAsMainImage(index)}
//                                   disabled={submitting}
//                                 >
//                                   Main
//                                 </Button>
//                               )}
//                               <Button
//                                 type="button"
//                                 size="sm"
//                                 variant="destructive"
//                                 onClick={() => removeImage(index)}
//                                 disabled={submitting}
//                               >
//                                 <X className="h-4 w-4" />
//                               </Button>
//                             </div>
//                           </div>
//                           {index === mainImageIndex && (
//                             <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
//                               Main
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                     <div className="text-center">
//                       <input
//                         type="file"
//                         accept="image/*"
//                         multiple
//                         onChange={handleFileInput}
//                         className="hidden"
//                         id="additional-images"
//                         disabled={submitting || uploading}
//                       />
//                       <label
//                         htmlFor="additional-images"
//                         className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
//                       >
//                         <Plus className="h-4 w-4 mr-2" />
//                         Add More Images
//                       </label>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-center">
//                     <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                     <div className="text-sm text-gray-600 mb-2">
//                       <span className="font-medium">
//                         Drag 'n' drop images here, or click to select files
//                       </span>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       You can upload multiple images (up to 5 MB each)
//                     </p>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       multiple
//                       onChange={handleFileInput}
//                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                       disabled={submitting || uploading}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>

//             <Button
//               type="submit"
//               className="w-full"
//               disabled={submitting || uploading}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleSubmit(e as any);
//               }}
//             >
//               {submitting ? (
//                 <>
//                   <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                   Adding Product...
//                 </>
//               ) : (
//                 <>
//                   <Plus className="h-4 w-4 mr-2" />
//                   Add Product
//                 </>
//               )}
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Current Products</CardTitle>
//           <CardDescription>
//             Manage your existing product inventory ({products.length} products)
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {loading ? (
//             <div className="flex items-center justify-center py-8">
//               <Loader2 className="h-8 w-8 animate-spin" />
//               <span className="ml-2">Loading products...</span>
//             </div>
//           ) : (
//             <div className="rounded-md border">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="w-[100px]">Images</TableHead>
//                     <TableHead>Product</TableHead>
//                     <TableHead>Category</TableHead>
//                     <TableHead>Price</TableHead>
//                     <TableHead>Stock</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Created</TableHead>
//                     <TableHead className="text-right">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {products.map((product) => (
//                     <TableRow key={product.id}>
//                       <TableCell>
//                         <div className="flex items-center space-x-1">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-12 h-12 object-cover rounded-md"
//                           />
//                           {product.images.length > 1 && (
//                             <div className="flex items-center text-xs text-gray-500">
//                               <Image className="h-3 w-3 mr-1" />+
//                               {product.images.length - 1}
//                             </div>
//                           )}
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <div className="max-w-[200px]">
//                           <p className="font-medium">{product.name}</p>
//                           <p className="text-sm text-gray-500 truncate">
//                             {product.description}
//                           </p>
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <Badge variant="outline">{product.category}</Badge>
//                       </TableCell>
//                       <TableCell className="font-medium text-green-600">
//                         {formatPrice(product.price)}
//                       </TableCell>
//                       <TableCell className="font-medium">
//                         {product.stock} units
//                       </TableCell>
//                       <TableCell>{getStockBadge(product.stock)}</TableCell>
//                       <TableCell className="text-gray-500">
//                         {formatDate(product.createdAt)}
//                       </TableCell>
//                       <TableCell className="text-right">
//                         <div className="flex justify-end space-x-2">
//                           <Button variant="outline" size="sm">
//                             <Edit className="h-4 w-4" />
//                           </Button>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             className="text-red-600 hover:text-red-700"
//                             onClick={() => deleteProduct(product.id)}
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default ProductManagement;

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Package,
  Edit,
  Trash2,
  Upload,
  X,
  Loader2,
  Image,
} from "lucide-react";

const Table = ({
  children,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableElement>>) => (
  <div className="w-full overflow-auto">
    <table className="w-full caption-bottom text-sm" {...props}>
      {children}
    </table>
  </div>
);

const TableHeader = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLTableSectionElement>>) => (
  <thead className="[&_tr]:border-b" {...props}>
    {children}
  </thead>
);

const TableBody = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLTableSectionElement>>) => (
  <tbody className="[&_tr:last-child]:border-0" {...props}>
    {children}
  </tbody>
);

const TableRow: React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLTableRowElement>>
> = ({ children, ...props }) => (
  <tr
    className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    {...props}
  >
    {children}
  </tr>
);

const TableHead: React.FC<
  React.PropsWithChildren<
    { className?: string } & React.ThHTMLAttributes<HTMLTableCellElement>
  >
> = ({ children, className = "", ...props }) => (
  <th
    className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  >
    {children}
  </th>
);

const TableCell: React.FC<
  React.PropsWithChildren<
    { className?: string } & React.TdHTMLAttributes<HTMLTableCellElement>
  >
> = ({ children, className = "", ...props }) => (
  <td
    className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  >
    {children}
  </td>
);

interface ProductImage {
  id: string;
  url: string;
  alt?: string;
  order: number;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: string;
  images: ProductImage[];
  createdAt: string;
  updatedAt: string;
}

const ProductManagement = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    category: "",
  });

  const [dragActive, setDragActive] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    return () => {
      uploadedImages.forEach((url) => {
        if (url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    // Mock data for demonstration since we don't have an actual API
    const mockProducts: Product[] = [
      {
        id: "1",
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 199.99,
        stock: 45,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
        category: "Electronics",
        images: [
          {
            id: "1",
            url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
            order: 1,
          },
        ],
        createdAt: "2024-01-15T10:30:00Z",
        updatedAt: "2024-01-15T10:30:00Z",
      },
      {
        id: "2",
        name: "Smart Watch",
        description: "Feature-rich smartwatch with health tracking",
        price: 299.99,
        stock: 23,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
        category: "Electronics",
        images: [
          {
            id: "2",
            url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
            order: 1,
          },
        ],
        createdAt: "2024-01-14T09:15:00Z",
        updatedAt: "2024-01-14T09:15:00Z",
      },
    ];

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProducts(mockProducts);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length === 0) {
      setError("Please select valid image files");
      return;
    }

    setError(null);
    setUploading(true);

    const promises = imageFiles.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (result && typeof result === "string") {
            resolve(result);
          } else {
            reject(new Error("Failed to read file"));
          }
        };
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((newPreviews) => {
        setUploadedFiles((prev) => [...prev, ...imageFiles]);
        setUploadedImages((prev) => {
          const updated = [...prev, ...newPreviews];

          // Set first image as main image if no images were previously uploaded
          if (prev.length === 0 && updated.length > 0) {
            setMainImageIndex(0);
            setFormData((prevForm) => ({
              ...prevForm,
              image: updated[0],
            }));
          }

          return updated;
        });
      })
      .catch((err) => {
        setError("Failed to process images");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const removeImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    const newFiles = uploadedFiles.filter((_, i) => i !== index);

    // Revoke the object URL if it's a blob
    if (uploadedImages[index].startsWith("blob:")) {
      URL.revokeObjectURL(uploadedImages[index]);
    }

    setUploadedImages(newImages);
    setUploadedFiles(newFiles);

    // Update main image if needed
    if (index === mainImageIndex) {
      if (newImages.length > 0) {
        setMainImageIndex(0);
        setFormData((prev) => ({
          ...prev,
          image: newImages[0],
        }));
      } else {
        setMainImageIndex(0);
        setFormData((prev) => ({
          ...prev,
          image: "",
        }));
      }
    } else if (index < mainImageIndex) {
      setMainImageIndex(mainImageIndex - 1);
    }
  };

  const setAsMainImage = (index: number) => {
    setMainImageIndex(index);
    setFormData((prev) => ({
      ...prev,
      image: uploadedImages[index],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (
      !formData.name ||
      !formData.description ||
      !formData.price ||
      !formData.stock ||
      !formData.category
    ) {
      setError("Please fill in all required fields");
      setSubmitting(false);
      return;
    }

    try {
      // Simulate API call for creating product
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const newProduct: Product = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        image:
          uploadedImages[mainImageIndex] ||
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
        category: formData.category,
        images: uploadedImages.map((url, index) => ({
          id: `${Date.now()}-${index}`,
          url,
          alt: `${formData.name} image ${index + 1}`,
          order: index + 1,
        })),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setProducts((prev) => [newProduct, ...prev]);

      // Reset form
      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        category: "",
      });

      // Clean up object URLs
      uploadedImages.forEach((url) => {
        if (url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });

      setUploadedImages([]);
      setUploadedFiles([]);
      setMainImageIndex(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create product");
    } finally {
      setSubmitting(false);
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete product");
    }
  };

  const getStockBadge = (stock: number) => {
    if (stock > 50)
      return (
        <Badge variant="default" className="bg-green-500 hover:bg-green-600">
          In Stock
        </Badge>
      );
    if (stock > 20)
      return (
        <Badge variant="default" className="bg-yellow-500 hover:bg-yellow-600">
          Low Stock
        </Badge>
      );
    return <Badge variant="destructive">Very Low</Badge>;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center space-x-2">
        <Package className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Product Management</h1>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add New Product</span>
          </CardTitle>
          <CardDescription>
            Fill in the details below to add a new product to your inventory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  required
                  disabled={submitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="e.g., Electronics, Clothing"
                  required
                  disabled={submitting}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter product description"
                rows={3}
                required
                disabled={submitting}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  required
                  disabled={submitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  value={formData.stock}
                  onChange={handleInputChange}
                  placeholder="0"
                  required
                  disabled={submitting}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Product Images</Label>
              <div
                className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : uploadedImages.length > 0
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {uploading ? (
                  <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                    <p className="text-sm text-gray-600">
                      Processing images...
                    </p>
                  </div>
                ) : uploadedImages.length > 0 ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {uploadedImages.map((url, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={url}
                            alt={`Product image ${index + 1}`}
                            className={`w-full h-auto object-cover rounded-lg border-2 ${
                              index === mainImageIndex
                                ? "border-blue-500"
                                : "border-gray-200"
                            }`}
                            onError={(e) => {
                              console.error("Image failed to load:", url);
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 transition-all duration-200 rounded-lg flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 flex space-x-2">
                              {index !== mainImageIndex && (
                                <Button
                                  type="button"
                                  size="sm"
                                  variant="secondary"
                                  onClick={() => setAsMainImage(index)}
                                  disabled={submitting}
                                >
                                  Make it Main
                                </Button>
                              )}
                              <Button
                                type="button"
                                size="sm"
                                variant="destructive"
                                onClick={() => removeImage(index)}
                                disabled={submitting}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          {index === mainImageIndex && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                              Main
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileInput}
                        className="hidden"
                        id="additional-images"
                        disabled={submitting || uploading}
                      />
                      <label
                        htmlFor="additional-images"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add More Images
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">
                        Drag 'n' drop images here, or click to select files
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      You can upload multiple images (up to 5 MB each)
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileInput}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      disabled={submitting || uploading}
                    />
                  </div>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={submitting || uploading}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e as any);
              }}
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Adding Product...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Products</CardTitle>
          <CardDescription>
            Manage your existing product inventory ({products.length} products)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="ml-2">Loading products...</span>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Images</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          {product.images.length > 1 && (
                            <div className="flex items-center text-xs text-gray-500">
                              <Image className="h-3 w-3 mr-1" />+
                              {product.images.length - 1}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-[200px]">
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500 truncate">
                            {product.description}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{product.category}</Badge>
                      </TableCell>
                      <TableCell className="font-medium text-green-600">
                        {formatPrice(product.price)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {product.stock} units
                      </TableCell>
                      <TableCell>{getStockBadge(product.stock)}</TableCell>
                      <TableCell className="text-gray-500">
                        {formatDate(product.createdAt)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => deleteProduct(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductManagement;
