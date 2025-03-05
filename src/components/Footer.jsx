import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="mt-32 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h3 className="text-md font-semibold mb-4">Informacion de contacto</h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index} className="flex items-center break-words">
                                <a
                                    className="text-neutral-300 hover:text-[var(--color-button-hover)] flex items-center" href={link.href}
                                >
                                    {link.icon}
                                    <span className="ml-2">{link.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Redes sociales</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index} className="flex items-center break-words">
                                <a
                                    className="text-neutral-300 hover:text-[var(--color-button-hover)] flex items-center" href={link.href}
                                >
                                    {link.icon}
                                    <span className="ml-2">{link.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Informacion legal</h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index} className="flex items-center break-words">
                                <a
                                    className="text-neutral-300 hover:text-[var(--color-button-hover)] flex items-center" href={link.href}
                                >
                                    {link.icon}
                                    <span className="ml-2">{link.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;