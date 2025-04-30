import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
  link: "text-primary-600 hover:underline dark:text-primary-400 p-2",
};

const sizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-2.5 text-lg",
  flat: "",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "flat",
      isLoading = false,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${variants[variant]} ${sizes[size]} ${className} cursor-pointer`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin h-4 w-4 border-2 border-b-transparent rounded-full mr-2"></div>
            <span>{children}</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);
