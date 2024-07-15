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
import { BiGame } from "react-icons/bi"

export const ProjectUtility = () => {
  return (
    <div className="relative" id="utilities">
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
                Full scale fair-launch launchpad on Bitcoin
              </h4>
              <p>
                Launch a token, create a token sale, raise liquidity with
                in-built anti-rug functionalities, and get instant listing on
                your favourite dex.
              </p>
            </div>
          </div>
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5">
            <FaDonate className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-lg">
                Full scale staking protocol on Bitcoin/Stacks
              </h4>
              <p>
                Create staking pools for your projects and communities. Earn
                rewards from your favourite staking pool. With enabled
                multi-rewards pools.
              </p>
            </div>
          </div>
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5 border-[1px] border-primary-90">
            <RiExchangeDollarFill className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-xl">Aggregator Dex</h4>
              <p>
                Trade sip-10 tokens with the best rate. Have access to multiple
                Dexs. We enable multi-hops and multi-dex swaps.
              </p>
            </div>
          </div>
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5">
            <CiLock className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-xl">
                Anti rug token locker
              </h4>
              <p>
                Our locker offers Token Vesting, Lock splitting, Relocking, and
                Lock ownership transfer
              </p>
            </div>
          </div>
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5 border-[1px] border-primary-90">
            <CgCommunity className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-lg">
                Leading socialfi application for promoting and building solid
                communities.
              </h4>
              <p>
                Launch community campaigns, create community task, get involved,
                earn rewards for community building participation
              </p>
            </div>
          </div>
          <div className="p-4 md:px-6 bg-[#202020] text-center md:h-[15rem] flex items-center justify-center flex-col gap-5">
            <BiGame className="text-center text-3xl text-primary-30" />
            <div>
              <h4 className="neonText text-lg md:text-xl">Meme Goat Games</h4>
              <p>Play a large variety of games, compete and earn rewards</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
