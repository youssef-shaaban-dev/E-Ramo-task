import Image from "next/image";

export function AppPhoneMockup() {
  return (
    <div className="flex justify-center lg:justify-start pt-8 lg:pt-10 -mb-1">
      <div className="relative w-56 sm:w-72 md:w-80 lg:w-[380px] xl:w-[420px]">
        <Image
          src="/app-phone.png"
          alt="Chair Location mobile app showing co-working spaces"
          width={520}
          height={720}
          className="w-full h-auto object-contain drop-shadow-xl"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
