import { useEffect, useState } from "react";
import useEcomStore from "../../store/ecom-store";
import { PlusCircle, Package } from "lucide-react"; // Import Lucide icons
import { toast } from "react-toastify";
import { createProduct } from "../../api/product";

const initialState = {
  title: "core i7",
  description: "Intel Core i7",
  price: 10000,
  quantity: 10,
  categoryId: 1,
  images: [],
};

const FormProduct = () => {
  const token = useEcomStore((state) => state.token);
  const getCategory = useEcomStore((state) => state.getCategory);
  const getProduct = useEcomStore((state) => state.getProducts);
  const categories = useEcomStore((state) => state.categories);
  const products = useEcomStore((state) => state.products);
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    getCategory(token);
    getProduct(token, 30);
  }, [getCategory, token]);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createProduct(token, form);
      toast.success(`Product ${res.data.title} successfully added`);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to create Product";
      toast.error(errorMessage);
    }
    console.log(form);
  };

  return (
    <div className="container mx-auto p-6 bg-accent shadow-md rounded-lg max-w-4xl">
      {/* Product Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold text-neutral-content capitalize flex items-center">
          Add a New Product <Package className="ml-2" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Product Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-neutral-content">
                Product Name
              </span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              placeholder="Product Name"
              className="input input-bordered input-accent w-full"
              onChange={handleChange}
            />
          </div>

          {/* Product Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-neutral-content">Description</span>
            </label>
            <input
              type="text"
              name="description"
              value={form.description}
              placeholder="Product Description"
              className="input input-bordered input-accent w-full"
              onChange={handleChange}
            />
          </div>

          {/* Product Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-neutral-content">Price</span>
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              placeholder="Product Price"
              className="input input-bordered input-accent w-full"
              onChange={handleChange}
            />
          </div>

          {/* Product Quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-neutral-content">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              placeholder="Product Quantity"
              className="input input-bordered input-accent w-full"
              onChange={handleChange}
            />
          </div>

          {/* Category Select */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-neutral-content">Category</span>
            </label>
            <select
              name="categoryId"
              value={form.categoryId}
              className="select select-accent w-full"
              onChange={handleChange}
            >
              <option disabled value="">
                Pick a Category
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-full">
          <PlusCircle className="mr-2" /> Add Product
        </button>
      </form>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sold</th>
              <th>Last Updated</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {products.length > 0 ? (
              products.map((item, index) => (
                <tr className="bg-base-200" key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.sold}</td>
                  <td>{new Date(item.updatedAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormProduct;
  