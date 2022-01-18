import Image from "next/image";
import logo from "../public/sales-tool-logo.png";

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-black p-8 mb-12">
        <div className="mx-auto text-center lg:w-80">
          <Image
            src={logo}
            alt="Mobil 1/Mercedes Benz Logo"
            priority
            placeholder="blur"
          />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4">{children}</main>
    </>
  );
}
