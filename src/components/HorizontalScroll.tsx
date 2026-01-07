import { useRef } from "react";
import {
    Users,
    Palette,
    Newspaper,
    Megaphone,
    Code2,
    Share2,
    Search,
    Target,
    Globe,
    PenTool,
    Compass,

} from "lucide-react";
import { Link } from 'react-router-dom'


const cards = [
    {
        id: 1,
        title: "Community Management",
        description:
            "Cultivating and maintaining an engaged audience across various digital platforms.",
        icon: <Users className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 2,
        title: "Branding",
        description:
            "Creating a unique identity and image for your business that resonates with the Web3 market.",
        icon: <Palette className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 3,
        title: "Press Release",
        description:
            "Distributing newsworthy announcements about your business to media outlets and public forums.",
        icon: <Newspaper className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 4,
        title: "Influencer Marketing",
        description:
            "Partnering with influential figures to amplify your brand's message within the Web3 space.",
        icon: <Megaphone className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 5,
        title: "Website and Web Development",
        description:
            "Designing and developing a user-friendly website optimized for the Web3 ecosystem.",
        icon: <Code2 className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 6,
        title: "Social Media Management",
        description:
            "Handling your brand's presence on social media platforms to boost visibility and engagement.",
        icon: <Share2 className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 7,
        title: "Search Engine Optimization",
        description:
            "Optimizing your online content to rank higher on search engine results pages.",
        icon: <Search className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 8,
        title: "Paid Ads",
        description:
            "Implementing paid advertising campaigns to target specific audiences and drive traffic.",
        icon: <Target className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 9,
        title: "Meta Ads",
        description:
            "Utilizing Meta's advertising network to reach potential customers on platforms like Facebook and Instagram.",
        icon: <Globe className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 10,
        title: "Content Creation",
        description:
            "Producing valuable and relevant content tailored to the interests of the Web3 community.",
        icon: <PenTool className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 11,
        title: "Media Outreach",
        description:
            "Connecting with journalists and bloggers to gain coverage for your brand in the media.",
        icon: <Megaphone className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
    {
        id: 12,
        title: "Strategic Planning",
        description:
            "Developing a comprehensive plan that outlines the approach to achieving your Web3 marketing goals.",
        icon: <Compass className="w-16 h-16 mt-4 text-[#ffffffcc]" />,
    },
];

const VerticalStickyProcess = () => {
    return (
        <section className="relative py-32">
            <div className="container px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* LEFT – Sticky Title */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28 content-about">
                            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Our Web3 <br />Marketing Process
                            </h2>
                            <p className="mt-2 text-white/70 text-lg">
                                A proven Web3 growth process that blends strategy, community, and technology to build traction, trust, and long-term impact.
                            </p>
                            <Link to="/contact">
                                <button className="">Book your Consultation</button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT – Scrolling Cards */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="group relative h-[300px] w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-between items-start"
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
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VerticalStickyProcess;
