import React from "react";

export type CardVariant = "outlined" | "filled";

export interface CardProps {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export interface CardBodyProps {
  className?: string;
  children: React.ReactNode;
}

export interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  outlined: "border border-slate-grey bg-white",
  filled: "bg-gray-50 border border-gray-200",
};

/**
 * Card component with header, body, and footer sections
 */
export const Card: React.FC<CardProps> = ({
  variant = "outlined",
  className = "",
  children,
  onClick,
}) => {
  const baseStyles =
    "rounded-lg shadow-sm transition-shadow duration-200 hover:shadow-md";

  const clickableStyles = onClick
    ? "cursor-pointer hover:shadow-lg"
    : "";

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${clickableStyles} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
};

/**
 * Card header component
 */
export const CardHeader: React.FC<CardHeaderProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`px-6 py-4 border-b border-slate-grey border-opacity-20 ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * Card body component
 */
export const CardBody: React.FC<CardBodyProps> = ({
  className = "",
  children,
}) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

/**
 * Card footer component
 */
export const CardFooter: React.FC<CardFooterProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`px-6 py-4 border-t border-slate-grey border-opacity-20 ${className}`}
    >
      {children}
    </div>
  );
};


