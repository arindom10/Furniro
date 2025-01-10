import Banner from "./Banner";
import BrowseTheRange from "./BrowseTheRange";
import HashtagGallery from "./HashtagGallery";
import InspirationSection from "./InspirationSection";
import OurProducts from "./OurProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrowseTheRange />
      <OurProducts isShopPage={false} />
      <InspirationSection />
      <HashtagGallery />
    </div>
  );
};

export default Home;
