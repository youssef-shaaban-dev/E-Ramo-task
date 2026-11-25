import { AppPhoneMockup } from "./AppPhoneMockup";
import { AppDownloadContent } from "./AppDownloadContent";

export function AppDownloadSection() {
  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-6xl mx-auto bg-panel-warm rounded-[28px] overflow-hidden px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4 lg:min-h-[380px]">
          <AppPhoneMockup />
          <AppDownloadContent />
        </div>
      </div>
    </section>
  );
}

export default AppDownloadSection;