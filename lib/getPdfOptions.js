import imageUrl from "./createPdfLogo";
import {
  getContactInfo,
  headers,
  getTime,
  getNewProducts,
  getRecords,
} from "./utils";

export const getPdfOptions = (
  products,
  dnetWholesale,
  dnetVolume,
  msrpWholesale,
  msrpVolume,
  dealerName,
  dealerCode,
  contactInfo
) => {
  const newProducts = getNewProducts(
    products,
    dnetWholesale,
    dnetVolume,
    msrpWholesale,
    msrpVolume
  );
  const date = getTime();
  const newContactInfo = getContactInfo(contactInfo);
  const records = getRecords(newProducts);

  return {
    info: {
      title: "Mercedes Benz Sales Tool",
    },
    pageSize: "A4",
    pageOrientation: "portrait",
    pageMargins: [20, 20, 20, 35],
    footer: function (currentPage, pageCount) {
      return [
        {
          text: contactInfo.disclaimer,
          alignment: "center",
          fontSize: 9,
          margin: [0, 0, 0, 5],
        },
        {
          columns: [
            {
              text: `Price as of: ${date}`,
              margin: [20, 0, 0, 0],
              fontSize: 9,
            },
            {
              text: `${currentPage.toString()} of ${pageCount}`,
              alignment: "center",
              fontSize: 9,
            },
            {
              text: dealerCode,
              alignment: "right",
              margin: [0, 0, 20, 0],
              fontSize: 9,
            },
          ],
        },
      ];
    },
    content: [
      {
        image: imageUrl,
        width: 700,
        alignment: "center",
        margin: [0, -20, 0, 12],
      },
      {
        columns: [
          [
            { text: "Dealer Information", style: "infoHeader" },
            { text: "Dealership", style: "subHeader" },
            { text: dealerName },
          ],
          newContactInfo,
        ],
      },
      {
        layout: {
          hLineWidth(i, node) {
            if (i === 0 || i === node.table.body.length) {
              return 0;
            }
            return i === node.table.headerRows ? 2 : 1;
          },
          vLineWidth(i) {
            return 0;
          },
          hLineColor(i) {
            return i === 1 ? "black" : "#aaa";
          },
          paddingLeft: function (i, node) {
            return i === 0 ? 0 : 8;
          },
          paddingRight: function (i, node) {
            return i === node.table.widths.length - 1 ? 0 : 8;
          },
          paddingTop: function (i, node) {
            return 8;
          },
          paddingBottom: function (i, node) {
            return 8;
          },
        },
        table: {
          headerRows: 1,
          body: [[...headers], ...records],
          alignment: "center",
        },
      },
    ],
    styles: {
      infoHeader: {
        bold: true,
        fontSize: 20,
      },
      subHeader: {
        bold: true,
        fontSize: 12,
        margin: [0, 15, 0, 5],
      },
    },
    defaultStyle: {
      font: "corporateAQ",
      fontSize: 10,
    },
  };
};
