import { About } from "@/components/About"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Integrations } from "@/components/Integrations"
import { ProjectUtility } from "@/components/ProjectUtility"
import { TokenUtilities } from "@/components/TokenUtilities"
import { Avatar } from "antd"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <nav className="hero-menu relative z-[20]">
        <div className="hidden md:inline-flex gap-0">
          <Link
            href={"/utilities"}
            className="hero-menu-link capitalize hover:text-primary-50"
          >
            Utilities
          </Link>
          <Link
            href={"https://docs.memegoat.io"}
            target="_blank"
            className="hero-menu-link capitalize hover:text-primary-50"
          >
            Documentation
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
            <Link href={"/"}>
              <Avatar src="/logo.svg" size={82} />
            </Link>
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
      <div className="bg-[#141414] my-10 md:py-10 py-6 md:pb-[5rem]">
        <div className="max-w-[1440px] px-5 space-y-10 mx-auto">
          <ProjectUtility />
        </div>
      </div>
      <Footer />
    </main>
  )
}
