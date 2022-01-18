import { useState } from "react";
import { useProductState } from "../context/ProductContext";
import MobileProduct from "./MobileProduct";
import { FaArrowUp } from "react-icons/fa";

export default function MobileTable() {
  const [visible, setVisible] = useState(false);
  const { products } = useProductState();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900) {
      setVisible(true);
    } else if (scrolled <= 900) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <h2 className="text-center font-bold mb-6 text-4xl">
        Number of Products: {products.length}
      </h2>
      <div>
        {products.map((product) => (
          <MobileProduct key={product.id} product={product} />
        ))}
      </div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="text-white bg-black text-center uppercase py-4 px-4 rounded shadow-xl fixed right-1 bottom-1"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
