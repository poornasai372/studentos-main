import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function PDFUploader({ onFileSelect }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-300 ${
        isDragActive
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 bg-white"
      }`}
    >
      <input {...getInputProps()} />

      <div className="space-y-4">

        <h2 className="text-2xl font-bold">
          📄 Upload PDF
        </h2>

        <p className="text-gray-500">
          Drag & Drop your PDF here
        </p>

        <p className="text-gray-400">
          or click to browse
        </p>

      </div>
    </div>
  );
}

export default PDFUploader;