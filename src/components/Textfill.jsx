import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TEXT = "Adroits Digital redefines how modern businesses grow by combining intelligent systems, creative thinking, and emerging technologies to build scalable, high-performance digital experiences. Because growth without structure never lasts.";

// Separate component for each word to properly use hooks
const AnimatedWord = ({ word, index, totalWords, scrollYProgress }) => {
    const start = index / totalWords;
    const end = start + 1 / totalWords;

    const opacity = useTransform(
        scrollYProgress,
        [start, end],
        [0.15, 1]
    );

    return (
        <motion.span style={{ opacity }} className="mr-2">
            {word}
        </motion.span>
    );
};

const TextFillWordByWord = () => {
    const { scrollYProgress } = useScroll();
    const words = TEXT.split(" ");

    return (
        <section className="relative h-[400vh] bg-black">
            {/* Sticky container - will stay fixed for the entire section scroll */}
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">

                    <div className="content-about">
                        <span className="">
                            Why Us
                        </span>
                    </div>
                    <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white flex flex-wrap">
                        {words.map((word, i) => (
                            <AnimatedWord
                                key={i}
                                word={word}
                                index={i}
                                totalWords={words.length}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </h2>

                    <p className="mt-12 text-gray-400 text-sm md:text-base">
                        We don't chase trends — we build solutions that perform, adapt, and endure.
                    </p>
                </div>
            </div>

            {/* This creates the scroll space for the animation */}
            <div className="h-[300vh]"></div>
        </section>
    );
};

export default TextFillWordByWord;