import useCursor from "../../hooks/useCursor";

export default function Cursor() {
  const cursorRef = useCursor();

  return (
    <div
      ref={cursorRef}
      className="
        fixed
        top-0
        left-0
        z-[9999]
        h-5
        w-5
        rounded-full
        bg-black
        pointer-events-none
        opacity-0
        mix-blend-difference
        will-change-transform
      "
    />
  );
}