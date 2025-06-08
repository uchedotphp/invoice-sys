import { Button } from "@components/ui/Button";
import DeleteButton from "../../../public/delete.svg";
import { invoiceItems } from "@utils/dummyData";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const AddNewItem = () => {
  const duplicateItem = [...invoiceItems];
  const [items, setItems] = useState(duplicateItem);

  const Schema = z.array(
    z.object({
      itemName: z.string().min(1, "Item name is required"),
      quantity: z.number().min(1, "Quantity must be at least 1"),
      price: z.number().positive("Price must be greater than 0"),
      total: z.number().optional(),
    })
  );

  type FormData = z.infer<typeof Schema>;

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const addItem = () => {
    const values = getValues();
    console.log("Current values:", values);

    // check that other items are not empty
    const hasEmptyItem = items.some(
      (item) => item.itemName === "" || item.quantity <= 0 || item.price <= 0
    );
    if (hasEmptyItem) {
      alert(
        "Please fill in all fields for existing items before adding a new one."
      );
      return;
    }

    const lastId = items.length > 0 ? items[items.length - 1].id : 0;
    setItems([
      ...items,
      { id: lastId + 1, itemName: "", quantity: 0, price: 0, total: 0 },
    ]);
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <table className="table-fixed w-full border-separate border-spacing-x-4 border-spacing-y-[18px]">
        {items.length ? (
          <thead>
            <tr>
              <th className="text-left font-thin w-2/4">Item Name</th>
              <th className="text-left font-thin">Qty.</th>
              <th className="text-left font-thin w-1/5">Price ($)</th>
              <th className="text-left font-thin">Total ($)</th>
              <th className="w-3"></th>
            </tr>
          </thead>
        ) : null}
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                {/* {item.itemName} */}
                <input
                  {...register(`${index}.itemName`, {
                    required: "Item name is required",
                  })}
                  type="text"
                  className={`input text-center ${
                    errors?.[index]?.itemName ? "input--error" : ""
                  }`}
                />
              </td>
              <td>
                <input
                  {...register(`${index}.quantity`, {
                    valueAsNumber: true,
                  })}
                  className={`input text-center ${
                    errors?.[index]?.quantity ? "input--error" : ""
                  }`}
                />
              </td>
              <td>
                <input
                  {...register(`${index}.price`, {
                    valueAsNumber: true,
                  })}
                  type="text"
                  className={`input text-center ${
                    errors?.[index]?.price ? "input--error" : ""
                  }`}
                />
              </td>
              <td>{item.total.toFixed(2)}</td>
              <td className="w-fit">
                <Button
                  type="button"
                  onClick={() => deleteItem(item.id)}
                  className="btn btn--flat"
                >
                  <img src={DeleteButton} alt="delete button" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        type="button"
        onClick={() => addItem()}
        className="capitalize btn btn--rounded bg-[#F9FAFE] w-full text-tertiary font-bold pt-[18px] pb-[15px]"
      >
        Add new item
      </Button>
    </>
  );
};

export default AddNewItem;
