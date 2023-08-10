import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Featured from '@/components/featured'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <div className='py-32 bg-[#E7E1CC]'>

      </div>
    </>
  )
}
