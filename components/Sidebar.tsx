"use client"

import { sidebarLinks } from '@/constants'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'


const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className='sidebar'>
        <div className="sidebar-div">
          {sidebarLinks.map(( link ) => {
            const isActive = pathname === link.route || pathname.startsWith(link.route)

            return(
              <Link href={link.route} key={link.label} className={isActive ? "side-link-ac side-links" : ""}>
                {link.label}
              </Link>
            )
          })}
        </div>
    </section>
  )
}

export default Sidebar
