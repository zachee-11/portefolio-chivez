import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20",
    secondary:
      "bg-white text-slate-950 hover:bg-slate-100 shadow-lg shadow-white/10",
    ghost:
      "border border-white/15 text-white hover:bg-white/10 backdrop-blur",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} download={download} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}