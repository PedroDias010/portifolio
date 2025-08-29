import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Toaster } from "sonner";

// Importe a imagem (coloque o arquivo na pasta app/)
import pedro from "./pedro.png";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "PEDRO.DEV",
  description: "Create my portfolio",
  icons: {
    icon: pedro.src, 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <NavBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster richColors position="top-right" theme="dark" />
      </body>
    </html>
  );
}