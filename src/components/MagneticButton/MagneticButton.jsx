import useMagnetic from "../../hooks/useMagnetic";

export default function MagneticButton({
  children,
  className = "",
  ...props
}) {
  const magneticRef = useMagnetic();

  return (
    <button
      ref={magneticRef}
      className={`
        transition-transform
        duration-300
        ease-out
        will-change-transform
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}