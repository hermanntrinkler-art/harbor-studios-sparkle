interface AnimatedLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AnimatedLogo = ({ className = "", size = "md" }: AnimatedLogoProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-24 h-24 md:w-32 md:h-32",
    lg: "w-32 h-32 md:w-40 md:h-40",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Base Logo */}
      <img
        src="/images/harbor-logo.png"
        alt="Harbor Studios - Lighthouse Logo"
        className="w-full h-full object-contain relative z-10"
      />
      
      {/* Rotating Light Beam Overlay */}
      <div 
        className="absolute inset-0 animate-lighthouse-beam pointer-events-none"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            rgba(59, 207, 239, 0.3) 20deg,
            rgba(59, 207, 239, 0.6) 40deg,
            rgba(59, 207, 239, 0.3) 60deg,
            transparent 80deg,
            transparent 360deg
          )`,
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default AnimatedLogo;
