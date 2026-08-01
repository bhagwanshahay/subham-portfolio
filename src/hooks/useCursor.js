import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      cursor.style.display = "none";
      return;
    }

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: "power3.out",
      });
    };

    const mouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
      });
    };

    const mouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 0.25,
      });
    };

    const interactiveElements = document.querySelectorAll(
      "button, a, li, input, textarea"
    );

    const growCursor = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.2,
      });
    };

    const shrinkCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", growCursor);
      el.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", growCursor);
        el.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  return cursorRef;
}