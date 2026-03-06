import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/images/services/service-1.jpg", alt: "Engineering work" },
  { src: "/images/services/service-2.jpg", alt: "Site operations" },
  { src: "/images/about/collab-1.jpg", alt: "Team collaboration" },
  { src: "/images/services/service-3.jpg", alt: "Piping work" },
  { src: "/images/about/collab-2.jpg", alt: "Office meeting" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
