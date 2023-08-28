export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-y-4 w-screen h-screen bg-gradient-to-r from-cyan-600 to-violet-500">
      <h1 className={`text-6xl text-green-100 tracking-[0.025rem]`}>
        Nextjs Template
      </h1>
      <p className="text-2xl">
        <a href="https://github.com/matiasgdev" target="_blank">
          <span className="underline text-green-100 hover:text-green-200">
            @matiasgdev
          </span>
        </a>
      </p>
    </main>
  )
}
