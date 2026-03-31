import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
        <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Browse our products and add items to your cart.</p>
        <Button asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" /> Continue Shopping
      </Link>

      <h1 className="text-2xl font-bold mb-6">Shopping Cart ({items.length})</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence>
            {items.map(({ product, quantity }) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex gap-4 p-4 bg-card border rounded-xl"
              >
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-sm line-clamp-2 hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-lg font-bold mt-1">₹{product.price.toLocaleString()}</p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="p-1.5 hover:bg-secondary transition-colors rounded-l-lg"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 text-sm font-medium">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="p-1.5 hover:bg-secondary transition-colors rounded-r-lg"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card border rounded-xl p-6 sticky top-24">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-success font-medium">Free</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between text-base font-bold">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <Button className="w-full mt-6" size="lg">
              Proceed to Checkout
            </Button>
            <button
              onClick={clearCart}
              className="w-full mt-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
