import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import NavBarMenu from '@/components/NavBarMenu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <title>Integ Detailing</title>
      {/* <NavBar className="fixed left-0 top-0 flex w-screen"></NavBar> */}
      <NavBarMenu className="fixed left-0 top-0 flex w-screen"></NavBarMenu>
    </main>
  )
}
