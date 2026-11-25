import Image from "next/image";
import GooglePlayIcon from "@/components/icons/GooglePlayIcon";
import AppleIcon from "@/components/icons/AplleIcon";

export function AppDownloadSection() {
  return (
    <section className="w-full bg-panel-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[320px] md:min-h-[380px]">

          {/* ── Left: Phone Mockup (overflows bottom) ── */}
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

          {/* ── Right: Text + Buttons + Hand ── */}
          <div className="relative flex flex-col items-start pb-10 lg:pb-14 pt-6 lg:pt-0">

            {/* Decorative hand — top-right of this column */}
            <div className="absolute -top-2 right-0 lg:-top-4 lg:-right-4 w-36 sm:w-44 lg:w-56 xl:w-64 pointer-events-none select-none">
              <Image
                src="/app-hand.png"
                alt=""
                width={320}
                height={340}
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
            </div>

            {/* Text content */}
            <div className="relative z-10 max-w-sm mt-16 lg:mt-20">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-write-main font-title leading-snug">
                Explore The Chair Location App
              </h2>
              <p className="mt-3 text-sm text-write-sub font-body font-normal leading-relaxed">
                Hybrid working offers you the freedom to work closer to clients,
                colleagues or home.
              </p>

              {/* Store Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {/* Google Play */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-write-main text-white rounded-xl px-5 py-3 hover:opacity-90 transition-opacity"
                  aria-label="Get it on Google Play"
                >
                  <GooglePlayIcon className="w-6 h-7 shrink-0" />
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[9px] font-normal font-body tracking-wide uppercase">
                      Get it on
                    </span>
                    <span className="text-sm font-semibold font-title">
                      Google Play
                    </span>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-write-main text-white rounded-xl px-5 py-3 hover:opacity-90 transition-opacity"
                  aria-label="Download on the App Store"
                >
                  <AppleIcon className="w-5 h-7 shrink-0" />
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[9px] font-normal font-body tracking-wide uppercase">
                      Download on the
                    </span>
                    <span className="text-sm font-semibold font-title">
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
