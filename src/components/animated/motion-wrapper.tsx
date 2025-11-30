import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn: React.FC<AnimationProps> = ({ children, className, delay = 0 }) => {
  return (
    <div
      className={cn("animate-fade-in", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const FadeInUp: React.FC<AnimationProps> = ({ children, className, delay = 0 }) => {
  return (
    <div
      className={cn("animate-fade-in-up", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ScaleIn: React.FC<AnimationProps> = ({ children, className, delay = 0 }) => {
  return (
    <div
      className={cn("animate-scale-in", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Float: React.FC<AnimationProps> = ({ children, className }) => {
  return (
    <div className={cn("animate-float", className)}>
      {children}
    </div>
  );
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerChildren: React.FC<StaggerProps> = ({
  children,
  className,
  staggerDelay = 100,
}) => {
  const childArray = React.Children.toArray(children);
  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <div
          key={index}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
