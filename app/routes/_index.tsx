import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { Loadings } from "~/Components/Loading";
import Navbar from "~/Components/NavBar";

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
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <Loadings />
      ) : (
        <div>
          <Navbar />
          <div className="h-screen  flex justify-center items-center">
            <h1 className="text-4xl font-bold text-center">
              Welcome to Bhusal Agrovet Center
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
