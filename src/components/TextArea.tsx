import React, { ForwardedRef } from "react";
import { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...otherProps }, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <textarea
        ref={ref}
        className={`${className} w-full border px-2 py-1.5`}
        {...otherProps}
      />
    );
  }
);

TextArea.displayName = "TextArea";
