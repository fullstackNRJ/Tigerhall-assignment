import "./globals.css";
import localFont from "next/font/local";
import { Providers } from "./providers";

const montreal = localFont({ src: "../fonts/NeueMontreal-Regular.otf" });

export const metadata = {
  title: "Tigerhall",
  description: "Search your favourite podcasts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montreal.className} style={{ background: "#001315" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
