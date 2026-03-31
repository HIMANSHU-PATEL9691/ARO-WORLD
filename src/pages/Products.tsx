import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Search, SlidersHorizontal } from "lucide-react";
import { useProductsQuery, useCategoriesQuery } from "@/lib/query";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const activeCategory = searchParams.get("category") || "all";

  const { data: productsData = [] } = useProductsQuery();
  const { data: categoriesData = [] } = useCategoriesQuery();

  const filtered = useMemo(() => {
    let result = productsData;
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    if (sortBy === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, search, sortBy, productsData]);

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">
        {activeCategory === "all" ? "All Products" : categoriesData.find((c) => c.id === activeCategory)?.name || "Products"}
      </h1>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={activeCategory}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "all") { searchParams.delete("category"); }
              else { searchParams.set("category", val); }
              setSearchParams(searchParams);
            }}
            className="px-3 py-2.5 bg-card border rounded-lg text-sm focus:outline-none"
          >
            <option value="all">All Categories</option>
            {categoriesData.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2.5 bg-card border rounded-lg text-sm focus:outline-none"
          >
            <option value="relevance">Relevance</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <SlidersHorizontal className="h-12 w-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm">Try adjusting your filters or search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
