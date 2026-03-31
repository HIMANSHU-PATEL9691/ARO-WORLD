import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

const AdminSettings = () => (
  <div className="space-y-6 max-w-2xl">
    <div>
      <h2 className="text-2xl font-bold">Settings</h2>
      <p className="text-sm text-muted-foreground">Manage your store configuration</p>
    </div>

    <div className="bg-card border rounded-xl p-6 space-y-5">
      <h3 className="font-semibold">Store Information</h3>
      <div className="space-y-3">
        <div>
          <label className="text-xs font-medium text-muted-foreground">Store Name</label>
          <input
            defaultValue="ARO World Water Purifiers"
            className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Support Email</label>
          <input
            defaultValue="support@ARO World.in"
            className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Support Phone</label>
          <input
            defaultValue="1800-123-ARO World"
            className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Store Address</label>
          <textarea
            defaultValue="Mumbai, Maharashtra, India"
            className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 h-20 resize-none"
          />
        </div>
      </div>
    </div>

    <div className="bg-card border rounded-xl p-6 space-y-5">
      <h3 className="font-semibold">Shipping & Delivery</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-muted-foreground">Free Delivery Threshold (₹)</label>
          <input
            type="number"
            defaultValue="5000"
            className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Delivery Charge (₹)</label>
          <input
            type="number"
            defaultValue="99"
            className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>
    </div>

    <div className="bg-card border rounded-xl p-6 space-y-5">
      <h3 className="font-semibold">Tax & Currency</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-muted-foreground">GST Rate (%)</label>
          <input
            type="number"
            defaultValue="18"
            className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Currency</label>
          <select className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none">
            <option>INR (₹)</option>
            <option>USD ($)</option>
          </select>
        </div>
      </div>
    </div>

    <Button className="gap-2">
      <Save className="h-4 w-4" /> Save Settings
    </Button>
  </div>
);

export default AdminSettings;
