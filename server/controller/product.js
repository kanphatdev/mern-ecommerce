const prisma = require("../config/prisma");
const cloudinary = require("cloudinary").v2;
exports.create = async (req, res) => {
  try {
    // code
    const { title, description, price, quantity, categoryId, images } =
      req.body;
    // console.log(title, description, price, quantity, images)
    const product = await prisma.product.create({
      data: {
        title: title,
        description: description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        categoryId: parseInt(categoryId),
        images: {
          create: images.map((item) => ({
            asset_id: item.asset_id,
            public_id: item.public_id,
            url: item.url,
            secure_url: item.secure_url,
          })),
        },
      },
    });
    res.send(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
exports.list = async (req, res) => {
  try {
    const { count } = req.params;
    const products = await prisma.product.findMany({
      take: parseInt(count),
      orderBy: { createdAt: "desc" },
      include: {
        category: true,
        images: true,
      },
    });
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
exports.read = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await prisma.product.findFirst({
      where: {
        id: Number(id),
      },

      include: {
        category: true,
        images: true,
      },
    });
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
exports.update = async (req, res) => {
  try {
    // code
    const { title, description, price, quantity, categoryId, images } =
      req.body;
    // clear image
    await prisma.image.deleteMany({
      where: {
        productId: Number(req.params.id),
      },
    });
    const product = await prisma.product.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title: title,
        description: description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        categoryId: parseInt(categoryId),
        images: {
          create: images.map((item) => ({
            asset_id: item.asset_id,
            public_id: item.public_id,
            url: item.url,
            secure_url: item.secure_url,
          })),
        },
      },
    });
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    // หนังชีวิต: delete images on clound

    // delete products from database
    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    res.send("remove product success");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
exports.listby = async (req, res) => {
  try {
    const { sort, order, limit } = req.body;
    console.log(sort, order, limit);
    const products = await prisma.product.findMany({
      take: limit,
      orderBy: { [sort]: order },
      include: { category: true },
    });

    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
const handleQuery = async (req, res, query) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        title: {
          contains: query,
        },
      },
      include: {
        category: true,
        images: true,
      },
    });
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "search query error" });
  }
};
const handlePrice = async (req, res, priceRange) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        price: {
          gte: priceRange[0],
          lte: priceRange[1],
        },
      },
      include: {
        category: true,
        images: true,
      },
    });
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "search price error" });
  }
};
const handleCategory = async (req, res, categoryId) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        categoryId: {
          in: categoryId.map((id) => Number(id)),
        },
      },
      include: {
        category: true,
        images: true,
      },
    });
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "search price error" });
  }
};
exports.searchFilters = async (req, res) => {
  try {
    const { query, category, price } = req.body;
    // search by query string
    if (query) {
      await handleQuery(req, res, query);
      console.log("query", query);
    }

    // ----------------------
    // search by category
    if (category) {
      await handleCategory(req, res, category);
      console.log("category", category);
    }

    // -------------------
    // search by product price
    if (price) {
      await handlePrice(req, res, price);
      console.log("price", price);
    }

    // --------------------------------
    // res.send("searchFilters product");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY, // Click 'View API Keys' above to copy your API secret
});
exports.createImages = async (req, res) => {
  try {
      //code
      // console.log(req.body)
      const result = await cloudinary.uploader.upload(req.body.image, {
          public_id: `Roitai-${Date.now()}`,
          resource_type: 'auto',
          folder: 'Ecom2024'
      })
      res.send(result)
  } catch (err) {
      //err
      console.log(err)
      res.status(500).json({ message: "Server Error" })
  }
}
exports.removeImages = async (req, res) => {
  try {
    res.send("remove Images product ");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: " error to remove Images" });
  }
};
