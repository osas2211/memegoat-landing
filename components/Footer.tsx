"use client"
import { Avatar } from "antd"
import moment from "moment"
import Link from "next/link"
import React from "react"
import { FaDiscord, FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1440px] px-6 pb-8 flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-2 text-sm text-silver">
        <Avatar size={50} src="/logo.svg" />
        <p>
          MemeGoat <span>{moment().year()}</span>
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Link
          href={"mailto:contact@memegoat.io"}
          target="_black"
          className="text-silver text-[22px] hover:text-custom-white"
        >
          <MdEmail />
        </Link>
        <Link
          href={"https://twitter.com/GoatCoinSTX"}
          target="_black"
          className="text-silver text-[20px] hover:text-custom-white"
        >
          <FaXTwitter />
        </Link>
        <Link
          href={"https://discord.com/invite/zUyqNNny"}
          target="_black"
          className="text-silver text-[20px] hover:text-custom-white"
        >
          <FaDiscord />
        </Link>
      </div>
    </footer>
  )
}
