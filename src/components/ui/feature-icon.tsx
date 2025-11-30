import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureIconProps {
  icon: LucideIcon;
  gradient?: boolean;
  pulse?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const FeatureIcon = ({ 
  icon: Icon, 
  gradient = false,
  pulse = false,
  size = "md",
  className 
}: FeatureIconProps) => {
  const sizeMap = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };

  const iconSizeMap = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-8 h-8",
    xl: "w-10 h-10"
  };

  return (
    <div className={cn(
      "relative rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
      sizeMap[size],
      gradient 
        ? "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30" 
        : "bg-primary/10 border border-primary/20",
      pulse && "animate-pulse",
      className
    )}>
      <Icon className={cn(
        iconSizeMap[size],
        gradient 
          ? "text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]" 
          : "text-primary"
      )} />
      {gradient && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </div>
  );
};
