import localFont from "next/font/local";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Avishek Majumder",
  description: "FullStack AI Engineer",
  keywords: "FullStack, AI, Engineer, Avishek Majumder", // Optional: Adding keywords for SEO
  openGraph: {
    title: "Avishek Majumder",
    description: "FullStack AI Engineer",
    type: "website",
    url: "https://avishekmajumder.com", // Replace with actual URL
    images: [
      {
        url: "https://avishekmajumder.com/og-image.png", // Replace with actual image URL
        width: 800,
        height: 600,
        alt: "Avishek Majumder - FullStack AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avishek Majumder",
    description: "FullStack AI Engineer",
    creator: "@avishekalex15", // Replace with actual Twitter handle
    images: ["https://avishekmajumder.com/twitter-image.png"], // Replace with actual image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
