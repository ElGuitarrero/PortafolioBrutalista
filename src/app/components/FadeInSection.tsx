// components/FadeInSection.tsx
import { motion } from "framer-motion";

export default function FadeInSection({
	children,
    style,
    viewAmount = 1
}: {
	children: React.ReactNode;
    style?: React.CSSProperties;
    viewAmount?: number
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: viewAmount }}
			transition={{ duration: 1.6, ease: "easeOut" }}
            style={style}
		>
			{children}
		</motion.div>
	);
}
