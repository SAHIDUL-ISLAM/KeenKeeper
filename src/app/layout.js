import { Toaster } from "react-hot-toast";
import { TimelineProvider } from "@/context/TimelineContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
              <Navbar />
                <main className="max-w-7xl mx-auto">
                  <TimelineProvider>
                    {children}
                    <Toaster position="top-center" />
                  </TimelineProvider>
                </main>
              <Footer />
            </body>
        </html>
    );
}