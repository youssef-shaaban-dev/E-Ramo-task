import GooglePlayIcon from "@/components/icons/GooglePlayIcon";
import AppleIcon from "@/components/icons/AplleIcon";

export function FooterAppDownload() {
  return (
    <div className="flex flex-col">
      <h3 className="text-base sm:text-lg font-bold text-write-main font-title mb-4 leading-snug">
        Download the<br />Chair Location App
      </h3>

      <div className="flex flex-col gap-3 max-w-42.5">
        {/* Google Play */}
        <a
          href="#"
          className="flex items-center gap-2.5 bg-write-main text-white rounded-lg px-3.5 py-2 hover:opacity-90 transition-opacity shadow-xs"
          aria-label="Get it on Google Play"
        >
          <GooglePlayIcon className="w-5 h-6 shrink-0" />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[7px] font-normal uppercase tracking-wider text-white/80">
              Get it on
            </span>
            <span className="text-xs font-semibold font-title">
              Google Play
            </span>
          </div>
        </a>

        {/* App Store */}
        <a
          href="#"
          className="flex items-center gap-2.5 bg-write-main text-white rounded-lg px-3.5 py-2 hover:opacity-90 transition-opacity shadow-xs"
          aria-label="Download on the App Store"
        >
          <AppleIcon className="w-4 h-6 shrink-0" />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[7px] font-normal uppercase tracking-wider text-white/80">
              Download on the
            </span>
            <span className="text-xs font-semibold font-title">
              App Store
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
