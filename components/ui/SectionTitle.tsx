type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}