import Footer from "@/components/Footer/footer";
import "./globals.css";
import { Providers } from "./providers";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

export const metadata = {
  title: "DeskWorkout",
  description: "DeskWorkout Web Application",
    icons: {
      icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <NavigationBar></NavigationBar>
        <Providers>{children}</Providers>
        <Footer></Footer>
      </body>
    </html>
  );
}
