
import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import Header from "@/src/app/layout/header";
import Footer from "@/src/app/layout/footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});


export const metadata = {
  title: "Professional Video Animation Company",
  description: "Transform your ideas into stunning animations with our video animation company. We deliver high-quality, engaging content tailored to your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
