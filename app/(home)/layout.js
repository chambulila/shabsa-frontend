import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import TopBar from "@/components/ui/user/top-bar";
import Header from "@/components/ui/user/header";
import Footer from "@/components/ui/user/footer";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shabsa Company Limited",
  description: "Best builders and suppliers of construction facilities internationally",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        {/* <div className="bg-gradient-to-b from-yellow-900 via-gray-900 to-yellow-900 text-white min-h-screen"> */}
        <div className="bg-white min-h-screen"> {/* Gradient background */}
          <TopBar />
          <Header />
          {children}
        </div>
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
