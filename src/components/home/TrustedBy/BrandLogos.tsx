import React from "react";

function AlmaraiLogo() {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-xs text-white/80 font-body" style={{ fontFamily: "serif" }}>المراعي</span>
      <span className="text-sm font-bold text-white font-title tracking-wide">Almarai</span>
    </div>
  );
}

function AlRajhiLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-end leading-none">
        <span className="text-[9px] text-white/70 font-body">مصرف الراجحي</span>
        <span className="text-xs font-semibold text-white font-body tracking-wide">alrajhi bank</span>
      </div>
      <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0" fill="none">
        <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.5" />
        <path d="M10 16a6 6 0 1 1 12 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="11" r="2" fill="white" />
      </svg>
    </div>
  );
}

function VisaLogo() {
  return (
    <span className="text-2xl font-black text-white font-title italic tracking-tight">VISA</span>
  );
}

function SlackLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="white" />
      </svg>
      <span className="text-lg font-semibold text-white font-body tracking-wide">slack</span>
    </div>
  );
}

function XboxLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="white">
        <path d="M4.102 4.138C5.787 2.608 8.1 1.5 12 1.5c3.9 0 6.213 1.108 7.898 2.638C17.72 1.808 15.097 0 12 0S6.28 1.808 4.102 4.138zm15.65 1.75C17.49 3.388 14.978 2.5 12 2.5c-2.978 0-5.49.888-7.752 3.388C2.258 7.888 1.5 9.888 1.5 12c0 5.799 4.701 10.5 10.5 10.5S22.5 17.799 22.5 12c0-2.112-.758-4.112-2.748-6.112zM12 21C6.701 21 2.5 16.799 2.5 11.5c0-1.9.7-3.713 1.95-5.187C6.238 4.025 8.75 3 12 3c3.25 0 5.762 1.025 7.55 3.313C20.8 7.787 21.5 9.6 21.5 11.5 21.5 16.799 17.299 21 12 21zm-5.5-6.5c1 1.5 3.25 3 5.5 3s4.5-1.5 5.5-3C15.5 16 13.5 17 12 17s-3.5-1-5.5-2.5z" />
      </svg>
      <span className="text-sm font-bold text-white font-title tracking-widest">XBOX ONE</span>
    </div>
  );
}

function LinkedInLogo() {
  return (
    <div className="flex items-center gap-0">
      <span className="text-lg font-bold text-white font-title">Linked</span>
      <span
        className="text-lg font-bold bg-white/90 rounded px-1 ml-0.5"
        style={{ color: "var(--color-primary)" }}
      >
        in
      </span>
    </div>
  );
}

function CiscoLogo() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-end gap-0.5">
        {[2, 3, 4, 3, 2, 3, 4, 3, 2].map((h, i) => (
          <div key={i} className="w-1 bg-white rounded-full" style={{ height: `${h * 3}px` }} />
        ))}
      </div>
      <span className="text-sm font-bold text-white font-title tracking-widest">CISCO</span>
    </div>
  );
}

function BankAlbiladLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col leading-none">
        <span className="text-[9px] text-white/70 font-body">بنك البلاد</span>
        <span className="text-xs font-bold text-white font-title">Bank Albilad</span>
      </div>
      <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0" fill="none">
        <rect x="2" y="8" width="28" height="16" rx="2" stroke="white" strokeWidth="1.5" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="white" strokeWidth="1.5" />
        <path d="M12 14v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export const BRANDS = [
  { id: "almarai",  Logo: AlmaraiLogo },
  { id: "alrajhi",  Logo: AlRajhiLogo },
  { id: "visa",     Logo: VisaLogo },
  { id: "slack",    Logo: SlackLogo },
  { id: "xbox",     Logo: XboxLogo },
  { id: "linkedin", Logo: LinkedInLogo },
  { id: "cisco",    Logo: CiscoLogo },
  { id: "albilad",  Logo: BankAlbiladLogo },
];

export function BrandLogos() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {BRANDS.map(({ id, Logo }) => (
        <div
          key={id}
          className="flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-5 min-h-18"
        >
          <Logo />
        </div>
      ))}
    </div>
  );
}
