import { z } from 'zod'

export const InvoiceRecipient = z.object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required').optional(),
    email: z.string().email('Invalid email address').optional(),
    address: z.string().optional(),
    phoneNumber: z.number().optional(),
})

export const InvoiceStatus = z.enum(['draft', 'pending', 'sent', 'paid', 'overdue', 'canceled'] as const)

export const InvoiceSchema = z.object({
    id: z.string().uuid(),
    status: InvoiceStatus,
    amount: z.number().positive(),
    dueDate: z.string().datetime(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    invoiceNumber: z.string().min(1, 'Invoice Number is required'),
    recipient: InvoiceRecipient,
})

export const InvoiceManagement = z.enum(['create', 'view', 'update', 'delete'] as const)

export type InvoiceManagementType = z.infer<typeof InvoiceManagement>;

export type InvoiceData = z.infer<typeof InvoiceSchema>;