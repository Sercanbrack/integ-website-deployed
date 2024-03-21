import ContactForm from "../components/ContactForm"
import NavBar from "@/components/NavBar"

export default function Contact() {
    return (
        <main className="min-h-screen flex-col items-center justify-between">
            <NavBar className="fixed left-0 top-0 flex w-screen"></NavBar>
            <ContactForm/>
        </main>
    )
}