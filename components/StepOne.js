import { BsArrowRightShort } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useProductState } from "../context/ProductContext";
import MobileTable from "./MobileTable";
import StepOneInputs from "./StepOneInputs";
import StepOneTable from "./StepOneTable";

export default function StepOne({ setStep, step }) {
  const isNotDesktop = useMediaQuery({ query: "(max-width: 1023px)" });
  const { dnetWholesale, dnetVolume, msrpWholesale, msrpVolume } =
    useProductState();

  const handleNext = () => {
    if (dnetWholesale || dnetVolume || msrpWholesale || msrpVolume) {
      setStep(2);
    } else {
      alert("Please enter a volume discount or wholesale price");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
        <h2 className="lg:col-start-2 mb-6 lg:mb-0 text-4xl lg:text-5xl font-bold text-center">
          Step 1 of 2
        </h2>
        <div className="lg:col-start-3">
          <button
            className="text-white bg-black text-center uppercase py-2 px-2 h-14 rounded w-full flex gap-3 justify-center items-center mx-auto shadow-xl"
            onClick={handleNext}
          >
            Next <BsArrowRightShort size="2em" />
          </button>
        </div>
      </div>
      <div className="bg-zinc-200 p-4 lg:p-12 rounded mt-12">
        <StepOneInputs />
        {isNotDesktop && <MobileTable />}
        {!isNotDesktop && <StepOneTable />}
      </div>
    </div>
  );
}
