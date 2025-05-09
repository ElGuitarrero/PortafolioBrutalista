// components/FadeInSection.tsx
import { motion } from "framer-motion";

export default function ScrollFromSide({
	children,
    style
}: {
	children: React.ReactNode;
    style?: React.CSSProperties;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, x: "100%" }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, amount: 1 }}
			transition={{ duration: 1.6, ease: "easeOut" }}
            style={style}
		>
			{children}
		</motion.div>
	);
}
