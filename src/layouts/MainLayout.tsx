import { Sidebar } from "@components/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@components/ui/Button";
import ChevronLeft from "../../public/left-chevron.svg";
import Header from "@components/Header";
import AddIcon from "../../public/plus.svg";
import ChevronDown from "../../public/down-chevron.svg";
import CreateInvoice from "@components/invoices/Create";
import { useState } from "react";
import { InvoiceManagementType } from "@utils/schema";

function MainLayout() {
  const [invoicePanel, togglePanel] = useState<{
    show: boolean;
    invoiceType: InvoiceManagementType;
  }>({
    show: false,
    invoiceType: "create",
  });

  const toggleInvoicePanel = ({
    invoiceType = "create",
    isVisible,
  }: {
    invoiceType?: InvoiceManagementType;
    isVisible: boolean;
  }) => {
    togglePanel({
      show: isVisible,
      invoiceType,
    });
  };

  const goBack = useNavigate();
  const location = useLocation();
  const isIndexHome = location.pathname === "/";

  return (
    // pull out panel
    <aside className="bg-quinary h-full flex flex-col lg:flex-row">
      <div
        onClick={() => toggleInvoicePanel({ isVisible: false })}
        className={`fixed bg-quaternary/50 w-full h-full z-0, [ ${
          invoicePanel.show ? "block" : "hidden"
        } ]`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-quinary w-[719px] h-full pl-[159px] pt-[59px] pr-[56px pb-8 rounded-tr-[20px] rounded-br-[20px]"
        >
          <CreateInvoice type={invoicePanel.invoiceType} />
        </div>
      </div>

      {/* sidebar */}
      <Sidebar />

      <div className="mx-6 max-w-[730px] md:w-full md:mx-auto mt-8 lg:mt-[77px] lg:mb-[54px] overflow-y-hidden">
        {/* Header area */}
        {!isIndexHome ? (
          <Button onClick={() => goBack(-1)} className="btn btn--flat pb-8">
            <img src={ChevronLeft} alt="chevron left" className="pr-6" />
            <span className="label font-bold">Go back</span>
          </Button>
        ) : (
          <Header className="w-full flex justify-between">
            <div>
              <h1 className="text-septenary font-bold pb-1.5" title="invoices">
                Invoices
              </h1>
              <p className="description text-quaternary" title="sub heading">
                No invoices
              </p>
            </div>

            <div className="flex items-center space-x-3 lg:space-x-11">
              <Button className="btn btn--flat">
                <span className="label font-bold">
                  Filter{" "}
                  <span className="hidden sm:inline-block">by status</span>
                </span>
                <img src={ChevronDown} alt="chevron down" className="ml-3.5" />
              </Button>

              <Button
                onClick={() =>
                  toggleInvoicePanel({ invoiceType: "create", isVisible: true })
                }
                className="btn btn--primary btn--rounded p-2 pr-[17px] space-x-4"
              >
                <span className="bg-white text-primary rounded-full px-[10.98px] py-[11.02px]">
                  <img src={AddIcon} alt="add icon" />
                </span>
                <span className="text-ground font-bold">
                  New <span className="hidden sm:inline-block">Invoice</span>
                </span>
              </Button>
            </div>
          </Header>
        )}

        <main className="pt-16 h-full overflow-y-auto">
          {/* pages */}
          <Outlet />
        </main>
      </div>
    </aside>
  );
}

export default MainLayout;
