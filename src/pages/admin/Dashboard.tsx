import { Package, ShoppingBag, Users, TrendingUp, IndianRupee, Eye } from "lucide-react";
import { products } from "@/data/products";

const stats = [
  { label: "Total Revenue", value: "₹4,52,000", change: "+12.5%", icon: IndianRupee, color: "text-success" },
  { label: "Orders", value: "156", change: "+8.2%", icon: ShoppingBag, color: "text-primary" },
  { label: "Products", value: String(products.length), change: "Active", icon: Package, color: "text-accent" },
  { label: "Customers", value: "1,248", change: "+24.1%", icon: Users, color: "text-offer" },
];

const recentOrders = [
  { id: "ORD-001", customer: "Rahul Sharma", product: "ARO World Pulse Pro 12L", amount: 14999, status: "Delivered" },
  { id: "ORD-002", customer: "Priya Patel", product: "ARO World CrystalClear 15L", amount: 18999, status: "Shipped" },
  { id: "ORD-003", customer: "Amit Kumar", product: "ARO World HydroGo Bottle", amount: 2999, status: "Processing" },
  { id: "ORD-004", customer: "Sneha Gupta", product: "ARO World AquaPure 8L", amount: 9999, status: "Pending" },
  { id: "ORD-005", customer: "Vikram Singh", product: "ARO World UnderSink Pro", amount: 24999, status: "Delivered" },
];

const statusColor: Record<string, string> = {
  Delivered: "bg-success/10 text-success",
  Shipped: "bg-primary/10 text-primary",
  Processing: "bg-offer/10 text-offer",
  Pending: "bg-muted text-muted-foreground",
};

const Dashboard = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p className="text-sm text-muted-foreground">Welcome back, Admin. Here's your store overview.</p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ label, value, change, icon: Icon, color }) => (
        <div key={label} className="bg-card border rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground font-medium">{label}</span>
            <Icon className={`h-5 w-5 ${color}`} />
          </div>
          <p className="text-2xl font-bold">{value}</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="h-3 w-3 text-success" />
            <span className="text-xs text-success font-medium">{change}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Recent Orders + Top Products */}
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-card border rounded-xl">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-semibold">Recent Orders</h3>
          <span className="text-xs text-primary font-medium cursor-pointer hover:underline">View All</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 text-muted-foreground font-medium">Order ID</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Customer</th>
                <th className="text-left p-3 text-muted-foreground font-medium hidden sm:table-cell">Product</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Amount</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} className="border-b last:border-0 hover:bg-secondary/30 transition-colors">
                  <td className="p-3 font-medium">{o.id}</td>
                  <td className="p-3">{o.customer}</td>
                  <td className="p-3 hidden sm:table-cell text-muted-foreground">{o.product}</td>
                  <td className="p-3 font-semibold">₹{o.amount.toLocaleString()}</td>
                  <td className="p-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor[o.status]}`}>{o.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-card border rounded-xl">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Top Products</h3>
        </div>
        <div className="p-4 space-y-3">
          {products.slice(0, 5).map((p) => (
            <div key={p.id} className="flex items-center gap-3">
              <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium line-clamp-1">{p.name}</p>
                <p className="text-xs text-muted-foreground">₹{p.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Eye className="h-3 w-3" />
                <span className="text-xs">{p.reviews}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
