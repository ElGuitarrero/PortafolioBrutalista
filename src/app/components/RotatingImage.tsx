"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ScrollFlipImage() {
	const ref = useRef(null);

	// Vincula el scroll a esta sección
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 1", "start 0.3"], // cuando entra y cuando sale
	});

	// Mapea el progreso del scroll a rotación Y (180° → 0°)
	const rotateY = useTransform(scrollYProgress, [0, 1], [180, 0]);
	const springRotate = useSpring(rotateY, { stiffness: 80, damping: 20 });

	return (
		<div ref={ref} className="w-full lg:w-2/5 flex p-5 justify-center perspective">
			<motion.div
				style={{
					rotateY: springRotate,
					transformStyle: "preserve-3d",
					backfaceVisibility: "hidden",
				}}
			>
				<Image
					width={500}
					height={500}
					src="/foto.png"
					alt="Profile Picture"
					className="rounded-lg grayscale-30 drop-shadow-xl w-40 md:w-60 lg:w-80 outline-2 outline-offset-10 lg:outline-offset-40"
				/>
			</motion.div>
		</div>
	);
}