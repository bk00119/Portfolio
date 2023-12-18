"use client"

import { useState } from "react"
import { Box, Toolbar, Button } from "@mui/material"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"

import SideMenu from "./sidemenu"
import logo from "@public/logo.png"
import menu_icon from "@public/icons/menu.png"

export default function Navbar() {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)
  const menuList = [
    { name: "WORK", dir: "/" },
    { name: "ABOUT", dir: "/about" },
    { name: "CONTACT", dir: "/contact" },
  ]
  return (
    <nav className="bg-violet flex justify-center h-24 items-center px-4">
      <Toolbar className="w-7xl justify-between">
        {/* Left Item: Logo */}
        <Link href="/">
          <Box className="flex items-center pointer p-1 hover:text-brown">
            <p className="text-2xl leading-loose font-mono">
              B
              <br />H
            </p>
            <Image
              src={logo}
              alt="logo"
              height={50}
              priority
              className="mx-2"
            />
            <p className="text-2xl leading-loose font-mono">
              K
              <br />J
            </p>
          </Box>
        </Link>

        {/* Right Item: Page Options */}
        {/* Sidebar Icon Shows */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md-min:hidden"
        >
        <Image
          src={menu_icon}
          alt="sidebar icon"
          height={40}
          priority
        ></Image>
        </button>
        {/* Mobile: Sidebar Menu */}
        <SideMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          menuList={menuList}
          pathname={pathname}
        />

        {/* Desktop Menu */}
        <Box className="md-max:hidden">
          {menuList.map(({ name, dir }) => (
            <Link
              key={name}
              className={
                pathname === dir
                  ? "ml-8 font-medium text-xl text-brown"
                  : "ml-8 font-medium text-xl text-gray"
              }
              href={dir}
            >
              {name}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </nav>
  )
}
