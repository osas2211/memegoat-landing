import { About } from "@/components/About"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Integrations } from "@/components/Integrations"
import { ProjectUtility } from "@/components/ProjectUtility"
import { RoadMap } from "@/components/RoadMap"
import { TokenUtilities } from "@/components/TokenUtilities"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <div className="bg-[#141414] my-10 md:py-10 py-6 md:pb-[5rem]">
        <div className="max-w-[1440px] px-5 space-y-10 mx-auto">
          <About />
          <ProjectUtility />
          <TokenUtilities />
          {/* <RoadMap /> */}
          <Integrations />
        </div>
      </div>
      <Footer />
    </main>
  )
}
