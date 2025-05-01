// src/components/ImageSlider.jsx
import "./ImageSlider.css"; // tu CSS aislado
import { useState, useRef, useEffect } from "react";

export default function ImageSlider({ slides }) {
  const [active, setActive] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);

  const Slide = (dir) => {
    const idx = dir === "next"
      ? (active + 1) % slides.length
      : (active - 1 + slides.length) % slides.length;
    setActive(idx);
  };

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.innerText = slides[active].name;
    }
    if (descRef.current && slides[active].description) {
      descRef.current.innerText = slides[active].description;
    }
  }, [active]);

  return (
    <div className="slider-container w-full max-w-[600px] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[800px] relative mx-auto overflow-hidden rounded-lg shadow-lg">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.img}
          alt={s.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ease-out ${
            i === active ? "slide-active" : "slide-hidden"
          }`}
        />
      ))}
      <button
        className="nav-button absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-all text-[#1ABC9C]"
        ref={prevRef}
        onClick={() => Slide("prev")}
        aria-label="Previous slide"
      >
        <ion-icon name="chevron-back-outline" size="large" />
      </button>
      <button
        className="nav-button absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-all text-[#1ABC9C]"
        ref={nextRef}
        onClick={() => Slide("next")}
        aria-label="Next slide"
      >
        <ion-icon name="chevron-forward-outline" size="large" />
      </button>
      <div className="slide-info absolute bottom-0 w-full bg-black/40 backdrop-blur-sm p-3 md:p-4 text-center">
        <h1 ref={nameRef} className="text-base sm:text-lg md:text-2xl font-semibold text-[#1ABC9C]" />
        <p ref={descRef} className="text-xs sm:text-sm md:text-base text-[#1ABC9C]/90 max-w-[90%] mx-auto" />
      </div>
    </div>
  );
}