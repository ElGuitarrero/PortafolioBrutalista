import Image from "next/image";


const Contacto = () => {
    
    


    return (
        <div className="my-20 ">
            <div className="font-[carbon] text-4xl flex justify-center">
                Contact
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col items-center mt-5 gap-2">
                    <Image width={64} height={64} src="/company-logos/email.png" alt="" className="w-12 aspect-1/1 grayscale"/>
                    <a href="mailto:alejandrofariaslozoya@gmail.com" className="text-md font-[FiraCode]">alejandrofariaslozoya@gmail.com</a>
                </div>

                <div className="flex flex-col items-center mt-5 gap-2">
                    <Image width={64} height={64} src="/company-logos/Linkedin-Icon.png" alt="" className="w-12 aspect-1/1 grayscale"/>
                    <a href="https://www.linkedin.com/in/cfariaslozoya/" className="text-md font-[FiraCode]">LinkedIn</a>
                </div>
            </div>
           
        </div>
    )
}


export default Contacto;