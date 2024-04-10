import { Box, ThemeProvider } from "@mui/material"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import theme from "@/app/theme"
import { Navbar } from "@/components/Navbar/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Code Commerce",
  description: "FullCycle Shop",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Box>
              <Navbar />

              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.default",
                  mt: ["122px", "135px", "146px"],
                  p: 3,
                }}
              >
                {children}
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
