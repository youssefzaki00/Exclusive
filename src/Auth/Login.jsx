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
  const [signUpError, setSignUpError] = useState("");
  const USER_EMAIL_OR_PHONE = useRef("");
  const USER_PASSWORD = useRef("");
  const navigate = useNavigate();

  async function handleSignIn() {
    try {
      let { data } = await supabase.auth.signInWithPassword({
        email: `${USER_EMAIL_OR_PHONE?.current?.value}`,
        password: `${USER_PASSWORD?.current?.value}`,
      });
      await setUser({
        first_name: data?.user?.user_metadata?.first_name,
        email: USER_EMAIL_OR_PHONE?.current?.value,
        password: USER_PASSWORD?.current?.value,
      });
    } catch (error) {
      setLoading(false);
      setSignUpError(error.message);
      toast.error("Email or password are invalid");
      console.log(error.message);
    }

    setSignUpError("");
  }

  async function loginAccount() {
    if (
      !USER_EMAIL_OR_PHONE.current.value ||
      USER_EMAIL_OR_PHONE.current.value == ""
    ) {
      setSignUpError("Please Write Your Email");
      return;
    } else if (
      !USER_PASSWORD.current.value ||
      USER_PASSWORD.current.value == ""
    ) {
      setSignUpError("Please Write Your Password");
      return;
    } else {
      setLoading(true);
      await handleSignIn();
      toast.info(" welcome " + user?.first_name);
      toast.success("You logged In successfully");
      navigate("/");
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
            ref={USER_EMAIL_OR_PHONE}
            type="text"
            placeholder="Email or Phone Number"
            className="py-2 border-b border-opacity-50 border-b-text3"
          />
          <input
            ref={USER_PASSWORD}
            type="password"
            placeholder="Password"
            className="py-2 border-b border-opacity-50 border-b-text3"
          />
          <div className="grid items-center grid-cols-2 gap-8">
            {signUpError && (
              <p className="p-2 font-medium text-center rounded bg-buttonHover1 text-text1">
                There is something wrong
              </p>
            )}
            {signUpError && (
              <p className="p-2 font-medium text-center rounded bg-buttonHover1 text-text1">
                There is something wrong
              </p>
            )}
            {loading ? (
              <Loading /> // Render the Loading component while loading is true
            ) : (
              <button
                onClick={loginAccount}
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
