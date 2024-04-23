
import { Link } from 'react-router-dom';

export default function Cont0() {
  return (
<div className="space-y-4 bg-background-primary x-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Pytanie 1?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
     Wyjaśnienie!
    </p>
  </details>

  <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Pytanie 2?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
     Wyjaśnienie!
    </p>
  </details>
</div>
  );
}
