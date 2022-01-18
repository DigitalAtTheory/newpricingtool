import { useProductFunction, useProductState } from "../context/ProductContext";

export default function DealerInfo() {
  const { dealerCode, dealerName } = useProductState();
  const { setDealerCode, setDealerName } = useProductFunction();

  return (
    <div className="my-12">
      <h3 className=" text-3xl lg:text-4xl">
        Fill out your dealer information
      </h3>
      <div className="bg-zinc-200 px-2 py-4 lg:p-8 rounded-lg mt-8">
        <h4 className="text-center text-2xl font-bold mb-8">
          Dealer Information
        </h4>
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full justify-center items-center">
          <div className="w-full">
            <label htmlFor="dealerCode" className="sr-only">
              Dealer Code
            </label>
            <input
              type="text"
              name="dealerCode"
              value={dealerCode}
              onChange={(e) => setDealerCode(e.target.value)}
              placeholder="Dealer Code"
              className="py-4 shadow-sm focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
            />
          </div>
          <div className="w-full">
            <label htmlFor="dealerName" className="sr-only">
              Dealer Name
            </label>
            <input
              type="text"
              name="dealerName"
              value={dealerName}
              onChange={(e) => setDealerName(e.target.value)}
              placeholder="Dealer Name"
              className="py-4 shadow-sm focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
