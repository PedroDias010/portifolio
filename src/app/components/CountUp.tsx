import { useRef, useEffect } from 'react';
import { useInView, useMotionValue, useTransform, animate, motion } from 'framer-motion';

export default function CountUp({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null); // Tipando o ref como HTMLSpanElement
  const isInView = useInView(ref);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2 });
    }
  }, [count, value, isInView]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}