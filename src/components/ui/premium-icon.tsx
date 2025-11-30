import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumIconProps {
  icon: LucideIcon;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "default" | "glow" | "gradient" | "neon" | "holographic" | "aurora";
  animate?: boolean;
  className?: string;
}

export const PremiumIcon = ({ 
  icon: Icon, 
  size = "md",
  variant = "default",
  animate = false,
  className 
}: PremiumIconProps) => {
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
    "2xl": "w-16 h-16"
  };

  const variantClasses = {
    default: "text-primary",
    glow: "text-primary drop-shadow-[0_0_12px_hsl(var(--primary))]",
    gradient: "text-transparent bg-gradient-to-br from-cyan-400 via-primary to-blue-500 bg-clip-text",
    neon: "text-primary drop-shadow-[0_0_20px_hsl(var(--primary))] drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)]",
    holographic: "text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text",
    aurora: "text-transparent bg-gradient-to-br from-cyan-300 via-primary via-purple-400 to-pink-400 bg-clip-text animate-pulse"
  };

  const containerVariants = {
    default: "",
    glow: "relative",
    gradient: "relative",
    neon: "relative before:absolute before:inset-0 before:bg-primary/10 before:blur-xl before:rounded-full",
    holographic: "relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/20 before:via-purple-500/20 before:to-pink-500/20 before:blur-lg before:rounded-full",
    aurora: "relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/30 before:via-primary/30 before:to-purple-500/30 before:blur-xl before:rounded-full before:animate-pulse"
  };

  return (
    <div className={cn(
      "inline-flex items-center justify-center transition-all duration-300",
      containerVariants[variant],
      animate && "hover:scale-110 hover:rotate-6",
      className
    )}>
      <Icon 
        className={cn(
          sizeClasses[size],
          variantClasses[variant],
          "transition-all duration-300 relative z-10",
          animate && "group-hover:scale-110"
        )} 
        strokeWidth={variant === "neon" || variant === "glow" ? 2.5 : 2}
      />
    </div>
  );
};

// Icon Wrapper với background và border effects
interface IconBoxProps extends PremiumIconProps {
  background?: "glass" | "solid" | "gradient" | "none";
  bordered?: boolean;
  rounded?: "sm" | "md" | "lg" | "full";
}

export const IconBox = ({ 
  icon: Icon, 
  size = "md",
  variant = "glow",
  animate = true,
  background = "glass",
  bordered = true,
  rounded = "lg",
  className 
}: IconBoxProps) => {
  const boxSizeClasses = {
    xs: "w-8 h-8",
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
    "2xl": "w-24 h-24"
  };

  const roundedClasses = {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full"
  };

  const backgroundClasses = {
    glass: "bg-primary/10 backdrop-blur-sm",
    solid: "bg-primary/20",
    gradient: "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent",
    none: ""
  };

  return (
    <div className={cn(
      "relative flex items-center justify-center group transition-all duration-300",
      boxSizeClasses[size],
      roundedClasses[rounded],
      backgroundClasses[background],
      bordered && "border border-primary/30",
      animate && "hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]",
      variant === "glow" && "shadow-[0_0_20px_hsl(var(--primary)/0.2)]",
      className
    )}>
      {/* Background glow effect */}
      {variant !== "default" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/20 rounded-inherit opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      <PremiumIcon 
        icon={Icon} 
        size={size === "xs" ? "xs" : size === "sm" ? "sm" : size === "md" ? "md" : size === "lg" ? "lg" : size === "xl" ? "xl" : "2xl"}
        variant={variant}
        animate={false}
        className="relative z-10"
      />
    </div>
  );
};
