import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
        hot: "border-transparent bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse-glow",
        trending: "border-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-white",
        new: "border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-white",
        premium: "border-transparent bg-gradient-to-r from-yellow-500 to-amber-600 text-white",
        verified: "border-transparent bg-green-600 text-white",
        glow: "border-primary bg-primary/20 text-primary shadow-[0_0_15px_rgba(0,255,255,0.5)]",
        success: "border-transparent bg-green-600 text-white",
        warning: "border-transparent bg-orange-500 text-white",
        error: "border-transparent bg-red-600 text-white",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        float: "animate-float",
      },
    },
    defaultVariants: {
      variant: "default",
      animation: "none",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

function Badge({ className, variant, animation, icon, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, animation }), className)} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
