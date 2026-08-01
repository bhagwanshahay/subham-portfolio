import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function useReveal(options = {}) {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      y: options.y || 60,
      opacity: 0,
      duration: options.duration || 1,
      ease: options.ease || "power3.out",

      scrollTrigger: {
        trigger: ref.current,
        start: options.start || "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return ref;
}