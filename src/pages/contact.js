import ContactForm from "../components/ContactForm"
import NavBarMenu from '@/components/NavBarMenu'

export default function Contact() {
    return (
        <main className="min-h-screen flex-col items-center justify-between">
            <NavBarMenu className="fixed left-0 top-0 flex w-screen"></NavBarMenu>
            <ContactForm/>
        </main>
    )
}