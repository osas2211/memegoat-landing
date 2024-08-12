"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { IoIosArrowBack } from "react-icons/io"

const Notfound = () => {
  const router = useRouter()
  return (
    <div className="flex items-center justify-center gap-3 pt-[5rem] md:pt-[10rem] flex-col">
      <div className="relative">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-5%] h-[12rem] w-[12rem] bg-primary-60 blur-[92px] rounded-full" />
        <img
          src="/images/not-found.svg"
          className="scale-75 md:scale-100 relative z-[10]"
        />
      </div>
      <div className="text-center">
        <p className="text-[20px]">
          Oops, the page you&apos;re looking for can&apos;t be found
        </p>
        <div className="text-white/80">
          You must have followed the wrong link, visit memegoat applications
        </div>
      </div>
      <div className="my-2">
        <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
          <Link
            href={"https://memegoat.io/"}
            target="_blank"
            className="underline text-primary-50"
          >
            Website
          </Link>
          <Link
            href={"https://app.memegoat.io/"}
            target="_blank"
            className="underline text-primary-50"
          >
            MemeGoat DeFi
          </Link>
          <Link
            href={"https://games.memegoat.io/"}
            target="_blank"
            className="underline text-primary-50"
          >
            Meme Nakamoto Games
          </Link>
          <Link
            href={"https://socialfi.memegoat.io/"}
            target="_blank"
            className="underline text-primary-50"
          >
            MemeGoat SocialFi
          </Link>
        </div>
      </div>
      <button
        className="flex items-center gap-2 px-4 h-[45px] bg-primary-50/25 text-primary-20 rounded-lg"
        onClick={router.back}
      >
        <IoIosArrowBack />
        <span>Go Back</span>
      </button>
    </div>
  )
}

export default Notfound
