import Head from 'next/head';
import { Nunito } from '@next/font/google';

/* eslint-disable @typescript-eslint/quotes */
const nunito = Nunito({
  weight: '600',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Template</title>
        <meta name="description" content="A webapp service for FDV" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center flex-col gap-y-4 w-screen h-screen bg-gradient-to-r from-cyan-600 to-violet-500">
        <h1
          className={`text-6xl text-green-100 ${nunito.className} tracking-[0.025rem]`}
        >
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
    </>
  );
}
