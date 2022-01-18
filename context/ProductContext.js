import React, { useState, createContext, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import productData from "../public/products.json";
import { v4 as uuidv4 } from "uuid";

const ProductStateContext = createContext();
const ProductFunctionContext = createContext();

export function useProductState() {
  return useContext(ProductStateContext);
}

export function useProductFunction() {
  return useContext(ProductFunctionContext);
}

export function ProductContextProvider({ children }) {
  const productArray = productData.map((product) => {
    return {
      id: uuidv4(),
      productName: product["Product Name"],
      packageSize: product["Package Size"],
      msrp: product.MSRP,
      mbusa: product["MBUSA Part Number"],
      em: product["EM Part Number"],
      dnet: product.DNET,
    };
  });

  const [products, setProducts] = useState(productArray);
  const [removedProducts, setRemovedProducts] = useState([]);
  const [dnetWholesale, setDnetWholesale] = useState("");
  const [dnetVolume, setDnetVolume] = useState("");
  const [msrpWholesale, setMsrpWholesale] = useState("");
  const [msrpVolume, setMsrpVolume] = useState("");
  const [displayWholesaleHeader, setDisplayWholesaleHeader] = useState(false);
  const [displayVolumeHeader, setDisplayVolumeHeader] = useState(false);
  const [dealerCode, setDealerCode] = useState("");
  const [dealerName, setDealerName] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
    disclaimer: "Prices only applicable for dealer. Pricing subject to change.",
    notes: "",
  });

  const router = useRouter();

  function handleRemoveProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
    const removedProduct = products.filter((product) => product.id === id);
    setRemovedProducts((prevState) => [...prevState, ...removedProduct]);
  }

  function handleStartOver() {
    setProducts(productArray);
    setRemovedProducts([]);
    setDnetWholesale("");
    setDnetVolume("");
    setMsrpWholesale("");
    setMsrpVolume("");
    setDisplayWholesaleHeader(false);
    setDisplayVolumeHeader(false);
    setDealerCode("");
    setDealerName("");
    setContactInfo({
      name: "",
      phone: "",
      email: "",
      disclaimer:
        "Prices only applicable for dealer. Pricing subject to change.",
      notes: "",
    });
    router.push("/");
  }

  const productStateValue = {
    products,
    dnetWholesale,
    dnetVolume,
    msrpWholesale,
    msrpVolume,
    displayWholesaleHeader,
    displayVolumeHeader,
    dealerCode,
    dealerName,
    contactInfo,
  };
  const productFunctionValue = {
    setProducts,
    setDnetWholesale,
    setDnetVolume,
    setMsrpWholesale,
    setMsrpVolume,
    setDisplayWholesaleHeader,
    setDisplayVolumeHeader,
    handleRemoveProduct,
    setDealerCode,
    setDealerName,
    setContactInfo,
    handleStartOver,
  };

  return (
    <ProductStateContext.Provider value={productStateValue}>
      <ProductFunctionContext.Provider value={productFunctionValue}>
        {children}
      </ProductFunctionContext.Provider>
    </ProductStateContext.Provider>
  );
}
