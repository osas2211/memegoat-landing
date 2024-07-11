"use client"
import React from "react"
import { motion } from "framer-motion"
import { RiExchangeDollarFill, RiGovernmentFill } from "react-icons/ri"
import { BiBulb, BiShareAlt } from "react-icons/bi"

export const RoadMap = () => {
  return (
    <motion.div
      whileInView={"show"}
      initial={"hidden"}
      variants={{
        hidden: { opacity: 0, y: 200 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.5,
            staggerChildren: 1.5,
          },
        },
      }}
      id="road-map"
    >
      <h3 className="text-xl md:text-4xl orbitron special-text uppercase text-center mb-10 md:mt-[10rem]">
        # RoadMap
      </h3>
      <div className="grid md:grid-cols-3 md:gap-5 gap-5 justify-start content-start">
        <div className="p-4 md:px-6 bg-[#202020] flex items-center gap-5 border-l-[5px] border-primary-50 relative z-[20] md:h-[5rem] h-[4rem]">
          <p>First meme staking protocol on bitcoin</p>
          <p className="absolute top-5 right-2 text-silver/25 font-bold text-5xl z-[20]">
            Q1
          </p>
        </div>
        <div className="p-4 md:px-6 bg-[#202020] flex items-center gap-5 border-l-[5px] border-primary-50 relative z-[20] md:h-[5rem] h-[4rem] md:mt-5">
          <p>Anti rug liquidity locker</p>
          <p className="absolute top-5 right-2 text-silver/25 font-bold text-5xl z-[20]">
            Q1
          </p>
          <p className="absolute top-5 left-[-23px] text-primary-50 font-bold z-[-1] md:block hidden">
            --
          </p>
        </div>
        <div className="p-4 md:px-6 bg-[#202020] flex items-center gap-5 border-l-[5px] border-primary-50 relative z-[20] md:h-[5rem] h-[4rem] md:mt-10">
          <p>Full scale meme launchpad</p>
          <p className="absolute top-5 right-2 text-silver/25 font-bold text-5xl z-[20]">
            Q2
          </p>
          <p className="absolute top-5 left-[-23px] text-primary-50 font-bold z-[-1] md:block hidden">
            --
          </p>
        </div>
        <div className="p-4 md:px-6 bg-[#202020] flex items-center gap-5 border-l-[5px] border-primary-50 relative z-[20] md:h-[5rem] h-[4rem]">
          <p>Liquidity farming</p>
          <p className="absolute top-5 right-2 text-silver/25 font-bold text-5xl z-[20]">
            Q2
          </p>
        </div>
        <div className="p-4 md:px-6 bg-[#202020] flex items-center gap-5 border-l-[5px] border-primary-50 relative z-[20] md:h-[5rem] h-[4rem] md:mt-5">
          <p>Meme Dex</p>
          <p className="absolute top-5 right-2 text-silver/25 font-bold text-5xl z-[20]">
            Q3
          </p>
          <p className="absolute top-5 left-[-23px] text-primary-50 font-bold z-[-1] md:block hidden">
            --
          </p>
        </div>
        <div className="p-4 md:px-6 bg-[#202020] flex items-center gap-5 border-l-[5px] border-primary-50 relative z-[20] md:h-[5rem]  md:mt-10">
          <p>Leading Web3 platform for building solid meme communities</p>
          <p className="absolute top-5 right-2 text-silver/25 font-bold text-5xl z-[20]">
            Q3
          </p>
          <p className="absolute top-5 left-[-23px] text-primary-50 font-bold z-[-1] md:block hidden">
            --
          </p>
        </div>
      </div>
    </motion.div>
  )
}
