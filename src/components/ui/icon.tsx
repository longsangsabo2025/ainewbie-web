import * as React from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva(
  "inline-flex items-center justify-center shrink-0 transition-all",
  {
    variants: {
      size: {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-8 h-8",
        "2xl": "w-10 h-10",
        "3xl": "w-12 h-12",
      },
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        glow: "text-primary drop-shadow-[0_0_8px_rgba(108,99,255,0.6)]",
        success: "text-success",
        warning: "text-warning",
        error: "text-error",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        spin: "animate-spin",
        bounce: "animate-bounce",
        float: "animate-float",
      },
      interactive: {
        true: "cursor-pointer hover:scale-110 active:scale-95",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      animation: "none",
      interactive: false,
    },
  }
);

export interface IconProps extends VariantProps<typeof iconVariants> {
  icon: LucideIcon;
  className?: string;
  gradient?: "purple" | "cyan" | "rainbow";
  badge?: number | string;
  onClick?: () => void;
}

export const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  (
    {
      icon: IconComponent,
      size,
      variant,
      animation,
      interactive,
      className,
      gradient,
      badge,
      onClick,
    },
    ref
  ) => {
    const gradientClass = gradient
      ? gradient === "purple"
        ? "gradient-purple-pink gradient-text"
        : gradient === "cyan"
        ? "gradient-cyan-blue gradient-text"
        : "gradient-rainbow gradient-text"
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex",
          onClick && "cursor-pointer"
        )}
        onClick={onClick}
      >
        <IconComponent
          className={cn(
            iconVariants({ size, variant, animation, interactive, className }),
            gradientClass
          )}
        />
        {badge && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[16px] h-4 px-1 text-xs font-bold text-white bg-error rounded-full border border-background">
            {badge}
          </span>
        )}
      </div>
    );
  }
);
Icon.displayName = "Icon";

export interface IconGroupProps {
  children: React.ReactNode;
  spacing?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export const IconGroup = ({ children, spacing = "md", className }: IconGroupProps) => {
  const spacingClass = {
    none: "gap-0",
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-4",
  }[spacing];

  return <div className={cn("inline-flex items-center", spacingClass, className)}>{children}</div>;
};
