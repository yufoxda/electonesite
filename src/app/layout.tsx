import { Inter } from 'next/font/google'
import "./styles/globals.css"
import HamburgerMenu from '../components/HamburgerMenu'
import NoteBackground from '../components/NoteBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '音風 - エレクトーンサークル',
  description: '音楽と交流を楽しむ、温かみのあるサークル',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <NoteBackground />
        <HamburgerMenu />
        {children}
      </body>
    </html>
  )
}
