import { useState, useEffect } from "react";
import Link from "next/link";
import { useProductState, useProductFunction } from "../context/ProductContext";
import { FaFilePdf } from "react-icons/fa";
import PDFPreview from "../components/PDFPreview";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { getPdfOptions } from "../lib/getPdfOptions";
import { getTime } from "../lib/utils/getTime";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function PreviewPage() {
  const [url, setUrl] = useState(null);
  const {
    products,
    dnetWholesale,
    dnetVolume,
    msrpWholesale,
    msrpVolume,
    dealerName,
    dealerCode,
    contactInfo,
  } = useProductState();

  const { handleStartOver } = useProductFunction();

  useEffect(() => {
    const fonts = {
      corporateAQ: {
        normal:
          "https://joshsuson-firstbucket.s3.amazonaws.com/Corporate+A+BQ+Regular.ttf",
        bold: "https://joshsuson-firstbucket.s3.amazonaws.com/Corporate+A+BQ+Bold.ttf",
      },
      Roboto: {
        normal:
          "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
        bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
        italics:
          "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
        bolditalics:
          "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
      },
    };
    const options = getPdfOptions(
      products,
      dnetWholesale,
      dnetVolume,
      msrpWholesale,
      msrpVolume,
      dealerName,
      dealerCode,
      contactInfo
    );
    const pdf = pdfMake.createPdf(options, null, fonts);
    pdf.getDataUrl((dataUrl) => {
      setUrl(dataUrl);
    });
  }, []);

  const handleClick = () => {
    const fonts = {
      corporateAQ: {
        normal:
          "https://joshsuson-firstbucket.s3.amazonaws.com/Corporate+A+BQ+Regular.ttf",
        bold: "https://joshsuson-firstbucket.s3.amazonaws.com/Corporate+A+BQ+Bold.ttf",
      },
      Roboto: {
        normal:
          "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
        bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
        italics:
          "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
        bolditalics:
          "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
      },
    };
    const options = getPdfOptions(
      products,
      dnetWholesale,
      dnetVolume,
      msrpWholesale,
      msrpVolume,
      dealerName,
      dealerCode,
      contactInfo
    );

    const date = getTime();

    pdfMake.createPdf(options, null, fonts).download(`pricing-sheet-${date}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
        <Link href="/form?step=2">
          <a className="text-white bg-black text-center uppercase py-2 px-2 h-14 rounded w-full flex gap-3 justify-center items-center mx-auto shadow-xl">
            Back
          </a>
        </Link>
        <h2 className="lg:col-start-2 my-4 lg:my-0 text-4xl lg:text-5xl font-bold text-center">
          Preview PDF
        </h2>
        <button
          onClick={handleClick}
          className="text-white bg-black text-center uppercase py-2 px-2 h-14 rounded w-full flex gap-3 justify-center items-center mx-auto shadow-xl"
        >
          Downlad PDF <FaFilePdf size="1.5em" />
        </button>
      </div>
      <div>
        <PDFPreview pdfUrl={url} />
      </div>
      <button
        onClick={handleStartOver}
        className="fixed right-2 bottom-2 lg:w-48 text-white bg-black text-center uppercase py-2 px-2 h-14 rounded shadow-xl"
      >
        Start Over
      </button>
    </div>
  );
}
