import { Sidebar } from "@components/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@components/ui/Button";
import ChevronLeft from "../../public/left-chevron.svg";
import Header from "@components/Header";
import AddIcon from "../../public/plus.svg";
import ChevronDown from "../../public/down-chevron.svg";

function MainLayout() {
  const goBack = useNavigate();
  const location = useLocation();
  const isIndexHome = location.pathname === "/";

  return (
    <div className="bg-quinary h-full flex flex-col lg:flex-row">
      {/* sidebar */}
      <Sidebar />

      {/* Header area */}
      <div className="mx-6 max-w-[730px] md:w-full md:mx-auto h-full mt-8 lg:mt-[77px] lg:mb-[54px] overflow-y-hidden">
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

              <Button onClick={()=> console.log('clicked')} className="btn btn--primary btn--rounded p-2 pr-[17px] space-x-4">
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

        <main className="pt-16">
          {/* pages */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
