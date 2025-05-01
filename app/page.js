"use client";
import "./globals.css";
import { SplashScreen } from "./splash_screen";
import { useState, useEffect } from "react";
import Image from "next/image";  // Importing Next.js Image component

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade-out animation
      setTimeout(() => {
        setLoading(false); // after fade-out, hide splash
      }, 1000); // 1 second (should match transition duration)
    }, 2000); // wait 2 seconds before fading out

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen fadeOut={fadeOut} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-[#1e1e2f] to-[#4b4b62] fade-in">
      <div className="animate__animated animate__fadeIn animate__delay-1s">
        <Image
          src="/logo.jpg"
          alt="profile picture"
          className="w-[30vh] rounded-full animate__animated animate__zoomIn animate__delay-2s"
          width={300}  // Set the width of the image
          height={300} // Set the height of the image
        />
      </div>
      <h1
        className="text-[#F7E7D8] text-4xl mt-2 animate__animated animate__fadeInUp animate__delay-1s"
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        Pritam&apos;s Portfolio
      </h1>
      <div className="flex flex-col items-center justify-center gap-6 w-[90%] max-w-md mt-10">
        <a
          href="https://github.com/pritam-t"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F7E7D8] w-full h-[8vh] flex items-center justify-center gap-3 rounded-[10px] cursor-pointer transform transition-all duration-300 hover:bg-[#e1c7a5] hover:shadow-lg animate__animated animate__fadeInUp animate__delay-2s"
        >
          <Image
            src="/github.PNG"
            alt="github logo"
            className="w-[6vh]"
            width={30}  // Adjust the width and height
            height={30}
          />
          <p
            className="text-black flex justify-center items-center"
            style={{ fontFamily: "SFPRODISPLAYMEDIUM" }}
          >
            @pritam-t
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/pritam-thopate-678b49282/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F7E7D8] w-full h-[8vh] flex items-center justify-center gap-3 rounded-[10px] cursor-pointer transform transition-all duration-300 hover:bg-[#e1c7a5] hover:shadow-lg animate__animated animate__fadeInUp animate__delay-2s"
        >
          <Image
            src="/linkedin.PNG"
            alt="linkedin logo"
            className="w-[4vh]"
            width={30}  // Adjust the width and height
            height={30}
          />
          <p
            className="text-black flex justify-center items-center"
            style={{ fontFamily: "SFPRODISPLAYMEDIUM" }}
          >
            @Pritam Thopate
          </p>
        </a>

        <a
          href="https://instagram.com/pritamthopate"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F7E7D8] w-full h-[8vh] flex items-center justify-center gap-3 rounded-[10px] cursor-pointer transform transition-all duration-300 hover:bg-[#e1c7a5] hover:shadow-lg animate__animated animate__fadeInUp animate__delay-2s"
        >
          <Image
            src="/instagram.PNG"
            alt="instagram logo"
            className="w-[4vh]"
            width={30}  // Adjust the width and height
            height={30}
          />
          <p
            className="text-black flex justify-center items-center"
            style={{ fontFamily: "SFPRODISPLAYMEDIUM" }}
          >
            @pritamthopate
          </p>
        </a>
      </div>
    </div>
  );
}
