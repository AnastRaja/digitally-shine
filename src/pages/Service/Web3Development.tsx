import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import web3 from "../../assets/service/web3marketing-f.webp";
import web3bg from "../../assets/service/web3marketing-about.webp";
import web3bglast from "../../assets/service/web3marketing-last.webp";
import { useSEO, generatePageTitle } from "../../utils/seo";
import HorizontalScroll from '../../components/HorizontalScroll'
import ContactGlobal from '../ContactGlobal';
import web3heroimag from "../../assets/service/hero-web3.webp";
import whyweb3 from "../../assets/service/why-web3.webp";
import {
    Blocks,
    Wallet,
    Gamepad2,
    Building2,
    ShoppingCart,
    Network
} from "lucide-react";
import HorizontalScrollwebdev from "../../components/HorizontalScrollwebdev";
function Web3Development() {
    useSEO({
        title: generatePageTitle("Web3 Development Services | Secure Blockchain, dApps & Smart Contracts"),
        description:
            "Web3 development services for secure, scalable blockchain solutions. We build dApps, smart contracts, tokens, NFTs, and exchanges engineered for real-world performance.",
        keywords:
            "Web3 development services, blockchain development company, dApp development, smart contract development, token development, NFT development, crypto exchange development, Web3 platform development, decentralized applications, blockchain solutions",
        canonical: window.location.origin,

    });
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Move image slower than scroll
    const y = useTransform(scrollYProgress, [0, 1.5], ["-30%", "50%"]);
    return (
        <>
            <div className="">
                <section className='sectionBg-web3-developemnt relative h-auto '>
                    <div className='container mx-auto  px-4 md:px-0 py-16 flex flex-col justify-between'>


                        {/* Bottom Section: Button and Text */}
                        <div className='flex flex-col md:flex-col items-center justify-center w-full gap-8 relative z-10 mt-16'>
                            {/* Bottom Left: Button */}
                            <h1 className='text-white text-center text-5xl md:text-7xl font-bold leading-tight '>
                                Web3 Development <br /> Services
                            </h1>


                            {/* Bottom Right: Description */}
                            <div className='max-w-xl'>
                                <p className='text-white/80 text-lg text-center md:text-xl text-right md:text-left'>
                                    We combine decentralized architecture with intelligent systems.
                                    Adroits Digital builds Web3 products that think, scale, and perform in the real world.


                                </p>
                                <div className='content-about mt-4'>
                                    <Link to="/contact" className='group flex items-center justify-center gap-2 text-white text-xl font-medium hover:text-primary transition-colors'>

                                        <button className='flex items-center gap-2'>Get a Quote <ArrowRight className='w-6 h-6 transition-transform group-hover:translate-x-1 ' /> </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hero_image_section' ref={ref}>
                        <div className=" ">
                            <img
                                src={web3heroimag}


                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-20 pt-0   relative">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-4">
                            {/* LEFT – Content */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-7">
                                <div className="content-about">
                                    <h2>
                                        Engineered for Security, Scale, and Performance
                                    </h2>


                                </div>
                            </div>

                            {/* RIGHT – Image */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-5">
                                <div className="content-about">


                                    <p className="font-light">
                                        Security and scalability are embedded into every Web3 solution we deliver.
                                        From smart contract architecture to decentralized infrastructure, our development process ensures robust, secure, and high-performing Web3 platforms.

                                    </p>


                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 items-stretch mt-5">
                            <div className="col-span-12 md:col-span-12 lg:col-span-6">
                                <div className="group relative h-full  w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start min-h-24">
                                    <h2 className='text-2xl font-bold'>Secure by <br />design and audit-ready
                                    </h2>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-12 lg:col-span-3">
                                <div className="group relative h-full  w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start min-h-24">
                                    <h2 className='text-2xl font-bold'>Scalable across networks and user growth

                                    </h2>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-12 lg:col-span-3">
                                <div className="group relative h-full  w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start min-h-24">
                                    <h2 className='text-2xl font-bold'>Optimized for speed, efficiency, and reliability

                                    </h2>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section className='our_service_section'>
                    <div className="content-about pt-4">
                        <h2 className="text-4xl text-center md:text-6xl font-bold text-white leading-tight">
                            Our Web3 <br />Development Services
                        </h2>

                    </div>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-4 items-stretch mt-5">
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group relative h-full w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start transition-all duration-500 cursor-pointer">

                                    {/* TOP GRADIENT OVERLAY */}
                                    <div
                                        className="
      
      cursor-pointer
      absolute inset-x-0 top-0 h-40
      bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent
      opacity-0
      blur-2xl
      transition-opacity duration-500
      group-hover:opacity-100
    "
                                    />

                                    {/* CONTENT */}
                                    <span
                                        className="
      relative z-10
      text-8xl font-bold mb-7
      text-white/30
      transition-colors duration-500
      group-hover:text-white
    "
                                    >
                                        01.
                                    </span>

                                    <h3 className="relative z-10 text-2xl font-bold mb-2">
                                        Blockchain Development
                                    </h3>

                                    <p className="relative z-10 text-white/70">
                                        We design and develop robust blockchain solutions aligned with your business objectives.
                                        Our expertise spans public and private blockchains, including Ethereum, Polygon, BNB Chain,
                                        Solana, and more, with a strong focus on security, scalability, and seamless integration
                                        with existing systems.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group relative h-full w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start transition-all duration-500 cursor-pointer">

                                    {/* TOP GRADIENT OVERLAY */}
                                    <div
                                        className="
      
      cursor-pointer
      absolute inset-x-0 top-0 h-40
      bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent
      opacity-0
      blur-2xl
      transition-opacity duration-500
      group-hover:opacity-100
    "
                                    />

                                    {/* CONTENT */}
                                    <span
                                        className="
      relative z-10
      text-8xl font-bold mb-7
      text-white/30
      transition-colors duration-500
      group-hover:text-white
    "
                                    >
                                        02.
                                    </span>

                                    <h3 className="relative z-10 text-2xl font-bold mb-2">
                                        Decentralized Application (dApp) Development

                                    </h3>

                                    <p className="relative z-10 text-white/70">
                                        Our dApps are built for real-world adoption, combining intuitive user experiences with powerful decentralized logic. We handle end-to-end dApp development, including Web3 front-end and back-end integration, wallet connectivity, and cross-chain functionality across multiple networks.

                                    </p>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group relative h-full w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start transition-all duration-500 cursor-pointer">

                                    {/* TOP GRADIENT OVERLAY */}
                                    <div
                                        className="
      
      cursor-pointer
      absolute inset-x-0 top-0 h-40
      bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent
      opacity-0
      blur-2xl
      transition-opacity duration-500
      group-hover:opacity-100
    "
                                    />

                                    {/* CONTENT */}
                                    <span
                                        className="
      relative z-10
      text-8xl font-bold mb-7
      text-white/30
      transition-colors duration-500
      group-hover:text-white
    "
                                    >
                                        03.
                                    </span>

                                    <h3 className="relative z-10 text-2xl font-bold mb-2">
                                        Smart Contract Development & Auditing


                                    </h3>

                                    <p className="relative z-10 text-white/70">
                                        We create secure, efficient, and gas-optimized smart contracts that automate processes and establish trust without intermediaries. From architecture and development to testing, auditing, and upgrades, our smart contracts are designed to perform reliably in production environments.

                                    </p>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group relative h-full w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start transition-all duration-500 cursor-pointer">

                                    {/* TOP GRADIENT OVERLAY */}
                                    <div
                                        className="
      
      cursor-pointer
      absolute inset-x-0 top-0 h-40
      bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent
      opacity-0
      blur-2xl
      transition-opacity duration-500
      group-hover:opacity-100
    "
                                    />

                                    {/* CONTENT */}
                                    <span
                                        className="
      relative z-10
      text-8xl font-bold mb-7
      text-white/30
      transition-colors duration-500
      group-hover:text-white
    "
                                    >
                                        04.
                                    </span>

                                    <h3 className="relative z-10 text-2xl font-bold mb-2">
                                        Token Development & Tokenomics


                                    </h3>

                                    <p className="relative z-10 text-white/70">
                                        We help businesses design and launch sustainable token ecosystems that support growth and governance. Our services cover token creation, tokenomics modeling, staking and incentive mechanisms, and strategic planning for successful token launches.

                                    </p>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group relative h-full w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start transition-all duration-500 cursor-pointer">

                                    {/* TOP GRADIENT OVERLAY */}
                                    <div
                                        className="
      
      cursor-pointer
      absolute inset-x-0 top-0 h-40
      bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent
      opacity-0
      blur-2xl
      transition-opacity duration-500
      group-hover:opacity-100
    "
                                    />

                                    {/* CONTENT */}
                                    <span
                                        className="
      relative z-10
      text-8xl font-bold mb-7
      text-white/30
      transition-colors duration-500
      group-hover:text-white
    "
                                    >
                                        05.
                                    </span>

                                    <h3 className="relative z-10 text-2xl font-bold mb-2">
                                        NFT Development Solutions



                                    </h3>

                                    <p className="relative z-10 text-white/70">
                                        Our NFT solutions go beyond collectibles, focusing on real utility and community engagement. We develop NFT minting platforms, marketplaces, and custom smart contracts for brands, gaming projects, and utility-driven NFT ecosystems.

                                    </p>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group relative h-full w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start transition-all duration-500 cursor-pointer">

                                    {/* TOP GRADIENT OVERLAY */}
                                    <div
                                        className="
      
      cursor-pointer
      absolute inset-x-0 top-0 h-40
      bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent
      opacity-0
      blur-2xl
      transition-opacity duration-500
      group-hover:opacity-100
    "
                                    />

                                    {/* CONTENT */}
                                    <span
                                        className="
      relative z-10
      text-8xl font-bold mb-7
      text-white/30
      transition-colors duration-500
      group-hover:text-white
    "
                                    >
                                        06.
                                    </span>

                                    <h3 className="relative z-10 text-2xl font-bold mb-2">
                                        Web3 Website & Platform Development




                                    </h3>

                                    <p className="relative z-10 text-white/70">
                                        We build Web3-ready websites and platforms that combine modern UI/UX with seamless blockchain functionality. Our solutions support wallet-based authentication, decentralized hosting integrations, and are optimized for performance, scalability, and SEO.

                                    </p>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group relative h-full w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start transition-all duration-500 cursor-pointer">

                                    {/* TOP GRADIENT OVERLAY */}
                                    <div
                                        className="
      
      cursor-pointer
      absolute inset-x-0 top-0 h-40
      bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent
      opacity-0
      blur-2xl
      transition-opacity duration-500
      group-hover:opacity-100
    "
                                    />

                                    {/* CONTENT */}
                                    <span
                                        className="
      relative z-10
      text-8xl font-bold mb-7
      text-white/30
      transition-colors duration-500
      group-hover:text-white
    "
                                    >
                                        07.
                                    </span>

                                    <h3 className="relative z-10 text-2xl font-bold mb-2">
                                        Crypto Trading Bot Development





                                    </h3>

                                    <p className="relative z-10 text-white/70">
                                        We build secure, high-performance crypto trading bots designed for automated, strategy-driven, and AI-powered trading across major exchanges.

                                    </p>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group relative h-full w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start transition-all duration-500 cursor-pointer">

                                    {/* TOP GRADIENT OVERLAY */}
                                    <div
                                        className="
      
      cursor-pointer
      absolute inset-x-0 top-0 h-40
      bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent
      opacity-0
      blur-2xl
      transition-opacity duration-500
      group-hover:opacity-100
    "
                                    />

                                    {/* CONTENT */}
                                    <span
                                        className="
      relative z-10
      text-8xl font-bold mb-7
      text-white/30
      transition-colors duration-500
      group-hover:text-white
    "
                                    >
                                        08.
                                    </span>

                                    <h3 className="relative z-10 text-2xl font-bold mb-2">
                                        Centralized & Decentralized Exchange Development




                                    </h3>

                                    <p className="relative z-10 text-white/70">
                                        From CEX platforms to fully decentralized DEX solutions, we develop scalable, secure, and liquidity-ready crypto exchanges tailored to your business model.

                                    </p>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group relative h-full w-full overflow-hidden rounded-2xl softshadow bg-white/5 p-8 backdrop-blur-sm flex flex-col justify-center items-start transition-all duration-500 cursor-pointer">

                                    {/* TOP GRADIENT OVERLAY */}
                                    <div
                                        className="
      
      cursor-pointer
      absolute inset-x-0 top-0 h-40
      bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent
      opacity-0
      blur-2xl
      transition-opacity duration-500
      group-hover:opacity-100
    "
                                    />

                                    {/* CONTENT */}
                                    <span
                                        className="
      relative z-10
      text-8xl font-bold mb-7
      text-white/30
      transition-colors duration-500
      group-hover:text-white
    "
                                    >
                                        09.
                                    </span>

                                    <h3 className="relative z-10 text-2xl font-bold mb-2">
                                        Crypto Wallet Development





                                    </h3>

                                    <p className="relative z-10 text-white/70">
                                        We design and develop secure, multi-chain crypto wallets with seamless user experience, strong encryption, and reliable asset management capabilities.

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className='pt-14'>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-4">
                            {/* LEFT – Content */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-12">
                                <div className="content-about">
                                    <h2 className="text-center">
                                        Our Web3 <br />Technology Stack
                                    </h2>
                                    <p className="font-light text-center max-w-xl mx-auto">
                                        We use modern, battle-tested, and scalable technologies to build secure and future-ready Web3 solutions. Our tech stack is carefully chosen based on performance, security, and long-term ecosystem support.

                                    </p>

                                </div>
                            </div>

                            {/* RIGHT – Image */}
                            {/* <div className="col-span-12 md:col-span-12 lg:col-span-5">
                                <div className="content-about">


                                    <p className="font-light">
                                        We use modern, battle-tested, and scalable technologies to build secure and future-ready Web3 solutions. Our tech stack is carefully chosen based on performance, security, and long-term ecosystem support.

                                    </p>


                                </div>
                            </div> */}
                        </div>
                        <div className="grid grid-cols-12 gap-8 mt-4">
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <h3 className="relative text-center z-10 text-2xl font-bold mb-4">
                                    Blockchain Platforms

                                </h3>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className="pill softshadow bg-white/5  backdrop-blur-sm">Ethereum
                                    </span>
                                    <span className="pill softshadow bg-white/5  backdrop-blur-sm">Polygon
                                    </span>
                                    <span className="pill softshadow bg-white/5  backdrop-blur-sm">BNB Chain
                                    </span>
                                    <span className="pill softshadow bg-white/5  backdrop-blur-sm">Solana
                                    </span>
                                    <span className="pill softshadow bg-white/5  backdrop-blur-sm">Avalanche
                                    </span>
                                    <span className="pill softshadow bg-white/5  backdrop-blur-sm">Tron
                                    </span>
                                    <span className="pill softshadow bg-white/5  backdrop-blur-sm">Private & Consortium Blockchains (Hyperledger Fabric)
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <h3 className="relative text-center z-10 text-2xl font-bold mb-4">
                                    Smart Contract Development


                                </h3>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Solidity</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Vyper</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Rust (for Solana)</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">OpenZeppelin Libraries</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Hardhat</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Truffle</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Foundry</span>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <h3 className="relative text-center z-10 text-2xl font-bold mb-4">
                                    Token Standards & Protocols



                                </h3>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">ERC-20 (Fungible Tokens)</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">ERC-721 (NFTs)</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">ERC-1155 (Multi-token Standard)</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">BEP-20</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Custom Token Standards</span>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <h3 className="relative text-center z-10 text-2xl font-bold mb-4">
                                    dApp Front-End Technologies




                                </h3>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">React.js</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Next.js</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Vue.js</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Web3.js</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Ethers.js</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Wagmi</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">RainbowKit</span>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <h3 className="relative text-center z-10 text-2xl font-bold mb-4">
                                    dApp Back-End & Middleware





                                </h3>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Node.js</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">NestJS</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Express.js</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">GraphQL</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">REST APIs</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">The Graph (Subgraph Development)</span>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <h3 className="relative text-center z-10 text-2xl font-bold mb-4">
                                    Wallets & Authentication





                                </h3>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">MetaMask</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">WalletConnect</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Coinbase Wallet</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Trust Wallet</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Web3Auth</span>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <h3 className="relative text-center z-10 text-2xl font-bold mb-4">
                                    NFT & Storage Solutions
                                </h3>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">IPFS</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Pinata</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Filecoin</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Arweave</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Cloudinary (Hybrid Storage Models)</span>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <h3 className="relative text-center z-10 text-2xl font-bold mb-4">
                                    Infrastructure & DevOps

                                </h3>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">AWS</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Google Cloud</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Azure</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Docker</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Kubernetes</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">CI/CD Pipelines</span>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <h3 className="relative text-center z-10 text-2xl font-bold mb-4">
                                    Testing, Security & Auditing Tools
                                </h3>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Slither</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">MythX</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">OpenZeppelin Defender</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Tenderly</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Manual & Automated Testing Frameworks</span>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <h3 className="relative text-center z-10 text-2xl font-bold mb-4">
                                    Testing, Security & Auditing Tools
                                </h3>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Slither</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">MythX</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">OpenZeppelin Defender</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Tenderly</span>
                                    <span className="pill softshadow bg-white/5 backdrop-blur-sm">Manual & Automated Testing Frameworks</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
                <section className='pt-24'>
                    <div className="container">
                        <div className="grid grid-cols-12 items-stretch gap-4">
                            {/* LEFT – Content */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-6 h-full">

                                <div className="container_image overflow-hidden rounded-md min-h-[300px] h-full">
                                    <img src={whyweb3} alt="" className='w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-12 lg:col-span-6 h-full">
                                <div className="content-about">
                                    <span>Why Choose</span>
                                    <h2 className=''>
                                        Adroits Digital for Web3 Development

                                    </h2>


                                </div>
                                <div className='list-item_web3 pb-2.5 mb-2.5 border-b border-[#424242]'>
                                    <h3 className='text-xl font-bold mb-2'>Strategy Meets Technology</h3>
                                    <p className='text-white/70'>We blend business strategy, Web3 engineering, and digital growth to deliver solutions that are not only innovative but commercially viable.</p>
                                </div>
                                <div className='list-item_web3 pb-2.5 mb-2.5 border-b border-[#424242]'>
                                    <h3 className='text-xl font-bold mb-2'>Security-First Approach
                                    </h3>
                                    <p className='text-white/70'>Blockchain security is non-negotiable. Our development process prioritizes testing, audits, and best practices at every stage.
                                    </p>
                                </div>
                                <div className='list-item_web3 pb-2.5 mb-2.5 border-b border-[#424242]'>
                                    <h3 className='text-xl font-bold mb-2'>End-to-End Web3 Expertise
                                    </h3>
                                    <p>From ideation and development to launch, marketing, and scaling — we support your entire Web3 journey.
                                    </p>
                                </div>
                                <div className='list-item_web3 pb-2.5 mb-2.5 border-b border-[#424242]'>
                                    <h3 className='text-xl font-bold mb-2'>Future-Ready Solutions

                                    </h3>
                                    <p className='text-white/70'>We build with scalability in mind, ensuring your Web3 product is ready for evolving technologies and user demands.

                                    </p>
                                </div>
                                <div className='list-item_web3'>
                                    <h3 className='text-xl font-bold mb-2'>Powered by AI & Data</h3>
                                    <p className='text-white/70'>As an AI-driven digital company, we use data intelligence to optimize performance, user engagement, and growth outcomes</p>
                                </div>

                            </div>




                        </div>


                    </div>

                </section>

                <section className=" py-28">
                    <div className="container">
                        <div className="content-about mb-14">

                            <h2 className='text-center'>
                                Industries  We Serve

                            </h2>


                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                            {[
                                {
                                    title: <>Web3 Startups <br /> and DAOs</>,
                                    Icon: Blocks,
                                },
                                {
                                    title: <>FinTech <br /> and DeFi Platforms</>,
                                    Icon: Wallet,
                                },
                                {
                                    title: <>Gaming <br /> and Metaverse Projects</>,
                                    Icon: Gamepad2,
                                },
                                {
                                    title: <>Real Estate <br /> and Asset Tokenization</>,
                                    Icon: Building2,
                                },
                                {
                                    title: <>E-commerce <br /> and Loyalty Programs</>,
                                    Icon: ShoppingCart,
                                },
                                {
                                    title: <>Enterprises Exploring <br /> Blockchain Adoption</>,
                                    Icon: Network,
                                },
                            ].map(({ title, Icon }, i) => (
                                <div
                                    key={i}
                                    className={`
        group relative rounded-2xl p-6
        bg-white/5 backdrop-blur-sm softshadow
        transition-all duration-300
        hover:bg-gradient-to-br hover:from-purple-700 hover:to-purple-900
        hover:shadow-xl
        ${i === 4 ? "md:col-start-2" : ""}
        ${i === 5 ? "md:col-start-3" : ""}
      `}
                                >
                                    {/* Icon */}
                                    <div
                                        className="
          w-10 h-10 rounded-full
          bg-purple-600 flex items-center justify-center mb-6
          transition-colors duration-300
          group-hover:bg-purple-500
        "
                                    >
                                        <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-white">
                                        {title}
                                    </h3>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
                <HorizontalScrollwebdev />

                <section className="py-40 pt-0    relative ">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-4">
                            {/* LEFT – Content */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-12">
                                <div className='card_CTA'>
                                    <div className="content-about flex flex-col items-center">
                                        <h2 className='text-center'>
                                            Turn your idea into a production-ready decentralized system<br />  with Adroits Digital

                                        </h2>

                                        <p className="font-light text-center mb-4">
                                            Whether you’re launching a Web3 startup, integrating blockchain into your business, or exploring decentralized innovation, <br />Adroits Digital is your trusted Web3 development partner.

                                        </p>



                                        <Link to="/contact">
                                            <button>Talk to our Web3 experts
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <ContactGlobal />
            </div>


        </>
    )
}

export default Web3Development