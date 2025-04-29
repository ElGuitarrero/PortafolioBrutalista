
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
            "Played a key role in the Oracle Health & Cerner integration, leading critical backend API migrations and ensuring system stability at enterprise scale.",
            "Designed and deployed microservices in TypeScript, Django, and PostgreSQL, improving scalability by 30% and reducing operational complexity.",
            "Modernized internal dashboards using React and Next.js, enabling real-time system insights and dynamic admin interfaces.",
            "Optimized database performance in PostgreSQL and Redis, reducing API response times by 40% and supporting millions of transactions daily.",
            "Upgraded the Oracle Careers Website to support global scalability, integrating smarter job-matching features using lightweight AI modules.",
            "Automated CI/CD workflows with Docker, Kubernetes, and GitHub Actions, cutting deployment times by 50% and enhancing developer productivity.",
            "Collaborated across product, engineering, and infrastructure teams, contributing to system design reviews, code quality initiatives, and architecture evolution projects.",
            "Leveraged AI tools selectively to accelerate development workflows, improve test coverage, and support scalable cloud deployments.",
        ],
    },
    {
        position: "Backend Developer",
        company: "Tata",
        bulletpoints: [
            "Supported backend operations for the IHG Hotels line, ensuring database integrity and system reliability across production environments.",
            "Assisted in the development and maintenance of RESTful APIs using Ruby on Rails and Django, serving 500K+ active monthly users.",
            "Contributed to cloud migration efforts to AWS using Terraform, helping optimize infrastructure costs and improve deployment workflows.",
            "Applied basic TDD practices with RSpec and PyTest, improving backend stability and reducing support incidents.",
        ],
    },
    {
        position: "Project Manager",
        company: "Tracsa",
        bulletpoints: [
            "Led the development of a cylinder testing machine for heavy machinery, managing design, implementation, and cross-functional teams.",
            "Oversaw project timelines, budget, and resources, delivering on time and within scope.",
            "Applied mechatronic principles to integrate mechanical, electrical, and control systems for optimal performance.",
        ],
    },
    {
        position: "Skills",
        company: "-",
        bulletpoints: [
            "Languages: C#, Ruby, Python, JavaScript, TypeScript, SQL, Bash",
            "Frameworks & Libraries: .NET Framework, ASP.NET, Web API, Ruby on Rails, Django, React, Angular, Next.js, FastAPI, Entity Framework",
            "Databases: SQL Server, MySQL",
            "Cloud & DevOps: AWS, Docker, Kubernetes, Terraform, CI/CD (GitHub Actions, Jenkins, GitLab CI/CD)",
            "Testing: JUnit, PyTest, RSpec, Jest",
            "Web Technologies: HTML, CSS, JS",
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

    const companias: string[] = ["Oracle", "Tata", "Tracsa", '-'];

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
                                transition-all duration-300 hover:scale-103 cursor-pointer
                                ${selectedCompany === elem ? 'bg-gray-300 scale-115 hover:scale-115' : 'bg-[rgb(240,240,240)]'}
                            `}
                                id={elem}
                            >
                                <div className="h-full w-full flex justify-center items-center">
                                    <p className="font-[carbon] text-2xl md:text-3xl lg:text-4xl">{elem == '-' ? 'Skills' : elem}</p>
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