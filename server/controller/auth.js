const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "password is required" });
    }
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(400).json({ message: "email is already exitst" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        email: email,
        password: hashPassword,
      },
    });

    res.send(" register successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user || !user.enabled) {
      res.status(400).json({ message: "user not found or not enabled 404" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(500).json({ message: "invalid password 404" });
    }
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    jwt.sign(payload, "akatsuki", { expiresIn: "1d" }, (err, token) => {
      if (err) {
        res.status(500).json({ message: "server error" });
      }
      res.json({ payload,token });
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
exports.currentUser = async (req, res) => {
  try {
    res.send("get current user controller");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
