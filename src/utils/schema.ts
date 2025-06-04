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
export const FormData = z.object({
    streetAddressFrom: z.string().min(7, { message: "Address can't be that short" }),
    cityFrom: z.string().min(1, { message: "City can't be empty" }),
    postalCodeFrom: z.string().min(1, { message: "Postal code can't be empty" }),
    countryFrom: z.string().min(1, { message: "Country can't be empty" }),
    streetAddressTo: z.string().min(7, { message: "Address can't be that short" }),
    cityTo: z.string().min(1, { message: "City can't be empty" }),
    postalCodeTo: z.string().min(1, { message: "Postal code can't be empty" }),
    countryTo: z.string().min(1, { message: "Country can't be empty" }),
    clientEmail: z.string().email('Invalid email address').optional(),
    clientName: z.string().min(1, { message: "Client name can't be empty" }),
    invoiceDate: z.string().datetime({ message: "Invalid date format" }),
    invoiceDescription: z.string().min(5, { message: "Description can't be empty" }),
})

export const InvoiceManagement = z.enum(['create', 'view', 'update', 'delete'] as const)

export type FormData = z.infer<typeof FormData>;

export type InvoiceManagementType = z.infer<typeof InvoiceManagement>;

export type InvoiceData = z.infer<typeof InvoiceSchema>;