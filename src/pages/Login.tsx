import Button from "../components/Button";
import Input from "../components/Input";

export const Login = () => {
  return (
    <>
      <section className="bg-deep-navy w-full px-7 md:px-40 py-16">
        <div className=" text-center">
          <h1 className=" text-off-white font-bold text-4xl mb-6">Revizo</h1>

          <div className=" border border-slate-500 bg-slate text-off-white shadow px-4 py-6 rounded-xl text-center">
            <h2 className=" font-semibold">Welcome back</h2>
            <p className=" text-slate-300">Log in to your Revizo account.</p>

            <form>
              <div className=" flex flex-col gap-3">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  passwordToggle
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
                className=" text-white bg-green-800 mt-3 w-full"
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
