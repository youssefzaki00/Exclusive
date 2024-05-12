import { useLocation } from "react-router";

function RoadMap() {
  const location = useLocation();
  return (
    <div className="flex items-center gap-3 my-20 text-text3 text-opacity-50 text-sm capitalize">
      <p>Home</p>/
      <p className="text-text3 text-opacity-100">
        {location.pathname.slice(1).replace("/", " / ").replace("%20", " ")}
      </p>
    </div>
  );
}

export default RoadMap;
