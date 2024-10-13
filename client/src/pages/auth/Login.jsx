import { Mail, Lock } from "lucide-react"; // Importing Lucide icons
import { useState } from "react";

import useEcomStore from "../../store/ecom-store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const actionLogin = useEcomStore((state) => state.actionLogin);
  const user = useEcomStore((state) => state.user);
  console.log("user:", user);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await actionLogin(form);
      const role = response.data.payload.role;
      roleRedirect(role)
      console.log("role: " + role);

      toast.success("welcome back ");
    } catch (error) {
      console.log(error);
      const errorMessage = error.response?.data.message;
      toast.error(errorMessage);
    }
  };
const roleRedirect = (role) => {
if (role === "admin") {
  navigate("/admin")
}else{
  navigate("/user")
}
}
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="card lg:card-side bg-base-100 shadow-xl mx-auto max-w-4xl w-full">
        {/* Left side image */}
        <figure className="hidden lg:block lg:w-1/2">
          <img
            src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
            alt="Album"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Right side form */}
        <div className="card-body w-full lg:w-1/2">
          <h2 className="card-title text-2xl">Login</h2>

          {/* Registration Form */}
          <form action="" className="space-y-4" onSubmit={handleSubmit}>
            {/* Email field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-10"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-10"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="card-actions justify-end">
              <button className="btn btn-primary capitalize w-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
