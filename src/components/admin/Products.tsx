// import React, { useState } from "react";
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
// import { Plus, Package, Edit, Trash2, Upload, X } from "lucide-react";

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
//   const [uploadedImage, setUploadedImage] = useState<string | null>(null);

//   // Dummy data for existing products
//   const [products, setProducts] = useState([
//     {
//       id: "clk1a2b3c4d5e6f7g8h9",
//       name: "Wireless Bluetooth Headphones",
//       description:
//         "Premium noise-cancelling wireless headphones with 30-hour battery life",
//       price: 199.99,
//       stock: 45,
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
//       category: "Electronics",
//       createdAt: "2024-01-15T10:30:00Z",
//       updatedAt: "2024-01-20T14:45:00Z",
//     },
//     {
//       id: "clk2b3c4d5e6f7g8h9i0",
//       name: "Organic Cotton T-Shirt",
//       description: "Comfortable 100% organic cotton t-shirt in various colors",
//       price: 29.99,
//       stock: 120,
//       image:
//         "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
//       category: "Clothing",
//       createdAt: "2024-01-10T08:15:00Z",
//       updatedAt: "2024-01-18T16:20:00Z",
//     },
//     {
//       id: "clk3c4d5e6f7g8h9i0j1",
//       name: "Stainless Steel Water Bottle",
//       description:
//         "Insulated 32oz water bottle that keeps drinks cold for 24 hours",
//       price: 34.99,
//       stock: 78,
//       image:
//         "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
//       category: "Home & Kitchen",
//       createdAt: "2024-01-12T12:00:00Z",
//       updatedAt: "2024-01-22T09:30:00Z",
//     },
//     {
//       id: "clk4d5e6f7g8h9i0j1k2",
//       name: "Yoga Mat Premium",
//       description: "Non-slip premium yoga mat with alignment guides, 6mm thick",
//       price: 79.99,
//       stock: 32,
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
//       category: "Sports & Fitness",
//       createdAt: "2024-01-08T15:45:00Z",
//       updatedAt: "2024-01-19T11:15:00Z",
//     },
//     {
//       id: "clk5e6f7g8h9i0j1k2l3",
//       name: "LED Desk Lamp",
//       description:
//         "Adjustable LED desk lamp with touch control and USB charging port",
//       price: 89.99,
//       stock: 15,
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
//       category: "Home & Office",
//       createdAt: "2024-01-14T13:20:00Z",
//       updatedAt: "2024-01-21T10:05:00Z",
//     },
//   ]);

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

//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       handleFile(e.dataTransfer.files[0]);
//     }
//   };

//   const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       handleFile(e.target.files[0]);
//     }
//   };

