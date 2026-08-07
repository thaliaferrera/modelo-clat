import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={`eclat-reveal ${className}`}
    >
      {children}
    </div>
  );
}

export function VeilImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  width,
  height,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width: number;
  height: number;
  eager?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.12);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div data-shown={shown} className="eclat-veil h-full w-full">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
          className={`h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] ${imgClassName}`}
        />
      </div>
    </div>
  );
}