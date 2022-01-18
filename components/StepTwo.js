import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "./Button";
import { BsArrowLeftShort } from "react-icons/bs";
import DealerInfo from "./DealerInfo";
import ContactInfo from "./ContactInfo";
import car from "../public/Car.png";
import { useProductState } from "../context/ProductContext";

export default function StepTwo({ setStep, step }) {
  const { dealerCode, dealerName, contactInfo } = useProductState();
  const router = useRouter();

  const handlePreview = () => {
    if (!dealerCode) {
      alert("You must fill out a dealer code");
    } else if (!dealerName) {
      alert("You must fill out a dealer name");
    } else if (!contactInfo.name) {
      alert("You must fill out a contact name");
    } else if (!contactInfo.phone) {
      alert("You must provide a phone number");
    } else if (!contactInfo.email) {
      alert("You must provide an email");
    } else if (!contactInfo.disclaimer) {
      alert("You must have a disclaimer");
    } else {
      router.push("/preview");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
        <div>
          <Button onClick={setStep}>
            <BsArrowLeftShort size="2em" /> Back
          </Button>
        </div>
        <h2 className="lg:col-start-2 my-4 lg:my-0 text-4xl lg:text-5xl font-bold text-center">
          Step 2 of 2
        </h2>
        <div className="lg:col-start-3">
          <button
            onClick={handlePreview}
            className="text-white bg-black text-center uppercase py-2 h-14 px-2  rounded w-full flex gap-3 justify-center items-center mx-auto shadow-xl"
          >
            Finish and Preview PDF
          </button>
        </div>
      </div>
      <DealerInfo />
      <ContactInfo />
      <div className="text-center my-12">
        <div className="md:w-1/2 mx-auto text-center">
          <Image src={car} alt="Picture of a car" placeholder="blur" />
        </div>
      </div>
      <div className="mb-4 text-center">
        <p className="text-sm">*All pricing is subject to change</p>
      </div>
    </div>
  );
}
