const supabase = require("../config/supabase");
const bcrypt = require("bcryptjs");

// Register User
const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const { data: existingUser, error: findError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    if (findError) throw findError;

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("users").insert([
      {
        full_name: fullName,
        email,
        password: hashedPassword,
      },
    ]);

    if (error) throw error;

    res.status(201).json({
      message: "Account created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  res.status(200).json({
    message: "Login API working",
  });
};

module.exports = {
  registerUser,
  loginUser,
};