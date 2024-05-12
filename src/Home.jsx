import { useContext, useEffect } from "react";
import Categories from "./home/Categories";
import Featured from "./home/Featured";
import HeroSection from "./home/HeroSection";
import MonthOffer from "./home/MonthOffer";
import OurProducts from "./home/OurProducts";
import TodayOffer from "./home/TodayOffer";
import { UserData } from "./context/UserData";
import { supabase } from "./utils/supabase";
import useFetchProducts from "./hooks/useFetchProducts";
// import { supabaseKey } from "./utils/supabase";

function Home() {
  const { user } = useContext(UserData);
  const { products } = useFetchProducts();

  async function handleUserInfo() {
    await supabase.auth.updateUser({
      data: { name: user.name, hello: "hi" },
    });
  }
  useEffect(() => {
    handleUserInfo();
  }, []);

  return (
    <>
      <HeroSection />
      <TodayOffer products={products} />
      <Categories />
      <MonthOffer products={products} />
      <OurProducts products={products} />
      <Featured />
    </>
  );
}
export default Home;
