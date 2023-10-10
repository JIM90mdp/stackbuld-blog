import './globals.css'
import Navbar from './components/Navbar'
import TanstackProvider from './components/provider/tanStackProvider'
import ProfileImage from './components/ProfileImage'

export const metadata = {
  title: "Stackbuld Take-Home Assessment",
  description: 'Simple blogging platform using Next.js, React, TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <TanstackProvider>
          <Navbar />
          <ProfileImage />
          {children}
        </TanstackProvider>
      </body>
    </html>
  )
}
