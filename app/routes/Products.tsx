import { useEffect, useState } from "react";
import { Loads } from "~/Components/Animation/Loading";
import Footer from "~/Components/Main/Footer";
import Navbar from "~/Components/Main/NavBar";
import { Product } from "~/Components/Main/Product";

const Products = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <>
      {loading ? (
        <>
          <div className="h-screen flex justify-center items-center">
            <Loads />
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <Product />
          <Footer />
        </>
      )}
    </>
  );
};

export default Products;
