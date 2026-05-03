import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <DotLottieReact
        src="/SandyLoading.lottie"
        loop
        autoplay
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default LoadingSpinner;
