import { useState } from "react";
import type { Product } from "@/data/products";
import { Plus, Pencil, Trash2, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProductsQuery, useCategoriesQuery, useProductMutations } from "@/lib/query";

const AdminProducts = () => {
  const [search, setSearch] = useState("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "", price: "", originalPrice: "", description: "", category: "ro", stock: "", rating: "4.0", features: "",
  });

  const { data: productsData = [] } = useProductsQuery();
  const { data: categoriesData = [] } = useCategoriesQuery();
  const { addMutation, updateMutation, deleteMutation } = useProductMutations();

  const filtered = productsData.filter(
    (p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditingProduct(null);
    setForm({ name: "", price: "", originalPrice: "", description: "", category: "ro", stock: "", rating: "4.0", features: "" });
    setShowForm(true);
  };

  const openEdit = (p: Product) => {
    setEditingProduct(p);
    setForm({
      name: p.name,
      price: String(p.price),
      originalPrice: String(p.originalPrice),
      description: p.description,
      category: p.category,
      stock: String(p.stock),
      rating: String(p.rating),
      features: p.features.join(", "),
    });
    setShowForm(true);
  };

  const handleSave = () => {
    const newProduct = {
      name: form.name,
      price: Number(form.price),
      originalPrice: Number(form.originalPrice),
      description: form.description,
      image: editingProduct?.image || productsData[0]?.image || '/placeholder.svg',
      category: form.category,
      stock: Number(form.stock),
      rating: Number(form.rating),
      reviews: editingProduct?.reviews || 0,
      features: form.features.split(",").map((f) => f.trim()).filter(Boolean),
    };

    if (editingProduct) {
      updateMutation.mutate({ ...newProduct, id: editingProduct.id });
    } else {
      addMutation.mutate(newProduct);
    }
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">Products</h2>
          <p className="text-sm text-muted-foreground">{productsData.length} products total</p>
        </div>
        <Button className="gap-2" onClick={openAdd}>
          <Plus className="h-4 w-4" /> Add Product
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-card border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Product Table */}
      <div className="bg-card border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-secondary/30">
                <th className="text-left p-3 font-medium text-muted-foreground">Product</th>
                <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">Category</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Price</th>
                <th className="text-left p-3 font-medium text-muted-foreground hidden sm:table-cell">Stock</th>
                <th className="text-left p-3 font-medium text-muted-foreground hidden lg:table-cell">Rating</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b last:border-0 hover:bg-secondary/20 transition-colors">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div className="min-w-0">
                        <p className="font-medium line-clamp-1">{p.name}</p>
                        <p className="text-xs text-muted-foreground md:hidden">{p.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 hidden md:table-cell">
                    <span className="text-xs bg-secondary px-2 py-1 rounded-full font-medium">{p.category.toUpperCase()}</span>
                  </td>
                  {(addMutation.isPending || updateMutation.isPending || deleteMutation.isPending) && (
                    <tr>
                      <td colSpan={6} className="p-8 text-center">
                        <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Updating...</p>
                      </td>
                    </tr>
                  )}
                  <td className="p-3">
                    <p className="font-semibold">₹{p.price.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground line-through">₹{p.originalPrice.toLocaleString()}</p>
                  </td>
                  <td className="p-3 hidden sm:table-cell">
                    <span className={`text-xs font-medium ${p.stock > 10 ? "text-success" : p.stock > 0 ? "text-offer" : "text-destructive"}`}>
                      {p.stock} units
                    </span>
                  </td>
                  <td className="p-3 hidden lg:table-cell">{p.rating} ⭐</td>
                  <td className="p-3">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => openEdit(p)}
                        className="p-1.5 rounded-lg hover:bg-primary/10 text-primary transition-colors"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-foreground/20" onClick={() => setShowForm(false)} />
          <div className="relative bg-card border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">{editingProduct ? "Edit Product" : "Add Product"}</h3>
              <button onClick={() => setShowForm(false)} className="p-1 hover:bg-secondary rounded-lg">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Product Name</label>
                <input
                  className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Price (₹)</label>
                  <input
                    type="number"
                    className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Original Price (₹)</label>
                  <input
                    type="number"
                    className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={form.originalPrice}
                    onChange={(e) => setForm({ ...form, originalPrice: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Category</label>
                  <select
                    className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    {categoriesData.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Stock</label>
                  <input
                    type="number"
                    className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={form.stock}
                    onChange={(e) => setForm({ ...form, stock: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Description</label>
                <textarea
                  className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 h-20 resize-none"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Features (comma-separated)</label>
                <input
                  className="w-full mt-1 px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={form.features}
                  onChange={(e) => setForm({ ...form, features: e.target.value })}
                />
              </div>
              <Button className="w-full mt-2" onClick={handleSave}>
                {editingProduct ? "Update Product" : "Add Product"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
