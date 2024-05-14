import { useLocation } from "react-router";

function RoadMap() {
  const location = useLocation();

  // Improved regular expression for robust handling of %20
  const decodedPath = location.pathname.slice(1).replace(/%20/g, " ");

  return (
    <div className="flex items-center gap-0 my-20 text-sm text-opacity-50 capitalize text-text3">
      <p>Home/</p>
      <p className="text-opacity-100 text-text3"> {decodedPath}</p>
    </div>
  );
}

export default RoadMap;
