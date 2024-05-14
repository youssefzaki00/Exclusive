import Categories from "./home/Categories";
import Featured from "./home/Featured";
import HeroSection from "./home/HeroSection";
import MonthOffer from "./home/MonthOffer";
import OurProducts from "./home/OurProducts";
import TodayOffer from "./home/TodayOffer";
import useFetchProducts from "./hooks/useFetchProducts";

function Home() {
  const { products } = useFetchProducts();
  localStorage.setItem("checkEmail", false);
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
