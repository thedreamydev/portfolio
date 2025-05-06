import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { constructMetadata } from "@/lib/construct-metadata";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata();

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="2137e46f-01d9-4dcf-b9b5-657096599bec"
          async
        ></script>
      </head>
      <body
        className={`${inter.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <div className="relative min-h-screen w-full flex flex-col mx-auto max-w-screen-sm flex-1 px-4 pt-20 pb-8">
          <div className="pointer-events-none fixed left-0 top-0 z-50 h-12 w-full to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] bg-neutral-900" />

          <Header />
          <main className="mx-auto mb-16 flex w-full max-w-screen-sm flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
