import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  date: string;
  dueDate: string;
  items: {
    description: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'draft' | 'pending' | 'paid';
}

// Query key
const INVOICES_KEY = 'invoices';

// Fetch all invoices
export function useInvoices() {
  return useQuery({
    queryKey: [INVOICES_KEY],
    queryFn: async () => {
      const { data } = await api.get<Invoice[]>('/invoices');
      return data;
    },
  });
}

// Fetch single invoice
export function useInvoice(id: string) {
  return useQuery({
    queryKey: [INVOICES_KEY, id],
    queryFn: async () => {
      const { data } = await api.get<Invoice>(`/invoices/${id}`);
      return data;
    },
    enabled: !!id, // Only run if id exists
  });
}

// Create a new invoice
export function useCreateInvoice() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (invoice: Omit<Invoice, 'id'>) => {
      const { data } = await api.post<Invoice>('/invoices', invoice);
      return data;
    },
    onSuccess: () => {
      // Invalidate the invoices query to refetch the updated list
      queryClient.invalidateQueries({ queryKey: [INVOICES_KEY] });
    },
  });
}

// Update an invoice
export function useUpdateInvoice() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...invoice }: Invoice) => {
      const { data } = await api.put<Invoice>(`/invoices/${id}`, invoice);
      return data;
    },
    onSuccess: (data) => {
      // Update the cache for this specific invoice
      queryClient.setQueryData([INVOICES_KEY, data.id], data);
      // Invalidate the list query
      queryClient.invalidateQueries({ queryKey: [INVOICES_KEY] });
    },
  });
}

// Delete an invoice
export function useDeleteInvoice() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/invoices/${id}`);
      return id;
    },
    onSuccess: (id) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: [INVOICES_KEY, id] });
      // Invalidate the list query
      queryClient.invalidateQueries({ queryKey: [INVOICES_KEY] });
    },
  });
}