"use client"
import React from "react"
import anime from "animejs"
import gsap, { Expo } from "gsap"
import { useGSAP } from "@gsap/react"
import { Avatar } from "antd"
import Link from "next/link"

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
      <div className="h-[100vh] relative">
        <nav className="hero-menu relative z-[20]">
          <div className="hero-menu-left hero-menu-item  hidden md:block">
            <Link
              href={"#road-map"}
              className="hero-menu-link capitalize hover:text-primary-50"
            >
              road map
            </Link>
            <Link
              href={"https://docs.memegoat.io"}
              target="_blank"
              className="hero-menu-link capitalize hover:text-primary-50"
            >
              Documentation
            </Link>
          </div>
          <div className="hero-menu-center hero-menu-item">
            <div className="brand-logo">
              <Avatar src="/logo.svg" size={82} />
            </div>
          </div>
          <div className="hero-menu-right hero-menu-item">
            <div>
              <Link
                href={"https://app.memegoat.io"}
                target="_blank"
                className="text-primary-50 no-underline inline-block py-2 px-4 border-[1px] border-primary-50"
              >
                Launch App
              </Link>
            </div>
          </div>
        </nav>

        <div className="hero-images">
          <div className="hero-left hero-img"></div>
          <div className="hero-right hero-img"></div>
        </div>
        <div className="hero-image">
          <div className="hero-wrapper-img">
            <div className="hero-box"></div>
            <div>
              <img className="hero-image" src="images/goat2.png" />
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
      </div>
      <div className="absolute top-[-50%] left-[50%] translate-x-[-50%] bg-primary-30/15 h-[50rem] w-[70rem] rounded-full z-[0] blur-[300px]"></div>
    </div>
  )
}
