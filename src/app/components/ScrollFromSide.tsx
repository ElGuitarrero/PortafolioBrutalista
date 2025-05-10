// components/FadeInSection.tsx
import { motion } from "framer-motion";

export default function ScrollFromSide({
	children,
    style,
    side = true
}: {
	children: React.ReactNode;
    style?: React.CSSProperties;
    side?: boolean
}) {


    if (side) return (
        <motion.div
            className="flex flex-col lg:flex-row lg:gap-10 lg:mx-5 h-full"
			initial={{ opacity: 0, x: -300 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 1, ease: "easeOut" }}
            style={style}
		>
			{children}
		</motion.div>
    )


	return (
		<motion.div
            className="flex flex-col lg:flex-row lg:gap-10 lg:mx-5 h-full"
			initial={{ opacity: 0, x: 300 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 1.6, ease: "easeOut" }}
            style={style}
		>
			{children}
		</motion.div>
	);
}
