import Accordion from "../components/Home/Accordion";
import Banner from "../components/Home/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import UserReview from "../components/Home/UserReview";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="container mx-auto ">
        <div className="my-16">
          <h1 className="text-4xl font-bold text-center mb-10">
            Featured Product
          </h1>
          <FeaturedProducts></FeaturedProducts>
        </div>
        <div className="my-16">
          <h1 className="text-4xl font-bold text-center mb-10">User Review</h1>
          <UserReview></UserReview>
        </div>
        <div className="my-16 w-2/3 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">
            FreeQuaintly Ask Question
          </h1>
          <Accordion></Accordion>
        </div>
      </div>
    </>
  );
};

export default Home;
