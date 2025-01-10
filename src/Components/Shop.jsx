import Features from "./Features";
import OurProducts from "./OurProducts";

const Shop = () => {
  return (
    <div>
      <OurProducts isShopPage={true} />
      <Features />
    </div>
  );
};

export default Shop;
