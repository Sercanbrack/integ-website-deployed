import ContactForm from "../components/ContactForm"
import NavBarMenu from '@/components/NavBarMenu'

export default function Contact() {
    return (
        <main className="min-h-screen flex-col items-center justify-between">
            <NavBarMenu className="fixed left-0 top-0 flex w-screen"></NavBarMenu>
            <title>Contact - Integ Detailing</title>
            {/* <ContactForm/> */}
            <div className="contact-info flex flex-col items-center text-center p-2 mt-12 border-slate-600 border-double border-8 rounded-xl ml-6 mr-6">
                <h1 className="contact-intro mb-8 p-2">Interested in working with us? Have questions about a current job? Get in touch with us today!</h1>
                <div className="flex flex-col items-center justify-between flex-wrap text-center">
                    <ul className="xxs:text-xs xs:text-base">
                        <li className="pl-2 pr-2">Integ Detailing, LLC</li>
                        <li className="pl-2 pr-2">235 N 840 E, Hyde Park, UT - 84318</li>
                        <br></br>
                    </ul>
                    <ul className="xxs:text-xs xs:text-base">
                        <li className="pl-2 pr-2">+1 (435) 563-0764</li>
                        <li className="pl-2 pr-2">integdetailing@comcast.net</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}