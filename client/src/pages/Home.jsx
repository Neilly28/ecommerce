import { useContext } from "react";

// import product context
import { ProductContext } from "../context/ProductContext";

// import components
import Product from "../components/Product";
import Hero from "../components/Hero";

import { BeatLoader } from "react-spinners";

const Home = () => {
  // get products from product context
  const { products, isPending } = useContext(ProductContext);

  // get only mens and womens clothing category
  // const filteredProducts = products.filter(
  //   (p) => p.category === "men's clothing" || p.category === "women's clothing"
  // );

  return (
    <div className="bg-white">
      <Hero />
      <section className="p-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        </div>
        {isPending && (
          <div className="flex items-center justify-center h-screen">
            <h1 className="font-bold text-xl mr-3">
              Hang tight! Fetching data...{" "}
            </h1>
            <BeatLoader color="black" loading={isPending} size={25} />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
