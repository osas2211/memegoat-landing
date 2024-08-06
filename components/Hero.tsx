"use client"
import React from "react"
import anime from "animejs"
import gsap, { Expo } from "gsap"
import { useGSAP } from "@gsap/react"
import { Avatar } from "antd"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "./Header"

gsap.registerPlugin(useGSAP)

export const Hero = () => {
  // const timeline = gsap.timeline({ repeat: 2, repeatDelay: 1 })
  useGSAP(() => {
    const textWrapper = document.querySelector(".hero-title") as Element

    // @ts-expect-error just skip
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )

    anime.timeline().add({
      targets: ".hero-title .hero-letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      // delay: (el, i) => 4800 + 40 * i,
    })
    gsap.to(".hero-box", {
      y: "-100%",
      ease: Expo.easeInOut,
      duration: 2.4,
      delay: 1,
    })

    gsap.from("img", 4, {
      scale: "2",
      ease: Expo.easeInOut,
      duration: 2.4,
      delay: 0,
    })

    gsap.to(".hero-wrapper-img", {
      width: "400",
      height: "500",
      ease: Expo.easeInOut,
      duration: 2.4,
      delay: 3.6,
    })

    gsap.from(".hero-img", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 0.4,
      delay: 3.4,
    })

    gsap.to(".hero-left", {
      x: "-400",
      rotation: -10,
      ease: Expo.easeInOut,
      duration: 2,
      delay: 3.8,
    })

    gsap.to(".hero-right", {
      x: "100",
      rotation: 10,
      ease: Expo.easeInOut,
      duration: 2,
      delay: 3.8,
    })

    gsap.from(".hero-menu > div, .hero-container > div", {
      opacity: 0,
      y: 30,
      ease: Expo.easeInOut,
      duration: 2,
      delay: 4.2,
      stagger: 0.1,
    })
    gsap.from(".hero-title", {
      // fontSize: 0,
      opacity: 0,
      delay: 4.2,
      duration: 2,
      ease: Expo.easeInOut,
    })
  })
  return (
    <div className="overflow-hidden">
      <div className="md:h-[100vh] relative">
        <Header />

        <div className=" md:block hidden">
          <div className="hero-images">
            <div className="hero-left hero-img"></div>
            <div className="hero-right hero-img"></div>
          </div>
          <div className="hero-image">
            <div className="hero-wrapper-img">
              <div className="hero-box"></div>
              <div>
                <Image className="hero-image" src="/images/goat2.png" alt={""} width={400} height={400} />
              </div>
            </div>
          </div>
          <div className="hero-header">
            <p className="hero-title neonText orbitron">memegoat</p>
          </div>
          <div className="hero-container">
            <div className="hero-sidebar-text md:block hidden">001</div>
            {/* <div className="hero-projects md:block hidden capitalize hover:text-primary-50">
            About MemeGoat
          </div> */}
            <div className="hero-img-nav text-[#8fc78a] md:block hidden">
              <div className="hero-prev">Secure layer </div>
              <div className="hero-next">for memes on BITCOIN</div>
            </div>
          </div>

          <div className="md:hidden block mt-10 absolute bottom-[3rem] left-[50%] translate-x-[-50%] text-center text-xl text-primary-20">
            <Avatar src="/logo.svg" size={100}></Avatar>
            <p className="">Secure Layer</p>
            <p>for Memes on Bitcoin</p>
          </div>
        </div>

        <div className="md:hidden px-3">
          <div className="">
            <div className="p-6 flex justify-center items-center min-h-[85vh] gap-7 bg-gradient-to-r from-primary-90/5 to-primary-70/10 backdrop-blur-[5px] relative z-[20]">
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
                className="lg:w-[30%] text-center"
              >
                <h3 className="text-2xl md:text-4xl orbitron leading-normal">
                  Welcome
                </h3>
                <h3 className="text-2xl md:text-4xl orbitron leading-normal">
                  To Meme Goat STX
                </h3>
                <p className="text-white/80 text-sm mt-6 leading-6">
                  MemeGoat is the first all-in-one finance layer on bitcoin,
                  launch token, Lock, Raise liquidity, Create staking pool, Play
                  games, Earn, Promote, Swap, AntiRug proof.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hidden fixed top-0 left-0 w-full h-[50px] blur-[200px] bg-primary-80"></div>
        <div className="hidden fixed top-[50%] right-[30%] h-[15rem] w-[15rem] blur-[250px] bg-primary-80"></div>
        <div className="md:hidden absolute top-[10vh] right-0 md:right-[-30rem] z-[0]">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 0.4 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative w-[60rem] h-[60rem] md:hidden"
          >
            <Image src="/logo.svg" className="w-full h-full" alt="" fill />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-[-50%] left-[50%] translate-x-[-50%] bg-primary-30/15 h-[50rem] w-[70rem] rounded-full z-[0] blur-[300px]"></div>
    </div>
  )
}
