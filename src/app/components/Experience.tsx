import { useEffect, useState, useRef } from "react";

interface ExperienceProp {
    position: string;
    company: string;
    bulletpoints: string[];
}

const DATA: ExperienceProp[] = [
    {
        position: "Software Engineer",
        company: "Oracle",
        bulletpoints: [
            "Led the frontend and backend development and optimization of the Oracle Careers Website",
            "Designed and implemented microservices in Rails and Django, improving system scalability by 30%",
            "Provided mentorship to junior engineers and contributed to code reviews and key architectural decisions",
            "Refactored PostreSQL and Redis queries, reducing API response times by 40%",
            "Implemented CI/CD pipelines using Docker, Kubernetes, and GitHub actions, cutting deployment time by 50%.",
            "Collaborated with product and architecture teams to enhance platform resilience against 200% traffic spikes."
        ],
    },
    {
        position: "Backend Developer",
        company: "Tata",
        bulletpoints: [
            "Developed scalable RESTful APIs in Ruby on Rails and Django for 500+ active monthly users.",
            "Integrated GraphQL and WebSockets to improve real-time user experience.",
            "Migrated on-premises infrastructure AWS with Terraform, reducing operational costs by 20%",
            "Applied TDD with Spec and PyTest, improving code stability and reducing production incidents.",
        ],
    },
    {
        position: "Project Manager",
        company: "Tracsa",
        bulletpoints: [
            "Implemented new features and fixed bugs",
            "Developed and maintained web applications",
            "Collaborated with cross-functional teams",
        ],
    },
];

const Experience = () => {
    const [expData, setExpData] = useState<ExperienceProp>(DATA[0]);
    const [selectedCompany, setSelectedCompany] = useState("Oracle");
    const intervalRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

    useEffect(() => {
        setExpData(DATA[0]);
    }, []);

    const handleChangeCompany = (company: string) => {
        const companyData = DATA.find((item) => item.company === company);
        setSelectedCompany(company);
        setExpData(companyData || DATA[0]);
    };

    const animateText = (element: HTMLElement, targetText: string) => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let iteration = 0;
        const intervalKey = element.id || `default-${Date.now()}`;

        // Limpiar intervalo previo
        if (intervalRefs.current[intervalKey]) {
            clearInterval(intervalRefs.current[intervalKey]!);
        }

        intervalRefs.current[intervalKey] = setInterval(() => {
            element.innerText = targetText
                .split("")
                .map((char, idx) => {
                    if (idx < iteration) {
                        return char; // Si ya alcanzó el índice, muestra el carácter original
                    }

                    // Si el carácter es un espacio, no lo cambiamos
                    return char === ' ' ? ' ' : letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iteration >= targetText.length) {
                clearInterval(intervalRefs.current[intervalKey]!);
                intervalRefs.current[intervalKey] = null;
            }

            iteration += 1;
        }, 7);
    };

    useEffect(() => {
        const datos = document.querySelectorAll(".animate-data");
        datos.forEach((elem) => {
            animateText(elem as HTMLElement, (elem as HTMLElement).textContent || "");
        });
    }, [expData]);

    const companias: string[] = ["Oracle", "Tata", "Tracsa"];

    return (
        <div id="experience">
            <div className='flex justify-center'>
                <h2 className='font-[carbon] text-3xl'>Experience</h2>
            </div>
            <section id="experience" className="min-h-screen lg:bg-[url('/fondos/exp-fondo2.png')] bg-fixed bg-cover bg-no-repeat px-5 py-10">
                <div className="flex flex-col lg:flex-row gap-5 justify-center items-center w-full min-h-screen">
                    {/* Botones de selección de empresa */}
                    <div className="w-full lg:w-1/4 flex flex-col gap-5 p-5 justify-center items-center">
                        {companias.map((elem, index) => (
                            <button
                                key={index}
                                onClick={() => handleChangeCompany(elem)}
                                className={`
                                w-full lg:w-11/12 h-20 md:h-24 text-black border-2 border-black
                                transition duration-300 ease-in-out
                                ${selectedCompany === elem ? 'bg-gray-300' : 'bg-[rgb(240,240,240)]'}
                            `}
                                id={elem}
                            >
                                <div className="h-full w-full flex justify-center items-center">
                                    <p className="font-[carbon] text-2xl md:text-3xl lg:text-4xl">{elem}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Información de experiencia */}
                    <div className="w-full lg:w-3/4 flex flex-col p-5 justify-start items-start flex-grow">
                        <h3 className="animate-data text-2xl md:text-3xl lg:text-5xl mb-2 font-[carbon]" id="position">
                            {expData?.position}
                        </h3>
                        <p className="animate-data text-lg md:text-xl lg:text-2xl font-light mb-5 font-[FiraCode]" id="company">
                            {expData?.company === 'Tata' ? "Tata Consultancy Services" : expData.company}
                        </p>
                        <ul className="ml-4 list-disc">
                            {expData?.bulletpoints.map((point, index) => (
                                <li className="animate-data text-sm md:text-lg lg:text-xl tracking-tight font-light mb-1 font-[FiraCode]" key={index} id={`bullet-${index}`}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Experience;