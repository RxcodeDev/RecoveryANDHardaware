import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

import { Link } from "react-scroll";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-4 lg:mt-20">
            <h1 className="text-4xl sm:text-2xl lg:text-6xl text-center tracking-wide">
                Soluciones en IT para
                <span className="bg-gradient-to-r from-[var(--color-title)] to-[var(--color-title-gradient)] text-transparent bg-clip-text">
                {" "}
                    Impulsar  tu Éxito
                </span>
            </h1>
            <p className="mt-10 text-lg lg:text-xl text-center text-neutral-500 max-w-4xl">
            Soporte técnico especializado y soluciones innovadoras garantizan el funcionamiento continuo de tus sistemas en un mundo digital ágil.
            </p>
            <div className="flex justify-center my-10 ">
            <Link
                to="features"
                smooth={true}
                duration={500}
                offset={-85} // Ajusta según sea necesario
                className="py-3 px-4 mx-3 rounded-md border md:text-lg text-[.8em] hover:scale-105 transform transition-transform duration-300 cursor-pointer"
            >
                Ver servicios
            </Link>
                <a
                    href="https://wa.me/3327910261"
                    className="bg-gradient-to-r from-[var(--color-button)] to-[var(--color-button-gradient)] py-3 px-4 rounded-md md:text-lg text-[.8em] hover:scale-105 transform transition-transform duration-300"
                >
                    Solicitar asesoría
                </a>

            </div>
                <div className="flex flex-col lg:flex-row mt-7 lg:mt-28  justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-full lg:w-1/2 border border-[var(--border-color-details)] shadow-[var(--shadow-color-details)] mx-0 md:mx-2 my-4 "
                >
                    <source src={video1} type="video/mp4" />
                    Tu navegador no soporta video
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-full lg:w-1/2 border border-[var(--border-color-details)] shadow-[var(--shadow-color-details)] mx-0 md:mx-2 my-4"
                >
                    <source src={video2} type="video/mp4" />
                    Tu navegador no soporta video
                </video>
            </div>
        </div>
    );
};

export default HeroSection;
