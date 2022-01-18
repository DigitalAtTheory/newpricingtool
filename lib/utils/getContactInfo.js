export const getContactInfo = (info) => {
  if (info.notes) {
    return [
      { text: "Contact Information", style: "infoHeader" },
      {
        columns: [
          [{ text: "Name", style: "subHeader" }, { text: info.name }],
          [{ text: "Phone", style: "subHeader" }, { text: info.phone }],
        ],
      },
      {
        columns: [
          [
            { text: "E-Mail", style: "subHeader" },
            { text: info.email, margin: [0, 0, 0, 20] },
          ],
          [
            { text: "Additional Notes", style: "subHeader" },
            { text: info.notes, margin: [0, 0, 0, 20] },
          ],
        ],
      },
    ];
  } else {
    return [
      { text: "Contact Information", style: "infoHeader" },
      {
        columns: [
          [{ text: "Name", style: "subHeader" }, { text: info.name }],
          [{ text: "Phone", style: "subHeader" }, { text: info.phone }],
        ],
      },
      {
        columns: [
          [{ text: "E-Mail", style: "subHeader" }, { text: info.email }],
        ],
      },
    ];
  }
};
