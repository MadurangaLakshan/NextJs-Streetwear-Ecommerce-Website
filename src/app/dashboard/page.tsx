"use client";

import { AnalyticsContent } from "@/components/admin/AnalyticsContent";
import OrdersManagement from "@/components/admin/Orders";
import ProductManagement from "@/components/admin/Products";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Page() {
  const [tab, setTab] = useState("dashboard");
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" onNavSelect={setTab} />
      <SidebarInset>
        <SiteHeader />
        <Tabs
          defaultValue="dashboard"
          value={tab}
          onValueChange={setTab}
          className="flex-1 flex flex-col"
        >
          <div className="flex-1 px-4 lg:px-6 py-4">
            <TabsContent value="dashboard">
              <AnalyticsContent />
            </TabsContent>
            <TabsContent value="products">
              <ProductManagement />
            </TabsContent>
            <TabsContent value="orders">
              <OrdersManagement />
            </TabsContent>

            <TabsContent value="user accounts">
              <span>users</span>
            </TabsContent>
          </div>
        </Tabs>
      </SidebarInset>
    </SidebarProvider>
  );
}
