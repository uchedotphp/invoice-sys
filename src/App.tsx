import { MainLayout } from "./layouts/MainLayout";
import Header from "./components/Header";
import { Button } from "./components/ui/Button";
import AddIcon from "../public/plus.svg";
import ChevronDown from "../public/down-chevron.svg";
import { EmptyState } from "./components/invoices/Index";

function App() {
  return (
    <MainLayout>
      <Header className="w-full flex justify-between">
        <div>
          <h1 className="text-septenary font-bold pb-1.5">Invoices</h1>
          <p className="description text-quaternary">No invoices</p>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-11">
          <Button className="btn btn--flat">
            <span className="label font-bold">
              Filter <span className="hidden sm:inline-block">by status</span>
            </span>
            <img src={ChevronDown} alt="chevron down" className="ml-3.5" />
          </Button>

          <Button className="btn btn--primary btn--rounded p-2 pr-[17px] space-x-4">
            <span className="bg-white text-primary rounded-full px-[10.98px] py-[11.02px]">
              <img src={AddIcon} alt="add icon" />
            </span>
            <span className="text-ground font-bold">
              New <span className="hidden sm:inline-block">Invoice</span>
            </span>
          </Button>
        </div>
      </Header>

      <article className="h-full overflow-y-auto">
        <EmptyState />
      </article>
    </MainLayout>
  );
}

export default App;
