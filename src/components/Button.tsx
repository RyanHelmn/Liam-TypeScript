import { ForwardedRef, forwardRef } from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  submitting?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, submitting, ...otherProps },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const isSubmittingOrDisabled = otherProps.disabled || submitting;

    return (
      <button
        ref={ref}
        className={`${className} ${
          isSubmittingOrDisabled ? "bg-blue-900" : ""
        } text-lg px-5 py-3 bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center`}
        {...otherProps}
        disabled={isSubmittingOrDisabled}
      >
        {submitting && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {otherProps.children}
      </button>
    );
  }
);

Button.displayName = "Button";
