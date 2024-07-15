"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Image } from "antd"

export const Integrations = () => {
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
      id="integrations"
    >
      <h3 className="text-xl md:text-4xl orbitron special-text uppercase text-center mb-10 md:mt-[10rem]">
        # Integrations
      </h3>
      <div className="grid grid-cols-3">
        <Link
          href={"https://alexlab.co/"}
          target="_blank"
          className="flex items-center justify-center gap-3 bg-[#201e1e] w-full p-3 py-7 border-[1px] border-primary-80/70"
        >
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/images/alex.png"}
              alt=""
              preview={false}
              width={"3rem"}
            />
            <Image
              src={"/images/alex.svg"}
              alt=""
              preview={false}
              width={"12rem"}
            />
          </div>
        </Link>
        <Link
          href={"https://velar.co/"}
          target="_blank"
          className="flex items-center justify-center gap-3 bg-[#161515] w-full p-3 py-7 border-[1px] border-primary-80/70 border-x-0"
        >
          <div className="">
            <Image
              src={"/images/velar.png"}
              alt=""
              preview={false}
              width={"5rem"}
            />
          </div>
        </Link>
        <Link
          href={"https://www.hiro.so/"}
          target="_blank"
          className="flex items-center justify-center gap-3 bg-[#201e1e] w-full p-3 py-7 border-[1px] border-primary-80/70"
        >
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/images/hiro.svg"}
              alt=""
              preview={false}
              width={"3.5rem"}
            />
            <span>Hiro</span>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}
