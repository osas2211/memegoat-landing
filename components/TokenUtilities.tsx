"use client"
import React from "react"
import { motion } from "framer-motion"
import { BsRocketTakeoff } from "react-icons/bs"
import { FaDonate } from "react-icons/fa"
import { RiExchangeDollarFill, RiGovernmentFill } from "react-icons/ri"
import { CiLock } from "react-icons/ci"
import { CgCommunity, CgGames } from "react-icons/cg"
import { GiMining } from "react-icons/gi"
import { MdPool } from "react-icons/md"
import { BiBulb, BiShareAlt } from "react-icons/bi"

export const TokenUtilities = () => {
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
      className="relative z-[20] pt-[5rem]"
    >
      <h3 className="text-xl md:text-4xl orbitron special-text uppercase text-center mb-10 md:mt-[10rem]">
        # Token Utilities
      </h3>
      <div className="grid md:grid-cols-4 md:gap-5 gap-5">
        <div className="p-4 md:px-6 bg-[#202020] text-center  flex items-center justify-center flex-col gap-5 border-[1px] border-primary-90">
          <RiExchangeDollarFill className="text-center text-3xl text-primary-30" />
          <div>
            <h4 className="neonText text-[16px] mb-4">
              Revenue sharing protocol for all $Goat stakers
            </h4>
            <p className="text-sm">
              we are creating a decentralised revenue sharing built in utility
              for $Goat holders, hold $Goat and earn a percentage of all fees
              generated
            </p>
          </div>
        </div>
        <div className="p-4 md:px-6 bg-[#202020] text-center  flex items-center justify-center flex-col gap-5">
          <BiBulb className="text-center text-3xl text-primary-30" />
          <div>
            <h4 className="neonText text-lg mb-4">Deflationary mechanism</h4>
            <p className="text-sm">
              we introduce a deflationary mechanism to increase value for $Goat
              holders by periodic buy back and burn 🔥 from generated fees
            </p>
          </div>
        </div>
        <div className="p-4 md:px-6 bg-[#202020] text-center  flex items-center justify-center flex-col gap-5 border-[1px] border-primary-90">
          <CgGames className="text-center text-3xl text-primary-30" />
          <div>
            <h4 className="neonText text-lg mb-4">Gamefi</h4>
            <p className="text-sm">
              In-built token utilities on the meme goat gamefi layer which
              enables participation, in-game asset aquisition and token
              deflation.
            </p>
          </div>
        </div>
        <div className="p-4 md:px-6 bg-[#202020] text-center  flex items-center justify-center flex-col gap-5">
          <BiBulb className="text-center text-3xl text-primary-30" />
          <div>
            <h4 className="neonText text-lg mb-4">
              Two way staking utility approach
            </h4>
            <p className="text-sm">
              <p>stake $Goat earn $Goat rewards </p>{" "}
              <p>stake $Goat earn other meme tokens</p>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
