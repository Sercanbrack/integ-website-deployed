import NavBarMenu from '@/components/NavBarMenu'

export default function About() {
    return (
        <main className="min-h-screen flex-col items-center justify-between">
            <NavBarMenu className="fixed left-0 top-0 flex w-screen"></NavBarMenu>
            <h1 className='pl-2'>ABOUT US</h1>
        </main>
    )
}