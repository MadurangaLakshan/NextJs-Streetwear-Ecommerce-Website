import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search, Eye, Edit, Trash2, Filter } from "lucide-react";

// Custom Table components matching shadcn styling
const Table: React.FC<
  React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableElement>>
> = ({ children, ...props }) => (
  <div className="w-full overflow-auto">
    <table className="w-full caption-bottom text-sm" {...props}>
      {children}
    </table>
  </div>
);

const TableHeader: React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLTableSectionElement>>
> = ({ children, ...props }) => (
  <thead className="[&_tr]:border-b" {...props}>
    {children}
  </thead>
);

const TableBody: React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLTableSectionElement>>
> = ({ children, ...props }) => (
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

const OrdersManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  type OrderStatus =
    | "pending"
    | "processing"
    | "shipped"
    | "completed"
    | "cancelled";
  type Order = {
    id: string;
    total: number;
    status: OrderStatus;
    userId: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
    orderItems: {
      id: string;
      productName: string;
      quantity: number;
      price: number;
    }[];
    createdAt: string;
  };

  const [orders, setOrders] = useState<Order[]>([
    {
      id: "clk1a2b3c4d5e6f7g8h9",
      total: 249.97,
      status: "completed",
      userId: "user1",
      user: {
        id: "user1",
        name: "John Doe",
        email: "john.doe@example.com",
      },
      orderItems: [
        {
          id: "item1",
          productName: "Wireless Headphones",
          quantity: 1,
          price: 199.99,
        },
        { id: "item2", productName: "USB Cable", quantity: 2, price: 24.99 },
      ],
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: "clk2b3c4d5e6f7g8h9i0",
      total: 89.98,
      status: "pending",
      userId: "user2",
      user: {
        id: "user2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
      },
      orderItems: [
        {
          id: "item3",
          productName: "Cotton T-Shirt",
          quantity: 3,
          price: 29.99,
        },
      ],
      createdAt: "2024-01-20T14:45:00Z",
    },
    {
      id: "clk3c4d5e6f7g8h9i0j1",
      total: 134.97,
      status: "processing",
      userId: "user3",
      user: {
        id: "user3",
        name: "Mike Johnson",
        email: "mike.johnson@example.com",
      },
      orderItems: [
        { id: "item4", productName: "Water Bottle", quantity: 2, price: 34.99 },
        { id: "item5", productName: "Yoga Mat", quantity: 1, price: 79.99 },
      ],
      createdAt: "2024-01-22T09:15:00Z",
    },
    {
      id: "clk4d5e6f7g8h9i0j1k2",
      total: 599.99,
      status: "shipped",
      userId: "user4",
      user: {
        id: "user4",
        name: "Sarah Wilson",
        email: "sarah.wilson@example.com",
      },
      orderItems: [
        {
          id: "item6",
          productName: "Laptop Stand",
          quantity: 1,
          price: 199.99,
        },
        {
          id: "item7",
          productName: "Mechanical Keyboard",
          quantity: 1,
          price: 299.99,
        },
        {
          id: "item8",
          productName: "Wireless Mouse",
          quantity: 1,
          price: 99.99,
        },
      ],
      createdAt: "2024-01-18T16:20:00Z",
    },
    {
      id: "clk5e6f7g8h9i0j1k2l3",
      total: 45.99,
      status: "cancelled",
      userId: "user5",
      user: {
        id: "user5",
        name: "David Brown",
        email: "david.brown@example.com",
      },
      orderItems: [
        { id: "item9", productName: "Phone Case", quantity: 1, price: 24.99 },
        {
          id: "item10",
          productName: "Screen Protector",
          quantity: 1,
          price: 19.99,
        },
      ],
      createdAt: "2024-01-12T11:30:00Z",
    },
    {
      id: "clk6f7g8h9i0j1k2l3m4",
      total: 199.99,
      status: "pending",
      userId: "user6",
      user: {
        id: "user6",
        name: "Emily Davis",
        email: "emily.davis@example.com",
      },
      orderItems: [
        {
          id: "item11",
          productName: "Fitness Tracker",
          quantity: 1,
          price: 199.99,
        },
      ],
      createdAt: "2024-01-25T08:45:00Z",
    },
  ]);

  const getStatusBadge = (
    status: "pending" | "processing" | "shipped" | "completed" | "cancelled"
  ) => {
    const statusStyles: Record<
      "pending" | "processing" | "shipped" | "completed" | "cancelled",
      string
    > = {
      pending: "bg-yellow-500 hover:bg-yellow-600",
      processing: "bg-blue-500 hover:bg-blue-600",
      shipped: "bg-purple-500 hover:bg-purple-600",
      completed: "bg-green-500 hover:bg-green-600",
      cancelled: "bg-red-500 hover:bg-red-600",
    };

    return (
      <Badge
        variant="default"
        className={`${statusStyles[status]} text-white capitalize`}
      >
        {status}
      </Badge>
    );
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
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getOrderSummary = (orderItems: { quantity: number }[]) => {
    const itemCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);
    const uniqueProducts = orderItems.length;
    return `${itemCount} items (${uniqueProducts} products)`;
  };

  const updateOrderStatus = (
    orderId: string,
    newStatus: "pending" | "processing" | "shipped" | "completed" | "cancelled"
  ) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const deleteOrder = (orderId: string) => {
    setOrders((prev) => prev.filter((order) => order.id !== orderId));
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getOrderStats = () => {
    const total = orders.length;
    const pending = orders.filter((o) => o.status === "pending").length;
    const processing = orders.filter((o) => o.status === "processing").length;
    const completed = orders.filter((o) => o.status === "completed").length;
    const totalRevenue = orders
      .filter((o) => o.status === "completed")
      .reduce((sum, order) => sum + order.total, 0);

    return { total, pending, processing, completed, totalRevenue };
  };

  const stats = getOrderStats();

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center space-x-2">
        <ShoppingCart className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Orders Management</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {stats.pending}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {stats.processing}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {stats.completed}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {formatPrice(stats.totalRevenue)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by Order ID, customer name, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                onClick={() => setStatusFilter("all")}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={statusFilter === "pending" ? "default" : "outline"}
                onClick={() => setStatusFilter("pending")}
                size="sm"
              >
                Pending
              </Button>
              <Button
                variant={statusFilter === "processing" ? "default" : "outline"}
                onClick={() => setStatusFilter("processing")}
                size="sm"
              >
                Processing
              </Button>
              <Button
                variant={statusFilter === "shipped" ? "default" : "outline"}
                onClick={() => setStatusFilter("shipped")}
                size="sm"
              >
                Shipped
              </Button>
              <Button
                variant={statusFilter === "completed" ? "default" : "outline"}
                onClick={() => setStatusFilter("completed")}
                size="sm"
              >
                Completed
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
          <CardDescription>
            Manage all customer orders ({filteredOrders.length} orders)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono text-sm">
                      {order.id.substring(0, 12)}...
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.user.name}</p>
                        <p className="text-sm text-gray-500">
                          {order.user.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {getOrderSummary(order.orderItems)}
                        </p>
                        <p className="text-sm text-gray-500">
                          {order.orderItems
                            .slice(0, 2)
                            .map((item) => item.productName)
                            .join(", ")}
                          {order.orderItems.length > 2 && "..."}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="font-bold text-green-600">
                      {formatPrice(order.total)}
                    </TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell className="text-gray-500">
                      {formatDate(order.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          title="Edit Status"
                          disabled={order.status === "cancelled"}
                          onClick={() => {
                            const statuses: (
                              | "pending"
                              | "processing"
                              | "shipped"
                              | "completed"
                            )[] = [
                              "pending",
                              "processing",
                              "shipped",
                              "completed",
                            ];
                            if (statuses.includes(order.status as any)) {
                              const currentIndex = statuses.indexOf(
                                order.status as (typeof statuses)[number]
                              );
                              const nextStatus =
                                statuses[(currentIndex + 1) % statuses.length];
                              updateOrderStatus(order.id, nextStatus);
                            }
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                          title="Delete Order"
                          onClick={() => deleteOrder(order.id)}
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

export default OrdersManagement;
