"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "antd"
import { BsDiscord } from "react-icons/bs"

export const About = () => {
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
      className="flex flex-col-reverse md:flex-row items-center gap-10"
      id="about"
    >
      <motion.div className="relative w-full h-[40rem]">
        <Image fill src={"/logo.svg"} className="w-full h-full" alt="" />
      </motion.div>
      <motion.div>
        <h3 className="text-xl md:text-4xl orbitron special-text">
          # About MemeGoat
        </h3>
        <h4 className="text-lg text-silver">
          Secure layer for memes on Bitcoin
        </h4>
        <div className="my-4">
          <p className="text-[#f3f2f2] ">
            MemeGoat is the first all-in-one finance layer on bitcoin, launch
            token, Lock, Raise liquidity, Create staking pool, Play games, Earn,
            Promote, Swap, AntiRug proof. Pioneering the first secure layer for
            communities to grow and provide instant utilities on the leading
            Bitcoin layer-2 (stacks).
          </p>
        </div>
        <button className="h-[40px] px-6 bg-transparent border-primary-70 text-primary-20 border-[1px] flex items-center gap-2">
          <BsDiscord className="inline" />
          <span className="">Join Discord</span>
        </button>
      </motion.div>
    </motion.div>
  )
}
