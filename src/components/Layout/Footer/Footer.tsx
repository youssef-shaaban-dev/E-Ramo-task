import { FooterBrand } from "./FooterBrand";
import { FooterNavList } from "./FooterNavList";
import { FooterAppDownload } from "./FooterAppDownload";
import { FooterBottom } from "./FooterBottom";

export function Footer() {
  return (
    <footer className="w-full bg-[#f3f5f6] border-t border-border/60 pt-12 md:pt-16 pb-8 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-border/60">
          <FooterBrand />
          <FooterNavList />
          <FooterAppDownload />
        </div>

        {/* ── Sub Footer ── */}
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
