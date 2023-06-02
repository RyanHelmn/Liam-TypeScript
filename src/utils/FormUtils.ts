import React from "react";

export function getErrorMessage(error: any): React.ReactNode {
  if (typeof error === "string") return error;
  if (error && typeof error.message === "string") return error.message;
  // handle other cases if necessary
  return null;
}
