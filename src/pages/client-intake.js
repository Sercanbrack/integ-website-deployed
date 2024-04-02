import NavBarMenu from '@/components/NavBarMenu'

export default function About() {
    return (
        <main className="min-h-screen flex-col items-center justify-between">
            <NavBarMenu className="fixed left-0 top-0 flex w-screen"></NavBarMenu>
            <title>Customer Intake Form - Integ Detailing</title>
            <iframe className=" flex flex-col items-center text-center justify-evenly w-full min-h-screen" src="https://docs.google.com/forms/d/e/1FAIpQLSdwnooz_99RI-_iPHj76rvQcW7vmhHUVCWD38VLh_AAcDTLJw/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </main>
    )
}