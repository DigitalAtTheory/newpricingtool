import { useEffect } from "react";
import { useProductFunction, useProductState } from "../context/ProductContext";

export default function StepOneInputs() {
  const {
    dnetWholesale,
    dnetVolume,
    msrpWholesale,
    msrpVolume,
    displayWholesaleHeader,
    displayVolumeHeader,
  } = useProductState();
  const {
    setDnetWholesale,
    setDnetVolume,
    setMsrpWholesale,
    setMsrpVolume,
    setDisplayWholesaleHeader,
    setDisplayVolumeHeader,
  } = useProductFunction();

  useEffect(() => {
    if (displayWholesaleHeader && !dnetWholesale && !msrpWholesale) {
      setDisplayWholesaleHeader(false);
    }
    if (displayVolumeHeader && !dnetVolume && !msrpVolume) {
      setDisplayVolumeHeader(false);
    }
  }, [
    displayWholesaleHeader,
    dnetWholesale,
    msrpWholesale,
    setDisplayWholesaleHeader,
    dnetVolume,
    msrpVolume,
    displayVolumeHeader,
    setDisplayVolumeHeader,
  ]);

  const handleInput = (e, setState) => {
    setState(e.target.value);
    if (e.target.id === "dnetWholesale" || e.target.id === "msrpWholesale") {
      setDisplayWholesaleHeader(true);
    } else if (e.target.id === "dnetVolume" || e.target.id === "msrpVolume") {
      setDisplayVolumeHeader(true);
    }
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap md:flex-nowrap gap-8 w-full justify-center items-center">
        <div className="w-full">
          <label htmlFor="dnetWholesale" className="sr-only">
            DNET Plus (Wholesale)
          </label>
          <input
            type="number"
            value={dnetWholesale}
            onChange={(e) => handleInput(e, setDnetWholesale)}
            name="dnetWholesale"
            id="dnetWholesale"
            placeholder="DNET Plus (Wholesale)"
            disabled={msrpWholesale || msrpVolume ? true : false}
            className="py-4 shadow-sm disabled:bg-zinc-300 focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
          />
        </div>
        <div className="w-full">
          <label htmlFor="dnetVolume" className="sr-only">
            DNET Plus (Vol. Discount)
          </label>
          <input
            type="number"
            value={dnetVolume}
            onChange={(e) => handleInput(e, setDnetVolume)}
            name="dnetVolume"
            id="dnetVolume"
            placeholder="DNET Plus (Vol. Discount)"
            disabled={msrpWholesale || msrpVolume ? true : false}
            className="py-4 shadow-sm disabled:bg-zinc-300 focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl my-4">OR</h3>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-8 w-full justify-center items-center">
        <div className="w-full">
          <label htmlFor="msrpWholesale" className="sr-only">
            MSRP Minus (Wholesale)
          </label>
          <input
            type="number"
            name="msrpWholesale"
            value={msrpWholesale}
            onChange={(e) => handleInput(e, setMsrpWholesale)}
            id="msrpWholesale"
            placeholder="MSRP Minus (Wholesale)"
            disabled={dnetWholesale || dnetVolume ? true : false}
            className="py-4 shadow-sm disabled:bg-zinc-300 focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
          />
        </div>
        <div className="w-full">
          <label htmlFor="msrpVolume" className="sr-only">
            MSRP Minus (Vol. Discount)
          </label>
          <input
            type="number"
            value={msrpVolume}
            onChange={(e) => handleInput(e, setMsrpVolume)}
            name="msrpVolume"
            id="msrpVolume"
            placeholder="MSRP Minus (Vol. Discount)"
            disabled={dnetWholesale || dnetVolume ? true : false}
            className="py-4 shadow-sm disabled:bg-zinc-300 focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
