"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "antd"
import { BsDiscord } from "react-icons/bs"
import Link from "next/link"

export const About = () => {
  return (
    <motion.div
      whileInView={"show"}
      initial={"hidden"}
      variants={{
        hidden: { opacity: 0, y: 100 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            staggerChildren: 1.5,
          },
        },
      }}
      className="flex flex-col-reverse md:flex-row items-center gap-10 py-8"
      id="about"
    >
      <motion.div className="relative w-full h-[40rem] md:block hidden">
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
        <Link
          href={"https://app.memegoat.io"}
          target="_blank"
          className="text-primary-50 no-underline inline-block py-2 px-4 border-[1px] border-primary-50"
        >
          Launch App
        </Link>
      </motion.div>
    </motion.div>
  )
}
