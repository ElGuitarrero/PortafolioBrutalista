import { Parallax } from "react-scroll-parallax";
import FadeInSection from "./FadeInSection";

interface ParaProps {
    imagen: string,
    startX: number,
    endX: number,
    startY: number,
    endY: number
}

const Hello = () => {

    const data:ParaProps[] = [
        {
            imagen: 'pensante',
            startX: -120,
            endX: -150,
            startY: 35,
            endY: 150
        }, 
        {
            imagen: 'AI',
            startX: 110,
            endX: 200,
            startY: 35,
            endY: 150
        },
        {
            imagen: 'arriba-AI',
            startX: 110,
            endX: 200,
            startY: 35,
            endY: 35
        },
        {
            imagen: 'ticket',
            startX: -110,
            endX: -200,
            startY: -35,
            endY: 160
        },
        {
            imagen: 'personas',
            startX: 110,
            endX: -200,
            startY: -35,
            endY: 150
        },
        {
            imagen: 'cabeza',
            startX: -70,
            endX: -150,
            startY: 80,
            endY: -200
        },
        {
            imagen: 'letter2',
            startX: 0,
            endX: 0,
            startY: -50,
            endY: 200
        },
        
    ]
    


    return (
        <div
            className="h-screen font-[carbon] text-[6rem] sm:text-[10rem] lg:text-[14rem] 
            bg-[url('/textura2.webp')] bg-no-repeat bg-cover bg-center lg:bg-fixed font-black 
            flex flex-col lg:flex-row gap-5 sm:gap-10 px-5 justify-center relative overflow-hidden"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Hello */}
            <div
                className="w-full lg:w-1/2 flex justify-center items-start p-10 sm:p-20"
                style={{ WebkitTextStroke: "3px rgb(240,240,240)" }}
            >
                <FadeInSection><div>HELLO <br /> THERE</div></FadeInSection>
            </div>

            {/* Imagen con Parallax */}
            {data.map((item: ParaProps, index) => (
                <ObjetoParallax key={index} {...item} />
            ))}
            
        </div>
    );
};

export default Hello;

function ObjetoParallax( {imagen, startX, endX, startY, endY}:ParaProps ) {
    return (
        <div className="absolute w-160 h-auto">
            <Parallax
                translateX={[startX, endX]} // Ahora usa % para mejor control
                translateY={[startY, endY]}
                // shouldAlwaysCompleteAnimation={true} // Evita cambios inesperados
                startScroll={0} // Inicia el efecto de parallax desde el principio
                endScroll={1000} // Ajusta el punto final del efecto
            >
                <img src={`/hello-images/${imagen}.webp`} alt="" className="w-full h-auto" />
            </Parallax>
        </div>
    )
}
