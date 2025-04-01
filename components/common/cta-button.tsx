import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  label: string;
  className?: string;
};

const CTAButton = ({ href, label, className }: CTAButtonProps) => {
  return (
    <Button
      variant={"link"}
      className={cn(
        "rounded-full bg-linear-to-r from-slate-800 to-rose-800 px-8 py-6 text-base text-white shadow-lg transition-colors duration-300 hover:from-rose-800 hover:to-slate-800 hover:no-underline",
        className,
      )}
    >
      <Link href={href} className="flex items-center gap-2">
        <span>{label}</span>
        <ArrowRight className="animate-pulse" />
      </Link>
    </Button>
  );
};

export default CTAButton;
