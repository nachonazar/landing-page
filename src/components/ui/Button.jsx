import React from "react";

const variants = {
  primary:
    "bg-primary text-on-primary shadow-sm shadow-primary/20 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25 active:scale-[0.98]",
  secondary:
    "border border-outline-variant/60 bg-surface-container-lowest text-on-background hover:border-primary/30 hover:bg-surface-container-low active:scale-[0.98]",
  whatsapp:
    "bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-md hover:shadow-emerald-600/25 active:scale-[0.98]",
};

const buttonBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const Button = ({
  as: Tag = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) => (
  <Tag className={`${buttonBase} ${variants[variant]} ${className}`} {...props}>
    {children}
  </Tag>
);

export default Button;
