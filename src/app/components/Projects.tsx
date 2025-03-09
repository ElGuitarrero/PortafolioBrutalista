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
        imagen: "https://www.oracle.com/a/ocom/img/logo-950x500.png"
    }
]

const Proyecto = (informacion:ProyectoProp) => {


    return (
        <div className="flex flex-row gap-10 mx-5">
            {/* Imagen */}
            <div className="basis-4/8 bordered flex justify-center items-center p-5">
                <img src={informacion.imagen} className='aspect-20/12 max-w-1/1 rounded-md drop-shadow-2xl' alt="" />
            </div>

            {/* Informacion del proyecto */}
            <div className='basis-4/8 bordered p-5 py-20 flex flex-col gap-5'>
                <p className='text-5xl'>{informacion.nombre}</p>
                <p className='text-xl font-extralight'>{informacion.detalles}</p>
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
        <div>
            <h2>Projectos</h2>

            <div id="proyectos">
                {proyectos.map((info,index) => (
                    <Proyecto key={index} {...info}/>
                ))}
            </div>

        </div>
    )

}


export default Projects;