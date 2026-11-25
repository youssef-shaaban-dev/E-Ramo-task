import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@/components/icons/FacebookIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import TwitterXIcon from "@/components/icons/TwitterXIcon";


export function FooterBrand() {
  return (
    <div className="flex flex-col items-start gap-6">
      <Link href="/" className="inline-block">
        <Image
          src="/images/logo/logo-tight.png"
          alt="Chair Location"
          width={130}
          height={110}
          className="h-auto w-24 sm:w-28 object-contain"
        />
      </Link>

      {/* Social Icons 2x2 grid */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-3.5 text-primary">
        <a
          href="#"
          aria-label="Facebook"
          className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary-hover transition-colors"
        >
          <FacebookIcon />
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary-hover transition-colors"
        >
          <YoutubeIcon />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary-hover transition-colors"
        >
          <LinkedInIcon />
        </a>
        <a
          href="#"
          aria-label="X (Twitter)"
          className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary-hover transition-colors"
        >
          <TwitterXIcon />
        </a>
      </div>
    </div>
  );
}
