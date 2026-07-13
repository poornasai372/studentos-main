import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PDFUploader from "../components/PDFUploader";
import { uploadPDF } from "../services/pdfService";

function PDFStudy() {
  const [fileName, setFileName] = useState("");
  const [pdfText, setPdfText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file) => {
    try {
      setLoading(true);

      const data = await uploadPDF(file);

      setFileName(data.filename);
      setPdfText(data.text);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert("Failed to upload PDF.");
    }
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            📄 AI PDF Study Assistant
          </h1>

          <PDFUploader onFileSelect={handleFileUpload} />

          {loading && (
            <div className="mt-6 text-blue-600 font-semibold">
              Uploading and reading PDF...
            </div>
          )}

          {fileName && (
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-4">
                Uploaded PDF
              </h2>

              <p className="text-green-600 font-semibold">
                ✅ {fileName}
              </p>

            </div>
          )}

          {pdfText && (
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-4">
                Extracted Text
              </h2>

              <div className="max-h-96 overflow-y-auto whitespace-pre-wrap">
                {pdfText}
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default PDFStudy;