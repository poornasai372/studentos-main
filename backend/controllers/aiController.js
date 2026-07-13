const aiService = require("../services/aiService");

const askAI = async (req, res) => {
  try {
    const { message } = req.body;

    console.log("Request Body:", req.body);

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const reply = await aiService.askAI(message);

    res.json({
      reply,
    });

  } catch (err) {
    console.error("========== AI ERROR ==========");
    console.error(err);

    if (err.status) console.error("Status:", err.status);
    if (err.code) console.error("Code:", err.code);
    if (err.message) console.error("Message:", err.message);

    if (err.error) console.error("OpenAI Error:", err.error);

    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  askAI,
};