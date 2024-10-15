import { useEffect, useState } from "react";
import { BookmarkX, PlusCircle, Tag } from "lucide-react"; // Import Lucide icon
import {
  createCategory,
  removeCategory,
} from "../../api/Category"; // Assuming the API function is in api/Category.js
import useEcomStore from "../../store/ecom-store";
import { toast } from "react-toastify";

const FormCategory = () => {
  const token = useEcomStore((state) => state.token); // Retrieve token from store
  const [name, setName] = useState("");
  // const [categories, setCategories] = useState([]);
  const categories = useEcomStore((state) => state.categories);
  const getCategory = useEcomStore((state) => state.getCategory);
  useEffect(() => {
    getCategory(token);
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      return toast.warning("The category name is empty");
    }
    try {
      const res = await createCategory(token, { name });
      toast.success(`Category '${res.data.name}' successfully added`);
      setName(""); // Clear the input field on success
      getCategory(token); // Refresh categories after adding
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to create category";
      toast.error(errorMessage);
    }
  };

  const handleRemove = async (id) => {
    console.log(id);
    try {
      const res = await removeCategory(token, id);
      toast.success(`successfully deleted`);
      getCategory(token);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch categories";
      toast.error(errorMessage);
    }
  };
  return (
    <div className="container mx-auto p-4 flex justify-center items-center h-screen">
      <div className="flex items-center justify-center gap-4">
        <div className="">
          <div className="card bg-base-100 shadow-xl w-full max-w-lg">
            <figure>
              <img
                src="https://picsum.photos/seed/picsum/500/500"
                alt="Category"
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h1 className="capitalize text-lg mb-4 card-title text-center">
                Category Management
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 flex flex-col items-center"
              >
                <div className="relative w-full max-w-xs">
                  {/* Icon */}
                  <PlusCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-success w-5 h-5" />

                  {/* Input field for category */}
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter category name"
                    className="input input-bordered input-success w-full pl-10"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="card-actions justify-center w-full">
                  <button
                    type="submit"
                    className={`btn btn-accent w-full max-w-xs capitalize`}
                  >
                    <Tag className="w-5 h-5 mr-2" /> category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Category Table */}
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* Table head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name of Category</th>
                  <th> Category action</th>
                </tr>
              </thead>
              <tbody>
                {/* Mapping categories to table rows */}
                {categories.length > 0 ? (
                  categories.map((category, index) => (
                    <tr key={category._id}>
                      <th>{index + 1}</th>
                      <td>{category.name}</td>
                      <td>
                        <button
                          className="btn btn-error"
                          onClick={() => handleRemove(category.id)}
                        >
                          <BookmarkX className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center">
                      No categories available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCategory;
