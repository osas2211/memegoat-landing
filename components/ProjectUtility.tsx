"use client"
import React from "react"
import { motion } from "framer-motion"
import { BsRocketTakeoff } from "react-icons/bs"
import { FaDonate } from "react-icons/fa"
import { RiExchangeDollarFill } from "react-icons/ri"
import { CiLock } from "react-icons/ci"
import { CgCommunity } from "react-icons/cg"
import { GiMining } from "react-icons/gi"
import Image from "next/image"

export const ProjectUtility = () => {
  return (
    <div className="relative">
      <div className="absolute -top-[10rem] right-0 md:right-[-46rem] hidden xl:block z-[0] opacity-75">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="relative w-[170px] h-[170px] md:w-[60rem] md:h-[60rem]"
        >
          <Image src="/logo.svg" className="w-full h-full" alt="" fill />
        </motion.div>
      </div>
      <motion.div
        whileInView={"show"}
        initial={"hidden"}
        variants={{
          hidden: { opacity: 0, y: 180 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              staggerChildren: 1.5,
            },
          },
        }}
        className="relative z-[10]"
      >
        <h3 className="text-xl md:text-4xl orbitron special-text uppercase text-center mb-10">
          # Project Utilities
        </h3>
        <div className="grid md:grid-cols-3 md:gap-5 gap-5">
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5 border-[1px] border-primary-90">
            <BsRocketTakeoff className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-xl">
                Full scale meme launchpad
              </h4>
              <p>
                Create, launch and bootstrap meme projects with no extra line of
                codes
              </p>
            </div>
          </div>
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5">
            <FaDonate className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-lg">
                First meme staking protocol on bitcoin
              </h4>
              <p>Stake meme tokens earn rewards</p>
            </div>
          </div>
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5 border-[1px] border-primary-90">
            <RiExchangeDollarFill className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-xl">Meme Dex</h4>
              <p>Trade meme tokens pairs with ease</p>
            </div>
          </div>
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5">
            <CiLock className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-xl">
                Anti rug liquidity locker
              </h4>
              <p>
                Projects and meme developers lock liquidity, creating a more
                secured meme ecosystem
              </p>
            </div>
          </div>
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5 border-[1px] border-primary-90">
            <CgCommunity className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-lg">
                Leading Web3 platform for building solid meme communities
              </h4>
              <p>
                Launch community campaigns, create community task, get involved,
                earn rewards for community building participation
              </p>
            </div>
          </div>
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5">
            <GiMining className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-xl">Liquidity farming</h4>
              <p>
                Create and add liquidity to meme projects, earn rewards and
                foster growth
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
