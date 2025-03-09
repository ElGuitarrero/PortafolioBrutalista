const Hello = () => {
    return (
        <div className="h-screen font-[carbon] text-[6rem] sm:text-[10rem] lg:text-[14rem] 
            bg-[url('/textura2.png')] bg-no-repeat bg-cover bg-center lg:bg-fixed font-black 
            flex flex-col lg:flex-row gap-5 sm:gap-10 px-5 justify-center"
            style={{
                backgroundSize: "cover", // Ajusta sin que se repita
                backgroundPosition: "center", // Mantiene la posición centrada en todas las pantallas
            }}
        >
            {/* Hello */}
            <div className="w-full lg:w-1/2 flex justify-start items-start p-10 sm:p-20">
                <div>HELLO</div>
            </div>

            {/* There */}
            <div className="w-full lg:w-1/2 flex justify-end items-end p-10 sm:p-20">
                <div>THERE</div>
            </div>
        </div>
    );
};

export default Hello;