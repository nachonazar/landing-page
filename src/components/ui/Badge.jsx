const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1 text-xs font-semibold tracking-wide text-primary uppercase ${className}`}
  >
    {children}
  </span>
);

export default Badge;
