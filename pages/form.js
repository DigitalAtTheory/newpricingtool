import { useState } from "react";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";

export async function getServerSideProps({ query }) {
  const { step } = query;
  return {
    props: {
      initialStep: step,
    },
  };
}

export default function FormPage({ initialStep }) {
  const [step, setStep] = useState(Number(initialStep));

  return (
    <div>
      {step === 1 ? (
        <StepOne setStep={setStep} step={step} />
      ) : (
        <StepTwo step={step} setStep={setStep} />
      )}
    </div>
  );
}
