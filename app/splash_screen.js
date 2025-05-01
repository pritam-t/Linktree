import React from "react";

export const SplashScreen = ({ fadeOut }) => {
  return (
    <div
      className={`bg-gradient-to-br from-[#1a1a2e] to-[#303054] w-full h-screen flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <h1
          className="text-white text-5xl font-semibold tracking-wide animate-fade-slide"
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Pritam Thopate
        </h1>
        <p
          className="text-gray-300 mt-4 text-lg animate-fade-slide delay-200"
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Aspiring Software Developer
        </p>
        <p
          className="text-gray-300 mt-2 text-lg animate-fade-slide delay-400"
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Portfolio
        </p>
      </div>
    </div>
  );
};
