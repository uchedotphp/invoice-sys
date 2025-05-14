import { useInvoices } from '../../../hooks/useInvoices';

export function InvoiceList() {
  const { data: invoices, isLoading, error } = useInvoices();

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-md">
        Error loading invoices. Please try again later.
      </div>
    );
  }

  if (!invoices?.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No invoices found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">#</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Client</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Date</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Total</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr 
              key={invoice.id} 
              className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              <td className="py-3 px-4 font-medium">{invoice.invoiceNumber}</td>
              <td className="py-3 px-4">{invoice.clientName}</td>
              <td className="py-3 px-4">{new Date(invoice.date).toLocaleDateString()}</td>
              <td className="py-3 px-4">${invoice.total.toFixed(2)}</td>
              <td className="py-3 px-4">
                <span 
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    invoice.status === 'paid' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' 
                      : invoice.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                >
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                    View
                  </button>
                  <button className="text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300">
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}