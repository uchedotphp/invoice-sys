import NoInvoices from "../../../public/email_campaign_flatline.svg";

interface EmptyStateProps {
  title?: string;
  description?: string;
}
export const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <div className="h-full grid place-content-center">
      <img src={NoInvoices} alt="no invoices image" />

      <div className="pt-[66px] text-center">
        <h2 className="font-bold text-septenary">
          {title || "There is nothing here"}
        </h2>
        <p className="pt-6 description text-quaternary">
          Create an invoice by clicking the <br />
          <span className="font-medium">New Invoice</span> button and get
          started
        </p>
      </div>
    </div>
  );
};

export const Invoices = () => {
  return <div>Invoices</div>;
};
