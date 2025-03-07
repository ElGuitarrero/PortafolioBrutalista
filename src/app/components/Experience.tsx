import { useEffect, useState } from "react"
import estilos from '@/app/components/Experience.module.css'

interface ExperienceProp {
    position: string,
    company: string,
    bulletpoints: string[]
}
const DATA: ExperienceProp[] = [
    {
        position: "Software Engineer",
        company: "Oracle",
        bulletpoints: [
            "Developed and maintained web applications",
            "Collaborated with cross-functional teams",
            "Implemented new features and fixed bugs"
        ]
    },
    {
        position: "Backend Developer",
        company: "Tata",
        bulletpoints: [
            "Developed and maintained web applications",
            "Collaborated with cross-functional teams",
            "Implemented new features and fixed bugs"
        ]
    },
    {
        position: "Project Manager",
        company: "Tracsa",
        bulletpoints: [
            "Developed and maintained web applications",
            "Collaborated with cross-functional teams",
            "Implemented new features and fixed bugs"
        ]
    },
]

const Experience = () => {

    const [expData, setExpData] = useState<ExperienceProp>();
    const [selectedCompany, setSelectedCompany] = useState("Oracle")

    useEffect(() => {
        setExpData(DATA[0])
    }, []);

    const handleChangeCompany = (company: string) => {
        const companyData: ExperienceProp | undefined = DATA?.find(item => item.company === company)
        setSelectedCompany(company)

        setExpData(companyData)
    }


    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className={estilos.container}>

                {/* Aqui van estar las imagenes de las empresas que he trabajado */}
                <div className={estilos.experiencieEmpresas}>
                    <div onClick={() => handleChangeCompany("Oracle")} className={`${estilos.card} ${selectedCompany === 'Oracle' ? estilos.active : ""}`} id="oracle">Oracle</div>
                    <div onClick={() => handleChangeCompany("Tata")} className={`${estilos.card} ${selectedCompany === 'Tata' ? estilos.active : ""}`} id="tata">Tata</div>
                    <div onClick={() => handleChangeCompany("Tracsa")} className={`${estilos.card} ${selectedCompany === 'Tracsa' ? estilos.active : ""}`} id="tracsa">Tracsa</div>
                </div>

                {/* Aqui la informacion va a cambiar, usando hooks maybe */}
                <div id="experience-detalles">
                    <h3>{expData?.position}</h3>
                    <p>{expData?.company}</p>
                    <ul>
                        {expData?.bulletpoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>

                </div>

            </div>
        </section>
    )
}


export default Experience;