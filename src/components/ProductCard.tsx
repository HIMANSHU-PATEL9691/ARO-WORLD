import { Link } from "react-router-dom";
import { Star, Phone } from "lucide-react";
import type { Product } from "@/data/products";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-offer text-offer-foreground text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-2">
          <Star className="h-3.5 w-3.5 fill-offer text-offer" />
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full mt-3 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          size="sm"
        >
          <Link to={`/product/${product.id}`}>
            <Phone className="h-4 w-4" />
            Inquire Now
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
