import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mother's Day Celebration",
  description: "A special celebration for the most amazing mother",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
