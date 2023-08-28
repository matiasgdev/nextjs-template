'use client'

export default function Error({reset}: {error: Error; reset: () => void}) {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <h2 className="font-bold text-[32px]">Something went wrong!</h2>
      <button
        className="text-blue-400 hover:text-blue-400 hover:underline font-700"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
