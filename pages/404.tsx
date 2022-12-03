import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        404 - Access is ultra denied
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        You have stumbled upon a place that is not meant to be found. It is a
        place of secrets and mysteries, and you are not meant to be here. Turn
        back now, before it&apos;s too late.
      </p>
      <Link
        href="/"
        className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white"
      >
        Go Back
      </Link>
    </div>
  );
}
