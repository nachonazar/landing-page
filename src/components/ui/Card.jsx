const Card = ({ children, className = "", hover = false }) => (
  <div
    className={`rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 md:p-8 ${
      hover
        ? "cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
        : ""
    } ${className}`}
  >
    {children}
  </div>
);

export default Card;
