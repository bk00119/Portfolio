import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@components/navbar"
// import Footer from "./components/footer"

const montserrat = Montserrat({ subsets: ["latin"] })

// export const metadata = {
//   title: "Brian Kim's Portfolio",
//   description: "Welcome to my portfolio",
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} + min-h-screen flex flex-col justify-between`}
      >
        <div className="w-full flex flex-col justify-center items-center mb-4">
          <header className="w-full">
            <Navbar />
          </header>
          <main className="h-full mt-4 w-full max-w-7xl px-4">{children}</main>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
