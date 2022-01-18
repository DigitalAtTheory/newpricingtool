export default function PDFPreview({ pdfUrl }) {
  return (
    <div className="mt-12">
      <iframe className="w-full h-screen" src={pdfUrl} frameBorder="0"></iframe>
    </div>
  );
}
