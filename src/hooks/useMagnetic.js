import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function useMagnetic(strength = 30) {
  const ref = useRef(null);

  useGSAP(() => {
    const element = ref.current;

    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();

      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(element, {
        x: x / strength,
        y: y / strength,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.35)",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return ref;
}