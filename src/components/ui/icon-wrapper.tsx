import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconWrapperProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "default" | "glow" | "gradient" | "pulse";
  className?: string;
}

export const IconWrapper = ({ 
  icon: Icon, 
  size = "md", 
  variant = "default",
  className 
}: IconWrapperProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
    "2xl": "w-16 h-16"
  };

  const variantClasses = {
    default: "text-primary",
    glow: "text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]",
    gradient: "bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent",
    pulse: "text-primary animate-pulse drop-shadow-[0_0_12px_hsl(var(--primary))]"
  };

  return (
    <div className={cn(
      "inline-flex items-center justify-center transition-all duration-300",
      variant === "glow" && "hover:drop-shadow-[0_0_16px_hsl(var(--primary))]",
      variant === "gradient" && "hover:scale-110",
      className
    )}>
      <Icon className={cn(
        sizeClasses[size],
        variantClasses[variant],
        "transition-all duration-300"
      )} />
    </div>
  );
};
