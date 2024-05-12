import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="CustomContainer mb-[140px]">
      <div className="flex items-center gap-3 my-20 text-sm text-opacity-50 text-text3">
        <p>Home</p>/<p className="text-opacity-100 text-text3">404 Error</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-medium text-4xl lg:text-[110px]  mb-10">
          404 Not Found
        </h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link
          to="/"
          className="px-12 py-4 mt-20 font-medium rounded shadow bg-button2 hover:bg-buttonHover1 active:shadow-inner text-text1"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}

export default Error;
