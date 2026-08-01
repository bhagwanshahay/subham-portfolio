import { useEffect } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    });

    tl.fromTo(
      ".loader-logo",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    )
      .to(".loader-bar", {
        width: "100%",
        duration: 1.3,
        ease: "power2.inOut",
      })
      .to(".loader", {
        opacity: 0,
        duration: 0.5,
      })
      .set(".loader", {
        display: "none",
      });
  }, [onComplete]);

  return (
    <div className="loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <h1 className="loader-logo text-5xl sm:text-7xl font-light text-white">
        Generate Guy
      </h1>

      <div className="mt-12 h-[2px] w-56 bg-white/20 overflow-hidden rounded-full">
        <div className="loader-bar h-full w-0 bg-white"></div>
      </div>
    </div>
  );
}