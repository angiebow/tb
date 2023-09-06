import Link from "next/link";
import localFont from "next/font/local";

const lun = localFont({ src: '/lunema-regular.ttf' });
const me = localFont({ src: '/monumentextendedbold.otf' });

const links = [
    {
        id: 5,
        title: "Home",
        url: "/",
    },
    {
        id: 1,
        title: "Toolbeng Ride",
        url: "/Ride",
    },
    {
        id: 2,
        title: "Toolbeng Car",
        url: "/Car",
    },
    {
        id: 3,
        title: "Toolbeng Service",
        url: "/Service",
    },
    {
        id: 4,
        title: "Toolbeng Shop",
        url: "/Shop",
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#0A3771] text-white py-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <a href="/" className={me.className + " text-kSize mr-10"}>
                            ToolBeng
                        </a>
                    </div>
                    <div className="text-center md:text-left mx-0 md:mx-10">
                        <h2 className="text-sm mb-4 md:mb-0 space-x-6">
                            {links.map(link => (
                                <Link
                                    className={lun.className + " hover:text-gray-300"}
                                    key={link.id}
                                    href={link.url}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </h2>
                    </div>
                    <div className="ml-0 md:ml-10 flex justify-center items-center mt-4 md:mt-0">
                        <img src="facebook.png" alt="facebook" className="h-5 w-5 md:h-6 md:w-6 mx-2" />
                        <img src="instagram.png" alt="instagram" className="h-5 w-5 md:h-6 md:w-6 mx-2" />
                        <img src="twitter.png" alt="twitter" className="h-5 w-5 md:h-6 md:w-6 mx-2" />
                        <img src="linkedin.png" alt="linkedin" className="h-5 w-5 md:h-6 md:w-6 mx-2" />
                    </div>
                </div>

                <hr className="my-8 border-t border-white" />

                <div className={`flex flex-col md:flex-row justify-between items-center ${lun.className}`}>
                    <div className={`m-4`}>2023 Toolbeng. All rights reserved.</div>
                    <div className={`m-4`}>Privacy Policy</div>
                    <div className={`m-4`}>Terms of Service</div>
                    <div className={`m-4`}>Cookie Settings</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;