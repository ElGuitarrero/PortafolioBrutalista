import '@/app/components/debug.css'
const Hero = () => (
    <section id="home" className="flex flex-row gap-5 ml-5 mr-5 m-10">
        <div className="basis-5/8 bordered p-4 flex gap-10 flex-col justify-start items-start">
            <h1 className="text-7xl">Building Scalable & Efficient Web Solutions</h1>
            <p className="text-2xl font-thin">Full-stack developer crafting high-performance applications with Next.js, .NET, and Ruby on Rails.</p>
            <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"><a href="#projects">Explore My Projects</a></button>
        </div>
        <div className="basis-3/8 bordered"> 
            Imagen
        </div>
    </section>
)

export default Hero;