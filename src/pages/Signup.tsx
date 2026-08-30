import Button from "../components/Button";
import { useState } from "react";

import { useNavigate } from "react-router";
import Input from "../components/Input";

const Signup = () => {
  const navigate = useNavigate;

  return (
    <>
      <section className=" bg-deep-navy w-full px-7 md:px-40 py-16">
        <div className=" text-center">
          <h1 className=" font-bold text-4xl   mb-6 text-off-white">Revizo</h1>

          <div className=" border border-slate-500 bg-slate  shadow px-4 py-6 rounded-xl text-center text-off-white">
            <h2 className=" font-semibold">Create your account</h2>
            <p className=" text-slate-300">
              Start managing your layer flock today.
            </p>

            <form>
              <div className=" flex flex-col gap-3">
                <Input label="FullName" placeholder="e.g Ballo Basit" />

                <Input
                  label="Email Address"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Create a Strong Password"
                  passwordToggle
                />
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Repeat your Password"
                  passwordToggle
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
                className=" w-full text-white mt-3"
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
