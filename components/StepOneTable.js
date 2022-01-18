import { useProductState, useProductFunction } from "../context/ProductContext";
import { RiCloseCircleFill } from "react-icons/ri";

export default function StepOneTable() {
  const {
    products,
    displayWholesaleHeader,
    displayVolumeHeader,
    dnetWholesale,
    dnetVolume,
    msrpWholesale,
    msrpVolume,
  } = useProductState();
  const { handleRemoveProduct } = useProductFunction();

  function getNewPrice(price, input, brand) {
    const percent = input / 100;

    if (percent !== 0 && !isNaN(percent)) {
      const newPercent = price * percent;
      const roundedPercent = newPercent.toFixed(2);
      const getFinalPrice = (x) => {
        if (x === "dnet") {
          return (Number(price) + Number(roundedPercent)).toFixed(2);
        } else if (x === "msrp") {
          return (Number(price) - Number(roundedPercent)).toFixed(2);
        }
      };

      const finalPrice = getFinalPrice(brand);

      return (
        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
          {finalPrice}
        </td>
      );
    }
  }

  return (
    <div>
      <h2 className="text-center font-bold mb-6 text-4xl">
        Number of Products: {products.length}
      </h2>
      <div className="flex flex-col">
        <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col"></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      MBUSA Part Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      EM Part Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Package Size
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      DNET
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      MSRP
                    </th>
                    {displayWholesaleHeader && (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Wholesale Price
                      </th>
                    )}
                    {displayVolumeHeader && (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Vol. Discount Price
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => (
                    <tr
                      key={product.id}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td>
                        <div
                          className="px-4 hover:text-red-500"
                          role="button"
                          tabIndex={0}
                          onClick={() => handleRemoveProduct(product.id)}
                        >
                          <RiCloseCircleFill size="1.25em" />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {product.productName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {product.mbusa}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {product.em}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {product.packageSize}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                        {product.dnet}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                        {product.msrp}
                      </td>
                      {getNewPrice(product.dnet, dnetWholesale, "dnet")}
                      {getNewPrice(product.dnet, dnetVolume, "dnet")}
                      {getNewPrice(product.msrp, msrpWholesale, "msrp")}
                      {getNewPrice(product.msrp, msrpVolume, "msrp")}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
