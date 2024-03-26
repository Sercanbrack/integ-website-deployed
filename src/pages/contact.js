import ContactForm from "../components/ContactForm"
import NavBarMenu from '@/components/NavBarMenu'

export default function Contact() {
    return (
        <main className="min-h-screen flex-col items-center justify-between">
            <NavBarMenu className="fixed left-0 top-0 flex w-screen"></NavBarMenu>
            <title>Contact - Integ Detailing</title>
            {/* <ContactForm/> */}
            <div className="contact-info min-h-screen flex flex-col items-center text-center">
                <h1 className="contact-intro text-xl mb-8 pl-6 pr-6">Interested in working with us? Have questions about a current job? Get in touch with us today!</h1>
                <ul>
                    <li>Integ Detailing, LLC</li>
                    <li>235 N 840 E, Hyde Park, UT - 84318</li>
                    <li>+1 (435) 563-0764</li>
                    <li>integdetailing@comcast.net</li>
                </ul>
            </div>
        </main>
    )
}