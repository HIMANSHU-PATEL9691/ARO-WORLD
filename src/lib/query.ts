import { useQuery, useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { products, categories, type Product } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

// Query Keys
export const productsQueryKey = ['products'] as const;
export const categoriesQueryKey = ['categories'] as const;

// Queries
export function useProductsQuery() {
  return useQuery({
    queryKey: productsQueryKey,
    queryFn: async () => {
      // Fallback to static data. Will be overridden by cache mutations
      return products;
    },
    staleTime: 5 * 60 * 1000, // 5min
  });
}

export function useCategoriesQuery() {
  return useQuery({
    queryKey: categoriesQueryKey,
    queryFn: async () => categories,
    staleTime: Infinity,
  });
}

// Mutations
export function useProductMutations() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const addMutation = useMutation({
    mutationFn: (newProduct: Omit<Product, 'id'> & { id?: string }) => {
      const product = { ...newProduct, id: newProduct.id || String(Date.now()) };
      // Simulate API call
      return new Promise<Product>((resolve) => setTimeout(() => resolve(product), 500));
    },
    onSuccess: (data) => {
      queryClient.setQueryData(productsQueryKey, (old: Product[] | undefined) => [...(old || []), data]);
      toast({ title: 'Product added successfully' });
    },
    onError: () => toast({ title: 'Failed to add product', variant: 'destructive' }),
  });

  const updateMutation = useMutation({
    mutationFn: (updatedProduct: Product) => {
      // Simulate API
      return new Promise<Product>((resolve) => setTimeout(() => resolve(updatedProduct), 500));
    },
    onSuccess: (data) => {
      queryClient.setQueryData(productsQueryKey, (old: Product[] | undefined) =>
        (old || []).map((p) => (p.id === data.id ? data : p))
      );
      toast({ title: 'Product updated successfully' });
    },
    onError: () => toast({ title: 'Failed to update product', variant: 'destructive' }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => {
      // Simulate API
      return new Promise<string>((resolve) => setTimeout(() => resolve(id), 500));
    },
    onSuccess: (id) => {
      queryClient.setQueryData(productsQueryKey, (old: Product[] | undefined) =>
        (old || []).filter((p) => p.id !== id)
      );
      toast({ title: 'Product deleted successfully' });
    },
    onError: () => toast({ title: 'Failed to delete product', variant: 'destructive' }),
  });

  return { addMutation, updateMutation, deleteMutation };
}

