import { createBrowserRouter } from "react-router-dom";
import MainLayout from '@layouts/MainLayout'
import Invoices from '@pages/InvoiceListing'
import InvoicePreview from "@pages/InvoicePreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Invoices /> },
      { path: "preview-invoice/:id", element: <InvoicePreview /> }
    ],
  },
]);

export default router;
