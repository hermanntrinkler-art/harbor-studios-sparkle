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
      <img
        src="/images/harbor-logo-new.png"
        alt="Harbor Studios - Lighthouse Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default AnimatedLogo;
