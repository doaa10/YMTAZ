import "./globals.css";
import NavBar from "@/components/Large/NavBar/NavBar";



export const metadata = {
  title: "YMTAZ",
  description: "YMTAZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
        </body>
    </html>
  );
}
