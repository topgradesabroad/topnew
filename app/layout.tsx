import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css"; // Keep global styles
import Header from "@/components/Header"; // Import Header component
import Footer from "@/components/Footer"; // Import Footer component

// Load Google Fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable}`}>
      <body>
        <Header />  {/* Add the Header component here */}
        {children}
        <Footer />  {/* Add the Footer component here */}
      </body>
    </html>
  );
}
