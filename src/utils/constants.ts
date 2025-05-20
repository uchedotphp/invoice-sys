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

// invoice listing data
export const invoiceData: InvoiceData[] = [
    {
        invoiceNumber: "RT3080",
        createdAt: "19 Aug 2021",
        recipient: "Jensen Huang",
        amount: 5424.9,
        status: "paid",
    },
    {
        invoiceNumber: "RT3081",
        createdAt: "20 Aug 2021",
        recipient: "John Doe",
        amount: 1234.56,
        status: "pending",
    },
    {
        invoiceNumber: "RT3082",
        createdAt: "21 Aug 2021",
        recipient: "Jane Smith",
        amount: 7890.12,
        status: "overdue",
    },
    {
        invoiceNumber: "RT3083",
        createdAt: "22 Aug 2021",
        recipient: "Alice Johnson",
        amount: 3456.78,
        status: "draft",
    },
    {
        invoiceNumber: "RT3084",
        createdAt: "23 Aug 2021",
        recipient: "bob Brownbob BrownbobBr ownbobBrown bobBrownb obBrown",
        amount: 9101.11,
        status: "canceled",
    },
    {
        invoiceNumber: "RT3085",
        createdAt: "24 Aug 2021",
        recipient: "Charlie Brown",
        amount: 5678.90,
        status: "paid",
    },
    {
        invoiceNumber: "RT3086",
        createdAt: "25 Aug 2021",
        recipient: "David Wilson",
        amount: 2345.67,
        status: "pending",
    },
    {
        invoiceNumber: "RT3087",
        createdAt: "26 Aug 2021",
        recipient: "Eva Green",
        amount: 8901.23,
        status: "overdue",
    },
    {
        invoiceNumber: "RT3088",
        createdAt: "27 Aug 2021",
        recipient: "Frank Castle",
        amount: 4567.89,
        status: "draft",
    },
    {
        invoiceNumber: "RT3089",
        createdAt: "28 Aug 2021",
        recipient: "Grace Lee",
        amount: 1234.56,
        status: "canceled",
    },
    {
        invoiceNumber: "RT3090",
        createdAt: "29 Aug 2021",
        recipient: "Henry Ford",
        amount: 7890.12,
        status: "paid",
    },
];