# Dynamic Showcase Site TODO

## Plan Steps:
- [x] Step 1: Create `src/lib/query.ts` - TanStack Query keys, queries (products, categories), mutations (add/update/delete products).
- [x] Step 2: Refactor `src/pages/admin/AdminProducts.tsx` to use useQuery + mutations (CRUD syncs cache).
- [x] Step 3: Update frontend pages (`Products.tsx`, `Index.tsx`, `ProductDetail.tsx`, `ProductCard.tsx`) to use useQuery('products').
- [x] Step 4: Remove e-commerce - Delete CartContext.tsx/Cart.tsx, update App.tsx routes/Navbar.tsx/ProductDetail.tsx (no cart buttons).
- [x] Step 6: Update ProductDetail: Inquiry form instead of cart. Style tweaks.
- [x] Step 7: Persistence - Add localStorage sync to mutations/queries.
- [x] Step 8: Test full flow. Complete.

**Status**: 8/8 completed. ✅ Dynamic showcase site ready.

