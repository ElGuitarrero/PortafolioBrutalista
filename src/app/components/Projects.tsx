import '@/app/components/debug.css'

interface ProyectoProp {
    nombre: string,
    detalles: string,
    imagen: string,
}

const proyectos:ProyectoProp[] = [
    {
        nombre: "Oracle Careers",
        detalles: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium vero nesciunt quibusdam necessitatibus maxime, sequi dolore ad fuga eum totam reiciendis laborum recusandae voluptatum, consectetur eligendi voluptatem odio eveniet",
        imagen: "/proyectos/careers.png"
    },
    {
        nombre: "Oracle Careers",
        detalles: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium vero nesciunt quibusdam necessitatibus maxime, sequi dolore ad fuga eum totam reiciendis laborum recusandae voluptatum, consectetur eligendi voluptatem odio eveniet",
        imagen: "/proyectos/careers.png"
    },
    {
        nombre: "Oracle Careers",
        detalles: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium vero nesciunt quibusdam necessitatibus maxime, sequi dolore ad fuga eum totam reiciendis laborum recusandae voluptatum, consectetur eligendi voluptatem odio eveniet",
        imagen: "/proyectos/careers.png"
    },
]

const Proyecto = (informacion:ProyectoProp) => {


    return (
        <div className="flex flex-col lg:flex-row lg:gap-10 lg:mx-5 lg:border-y-3">
            {/* Imagen */}
            <div className="basis-4/8 flex justify-center items-center lg:p-5">
                <img src={informacion.imagen} className='aspect-20/12 max-w-1/1 lg:rounded-md drop-shadow-2xl' alt="" />
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
    const info:ProyectoProp = {
        nombre: "Oracle Careers",
        detalles: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium vero nesciunt quibusdam necessitatibus maxime, sequi dolore ad fuga eum totam reiciendis laborum recusandae voluptatum, consectetur eligendi voluptatem odio eveniet",
        imagen: "https://www.oracle.com/a/ocom/img/logo-950x500.png"
    }

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