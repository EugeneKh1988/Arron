import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { ILink } from "@/lib/interfaces";
import Logo from "../../public/logo.svg";
import MapPin from "../../public/map-pin.svg";
import { ActionIcon } from "@mantine/core";
import SvgIcon from "./SvgIcon";
import NavMenu from "./NavMenu";

export interface NavProps {
  activeMenuName: string;
  className?: string;
}

const headerMenu: ILink[] = [
  {
    name: "Наши услуги",
    href: "/services",
  },
  {
    name: "О компании",
    href: "/about",
  },
  {
    name: "Отзывы",
    href: "/reviews",
  },
  {
    name: "Выполненные заказы",
    href: "/projects",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];

const Nav: React.FC<NavProps> = ({ className, activeMenuName }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <div className={`${classNameValue}`}>
      <Container>
        <div className="flex justify-end lg:justify-between items-center pt-10 md:pt-14 3xl:pt-30 gap-10">
          <div className="hidden lg:flex justify-between items-center gap-40 2xl:gap-50 shrink">
            {/* Logo */}
            <div className="flex flex-col">
              <Link href="/">
                <Image src={Logo} alt="Logo" className="w-202" />
              </Link>
              <p className="-mt-10 text-right uppercase text-[12px] text-[#276CAA] font-medium tracking-[0.12em] leading-12">Toti repara la noi</p>
            </div>
            {/* Menu */}
            <ul className="hidden 3xl:block">
              {headerMenu.map((linkItem, index) => (
                <li
                  key={index}
                  className={`mx-24 inline-block font-semibold text-[16px] group ${
                    activeMenuName == linkItem.name
                      ? "text-alizarin-crimson"
                      : "text-bunker"
                  }`}
                >
                  <Link
                    href={linkItem.href || "#"}
                    className="py-25 block leading-16 border-b border-b-white tracking-[-0.01em]  group-hover:text-alizarin-crimson group-hover:border-b group-hover:border-b-alizarin-crimson"
                  >
                    {linkItem.name}
                  </Link>
                </li>
              ))}
            </ul>
            <NavMenu
              header={headerMenu}
              activeMenuName={activeMenuName}
              className="3xl:hidden"
            />
          </div>
          <div className="hidden lg:flex gap-35 items-center justify-end">
            {/* Address */}
            <div className="flex items-center gap-16">
              <Image src={MapPin} alt="Mappin" className="w-32" />
              <div>
                <p className="text-[14px] leading-14">
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
            {/* Phones */}
            <div className="flex gap-16 items-center font-semibold tracking-[-0.01em] text-[20px]">
              <p>069 82 77 38</p>
              <p className="text-black/20">/</p>
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
          {/*for mobile devices */}
          <NavMenu
            header={headerMenu}
            activeMenuName={activeMenuName}
            className="lg:hidden"
          />
        </div>
      </Container>
    </div>
  );
};

export default Nav;
