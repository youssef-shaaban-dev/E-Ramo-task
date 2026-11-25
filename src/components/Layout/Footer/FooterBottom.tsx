import Link from "next/link";

export function FooterBottom() {
  return (
    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-write-sub">
      <div className="flex items-center gap-6">
        <Link
          href="/privacy"
          className="hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          Privacy &amp; Policy
        </Link>
        <Link
          href="/terms"
          className="hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          Terms &amp; Conditions
        </Link>
      </div>

      <p className="text-center sm:text-right font-normal">
        All Copyrights Chair Location | Developed by{" "}
        <strong className="font-semibold text-write-main">
          e-RAMO For Digital Solutions
        </strong>
      </p>
    </div>
  );
}
