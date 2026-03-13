import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group">
      <div className="flex items-center gap-3">
        {/* Logo Mark - Minimal Square */}
        <div className="w-10 h-10 bg-white flex items-center justify-center">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <span className="text-white font-bold text-xs tracking-tighter">TA</span>
          </div>
        </div>
        
        {/* Logotype */}
        <div className="flex flex-col">
          <h1 className="font-display text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white opacity-90 group-hover:opacity-100 transition-opacity leading-none">
            TIMES
          </h1>
          <h1 className="font-display text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-white opacity-70 group-hover:opacity-90 transition-opacity leading-none mt-[-2px]">
            APPLAUD
          </h1>
        </div>
      </div>
    </Link>
  );
}
