import { InvoiceManagementType } from "@utils/schema";
import { Button } from "@components/ui/Button";
import AddNewInvoiceItem from "@components/invoices/AddNewItem";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "@utils/schema";

interface InvoiceProps {
  type: InvoiceManagementType;
  closePanel: () => void;
}

const Create = ({ type, closePanel }: InvoiceProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(FormData) });

  const handleData = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <article>
      <h2 className="text-2xl text-secondary font-semibold pb-[46px]">
        {type === "create" ? "New Invoice" : "Edit Invoice"}
      </h2>
      <form onSubmit={handleSubmit(handleData)} className="space-y-[49px]">
        <fieldset className="flex flex-col space-y-[25px]">
          <legend>Bill from</legend>
          <label htmlFor="street_address">
            <div className="pb-[9px] flex justify-between">
              <span className="capitalize">street address</span>
              {errors.streetAddressFrom && (
                <span className="label--error">
                  {errors.streetAddressFrom.message}
                </span>
              )}
            </div>
            <input
              {...register("streetAddressFrom")}
              type="text"
              id="street_address"
              name="street_address"
              placeholder="Street Address"
              className={`input ${
                errors.streetAddressFrom ? "input--error" : ""
              }`}
            />
          </label>

          <div className="grid grid-cols-3 gap-6">
            <label htmlFor="city">
              <div className="pb-[9px]">City</div>
              <input
                {...register("cityFrom")}
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className={`input ${errors.cityFrom ? "input--error" : ""}`}
              />
            </label>

            <label htmlFor="postal_code">
              <div className="pb-[9px]">postal code</div>
              <input
                type="text"
                id="postal_code"
                name="postal_code"
                placeholder="postal code"
                className={`input ${
                  errors.postalCodeFrom ? "input--error" : ""
                }`}
              />
            </label>

            <label htmlFor="country">
              <div className="pb-[9px]">country</div>
              <input
                {...register("countryFrom")}
                type="text"
                id="country"
                name="country"
                placeholder="country"
                className={`input ${errors.countryFrom ? "input--error" : ""}`}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="flex flex-col space-y-[25px]">
          <legend>Bill to</legend>
          <label htmlFor="client_name">
            <div className="pb-[9px] flex justify-between">
              <span className="capitalize">Client's Name</span>

              {errors.clientName && <span className="label--error">{errors.clientName.message}</span>}
            </div>
            <input
              {...register("clientName")}
              type="text"
              id="client_name"
              name="client_name"
              placeholder="Client Name"
              className={`input ${errors.clientName ? "input--error" : ""}`}
            />
          </label>

          <label htmlFor="client_email">
            <div className="pb-[9px] flex justify-between">
              <span className="capitalize">client's email</span>
              {errors.clientEmail && <span className="label--error">{errors.clientEmail.message}</span>}
            </div>
            <input
              {...register("clientEmail")}
              type="text"
              id="client_email"
              name="client_email"
              placeholder="email@email.com"
              className={`input ${errors.clientEmail ? "input--error" : ""}`}
            />
          </label>

          <label htmlFor="street_address_to">
            <div className="pb-[9px] flex justify-between">
              <span className="capitalize">street address</span>
              {errors.streetAddressTo && (
                <span className="label--error">{errors.streetAddressTo.message}</span>
              )}
            </div>
            <input
              {...register("streetAddressTo")}
              type="text"
              id="street_address_to"
              name="street_address_to"
              placeholder="Street Address"
              className={`input ${errors.clientEmail ? "input--error" : ""}`}
            />
          </label>

          <div className="grid grid-cols-3 gap-6">
            <label htmlFor="city_to">
              <div className="pb-[9px] capitalize">City</div>
              <input
                {...register("cityTo")}
                type="text"
                id="city_to"
                name="city_to"
                placeholder="City"
                className={`input ${errors.cityTo ? "input--error" : ""}`}
              />
            </label>

            <label htmlFor="postal_code_to">
              <div className="pb-[9px] capitalize">postal code</div>
              <input
                {...register("postalCodeTo")}
                type="text"
                id="postal_code_to"
                name="postal_code_to"
                placeholder="postal code"
                className={`input ${errors.postalCodeTo ? "input--error" : ""}`}
              />
            </label>

            <label htmlFor="country_to">
              <div className="pb-[9px] capitalize">country</div>
              <input
                {...register("countryTo")}
                type="text"
                id="country_to"
                name="country_to"
                placeholder="country"
                className={`input ${errors.countryTo ? "input--error" : ""}`}
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <label htmlFor="invoice_date">
              <div className="pb-[9px] capitalize">Invoice date</div>
              <input
                {...register("invoiceDate")}
                type="text"
                id="invoice_date"
                name="invoice_date"
                placeholder="City"
                className={`input ${errors.invoiceDate ? "input--error" : ""}`}
              />
            </label>

            <label htmlFor="payment_terms">
              <div className="pb-[9px] capitalize">payment terms</div>
              <input
                type="text"
                id="payment_terms"
                name="payment_terms"
                placeholder="postal code"
                className="input"
              />
            </label>
          </div>

          <label htmlFor="project_description">
            <div className="pb-[9px] flex justify-between">
              <span className="capitalize">project description</span>
              {errors.invoiceDescription && (
                <span className="label--error">{errors.invoiceDescription.message}</span>
              )}
            </div>
            <input
              type="text"
              id="project_description"
              name="project_description"
              placeholder="Project description"
              className={`input ${
                errors.invoiceDescription ? "input--error" : ""
              }`}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend className="legend--large">Item List</legend>
          <AddNewInvoiceItem />
        </fieldset>

        <section className="w-full flex py-8">
          <Button
            type="button"
            onClick={() => closePanel()}
            className="capitalize btn btn--rounded bg-[#F9FAFE] text-ground text-tertiary font-bold pt-[18px] pb-[15px] px-6"
          >
            Discard
          </Button>

          <Button
            type="button"
            className="ml-auto capitalize btn btn--rounded bg-black text-quaternary text-ground font-bold pt-[18px] pb-[15px] px-6"
          >
            Save as Draft
          </Button>
          <Button
            // disabled={!isValid}
            type="submit"
            className="ml-2 capitalize btn btn--rounded btn--primary text-ground font-bold pt-[18px] pb-[15px] px-6"
          >
            Save & Send
          </Button>
        </section>
      </form>
    </article>
  );
};

export default Create;
