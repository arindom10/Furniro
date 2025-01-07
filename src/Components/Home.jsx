import Banner from "./Banner";
import BrowseTheRange from "./BrowseTheRange";
import InspirationSection from "./InspirationSection";
import OurProducts from "./OurProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrowseTheRange />
      <OurProducts isShopPage={false} />
      <InspirationSection />
    </div>
  );
};

export default Home;
