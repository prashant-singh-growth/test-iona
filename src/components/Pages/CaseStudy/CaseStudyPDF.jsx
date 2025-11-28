import React, { useRef } from "react";
import * as html2pdf from "html2pdf.js";
import SummerySection from "./SummerySection";

function CaseStudyPDF() {
  const pdfRef = useRef();

  const downloadPDF = () => {
    const element = pdfRef.current;

    const options = {
      margin: 0,
      filename: "case-study.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "px", format: [595, 842], orientation: "portrait" },
    };

    html2pdf.default().from(element).set(options).save();
  };

  return (
    <div className="p-6">
      <div ref={pdfRef} className="bg-white p-10 max-w-full mx-auto">
        <SummerySection />
      </div>

      <div className="text-center mt-6">
        <button
          onClick={downloadPDF}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default CaseStudyPDF;
