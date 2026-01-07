import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import web3 from "../../assets/service/web3marketing-f.webp";
import web3bg from "../../assets/service/web3marketing-about.webp";
import web3bglast from "../../assets/service/web3marketing-last.webp";
import { useSEO, generatePageTitle } from "../../utils/seo";
import HorizontalScroll from '../../components/HorizontalScroll'
import ContactGlobal from '../ContactGlobal';
function Web3Marketing() {
    useSEO({
        title: generatePageTitle("Web3 Marketing Agency | Crypto Marketing Agency"),
        description:
            "Adroits Digital is expert web3 and crypto marketing. Specialize in innovative strategies for blockchain, crypto, and NFT projects. Join us.",
        keywords:
            "web3 marketing agency, crypto marketing agency, web3 marketing company, crypto marketing company, cryptocurrency marketing company, token marketing company, crypto token marketing company, crypto token marketing agency, Web3 Marketing",
        canonical: window.location.origin,

    });

    return (
        <>
            <div className=" bg-img-web3">
                <section className='sectionBg-web3 relative h-screen  '>
                    <div className='container mx-auto h-full px-4 md:px-0 py-16 flex flex-col justify-between'>
                        {/* Top Section: Heading */}
                        <div className='mt-10 md:mt-20'>
                            <h1 className='text-white text-6xl md:text-9xl font-bold leading-tight mt-10 md:mt-12'>
                                Web3 Marketing <br /> Agency
                            </h1>
                        </div>

                        {/* Bottom Section: Button and Text */}
                        <div className='flex flex-col md:flex-row items-end justify-between w-full gap-8 relative z-10'>
                            {/* Bottom Left: Button */}
                            <div>
                                <Link to="/contact" className='group flex items-center gap-2 text-white text-xl font-medium hover:text-primary transition-colors'>
                                    Get a Quote
                                    <ArrowRight className='w-6 h-6 transition-transform group-hover:translate-x-1' />
                                </Link>
                            </div>

                            {/* Bottom Right: Description */}
                            <div className='max-w-xl'>
                                <p className='text-white/80 text-lg md:text-xl text-right md:text-left'>
                                    Adroits Digital - Your Guide to Web3 Marketing Service. We are specialized in the field of Web3 and Blockchain technology. We guide you through each and every step to brand your web3 business online.

                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-40 pb-0   relative">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-4">
                            {/* LEFT – Content */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-7">
                                <div className="content-about">
                                    <h2>
                                        Overview of <br />Web3 Marketing
                                    </h2>

                                    <p className="font-light">
                                        The digital marketing sector is undergoing a seismic shift. With the evolution of the internet from Web 2.0 to Web 3.0, the realm of marketing is undergoing a significant transformation. Web3 marketing goes beyond traditional online marketing strategies. It leverages blockchain technology to create a more transparent, secure, and user-centric online experience. This paradigm shift from centralized to decentralized web opens up a plethora of opportunities for brands to connect with their audience in a more meaningful way.
                                    </p>

                                    <Link to="/contact">
                                        <button>Book your Consultation</button>
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT – Image */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-5">
                                <div>
                                    <img
                                        src={web3}
                                        alt="about us"
                                        className="image_sidebar rounded-lg w-full"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <HorizontalScroll />
                <section>
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-11">
                            <div className=' pb-4'>
                                <div className="content-about pt-4">
                                    <h2 className="text-4xl text-center md:text-6xl font-bold text-white leading-tight">
                                        Our Expertise <br />Web3 Marketing Service Areas
                                    </h2>
                                    <p>

                                    </p>
                                </div>
                                <div className="marquee-wrapper">
                                    <div className="marquee marquee-left">
                                        <div className="marquee-track">
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">ICO Marketing
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">IDO Marketing</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">IEO Marketing
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">NFT Marketing</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Blockchain Marketing
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Web3 PR Service</span>

                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">ICO Marketing
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">IDO Marketing</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">IEO Marketing
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">NFT Marketing</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Blockchain Marketing
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Web3 PR Service</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">ICO Marketing
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">IDO Marketing</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">IEO Marketing
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">NFT Marketing</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Blockchain Marketing
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Web3 PR Service</span>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                <section className="py-20  pt-20  relative">
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-11">

                            <div className="content-about flex flex-col justify-center items-center">
                                <span className="text-sm relative z-10">About </span>
                                <h2 className="">Adroits Digital </h2>
                                <p className="font-light text-center max-w-4xl">
                                    Adroits Digital, A leading web3 marketing agency, we're at the frontline of this transformative movement, offering top-notch Web3 Marketing Services that propel brands into the future of marketing. As we navigate through the decentralized web, our marketing strategies are evolving to meet the unique demands of this new era. Our innovative marketing strategies are crafted through the power of the decentralized web, ensuring they resonate deeply with our clients' target audiences.
                                </p>

                            </div>
                            <div>
                                <img
                                    src={web3bg}
                                    alt="about us"
                                    className="image_sidebar  rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-11">
                            <div className=' pb-4'>
                                <div className="content-about pt-4">
                                    <h2 className="text-4xl text-center md:text-6xl font-bold text-white leading-tight">
                                        Our Expertise <br />Web3 Marketing Service Areas
                                    </h2>
                                    <p>

                                    </p>
                                </div>
                                <div className="marquee-wrapper">
                                    <div className="marquee marquee-left">
                                        <div className="marquee-track">
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Reddit
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Linkedin</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Twitter
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Minds</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Quora

                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Discord</span>

                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Medium
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Reddit
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Linkedin</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Twitter
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Minds</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Quora

                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Discord</span>

                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Medium
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Reddit
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Linkedin</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Twitter
                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Minds</span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Quora

                                            </span>
                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Discord</span>

                                            <span className="pill softshadow bg-white/5  backdrop-blur-sm">Medium
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                <section className="py-40 pt-20    relative ">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-4">
                            {/* LEFT – Content */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-7">
                                <div className="content-about">
                                    <h2>
                                        Why Choose <br />Adroits Digital for Web3 Marketing?
                                    </h2>

                                    <p className="font-light">
                                        Adroits Digital is the ideal choice for Web3 marketing, offering a blend of expertise in blockchain technology and innovative marketing strategies. Our comprehensive services, adaptability to trends, and focus on community engagement make us a standout partner for your Web3 business needs. Here are five key reasons to choose Adroits Digital:
                                    </p>

                                    <ul>
                                        <li><strong>Blockchain Expertise:</strong> In-depth knowledge of blockchain and Web3 technologies.</li>
                                        <li><strong>Innovative Strategies:</strong> Cutting-edge marketing tailored to the Web3 ecosystem.</li>
                                        <li><strong>Full-Service Suite:</strong> From SEO to social media management, we cover all your marketing needs.</li>
                                        <li><strong>Trend Adaptability:</strong> Staying ahead of the curve with the latest Web3 developments.</li>
                                        <li><strong>Community Focus:</strong> Building strong, engaged communities around your brand.</li>
                                    </ul>

                                    <Link to="/contact">
                                        <button>Book your Consultation</button>
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT – Image */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-5">
                                <img
                                    src={web3bglast}
                                    alt="about us"
                                    className="image_sidebar rounded-lg w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <ContactGlobal />
            </div>


        </>
    )
}

export default Web3Marketing