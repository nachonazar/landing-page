import Badge from "./Badge";

const SectionHeader = ({ badge, title, description, align = "center", className = "" }) => (
  <div
    className={`mb-14 md:mb-16 space-y-4 ${
      align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
    } ${className}`}
  >
    {badge && <Badge>{badge}</Badge>}
    <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-background tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
