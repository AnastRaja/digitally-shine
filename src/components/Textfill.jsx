import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TEXT =
    "Adroits Digital redefines how modern businesses grow by combining intelligent systems, creative thinking, and emerging technologies to build scalable, high-performance digital experiences. Because growth without structure never lasts.";

const TextFillWordByWord = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const words = TEXT.split(" ");

    return (
        <section ref={containerRef} className="h-[200vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <div>
                    <div className="content-about">
                        {/* Tag */}
                        <span className="">
                            Why Us
                        </span>
                    </div>


                    {/* Text */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white flex flex-wrap">
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + 1 / words.length;

                            const opacity = useTransform(
                                scrollYProgress,
                                [start, end],
                                [0.15, 1]
                            );

                            return (
                                <motion.span
                                    key={i}
                                    style={{ opacity }}
                                    className="mr-2"
                                >
                                    {word}
                                </motion.span>
                            );
                        })}
                    </h2>

                    {/* Subtext */}
                    <p className="mt-12 text-gray-400 leading-relaxed text-sm md:text-base ">
                        We don’t chase trends — we build solutions that perform, adapt, and endure.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TextFillWordByWord;