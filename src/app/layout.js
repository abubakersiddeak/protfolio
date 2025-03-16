import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-2 bg-slate-200">{children}</body>
    </html>
  );
}
export const metadata = {
  title: "My protfolio Website",
  description: "This is a futuristic web experience built with Next.js",
  keywords: "Next.js, Tailwind, Futuristic UI, React",
  openGraph: {
    title: "My Futuristic Website",
    description: "Experience the future of web design",
    url: "https://effervescent-lokum-36bfa7.netlify.app/",
    images: [
      {
        url: "/slkdjgh.jpg",
        width: 1200,
        height: 630,
        alt: "Futuristic Web UI",
      },
    ],
  },
};