//   const handleFile = (file: File) => {
//     if (file.type.startsWith("image/")) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         if (!e.target) return;
//         const imageUrl = e.target.result;
//         if (typeof imageUrl === "string") {
//           setUploadedImage(imageUrl);
//           setFormData((prev) => ({
//             ...prev,
//             image: imageUrl,
//           }));
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const removeImage = () => {
//     setUploadedImage(null);
//     setFormData((prev) => ({
//       ...prev,
//       image: "",
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Create new product object
//     const newProduct = {
//       id: `clk${Date.now()}${Math.random().toString(36).substr(2, 9)}`,
//       name: formData.name,
//       description: formData.description,
//       price: parseFloat(formData.price),
//       stock: parseInt(formData.stock),
//       image:
//         formData.image ||
//         "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
//       category: formData.category,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     };

//     // Add to products list
//     setProducts((prev) => [newProduct, ...prev]);

//     // Reset form
//     setFormData({
//       name: "",
//       description: "",
//       price: "",
//       stock: "",
//       image: "",
//       category: "",
//     });
//     setUploadedImage(null);
//   };

//   const getStockBadge = (stock: number) => {
//     if (stock > 50)
//       return (
//         <Badge variant="default" className="bg-green-500">
//           In Stock
//         </Badge>
//       );
//     if (stock > 20)
//       return (
//         <Badge variant="default" className="bg-yellow-500">
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

//       {/* Add Product Form */}
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
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="image">Product Image</Label>
//               <div
//                 className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
//                   dragActive
//                     ? "border-blue-500 bg-blue-50"
//                     : uploadedImage
//                     ? "border-green-500 bg-green-50"
//                     : "border-gray-300 hover:border-gray-400"
//                 }`}
//                 onDragEnter={handleDrag}
//                 onDragLeave={handleDrag}
//                 onDragOver={handleDrag}
//                 onDrop={handleDrop}
//               >
//                 {uploadedImage ? (
//                   <div className="relative">
//                     <img
//                       src={uploadedImage}
//                       alt="Uploaded product"
//                       className="w-full h-32 object-cover rounded-lg"
//                     />
//                     <button
//                       type="button"
//                       onClick={removeImage}
//                       className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
//                     >
//                       <X className="h-4 w-4" />
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="text-center">
//                     <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                     <div className="text-sm text-gray-600 mb-2">
//                       <span className="font-medium">
//                         Drag 'n' drop files here, or click to select files
//                       </span>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       You can upload 1 file (up to 8 MB each)
//                     </p>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleFileInput}
//                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>

//             <Button type="submit" className="w-full">
//               <Plus className="h-4 w-4 mr-2" />
//               Add Product
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Products Table */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Current Products</CardTitle>
//           <CardDescription>
//             Manage your existing product inventory ({products.length} products)
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-2">
//             {products.map((product) => (
//               <Card key={product.id} className="border-l-4 border-l-blue-500">
//                 <CardContent className="">
//                   <div className="flex items-start space-x-4">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-16 h-16 object-cover rounded-lg"
//                     />
//                     <div className="flex-1 ">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h3 className="font-semibold text-lg">
//                             {product.name}
//                           </h3>
//                           <p className="text-sm text-gray-600">
//                             {product.description}
//                           </p>
//                         </div>
//                         <div className="flex space-x-2">
//                           <Button variant="outline" size="sm">
//                             <Edit className="h-4 w-4" />
//                           </Button>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             className="text-red-600 hover:text-red-700"
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </div>
//                       <div className="flex flex-wrap gap-4 text-sm">
//                         <div className="flex items-center space-x-2">
//                           <span className="font-medium">Category:</span>
//                           <Badge variant="outline">{product.category}</Badge>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <span className="font-medium">Price:</span>
//                           <span className="text-lg font-bold text-green-600">
//                             {formatPrice(product.price)}
//                           </span>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <span className="font-medium">Stock:</span>
//                           <span className="font-medium">
//                             {product.stock} units
//                           </span>
//                           {getStockBadge(product.stock)}
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <span className="font-medium">Created:</span>
//                           <span className="text-gray-500">
//                             {formatDate(product.createdAt)}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default ProductManagement;

import React, { useState } from "react";
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
// Custom Table components since shadcn table is not available
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
import { Badge } from "@/components/ui/badge";
import { Plus, Package, Edit, Trash2, Upload, X } from "lucide-react";

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
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Dummy data for existing products
  const [products, setProducts] = useState([
    {
      id: "clk1a2b3c4d5e6f7g8h9",
      name: "Wireless Bluetooth Headphones",
      description:
        "Premium noise-cancelling wireless headphones with 30-hour battery life",
      price: 199.99,
      stock: 45,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      category: "Electronics",
      createdAt: "2024-01-15T10:30:00Z",
      updatedAt: "2024-01-20T14:45:00Z",
    },
    {
      id: "clk2b3c4d5e6f7g8h9i0",
      name: "Organic Cotton T-Shirt",
      description: "Comfortable 100% organic cotton t-shirt in various colors",
      price: 29.99,
      stock: 120,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      category: "Clothing",
      createdAt: "2024-01-10T08:15:00Z",
      updatedAt: "2024-01-18T16:20:00Z",
    },
    {
      id: "clk3c4d5e6f7g8h9i0j1",
      name: "Stainless Steel Water Bottle",
      description:
        "Insulated 32oz water bottle that keeps drinks cold for 24 hours",
      price: 34.99,
      stock: 78,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      category: "Home & Kitchen",
      createdAt: "2024-01-12T12:00:00Z",
      updatedAt: "2024-01-22T09:30:00Z",
    },
    {
      id: "clk4d5e6f7g8h9i0j1k2",
      name: "Yoga Mat Premium",
      description: "Non-slip premium yoga mat with alignment guides, 6mm thick",
      price: 79.99,
      stock: 32,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
      category: "Sports & Fitness",
      createdAt: "2024-01-08T15:45:00Z",
      updatedAt: "2024-01-19T11:15:00Z",
    },
    {
      id: "clk5e6f7g8h9i0j1k2l3",
      name: "LED Desk Lamp",
      description:
        "Adjustable LED desk lamp with touch control and USB charging port",
      price: 89.99,
      stock: 15,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      category: "Home & Office",
      createdAt: "2024-01-14T13:20:00Z",
      updatedAt: "2024-01-21T10:05:00Z",
    },
  ]);

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

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (!e.target) return;
        const imageUrl = e.target.result;
        if (typeof imageUrl === "string") {
          setUploadedImage(imageUrl);
          setFormData((prev) => ({
            ...prev,
            image: imageUrl,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setFormData((prev) => ({
      ...prev,
      image: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.description ||
      !formData.price ||
      !formData.stock ||
      !formData.category
    ) {
      return;
    }

    // Create new product object
    const newProduct = {
      id: `clk${Date.now()}${Math.random().toString(36).substr(2, 9)}`,
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
      category: formData.category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Add to products list
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
    setUploadedImage(null);
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

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center space-x-2">
        <Package className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Product Management</h1>
      </div>

      {/* Add Product Form */}
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
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Product Image</Label>
              <div
                className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : uploadedImage
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {uploadedImage ? (
                  <div className="relative">
                    <img
                      src={uploadedImage}
                      alt="Uploaded product"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">
                        Drag 'n' drop files here, or click to select files
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      You can upload 1 file (up to 8 MB each)
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInput}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Current Products</CardTitle>
          <CardDescription>
            Manage your existing product inventory ({products.length} products)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Image</TableHead>
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
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
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
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductManagement;
