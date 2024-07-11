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
    >
      <motion.div className="relative w-full h-[40rem]">
        <Image fill src={"/logo.svg"} className="w-full h-full" alt="" />
      </motion.div>
      <motion.div>
        <h3 className="text-xl md:text-4xl orbitron special-text">
          # About MemeGoat
        </h3>
        <p className="text-[#f3f2f2] my-4">
          The $Goat is a meme finance layer on bitcoin, focused on creating an
          Healthy, secured and all inclusive meme ecosystem on the leading
          bitcoin layer 2 (stacks), our goal is to bring instant utility and
          ease of launch to meme communities building on bitcoin.
        </p>
        <button className="h-[40px] px-6 bg-transparent border-primary-70 text-primary-20 border-[1px] flex items-center gap-2">
          <BsDiscord className="inline" />
          <span className="">Join Discord</span>
        </button>
      </motion.div>
    </motion.div>
  )
}
