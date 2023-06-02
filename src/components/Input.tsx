import React, { ForwardedRef } from "react";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...otherProps }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        className={`${className} w-full border px-2 py-1.5`}
        {...otherProps}
      />
    );
  }
);

Input.displayName = "Input";
