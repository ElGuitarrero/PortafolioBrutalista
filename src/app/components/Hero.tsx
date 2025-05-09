import "@/app/components/debug.css";
import FadeInSection from "./FadeInSection";
import RotatingImage from "./RotatingImage";

const Hero = () => {
	const estiloBoton = `border-2 cursor-pointer p-4 md:p-5 font-black text-lg transition-all duration-300 hover:scale-110 hover:bg-gray-200`;

	return (
		<section
			id="home"
			className="h-screen flex flex-col lg:flex-row justify-center items-center gap-8 px-5 py-10 font-[FiraCode]"
		>
			{/* Texto y botones */}
			<div className="w-full lg:w-3/5 flex flex-col gap-6 text-center lg:text-left">
				<FadeInSection>
					<h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter font-bold">
						Building Scalable & Efficient Web Solutions
					</h1>
				</FadeInSection>
				<FadeInSection>
					<p className="text-lg md:text-xl lg:text-2xl font-thin tracking-tighter">
						Full-stack developer crafting high-performance
						applications with Next.js, .NET, and Ruby on Rails.
					</p>
				</FadeInSection>
				<FadeInSection>
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
				</FadeInSection>
			</div>

			{/* Imagen */}
			<RotatingImage /> 
		</section>
	);
};

export default Hero;
