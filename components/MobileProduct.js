import { useProductState, useProductFunction } from "../context/ProductContext";

export default function MobileProduct({ product }) {
  const {
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
        <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-900">
          {finalPrice}
        </td>
      );
    }
  }

  return (
    <div className="bg-zinc-400/40 mb-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="px-2 py-2 text-sm font-bold text-gray-900">
              Product Name
            </td>
            <td className="px-2 py-2 text-sm  text-gray-900">
              {product.productName}
            </td>
          </tr>
          <tr className="bg-zinc-200/60">
            <td className="px-2 py-2 text-sm font-bold text-gray-900">
              MBUSA Part Number
            </td>
            <td className="px-2 py-2 text-sm  text-gray-900">
              {product.mbusa}
            </td>
          </tr>
          <tr>
            <td className="px-2 py-2 text-sm font-bold text-gray-900">
              EM Part Number
            </td>
            <td className="px-2 py-2 text-sm  text-gray-900">{product.em}</td>
          </tr>
          <tr className="bg-zinc-200/60">
            <td className="px-2 py-2 text-sm font-bold text-gray-900">
              Package Size
            </td>
            <td className="px-2 py-2 text-sm  text-gray-900">
              {product.packageSize}
            </td>
          </tr>
          <tr>
            <td className="px-2 py-2 text-sm font-bold text-gray-900">DNET</td>
            <td className="px-2 py-2 text-sm  text-gray-900">{product.dnet}</td>
          </tr>
          <tr className="bg-zinc-200/60">
            <td className="px-2 py-2 text-sm font-bold text-gray-900">MSRP</td>
            <td className="px-2 py-2 text-sm  text-gray-900">{product.msrp}</td>
          </tr>
          {displayWholesaleHeader && (
            <tr>
              <td className="px-2 py-2 text-sm font-bold text-gray-900">
                Wholesale Price
              </td>
              {getNewPrice(product.dnet, dnetWholesale, "dnet")}
              {getNewPrice(product.msrp, msrpWholesale, "msrp")}
            </tr>
          )}
          {displayVolumeHeader && (
            <tr className="bg-zinc-200/60">
              <td className="px-2 py-2 text-sm font-bold text-gray-900">
                Vol. Discount Price
              </td>
              {getNewPrice(product.dnet, dnetVolume, "dnet")}
              {getNewPrice(product.msrp, msrpVolume, "msrp")}
            </tr>
          )}
        </tbody>
      </table>
      <div className="p-4">
        <button
          onClick={() => handleRemoveProduct(product.id)}
          className="text-white bg-black text-center uppercase py-2 px-2 h-14 rounded w-full mx-auto shadow-xl"
        >
          Remove Product
        </button>
      </div>
    </div>
  );
}
