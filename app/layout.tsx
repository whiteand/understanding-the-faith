import './globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ua">
      <head>
        <title>Зрозуміти віру</title>
        <meta name="description" content="Курс реформатського богослів'я для новачків" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
