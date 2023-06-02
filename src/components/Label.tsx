import { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...otherProps }: LabelProps) {
  return (
    <label
      className={`${className} block text-lg font-semibold`}
      {...otherProps}
    />
  );
}
