import { useEffect, useState, useRef } from "react";
import estilos from "@/app/components/Experience.module.css";
import '@/app/components/debug.css'


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
            "Developed and maintained web applications",
            "Collaborated with cross-functional teams",
            "Implemented new features and fixed bugs",
        ],
    },
    {
        position: "Backend Developer",
        company: "Tata",
        bulletpoints: [
            "Collaborated with cross-functional teams",
            "Implemented new features and fixed bugs",
            "Developed and maintained web applications",
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
        const intervalKey = element.id || `default-${Date.now()}`; // Generar clave única para cada elemento

        // Limpiar intervalo anterior si existe
        if (intervalRefs.current[intervalKey]) {
            clearInterval(intervalRefs.current[intervalKey]!);
        }

        // Establecer el intervalo para animar el texto
        intervalRefs.current[intervalKey] = setInterval(() => {
            element.innerText = targetText
                .split("")
                .map((_, idx) => {
                    if (idx < iteration) {
                        return targetText[idx];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iteration >= targetText.length) {
                clearInterval(intervalRefs.current[intervalKey]!);
                intervalRefs.current[intervalKey] = null;
            }
            iteration += 1;
        }, 20);
    };

    useEffect(() => {
        const datos = document.querySelectorAll(".animate-data");
        datos.forEach((elem) => {
            animateText(elem as HTMLElement, (elem as HTMLElement).textContent || "");
        });
    }, [expData]);

    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="flex flex-row gap-5 m-5">
                <div className="basis-2/8 flex flex-col gap-5 p-5 bordered justify-center items-center">
                    <div
                        onClick={() => handleChangeCompany("Oracle")}
                        className={`${estilos.card} ${selectedCompany === "Oracle" ? estilos.active : ""
                            }`}
                        id="oracle"
                    >
                        Oracle
                    </div>
                    <div
                        onClick={() => handleChangeCompany("Tata")}
                        className={`${estilos.card} ${selectedCompany === "Tata" ? estilos.active : ""
                            }`}
                        id="tata"
                    >
                        Tata
                    </div>
                    <div
                        onClick={() => handleChangeCompany("Tracsa")}
                        className={`${estilos.card} ${selectedCompany === "Tracsa" ? estilos.active : ""
                            }`}
                        id="tracsa"
                    >
                        Tracsa
                    </div>
                </div>
                
                {/* Experiencia y bulletpoints */}
                <div className="basis-6/8 flex flex-col bordered p-5">
                    <h3 className="animate-data text-5xl mb-2" id="position">
                        {expData?.position}
                    </h3>
                    <p className="animate-data text-2xl font-thin mb-5" id="company">
                        {expData?.company}
                    </p>
                    <ul className="ml-4">
                        {expData?.bulletpoints.map((point, index) => (
                            <li className="animate-data text-xl list-disc font-thin" key={index} id={`bullet-${index}`}>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;