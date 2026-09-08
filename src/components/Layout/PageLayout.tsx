import PageHero from "./PageHero";

interface PageLayoutProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  hero?: boolean;
  fullWidth?: boolean;
  reduced?: boolean;
  /** Optional hero photograph. Falls back to the navy ground without one. */
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  objectPosition?: string;
}

export default function PageLayout({
  title,
  subtitle,
  children,
  fullWidth = false,
  image,
  imageAlt,
  eyebrow,
  objectPosition,
}: PageLayoutProps) {
  return (
    <main className="min-h-screen">
      {(title || subtitle) && (
        <PageHero
          eyebrow={eyebrow}
          title={title ?? ""}
          subtitle={subtitle}
          image={image}
          imageAlt={imageAlt}
          objectPosition={objectPosition}
          height={fullWidth ? "min-h-[62vh]" : "min-h-[52vh]"}
        />
      )}
      {children}
    </main>
  );
}
