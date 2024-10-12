const prisma = require("../config/prisma");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await prisma.category.create({
        data:{
            name: name
        }
    });
    res.send(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
exports.list = async (req, res) => {
  try {
    const category = await prisma.category.findMany()
    res.send(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    // Log the id to make sure it's being received
    if (!id) {
      return res.status(400).json({ message: "Missing category ID" });
    }

    const category = await prisma.category.delete({
        where:{
            id: Number(id)
        }
    })

    // Here you can add logic to remove the category, e.g., via a database call

    res.send(`Category with ID ${category} removed successfully`);
  } catch (error) {
    console.error("Error while removing category:", error);
    res.status(500).json({ message: "Server error" });
  }
};
