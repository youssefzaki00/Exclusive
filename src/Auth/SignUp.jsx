import { Link, useNavigate } from "react-router-dom";
import img from "../assets/Auth/img.png";
import { supabase } from "../utils/supabase";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Loading from "./../components/Loader/Loading"; // Import the Loading component
import useUserData from "../hooks/useUserData";

function SignUp() {
  const { setUser } = useUserData();
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const USER_NAME = useRef("");
  const USER_EMAIL_OR_PHONE = useRef("");
  const USER_PASSWORD = useRef("");
  const navigate = useNavigate();

  async function handleSignUp() {
    try {
      let { data, error } = await supabase.auth.signUp({
        email: USER_EMAIL_OR_PHONE.current.value,
        password: USER_PASSWORD.current.value,
      });
      if (error) {
        setSignUpError(error.message);
        toast.error(error.message);
        console.error(error.message);
        return;
      }
      await supabase
        .from("clients")
        .insert([
          {
            id: data?.user?.id,
            email: USER_EMAIL_OR_PHONE.current.value,
            password: USER_PASSWORD?.current?.value,
            first_name: USER_NAME?.current?.value,
            last_name: "",
            cart_products: [],
            wishlist: [],
            address: "",
          },
        ])
        .select();
      await setUser({
        id: data?.user?.id,
        email: USER_EMAIL_OR_PHONE?.current?.value,
        password: USER_PASSWORD?.current?.value,
        first_name: USER_NAME?.current?.value,
        last_name: "",
        cart_products: [],
        wishlist: [],
        address: "",
      });
      localStorage.setItem("checkEmail", true);
    } catch (error) {
      setLoading(false);
      setSignUpError(error.message);
      toast.error(error.message);
      console.error(error.message);
      return;
    }
    setSignUpError("");
  }

  async function createAccount() {
    if (!USER_NAME.current.value || USER_NAME.current.value == "") {
      setSignUpError("Please Write Your Name");
      return;
    } else if (
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
      await handleSignUp();
      if (!signUpError) {
        navigate("/CheckEmail");
        toast.info("Please Check Your Email ");
        setLoading(false);
      }
    }
  }

  return (
    <div className="flex items-center justify-center max-lg:p-6 lg:grid grid-cols-7 mt-[60px] mb-[140px] gap-32">
      <div className="hidden col-span-4 lg:block">
        <img src={img} alt="" />
      </div>
      <div className="col-span-3 w-fit ">
        <h2 className="mb-6 text-4xl font-medium">Create an account</h2>
        <p className="text-sm">Enter your details below</p>
        <form className="flex flex-col gap-10 mt-12">
          <input
            ref={USER_NAME}
            type="text"
            placeholder="Name"
            className="py-2 border-b border-opacity-50 border-b-text3"
          />
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
          {signUpError && (
            <p className="p-2 font-medium text-center rounded bg-buttonHover1 text-text1">
              {signUpError}
            </p>
          )}
          {loading ? (
            <Loading />
          ) : (
            <button
              onClick={createAccount}
              type="button"
              className="p-4 font-medium text-center rounded shadow cursor-pointer text-text1 bg-button2 hover:bg-buttonHover1 active:shadow-inner"
            >
              Create Account
            </button>
          )}
        </form>
        <div className="flex items-center justify-center gap-4 mt-8 text-text3 opacity-70">
          <p>Already have account?</p>
          <Link
            to="/Login"
            className="font-medium border-b border-opacity-50 border-b-text3"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
