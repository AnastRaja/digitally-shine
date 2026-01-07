import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import about from "../../assets/about-us.jpg";

import HorizontalScroll from '../../components/HorizontalScroll'
function Web3Marketing() {
    return (
        <>
            <div className=" bg-img-web3">
                <section className='sectionBg-web3 relative h-screen  '>
                    <div className='container mx-auto h-full px-4 md:px-0 py-16 flex flex-col justify-between'>
                        {/* Top Section: Heading */}
                        <div className='mt-10 md:mt-20'>
                            <h1 className='text-white text-6xl md:text-9xl font-bold leading-tight mt-10 md:mt-20'>
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
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-11">
                            <div>
                                <img
                                    src={about}
                                    alt="about us"
                                    className="image_sidebar  rounded-lg"
                                />
                            </div>
                            <div className="content-about">
                                <span className="text-sm relative z-10">Overview</span>
                                <h2 className="">Web3 Marketing</h2>
                                <p className="font-light">
                                    The digital marketing sector is undergoing a seismic shift. With the evolution of the internet from Web 2.0 to Web 3.0, the realm of marketing is undergoing a significant transformation. Web3 marketing goes beyond traditional online marketing strategies. It leverages blockchain technology to create a more transparent, secure, and user-centric online experience. This paradigm shift from centralized to decentralized web opens up a plethora of opportunities for brands to connect with their audience in a more meaningful way.
                                </p>
                                <p>
                                    It's about crafting brand experiences that resonate within this new, community-driven ecosystem. Here, users have more control over their data, and brands need to build trust and transparency to succeed.
                                </p>
                                <Link to="/contact">
                                    <button className="">Book your Consultation</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <HorizontalScroll />
                <section>
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-11">
                            <div className='rounded-2xl softshadow bg-white/5  backdrop-blur-sm pb-4'>
                                <div className="content-about pt-4">
                                    <h2 className="text-4xl text-center md:text-6xl font-bold text-white leading-tight">
                                        Our Process
                                    </h2>
                                    <p>

                                    </p>
                                </div>
                                <div className="marquee-wrapper">
                                    <div className="marquee marquee-left">
                                        <div className="marquee-track">
                                            <span className="pill">Slide Decks</span>
                                            <span className="pill">Copywriting</span>
                                            <span className="pill">Brand Graphics</span>
                                            <span className="pill">Brand Migration</span>
                                            <span className="pill">Package Design</span>
                                            <span className="pill">Branding</span>
                                            <span className="pill">Social Media</span>
                                            <span className="pill">Icons</span>

                                            {/* duplicate for seamless loop */}
                                            <span className="pill">Slide Decks</span>
                                            <span className="pill">Copywriting</span>
                                            <span className="pill">Brand Graphics</span>
                                            <span className="pill">Brand Migration</span>
                                            <span className="pill">Package Design</span>
                                            <span className="pill">Branding</span>
                                            <span className="pill">Social Media</span>
                                            <span className="pill">Icons</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl softshadow bg-white/5  backdrop-blur-sm pb-4">
                                <div className="content-about pt-4">
                                    <h2 className="text-4xl md:text-6xl text-center font-bold text-white leading-tight">
                                        Our Process
                                    </h2>
                                    <p>

                                    </p>
                                </div>
                                <div className="marquee-wrapper">
                                    <div className="marquee marquee-left">
                                        <div className="marquee-track">
                                            <span className="pill">Slide Decks</span>
                                            <span className="pill">Copywriting</span>
                                            <span className="pill">Brand Graphics</span>
                                            <span className="pill">Brand Migration</span>
                                            <span className="pill">Package Design</span>
                                            <span className="pill">Branding</span>
                                            <span className="pill">Social Media</span>
                                            <span className="pill">Icons</span>

                                            {/* duplicate for seamless loop */}
                                            <span className="pill">Slide Decks</span>
                                            <span className="pill">Copywriting</span>
                                            <span className="pill">Brand Graphics</span>
                                            <span className="pill">Brand Migration</span>
                                            <span className="pill">Package Design</span>
                                            <span className="pill">Branding</span>
                                            <span className="pill">Social Media</span>
                                            <span className="pill">Icons</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="py-40    relative">
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-11">

                            <div className="content-about">
                                <span className="text-sm relative z-10">Why </span>
                                <h2 className="">Adroits Digital for Web3 Marketing?</h2>
                                <p className="font-light">
                                    The digital marketing sector is undergoing a seismic shift. With the evolution of the internet from Web 2.0 to Web 3.0, the realm of marketing is undergoing a significant transformation. Web3 marketing goes beyond traditional online marketing strategies. It leverages blockchain technology to create a more transparent, secure, and user-centric online experience. This paradigm shift from centralized to decentralized web opens up a plethora of opportunities for brands to connect with their audience in a more meaningful way.
                                </p>
                                <p>
                                    It's about crafting brand experiences that resonate within this new, community-driven ecosystem. Here, users have more control over their data, and brands need to build trust and transparency to succeed.
                                </p>
                                <Link to="/contact">
                                    <button className="">Book your Consultation</button>
                                </Link>
                            </div>
                            <div>
                                <img
                                    src={about}
                                    alt="about us"
                                    className="image_sidebar  rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}

export default Web3Marketing