import { useState } from "react";
import { Search, MoreHorizontal } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  orders: number;
  spent: number;
  joined: string;
  status: "Active" | "Inactive";
}

const initialUsers: User[] = [
  { id: "U001", name: "Rahul Sharma", email: "rahul@email.com", orders: 5, spent: 45000, joined: "2025-11-15", status: "Active" },
  { id: "U002", name: "Priya Patel", email: "priya@email.com", orders: 3, spent: 28000, joined: "2025-12-01", status: "Active" },
  { id: "U003", name: "Amit Kumar", email: "amit@email.com", orders: 1, spent: 2999, joined: "2026-01-20", status: "Active" },
  { id: "U004", name: "Sneha Gupta", email: "sneha@email.com", orders: 2, spent: 24998, joined: "2026-02-10", status: "Inactive" },
  { id: "U005", name: "Vikram Singh", email: "vikram@email.com", orders: 7, spent: 89000, joined: "2025-09-05", status: "Active" },
  { id: "U006", name: "Neha Reddy", email: "neha@email.com", orders: 4, spent: 52000, joined: "2025-10-12", status: "Active" },
  { id: "U007", name: "Karan Mehta", email: "karan@email.com", orders: 0, spent: 0, joined: "2026-03-25", status: "Inactive" },
];

const AdminUsers = () => {
  const [search, setSearch] = useState("");
  const filtered = initialUsers.filter(
    (u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Users</h2>
        <p className="text-sm text-muted-foreground">{initialUsers.length} registered users</p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-card border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="bg-card border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-secondary/30">
                <th className="text-left p-3 font-medium text-muted-foreground">User</th>
                <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">Orders</th>
                <th className="text-left p-3 font-medium text-muted-foreground hidden sm:table-cell">Total Spent</th>
                <th className="text-left p-3 font-medium text-muted-foreground hidden lg:table-cell">Joined</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b last:border-0 hover:bg-secondary/20 transition-colors">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                        {u.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{u.name}</p>
                        <p className="text-xs text-muted-foreground">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 hidden md:table-cell">{u.orders}</td>
                  <td className="p-3 hidden sm:table-cell font-medium">₹{u.spent.toLocaleString()}</td>
                  <td className="p-3 hidden lg:table-cell text-muted-foreground text-xs">{u.joined}</td>
                  <td className="p-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      u.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                    }`}>
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
