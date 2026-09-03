import Button from "../components/Button";
import { useState } from "react";
import type { SubmitEvent } from "react";

import { useNavigate } from "react-router";
import Input from "../components/Input";
import { registerUser } from "@/services/authService";
import LoadingOverlay from "@/components/LoadingOverlay";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registrationData = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
  };

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

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    setMessage("");
    setError("");
    // Start loading
    setIsLoading(true);

    try {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      const response = await registerUser(registrationData);

      setMessage(response.message);

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/login");
    } catch (error: any) {
      console.log("Registration error:", error);
      console.log("Server response:", error.response?.data);

      setError(error.response?.data?.message || "Registration failed");
    } finally {
      // Stop loading whether request succeeds or fails
      setIsLoading(false);
    }
  };


  const isFormComplete =
  formData.username.trim() !== "" &&
  formData.email.trim() !== "" &&
  formData.password.trim() !== "" &&
  formData.confirmPassword.trim() !== "";

  return (
    <>
      {isLoading && <LoadingOverlay message="  Creating your account" />}
      <section className=" bg-deep-navy w-full px-7 md:px-40 py-16">
        <div className=" text-center">
          <h1 className=" font-bold text-4xl   mb-6 text-off-white">Revizo</h1>

          <div className=" border border-slate-500 bg-slate  shadow px-4 py-6 rounded-xl text-center text-off-white">
            <h2 className=" font-semibold">Create your account</h2>
            <p className=" text-slate-300">
              Start managing your layer flock today.
            </p>

            {message && <p className=" text-green-600">{message}</p>}

            {error && <p className=" text-red-500">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-3">
                <Input
                  label="Username"
                  name="username"
                  placeholder="e.g Ballo Basit"
                  value={formData.username}
                  onChange={handleChange}
                />

                <Input
                  label="Email Address"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Create a Strong Password"
                  passwordToggle
                  value={formData.password}
                  onChange={handleChange}
                />
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Repeat your Password"
                  passwordToggle
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <p className=" text-xs mt-4">
                By creating an account you agree to our
                <a href=" " className=" underline text-indigo">
                  Terms of Service
                </a>{" "}
                and {}
                <a href="" className=" underline text-indigo">
                  Privacy Policy
                </a>
              </p>

              <Button
                type="submit"
                  disabled={!isFormComplete}
                className=" w-full text-white mt-3 disabled:bg-gray-300"
                // onClick={() => navigate("/setupflock")}
              >
                Create Account
              </Button>
            </form>

            <p>Already have an account?</p>
            <a href="/login" className=" text-indigo">
              Login
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
