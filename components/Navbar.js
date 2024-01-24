import Link from 'next/link'
import Prefetch from '@edgio/react/Prefetch'
import { createNextDataURL } from '@edgio/next/client'

const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between px-5 py-3">
      <Prefetch url={createNextDataURL({ href: '/' })}>
        <Link href="/">
          <img src="/logo/white.svg" className="h-[25px] w-[60.2px] bg-white/5" />
        </Link>
      </Prefetch>
      <div className="flex flex-row items-center space-x-4 py-1">
        <Prefetch url={createNextDataURL({ href: '/about' })}>
          <Link className="text-[#FFFFFF75]" href="/about">
            About
          </Link>
        </Prefetch>
        <Prefetch url={createNextDataURL({ href: '/commerce' })}>
          <Link className="text-[#FFFFFF75]" href="/commerce">
            Commerce
          </Link>
        </Prefetch>

      </div>
    </div>
  )
}

export default Navbar
