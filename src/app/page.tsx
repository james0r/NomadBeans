import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className={cn('flex min-h-screen flex-col items-center justify-between p-24')}>
      <div className="">
        I&apos;m the homepage
      </div>
    </main>
  )
}
