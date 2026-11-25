import React from "react";
import Link from "next/link";
import Image from "next/image";

export function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <Image
        src="/images/logo/logo.png"
        alt="Chair Location Logo"
        width={500}
        height={500}
        className="w-26 h-26"
        loading="eager"
        fetchPriority="high"
      />
    </Link>
  );
}
