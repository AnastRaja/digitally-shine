import { useRef } from "react";
import {
    Users,
    Layers,
    Code,
    ShieldCheck,
    Rocket
} from "lucide-react";
import { Link } from 'react-router-dom'


const cards = [
    {
        id: 1,
        title: "Discovery & Strategy",
        description: "Understanding your vision, goals, and market",
        icon: <Users className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 2,
        title: "Architecture & Design",
        description: "Defining blockchain frameworks and UX",
        icon: <Layers className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 3,
        title: "Development & Integration",
        description: "Building secure, scalable Web3 systems",
        icon: <Code className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 4,
        title: "Testing & Audits",
        description: "Ensuring performance and security",
        icon: <ShieldCheck className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 5,
        title: "Launch & Growth Support",
        description: "Deployment, optimization, and scaling",
        icon: <Rocket className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
];
const VerticalStickyProcess = () => {
    return (
        <section className="relative py-16 md:pt-8 md:pb-24 pt-10">
            <div className="container px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* LEFT – Sticky Title */}
                    <div className="lg:col-span-6">
                        <div className="sticky top-28 content-about">
                            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Our Web3 <br />Development  Process
                            </h2>
                            <p className="mt-2 text-white/70 text-lg">
                                A structured Web3 development process that unites architecture, security, and scalability to deliver reliable, future-ready decentralized products.
                            </p>
                            <Link to="/contact">
                                <button className="">Book your Consultation</button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT – Scrolling Cards */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="group relative  w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-between items-start"
                            >
                                <div className="mb-4">{card.icon}</div>
                                <div>
                                    <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-[#a100ff]">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/70">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VerticalStickyProcess;
