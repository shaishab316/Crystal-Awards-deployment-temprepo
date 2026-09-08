"use client";

type Props = {
  names: string[];
};

export function AwardTicker({ names }: Props) {
  const doubled = [...names, ...names, ...names, ...names];

  return (
    <div className="overflow-hidden border-y border-gold/15 bg-obsidian-warm/80 py-5">
      <div className="animate-marquee flex w-max gap-0 whitespace-nowrap">
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center text-xs uppercase tracking-[0.35em] text-white/50"
          >
            <span className="px-6">{name}</span>
            <span className="text-gold/60">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
