import { useEffect, useState } from "react";

const text = "New Bhusal Agrovet Center";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false); // To track if we should reverse the animation
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // State to track screen width

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let timeoutId;
    if (!reverse && index < text.length) {
      timeoutId = setTimeout(() => {
        setTypedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
    } else if (!reverse) {
      timeoutId = setTimeout(() => setReverse(true), 500);
    } else if (typedText.length) {
      timeoutId = setTimeout(
        () => setTypedText((prev) => prev.slice(0, -1)),
        50,
      );
    } else {
      timeoutId = setTimeout(() => {
        setIndex(0);
        setReverse(false);
      }, 500);
    }
    return () => clearTimeout(timeoutId);
  }, [index, typedText, reverse]);

  // Conditional background image based on screen width (mobile vs laptop)
  const backgroundImage =
    screenWidth < 768
      ? "url('https://res.cloudinary.com/dxdbrqanq/image/upload/v1782313142/kazrjnr7xemp1jbs24v1.jpg')" // Mobile background image
      : "url('https://res.cloudinary.com/dxdbrqanq/image/upload/v1782313008/yzzih1bwp87dgfhxxhzc.jpg')"; // Laptop background image

  return (
    <div
      className="h-screen flex justify-start md:justify-center items-start md:items-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage }}
    >
      <div className="font-bold text-left md:text-right h-32 w-96 mt-5 md:mt-32">
        <h1 className="text-3xl md:text-7xl text-green-950 px-4 md:px-60">
          Welcome
        </h1>
        <h2 className="text-2xl md:text-5xl text-blue-300 px-4 md:px-60">
          TO {typedText}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
