import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-display font-bold tracking-tight",
  {
    variants: {
      variant: {
        default: "text-foreground",
        gradient: "gradient-purple bg-gradient-to-r from-primary to-secondary gradient-text",
        glow: "text-foreground drop-shadow-[0_0_20px_rgba(108,99,255,0.5)]",
        neon: "text-primary drop-shadow-[0_0_10px_rgba(108,99,255,0.8)]",
      },
      size: {
        h1: "text-5xl md:text-6xl lg:text-7xl",
        h2: "text-4xl md:text-5xl lg:text-6xl",
        h3: "text-3xl md:text-4xl lg:text-5xl",
        h4: "text-2xl md:text-3xl lg:text-4xl",
        h5: "text-xl md:text-2xl lg:text-3xl",
        h6: "text-lg md:text-xl lg:text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "h2",
    },
  }
);

const textVariants = cva(
  "font-sans",
  {
    variants: {
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        accent: "text-primary",
        gradient: "gradient-purple bg-gradient-to-r from-primary to-secondary gradient-text",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "base",
      weight: "normal",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, size, as, ...props }, ref) => {
    const Comp = as || "h2";
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, size, weight, as, ...props }, ref) => {
    const Comp = as || "p";
    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ variant, size, weight, className }))}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

const codeVariants = cva(
  "font-mono rounded px-1.5 py-0.5",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground",
        accent: "bg-primary/10 text-primary border border-primary/20",
      },
      size: {
        sm: "text-xs",
        base: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "base",
    },
  }
);

export interface CodeProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof codeVariants> {}

export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(codeVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Code.displayName = "Code";
