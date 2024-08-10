'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { PiArrowUpRight } from 'react-icons/pi';
import { TiShoppingCart } from 'react-icons/ti';

import headerLogo from '@/assets/images/header/header_logo.jpg';
import AnimateButton from '@/components/ui/AnimateButton';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

import SearchDropdown from './SearchDropdown';

function Header() {

  const [isSearchDropdown, setIsSearchDropdown] = useState(false)

  const links = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Pets", link: "/pets" },
    { id: 3, title: "Services", link: "/services" },
    { id: 4, title: "Adoption", link: "/adoption" },
    { id: 5, title: "Marketplace", link: "/marketplace" },
    { id: 6, title: "Contact", link: "/contact" },
  ];

  const handleSearch = () => {
    setIsSearchDropdown(!isSearchDropdown)
  }

  return (
    <header className="container max-w-full mx-auto px-4 absolute top-10 z-9">
      <main className="flex justify-between px-4">
        <div className="w-[106px] h-[30px] lg:w-[160px] lg:h-[44px]">
          <Link href="/">
            <Image src={headerLogo} alt="PetNooks logo" priority />
          </Link>
        </div>
        <div className="flex flex-1 items-center">
          <nav className="flex-1 bg-white h-[53px] rounded-full content-center mx-10">
            <ul className="flex justify-around">
              {links.map((link, i) => (
                <li className="flex justify-between" key={link.id}>
                  <Link href={link.link}>
                    <Typography
                      className="hover:text-primary"
                      variant="body"
                      size="sm"
                    >
                      {link.title}
                    </Typography>
                  </Link>
                  {i < links.length - 1 && (
                    <div className="w-1 h-1 bg-primary rounded-full self-center ml-12"></div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-between">
            <Button onClick={handleSearch} variant="rounded" size="icon">
              <CiSearch />
            </Button>

            <div className="h-10 border-l border-text mx-4"></div>

            <Button variant="rounded" size="icon">
              <TiShoppingCart />
            </Button>

            <Button className="ml-3" variant="secondary" size="lg">
              Login

              <AnimateButton text={<PiArrowUpRight />}></AnimateButton>
            </Button>
          </div>
        </div>
      </main>
      {isSearchDropdown && <SearchDropdown handleSearch={handleSearch}/>}
    </header>
  );
}

export default Header;
