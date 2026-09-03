import { useNavigate } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import {loginUser} from "../services/authService"
import LoadingOverlay from "@/components/LoadingOverlay";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // Controls the loading popup
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setIsLoading(true);

    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      // Save JWT token
      localStorage.setItem("token", response.token);

      setMessage(response.message);

      setFormData({
        email: "",
        password: "",
      });

      // Login successful
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login error:", error);

      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isFormComplete =
    formData.email.trim() !== "" && formData.password.trim() !== "";
  return (
    <>
      {isLoading && <LoadingOverlay message="login you in" />}
      <section className="bg-deep-navy w-full px-7  md:px-64 py-16">
        <div className=" text-center">
          <h1 className=" text-off-white font-bold text-4xl mb-6">Revizo</h1>

          <div className=" border border-slate-500 bg-slate text-off-white shadow px-4 py-6 rounded-xl text-center">
            <h2 className=" font-semibold">Welcome back</h2>
            <p className=" text-slate-300">Log in to your Revizo account.</p>

                  {error && (
                <p className="text-red-400 text-sm mt-3">
                  {error}
                </p>
              )}

              {message && (
                <p className="text-green-400 text-sm mt-3">
                  {message}
                </p>
              )}


            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-3">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                      value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  passwordToggle
                  value={formData.password}
                  onChange={handleChange}
                />

                <a
                  href=""
                  className=" underline text-indigo text-right text-xs"
                >
                  Forgot Password?
                </a>
              </div>

              <Button
                type="submit"
                 disabled={!isFormComplete || isLoading}
                className=" text-white disabled:bg-indigo-300 mt-3 w-full"
              >
                Login
              </Button>
            </form>

            <p>Don't have an account?</p>
            <a href="/signup" className=" text-indigo">
              Create account
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
