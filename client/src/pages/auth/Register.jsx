import axios from "axios";
import { Mail, Lock } from "lucide-react"; // Importing Lucide icons
import { useState } from "react";
import { toast } from "react-toastify";
const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert(" confirm Password is not match");
    }
    console.log(form);
    try {
      const resp = await axios.post("http://localhost:5000/api/register", form);
      toast.success(resp.data);
      console.log(resp);
    } catch (error) {
      const errMsg = error.response?.data?.message;
      toast.error(errMsg);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="card lg:card-side bg-base-100 shadow-xl mx-auto max-w-4xl w-full">
        {/* Left side image */}
        <figure className="hidden lg:block lg:w-1/2">
          <img
            src="https://picsum.photos/seed/picsum/500/500"
            alt="Album"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Right side form */}
        <div className="card-body w-full lg:w-1/2">
          <h2 className="card-title text-2xl">Register</h2>

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

            {/* Confirm Password field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="input input-bordered w-full pl-10"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="card-actions justify-end">
              <button className="btn btn-secondary capitalize w-full">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
