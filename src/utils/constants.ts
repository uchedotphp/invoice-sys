export enum InvoiceTypes {
    DRAFT = "draft",
    PENDING = "pending",
    PAID = "paid",
    OVERDUE = "overdue",
    CANCELED = "canceled",
}

export type InvoiceStatus = 'draft' | 'pending' | 'paid' | 'overdue' | 'canceled';

export interface InvoiceData {
    invoiceNumber: string;
    createdAt: string;
    recipient: string;
    amount: number;
    status: InvoiceStatus;
}