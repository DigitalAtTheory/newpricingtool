import Link from "next/link";
import Image from "next/image";
import bottles from "../public/bottles.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="text-black text-5xl text-center font-bold">Welcome.</h1>
        <p className="text-center text-lg my-8">
          Welcome to the Mercedes-Benz Wholesale Pricing Tool. To obtain prices
          for your customer please follow the steps.
        </p>
        <p className="uppercase text-center font-bold">{`MBUSA pricing as of 01/07/2022`}</p>
      </div>
      <div>
        <Link href="/form?step=1">
          <a className="block text-white bg-black text-center uppercase py-4 px-2 max-w-xs rounded mx-auto shadow-xl">
            Start
          </a>
        </Link>
      </div>
      <div>
        <div className="px-4 max-w-md mx-auto">
          <Image src={bottles} alt="Mobil 1 Bottles" placeholder="blur" />
        </div>
      </div>
    </div>
  );
}
