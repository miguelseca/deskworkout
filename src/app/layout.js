import Footer from "@/components/footer/footer";
import "./globals.css";
import { Providers } from "./providers";
import NavigationBar from "@/components/navigationBar";

export const metadata = {
  title: "DeskFit",
  description: "DeskFit Web Application",
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


