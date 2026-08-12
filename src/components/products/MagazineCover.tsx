import Image from "next/image";

export type Cover = {
  src: string;
  issue: string;
  date: string;
  headline: string[];
  lines: string[];
  ink: string;
  /** Cover art with its own baked-in masthead skips the typography overlay. */
  baked?: boolean;
};

export default function MagazineCover({ cover }: { cover: Cover }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/12 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.8)]">
      <Image
        src={cover.src}
        alt={`The CEO — ${cover.issue}`}
        fill
        sizes="(max-width: 1024px) 45vw, 22vw"
        className={
          cover.baked
            ? "object-cover"
            : "origin-bottom scale-[1.21] object-cover"
        }
        unoptimized
      />

      {!cover.baked && (
        <>
          {/* legibility scrims */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-between p-[7%]">
            <div>
              <p
                className="font-serif leading-none tracking-[0.02em]"
                style={{
                  color: cover.ink,
                  fontSize: "clamp(1rem, 3.1vw, 2.1rem)",
                }}
              >
                THE CEO
              </p>
              <div
                className="mt-[4%] h-px w-full"
                style={{ backgroundColor: cover.ink, opacity: 0.45 }}
              />
              <p
                className="mt-[4%] whitespace-nowrap font-mono uppercase leading-tight"
                style={{
                  color: cover.ink,
                  opacity: 0.85,
                  fontSize: "clamp(0.26rem, 0.62vw, 0.46rem)",
                  letterSpacing: "0.16em",
                }}
              >
                {cover.issue} · {cover.date}
              </p>
            </div>

            <div>
              {cover.headline.map((line) => (
                <p
                  key={line}
                  className="font-serif font-bold uppercase leading-[1.04] text-white"
                  style={{ fontSize: "clamp(0.85rem, 2.5vw, 1.7rem)" }}
                >
                  {line}
                </p>
              ))}
              <div
                className="mt-[4%] h-[2px] w-[22%]"
                style={{ backgroundColor: cover.ink }}
              />
              <div className="mt-[5%] space-y-[2.5%]">
                {cover.lines.map((line) => (
                  <p
                    key={line}
                    className="leading-snug text-white/85"
                    style={{ fontSize: "clamp(0.32rem, 0.82vw, 0.6rem)" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
