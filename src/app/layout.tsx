import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Anton, Playfair_Display_SC, Josefin_Sans } from 'next/font/google'
import './globals.css'

// const font = Bebas_Neue({ weight: '400', subsets: ['latin'] })
// const font = Inter({ subsets: ['latin'] })
// const font = Anton({ weight: '400', subsets: ['latin'] })
// const font = Playfair_Display_SC({ weight: '400', subsets: ['latin'] })
const font = Josefin_Sans({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'City falls asleep',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
