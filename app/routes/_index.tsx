import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Footer from "~/Components/Main/Footer";
import { Loadings } from "~/Components/Main/Loading";
import Navbar from "~/Components/Main/NavBar";
import Contact from "~/Pages/Contact";
import Hero from "~/Pages/Hero";
import Service from "~/Pages/Service";

export const meta: MetaFunction = () => {
  return [
    { title: "New Bhusal Argovet Center" },
    { name: "description", content: "Bhusal Agrovet" },
  ];
};

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
        <Loadings />
        </div>
      ) : (
        <div>
          <Navbar />
          <Hero/>
          <Service/>
          <Contact/>
          <Footer/>
        </div>
      )}
    </>
  );
}
