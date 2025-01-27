import Footer from '@/components/footer'
import Header from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = 'Music Therapy Jobs'
const description =
  'Search for music therapy jobs and find the right one for you.'

export const metadata: Metadata = {
  metadataBase: new URL('https://musictherapyjobs.com'),
  title: 'Music Therapy Jobs',
  description: 'Search for music therapy jobs and find the right one for you.',
  openGraph: {
    title: 'Music Therapy Jobs',
    description: 'Search for music therapy jobs and find the right one for you.'
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@coholcai'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const enableSaveChatHistory =
    process.env.NEXT_PUBLIC_ENABLE_SAVE_CHAT_HISTORY === 'true'
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TWLZW6G49G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TWLZW6G49G');
          `}
        </Script>
      </head>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          {enableSaveChatHistory && <Sidebar />}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
