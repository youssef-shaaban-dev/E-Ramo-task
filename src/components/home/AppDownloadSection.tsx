import Image from "next/image";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import AppleIcon from "../icons/AplleIcon";

export function AppDownloadSection() {
  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8">
      {/* الحاوية الرئيسية بحواف دائرية مطابقة لفيجما */}
      <div className="relative max-w-6xl mx-auto bg-panel-warm rounded-[28px] overflow-hidden px-6 sm:px-10 lg:px-14">
        
        {/* اليد صغيرة في الزاوية العلوية اليمنى كما في التصميم */}
        <div className="hidden sm:block absolute top-5 right-0 w-24 md:w-28 lg:w-32 pointer-events-none select-none z-10">
          <Image
            src="/app-hand.png"
            alt=""
            width={180}
            height={190}
            className="w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4 lg:min-h-[380px]">
          
          {/* ── Left: Phone Mockup ── */}
          <div className="lg:col-span-5 relative flex justify-center lg:block pt-8 lg:pt-0 lg:h-full">
            <div className="relative w-64 sm:w-72 md:w-80 lg:absolute lg:w-[387.5px] lg:h-[836.25px] lg:top-[31.88px] lg:left-[24.38px]">
              <Image
                src="/app-phone.png"
                alt="Chair Location mobile app showing co-working spaces"
                width={388}
                height={837}
                className="w-full h-full object-contain object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* ── Right: Text + Buttons (قريب من الموبايل وبعيد عن اليد) ── */}
          <div className="lg:col-start-6 lg:col-span-7 flex flex-col items-start justify-center pb-10 lg:py-16 lg:pl-2">
            <div className="relative z-20 max-w-lg">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-write-main font-title leading-tight">
                Explore The Chair Location App
              </h2>
              <p className="mt-3 text-sm sm:text-[15px] text-write-sub font-body font-normal leading-relaxed max-w-[390px]">
                Hybrid working offers you the freedom to work closer to clients,
                colleagues or home.
              </p>

              {/* Store Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                {/* Google Play */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 bg-[#1B2521] text-white rounded-lg px-4 py-2 hover:opacity-90 transition-opacity"
                  aria-label="Get it on Google Play"
                >
                  <GooglePlayIcon />
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[8px] font-normal font-body tracking-wider uppercase text-white/80">
                      GET IT ON
                    </span>
                    <span className="text-sm font-medium font-title mt-0.5">
                      Google Play
                    </span>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 bg-[#1B2521] text-white rounded-lg px-4 py-2 hover:opacity-90 transition-opacity"
                  aria-label="Download on the App Store"
                >
                  <AppleIcon />
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[8px] font-normal font-body tracking-wide text-white/80">
                      Download on the
                    </span>
                    <span className="text-sm font-medium font-title mt-0.5">
                      App Store
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}