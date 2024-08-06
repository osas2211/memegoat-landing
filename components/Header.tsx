"use client"
import { Avatar, Drawer } from "antd"
import Link from "next/link"
import React, { useState } from "react"
import { CgClose } from "react-icons/cg"
import { GiHamburgerMenu } from "react-icons/gi"

export const Header = () => {
  return (
    <div>
      <nav className="hero-menu relative z-[20]">
        <div className="hidden md:inline-flex gap-0">
          <Link
            href={"https://docs.memegoat.io"}
            target="_blank"
            className="hero-menu-link capitalize hover:text-primary-50"
          >
            Documentation
          </Link>
          <Link
            href={"https://games.memegoat.io/"}
            target="_blank"
            className="hero-menu-link capitalize hover:text-primary-50"
          >
            Games
          </Link>
          <Link
            href={"https://socialfi.memegoat.io/"}
            target="_blank"
            className="hero-menu-link capitalize hover:text-primary-50"
          >
            SocialFi
          </Link>

          <Link
            href={"https://medium.com/@goatcoinstx"}
            target="_blank"
            className="hero-menu-link capitalize hover:text-primary-50"
          >
            Blog
          </Link>
          <Link
            href={""}
            className="hero-menu-link capitalize text-silver cursor-not-allowed"
          >
            NFTs (Coming soon)
          </Link>
        </div>
        <div className="hero-menu-center hero-menu-item">
          <div className="brand-logo">
            <Avatar src="/logo.svg" size={82} />
          </div>
        </div>
        <div className="hero-menu-right hero-menu-item">
          <div className="md:block hidden">
            <Link
              href={"https://app.memegoat.io"}
              target="_blank"
              className="text-primary-50 no-underline inline-block py-2 px-4 border-[1px] border-primary-50"
            >
              Launch App
            </Link>
          </div>
          <div className="md:hidden block">
            <MobileNav />
          </div>
        </div>
      </nav>
    </div>
  )
}

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const toggleNav = () => setOpen(!open)
  return (
    <>
      <div>
        {open ? (
          <CgClose
            className="inline-block cursor-pointer"
            onClick={toggleNav}
            size={25}
          />
        ) : (
          <GiHamburgerMenu
            className="inline-block cursor-pointer"
            onClick={toggleNav}
            size={25}
          />
        )}
      </div>

      <Drawer
        placement="left"
        open={open}
        onClose={toggleNav}
        title={
          <div className="flex gap-2 items-center">
            <Avatar src="/logo.svg" size={42} />
            <p className="text-sm">MemeGoat</p>
          </div>
        }
        styles={{
          header: { background: "#141414", color: "white" },
          content: { background: "#141414", color: "white" },
        }}
        closeIcon={<CgClose size={20} color="#fff" />}
      >
        <div className="flex flex-col gap-5 p-4">
          <Link
            href={"https://docs.memegoat.io"}
            target="_blank"
            className="capitalize hover:text-primary-50"
          >
            Documentation
          </Link>
          <Link
            href={"https://games.memegoat.io/"}
            target="_blank"
            className=" capitalize hover:text-primary-50"
          >
            Games
          </Link>
          <Link
            href={"https://socialfi.memegoat.io/"}
            target="_blank"
            className=" capitalize hover:text-primary-50"
          >
            SocialFi
          </Link>

          <Link
            href={"https://medium.com/@goatcoinstx"}
            target="_blank"
            className=" capitalize hover:text-primary-50"
          >
            Blog
          </Link>
          <Link href={""} className="capitalize text-silver cursor-not-allowed">
            NFTs (Coming soon)
          </Link>
          <Link
            href={"https://app.memegoat.io"}
            target="_blank"
            className="text-primary-50 text-center hover:text-primary-50 no-underline inline-block py-2 px-4 border-[1px] border-primary-50"
          >
            Launch App
          </Link>
        </div>
      </Drawer>
    </>
  )
}
