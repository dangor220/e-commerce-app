export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ''}`}>
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true" focusable="false">
        <rect width="32" height="32" rx="8" className="fill-indigo-600" />
        <path
          d="M21 11.5a6.5 6.5 0 1 0 0 9"
          className="fill-none stroke-white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-bold tracking-tight">Cartly</span>
    </span>
  );
}
