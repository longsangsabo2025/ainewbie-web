import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  spacing?: "none" | "sm" | "md" | "lg";
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = "horizontal", spacing = "sm", children, ...props }, ref) => {
    const spacingClass = {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
    }[spacing];

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex",
          orientation === "horizontal" ? "flex-row items-center" : "flex-col items-start",
          spacingClass,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";
