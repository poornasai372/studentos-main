const pdfService = require("../services/pdfService");

const uploadPDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No PDF uploaded.",
      });
    }

    const text = await pdfService.extractText(req.file.path);

    res.status(200).json({
      success: true,
      filename: req.file.filename,
      text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadPDF,
};