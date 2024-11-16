import ProductCard from "../../shered/ProductCard";

const FeaturedProducts = () => {
  return (
    <>
      <div className="flex-col md:flex-row lg:flex  lg:justify-between  gap-5">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </>
  );
};

export default FeaturedProducts;
