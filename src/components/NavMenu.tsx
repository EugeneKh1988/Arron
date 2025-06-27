"use client"

import { ActionIcon, Drawer, ScrollArea } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import SvgIcon from "./SvgIcon";
import { NavProps } from "./Nav";
import Link from "next/link";
import { ILink } from "@/lib/interfaces";
import Logo from "../../public/logo.svg";
import MapPin from "../../public/map-pin.svg";
import Image from "next/image";

interface NavMenuProps extends NavProps {
  header: ILink[];
}

const NavMenu: React.FC<NavMenuProps> = ({
  header,
  className,
  activeMenuName,
}) => {
  const classNameValue = className ? `${className}` : "";
  const [opened, { open, close }] = useDisclosure(false);
  const isMaximumWidth = useMediaQuery("(max-width: 28.125em)");

  return (
    <div className={`${classNameValue}`}>
      <Drawer.Root
        opened={opened}
        onClose={close}
        position="left"
        size={isMaximumWidth ? "100%" : "28.125em"}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header className="px-10 pt-15 md:px-55 md:pt-33">
            <Drawer.Title>
              {/* Logo */}
              <div className="flex flex-col">
                <Link href="/">
                  <Image src={Logo} alt="Logo" className="w-202" />
                </Link>
                <p className="-mt-10 text-right uppercase text-[12px] text-[#276CAA] font-medium tracking-[0.12em] leading-12">
                  Toti repara la noi
                </p>
              </div>
            </Drawer.Title>
            <Drawer.CloseButton className="size-48 text-bunker rounded-[15px] bg-white hover:bg-bunker hover:text-white shadow-[0_8px_16px_0_#FF6B0029]" />
          </Drawer.Header>
          <Drawer.Body className="pt-77 md:pt-147 pb-30 md:pb-35 px-9 md:px-24">
            <div className="font-semibold text-[16px] leading-16">
              {header.map((navItem) => (
                <Link
                  href={navItem.href || "#"}
                  key={navItem.name}
                  className={`pb-30 block tracking-[-0.01em] hover:text-alizarin-crimson ${
                    activeMenuName == navItem.name
                      ? "text-alizarin-crimson"
                      : "text-bunker"
                  }`}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
            <div className="mt-49 md:mt-81 flex items-center gap-11">
              <Image src={MapPin} alt="Mappin" className="w-32" />
              <div>
                <p className="text-[14px] md:text-[16px] leading-[1em]">
                  г. Кишинев, ул. Бэнулеску Бодони, д.33
                </p>
                <Link
                  href="#"
                  className="text-[12px] text-fun-blue underline leading-12 mt-1"
                >
                  Мы на карте
                </Link>
              </div>
            </div>
            <div className="mt-23 flex lg:hidden justify-between items-center gap-16">
              {/* Phones */}
              <div className="font-semibold tracking-[-0.01em] text-[20px]">
                <p>069 82 77 38</p>
                <p>079 92 77 38</p>
              </div>
              <ActionIcon
                size={48}
                className="bg-alizarin-crimson/10 hover:bg-alizarin-crimson group rounded-[15px]"
                component={Link}
                href="/contacts"
              >
                <SvgIcon
                  iconName="phone"
                  className="text-alizarin-crimson group-hover:text-white"
                />
              </ActionIcon>
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <ActionIcon
        onClick={open}
        size={48}
        className="text-bunker rounded-[15px] bg-white hover:bg-bunker hover:text-white shadow-[0_8px_16px_0_#FF6B0029]"
      >
        <SvgIcon iconName="bar" className="w-24" />
      </ActionIcon>
    </div>
  );
};

export default NavMenu;

