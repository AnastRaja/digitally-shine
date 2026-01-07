import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ArrowRight, Box, Code2, Cpu, Globe, Layers, Layout, LineChart, Megaphone, Newspaper, Palette, PenTool, Search, Share2, Shield, Smartphone, Target, Users, Zap, Compass } from "lucide-react";

// Dummy data for 10 cards
const cards = [
    {
        id: 1,
        title: "Community Management",
        description: "Cultivating and maintaining an engaged audience across various digital platforms.",
        icon: <Users className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 2,
        title: "Branding",
        description: "Creating a unique identity and image for your business that resonates with the Web3 market.",
        icon: <Palette className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 3,
        title: "Press Release",
        description: "Distributing newsworthy announcements about your business to media outlets and public forums.",
        icon: <Newspaper className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 4,
        title: "Influencer Marketing",
        description: "Partnering with influential figures to amplify your brand's message within the Web3 space.",
        icon: <Megaphone className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 5,
        title: "Website and Web Development",
        description: "Designing and developing a user-friendly website optimized for the Web3 ecosystem.",
        icon: <Code2 className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 6,
        title: "Social Media Management",
        description: "Handling your brand's presence on social media platforms to boost visibility and engagement.",
        icon: <Share2 className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 7,
        title: "Search Engine Optimization",
        description: "Optimizing your online content to rank higher on search engine results pages.",
        icon: <Search className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 8,
        title: "Paid Ads",
        description: "Implementing paid advertising campaigns to target specific audiences and drive traffic.",
        icon: <Target className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 9,
        title: "Meta Ads",
        description: "Utilizing Meta's advertising network to reach potential customers on platforms like Facebook and Instagram.",
        icon: <Globe className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 10,
        title: "Content Creation",
        description: "Producing valuable and relevant content tailored to the interests of the Web3 community.",
        icon: <PenTool className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 11,
        title: "Media Outreach",
        description: "Connecting with journalists and bloggers to gain coverage for your brand in the media.",
        icon: <Megaphone className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
    {
        id: 12,
        title: "Strategic Planning",
        description: "Developing a comprehensive plan that outlines the approach to achieving your Web3 marketing goals.",
        icon: <Compass className="w-16 h-16 mt-4 text-[#ffffffcc]" />
    },
];

const HorizontalScroll = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // The transform range determines when the horizontal scroll happens relative to the vertical scroll
    // Mapping 0% -> 100% of the vertical scroll to 1% -> -95% horizontal translation
    // Adjust -95% based on the number of cards and their width
    const x = useTransform(scrollYProgress, [0, 1.3], ["1%", "-90%"]);

    return (
        <section ref={targetRef} className="relative h-[250vh] ">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {/* Static Header */}
                <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center z-10 max-w-2xl px-6 content-about">
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Our Process
                    </h2>
                    <p className="mt-2 text-white/70 text-lg">
                        Our Web3 Marketing Process includes
                    </p>
                </div>

                {/* Scrolling Cards */}
                <motion.div style={{ x }} className="flex gap-8 px-8 md:px-20 pt-40">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="group relative h-[400px] w-[450px] shrink-0 overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-between items-start"
                        >
                            <div className="mb-6">{card.icon}</div>
                            <div>
                                <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-[#a100ff]">
                                    {card.title}
                                </h3>
                                <p className="text-white/70">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
