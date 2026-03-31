import { useState } from "react";
import { Search, Eye, ChevronDown } from "lucide-react";

interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  date: string;
  address: string;
}

const initialOrders: Order[] = [
  { id: "ORD-001", customer: "Rahul Sharma", email: "rahul@email.com", product: "ARO World Pulse Pro 12L", amount: 14999, status: "Delivered", date: "2026-03-28", address: "Mumbai, MH 400001" },
  { id: "ORD-002", customer: "Priya Patel", email: "priya@email.com", product: "ARO World CrystalClear 15L", amount: 18999, status: "Shipped", date: "2026-03-29", address: "Ahmedabad, GJ 380001" },
  { id: "ORD-003", customer: "Amit Kumar", email: "amit@email.com", product: "ARO World HydroGo Bottle", amount: 2999, status: "Processing", date: "2026-03-30", address: "Delhi, DL 110001" },
  { id: "ORD-004", customer: "Sneha Gupta", email: "sneha@email.com", product: "ARO World AquaPure 8L", amount: 9999, status: "Pending", date: "2026-03-31", address: "Pune, MH 411001" },
  { id: "ORD-005", customer: "Vikram Singh", email: "vikram@email.com", product: "ARO World UnderSink Pro", amount: 24999, status: "Delivered", date: "2026-03-27", address: "Bengaluru, KA 560001" },
  { id: "ORD-006", customer: "Neha Reddy", email: "neha@email.com", product: "ARO World WallMount Elite UV", amount: 12499, status: "Cancelled", date: "2026-03-26", address: "Hyderabad, TS 500001" },
];

const statuses: Order["status"][] = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

const statusColor: Record<string, string> = {
  Delivered: "bg-success/10 text-success",
  Shipped: "bg-primary/10 text-primary",
  Processing: "bg-offer/10 text-offer",
  Pending: "bg-muted text-muted-foreground",
  Cancelled: "bg-destructive/10 text-destructive",
};

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const filtered = orders.filter((o) => {
    const matchesSearch = o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || o.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const updateStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Orders</h2>
        <p className="text-sm text-muted-foreground">{orders.length} orders total</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2.5 bg-card border rounded-lg text-sm focus:outline-none"
        >
          <option value="all">All Statuses</option>
          {statuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="bg-card border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-secondary/30">
                <th className="text-left p-3 font-medium text-muted-foreground">Order</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Customer</th>
                <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">Product</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Amount</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                <th className="text-left p-3 font-medium text-muted-foreground hidden sm:table-cell">Date</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <>
                  <tr key={o.id} className="border-b last:border-0 hover:bg-secondary/20 transition-colors">
                    <td className="p-3 font-medium">{o.id}</td>
                    <td className="p-3">
                      <p>{o.customer}</p>
                      <p className="text-xs text-muted-foreground">{o.email}</p>
                    </td>
                    <td className="p-3 hidden md:table-cell text-muted-foreground">{o.product}</td>
                    <td className="p-3 font-semibold">₹{o.amount.toLocaleString()}</td>
                    <td className="p-3">
                      <select
                        value={o.status}
                        onChange={(e) => updateStatus(o.id, e.target.value as Order["status"])}
                        className={`text-xs font-medium px-2 py-1 rounded-full border-0 focus:outline-none cursor-pointer ${statusColor[o.status]}`}
                      >
                        {statuses.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="p-3 hidden sm:table-cell text-muted-foreground text-xs">{o.date}</td>
                    <td className="p-3">
                      <button
                        onClick={() => setExpandedOrder(expandedOrder === o.id ? null : o.id)}
                        className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${expandedOrder === o.id ? "rotate-180" : ""}`} />
                      </button>
                    </td>
                  </tr>
                  {expandedOrder === o.id && (
                    <tr key={`${o.id}-detail`}>
                      <td colSpan={7} className="p-4 bg-secondary/20">
                        <div className="grid sm:grid-cols-3 gap-3 text-sm">
                          <div>
                            <p className="text-xs text-muted-foreground font-medium">Delivery Address</p>
                            <p>{o.address}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground font-medium">Product</p>
                            <p>{o.product}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground font-medium">Payment</p>
                            <p className="text-success font-medium">Paid</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
