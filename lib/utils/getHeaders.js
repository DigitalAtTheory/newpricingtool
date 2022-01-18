export let headers = [
  { text: "Product Name", bold: true },
  { text: "MBUSA Part Number", bold: true },
  { text: "EM Part Number", bold: true },
];

export const getHeaders = (wholesale, volume) => {
  if (headers.length > 3) {
    headers = [
      { text: "Product Name", bold: true },
      { text: "MBUSA Part Number", bold: true },
      { text: "EM Part Number", bold: true },
    ];
  }

  if (wholesale && volume) {
    headers.push({ text: "Wholesale Price", bold: true });
    headers.push({ text: "Vol. Discount Price", bold: true });
  } else if (wholesale && !volume) {
    headers.push({ text: "Wholesale Price", bold: true });
  } else if (volume && !wholesale) {
    headers.push({ text: "Vol. Discount Price", bold: true });
  }
};
