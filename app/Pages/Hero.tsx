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
      timeoutId = setTimeout(() => setTypedText((prev) => prev.slice(0, -1)), 50);
    } else {
      timeoutId = setTimeout(() => { setIndex(0); setReverse(false); }, 500);
    }
    return () => clearTimeout(timeoutId);
  }, [index, typedText, reverse]);

  // Conditional background image based on screen width (mobile vs laptop)
  const backgroundImage = screenWidth < 768
    ? "url('https://imgs.search.brave.com/OZ0DUeuiMe8irrBdz-15AyTflLNZb6mFEnc1fXb7u4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTEy/MDc4Mjg2L3Bob3Rv/L3ZlcnktaGFwcHkt/Y29yZ2kuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVNGVEl2/ZC1kMEY0Z3h4WTlP/Ty1VODg1VDliN3Yt/dUhkamV0LWw1QlE4/ckk9')"  // Mobile background image
    : "url('https://imgs.search.brave.com/rSv1Lh1ey6nHf41QfMPeqfUyAKF0rc-aEdUVDe9GVyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzI5Lzg3/LzM2MF9GXzU3OTI5/ODcwOF9lN0Z0UWE4/RXU2d0hmVURmYXpO/Q2JZVERiVFlLdENX/Sy5qcGc')"; // Laptop background image

  return (
    <div
  className="h-screen flex justify-start md:justify-center items-start md:items-start bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage }}
>
  <div className="font-bold text-left md:text-right h-32 w-96 mt-5 md:mt-32">
    <h1 className="text-3xl md:text-7xl text-red-500 px-4 md:px-60">Welcome</h1>
    <h2 className="text-2xl md:text-5xl text-white px-4 md:px-60">TO {typedText}</h2>
  </div>
</div>

  );
};

export default Hero;
