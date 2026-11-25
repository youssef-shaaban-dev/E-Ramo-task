import Image from "next/image";

export function AppPhoneMockup() {
  return (
    <div className="lg:col-span-5 relative flex justify-center lg:block pt-8 lg:pt-0 lg:h-full">
      <div className="relative w-64 sm:w-72 md:w-80 lg:absolute lg:w-[387.5px] lg:h-[836.25px] lg:top-[31.88px] lg:left-[24.38px]">
        <Image
          src="/images/app/app-phone.png"
          alt="Chair Location mobile app showing co-working spaces"
          width={388}
          height={837}
          className="w-full h-full object-contain object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}