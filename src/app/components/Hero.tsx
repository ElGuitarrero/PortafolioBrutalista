import "@/app/components/debug.css";
import Image from "next/image";

const Hero = () => {

    const estiloBoton = `border-2 cursor-pointer p-4 md:p-5 font-black text-lg transition-all duration-300 hover:scale-110 hover:bg-gray-200`

    return (
        <section
            id="home"
            className="h-screen flex flex-col lg:flex-row justify-center items-center gap-8 px-5 py-10 font-[FiraCode]"
        >
            {/* Texto y botones */}
            <div className="w-full lg:w-3/5 flex flex-col gap-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter font-bold">
                    Building Scalable & Efficient Web Solutions
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-thin tracking-tighter">
                    Full-stack developer crafting high-performance applications with Next.js, .NET, and Ruby on Rails.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#experience">
                        <button className={`${estiloBoton}`}>
                            Explore My Experience
                        </button>
                    </a>
                    <a href="#projects">
                        <button className={`${estiloBoton}`}>
                            Explore My Projects
                        </button>
                    </a>
                </div>
            </div>

            {/* Imagen */}
            <div className="w-full lg:w-2/5 flex p-5 justify-center">
                <Image
                    width={500}
                    height={500}
                    src="/foto.png"
                    alt="Profile Picture"
                    className="rounded-lg grayscale-30 drop-shadow-xl w-40 md:w-60 lg:w-80 outline-2 outline-offset-10 lg:outline-offset-40"
                />
            </div>
        </section>
    );
}

export default Hero;