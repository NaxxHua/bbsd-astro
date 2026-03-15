import { useRef, useEffect } from "react";

function url(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.startsWith("/") ? path.slice(1) : path}`;
}

const images = [
  { src: url("images/about/collab-1.jpg"), alt: "Team collaboration" },
  { src: url("images/services/service-2.jpg"), alt: "Engineering review" },
  { src: url("images/about/collab-2.jpg"), alt: "Office meeting" },
  { src: url("images/services/service-1.jpg"), alt: "Engineering work" },
  { src: url("images/services/service-3.jpg"), alt: "Piping work" },
];

export default function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animId = requestAnimationFrame(scroll);
    };

    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Duplicate images for seamless loop
  const allImages = [...images, ...images];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-hidden"
      style={{ scrollBehavior: "auto" }}
    >
      {allImages.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className="h-[250px] w-[320px] flex-shrink-0 rounded-xl object-cover"
        />
      ))}
    </div>
  );
}
