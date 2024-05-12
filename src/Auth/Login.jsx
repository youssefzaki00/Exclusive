import { Link, useNavigate } from "react-router-dom";
import img from "../assets/Auth/img.png";
import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { UserData } from "../context/UserData";
import { supabase } from "../utils/supabase";
import Loading from "../components/Loader/Loading";
function Login() {
  const { user, setUser } = useContext(UserData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  async function handleSignIn()  {
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      if (!email || !password) {
        setError("Please enter your email and password.");
        return;
      }

      setLoading(true);

      const { data, error: supabaseError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (supabaseError) {
        toast.error("Login Failed Please Check Your email or password");
        setError(supabaseError.message);
        console.error(supabaseError.message);
        return;
      }

      setUser({
        firstName: data?.user?.user_metadata?.first_name,
        email,
      });

      navigate("/");
      toast.info(`Welcome ${user?.firstName || "User"}`);
      toast.success("You logged in successfully");
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error(error.message);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex items-center justify-center lg:grid grid-cols-7 mt-[60px] mb-[140px] gap-32">
      <div className="hidden col-span-4 lg:block">
        <img src={img} alt="" />
      </div>
      <div className="col-span-3 w-fit ">
        <h2 className="mb-6 text-4xl font-medium">Login to Exclusive</h2>
        <p className="text-sm">Enter your details below</p>
        <form className="flex flex-col gap-10 mt-12">
          <input
            ref={emailRef}
            type="text"
            placeholder="Email"
            className="py-2 border-b border-opacity-50 border-b-text3"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="py-2 border-b border-opacity-50 border-b-text3"
          />
          <div className="grid items-center grid-cols-1 gap-8">
            {error && (
              <p className="p-2 font-medium text-center rounded bg-buttonHover1 text-text1">
                There is something wrong
              </p>
            )}
            {loading ? (
              <Loading />
            ) : (
              <button
                onClick={handleSignIn}
                type="button"
                className="p-4 font-medium text-center rounded shadow cursor-pointer text-text1 bg-button2 hover:bg-buttonHover1 active:shadow-inner"
              >
                Login
              </button>
            )}

            <Link to="/" className="font-medium text-secondary3">
              Forget Password?
            </Link>
          </div>
        </form>

        <div className="flex items-center justify-center gap-4 mt-8 capitalize text-text3 opacity-70">
          <p>don&#39;t have account?</p>

          <Link
            to="/signup"
            className="font-medium border-b border-opacity-50 border-b-text3"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
