import ContactForm from "../components/ContactForm"
import NavBarMenu from '@/components/NavBarMenu'
import Image from "next/image"
import mapLogo from 'src/images/location-pin-svgrepo-com.png'
import phoneLogo from 'src/images/phone-call-outline-svgrepo-com.png'
import emailLogo from 'src/images/email-svgrepo-com.png'

export default function Contact() {
    return (
        <main className="min-h-screen flex-col items-center justify-between">
            <NavBarMenu className="fixed left-0 top-0 flex w-screen"></NavBarMenu>
            <title>Contact - Integ Detailing</title>
            {/* <ContactForm/> */}
            <div className="contact-info flex flex-col items-center text-center p-2 mt-12 border-slate-600 border-double border-8 rounded-xl ml-6 mr-6">
                <h1 className="contact-intro mb-8 p-2 text-xl">Interested in working with us? Have questions about a current job? Get in touch with us today!</h1>
                <div className="flex flex-col items-center justify-between flex-wrap text-center">
                    <ul className="xxs:text-xs xs:text-base">
                        <Image src={mapLogo} className="w-6 h-6 float-left xxs:ml-0 xs:ml-8 xs: mr-4" alt="location marker logo" priority="high"></Image>
                        <li className="pl-2 pr-2 flex-shrink-0 xxs:text-center xs:text-left">Integ Detailing, LLC</li>
                        <li className="pl-2 pr-2">235 N 840 E, Hyde Park, UT - 84318</li>
                        <br></br>
                    </ul>
                    <ul className="xxs:text-xs xs:text-base xs:w-96">
                        <Image src={phoneLogo} className="w-6 h-6 float-left xxs:ml-0 xs:ml-24 xs:mr-4" alt="phone marker logo" priority="high"></Image>
                        <li className="pl-2 pr-2 flex-shrink-0 xxs:text-center xs:text-left">+1 (435) 563-0764</li>
                        <Image src={emailLogo} className="w-6 h-6 float-left xxs:ml-0 xs:ml-14 xs:mr-4" alt="email marker logo" priority="high"></Image>
                        <li className="pl-2 pr-2 flex-shrink-0 xxs:text-center xs:text-left">integdetailing@comcast.net</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}