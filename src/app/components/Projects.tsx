import Image from 'next/image'

interface ProyectoProp {
    nombre: string,
    detalles: string,
    imagen: string,
}

const proyectos:ProyectoProp[] = [
    {
        nombre: "Oracle Careers",
        detalles: "Designed and developed both the frontend and backend of the Oracle Careers Website, ensuring a seamless user experience and optimal performance. Focused on enhancing responsiveness, improving load times, and implementing best practices for scalability and maintainability. Played a key role in optimizing database interactions and refining the UI/UX to align with Oracle’s branding and user accessibility standards.",
        imagen: "/proyectos/careers.png"
    },
    {
        nombre: "AI Resume Builder",
        detalles: "Developed an AI-powered Resume Optimizer that personalizes bullet points based on job postings, enhancing relevance and impact. Built using DeepSeek Coder 6.7B, the tool analyzes job descriptions and refines resumes to improve job application success rates. Designed with a user-friendly interface and efficient local processing for fast and accurate results.",
        imagen: "/proyectos/resume.png"
    },
    {
        nombre: "Daniel Etienne Website",
        detalles: "Developed a modern and visually engaging website for renowned DJ Daniel Etienne, showcasing his music, events, and personal brand. Focused on creating a seamless user experience with responsive design, interactive elements, and optimized performance to captivate his audience.",
        imagen: "/proyectos/dj.png"
    },
    {
        nombre: "Hydraulics Machine",
        detalles: "Designed and built a hydraulic testing machine for Tracsa-Caterpillar to evaluate the performance and durability of hydraulic cylinders. Engineered a robust system capable of simulating real-world operating conditions, ensuring precise pressure and flow measurements. Developed a user-friendly control interface and implemented safety mechanisms to enhance reliability. The project significantly improved maintenance efficiency by providing accurate diagnostics and reducing downtime in heavy machinery operations.",
        imagen: "/proyectos/presion.png"
    },
]

const Proyecto = (informacion:ProyectoProp) => {


    return (
        <div className="flex flex-col lg:flex-row lg:gap-10 lg:mx-5 lg:border-y-3">
            {/* Imagen */}
            <div className="basis-4/8 flex justify-center items-center lg:p-5">
                <Image width={400} height={600} src={informacion.imagen} className='aspect-20/12 object-cover w-1/1 i lg:rounded-md drop-shadow-2xl' alt="" />
            </div>

            {/* Informacion del proyecto */}
            <div className='basis-4/8  p-5 lg:py-20 flex flex-col gap-5'>
                <p className='text-5xl font-[carbon]'>{informacion.nombre}</p>
                <p className='text-xl font-extralight font-[FiraCode] tracking-tight'>{informacion.detalles}</p>
            </div>
        </div>
    )
}


const Projects = () => {
    /* Que proyectos quiero meter, mmm... el resume, el "brazo robotico" y oracle careers */

    return (
        <div className=' pt-5' id='projects'>
            <div className='flex justify-center'>
                <h2 className='font-[carbon] text-3xl'>Projects</h2>
            </div>

            <div id="proyectos" className='flex flex-col gap-10 my-15'>
                {proyectos.map((info,index) => (
                    <Proyecto key={index} {...info}/>
                ))}
            </div>

        </div>
    )

}


export default Projects;