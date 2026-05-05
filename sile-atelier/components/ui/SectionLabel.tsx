interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`block text-[0.6rem] tracking-[0.35em] uppercase mb-4 ${
        light ? "text-sand/70" : "text-wheat"
      }`}
      style={{ fontFamily: "var(--font-jost)" }}
    >
      {children}
    </span>
  );
}
