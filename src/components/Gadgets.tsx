import Image from "next/image";
import Container from "./Container";
import SvgIcon from "./SvgIcon";
import { ActionIcon } from "@mantine/core";
import Link from "next/link";
import { IGadgetItem } from "@/lib/interfaces";
import React from "react";
import { Carousel, CarouselSlide } from "@mantine/carousel";

interface GadgetsProps {
  className?: string;
}

const gadgetItems: IGadgetItem[] = [
  {
    title: "Apple",
    imageSrc: "/apple.png",
    additionalIconName: "apple",
    url: "/devices/apple",
    decorationImage: {
      src: "/dots.svg",
      size: {
        width: 77,
        height: 77
      }
    },
  },
  {
    title: "Android",
    imageSrc: "/android.png",
    additionalIconName: "android",
    url: "/devices/android",
    decorationImage: {
      src: "/waves.svg",
      size: {
        width: 98,
        height: 62
      }
    },
  },
  {
    title: "Гаджетами",
    imageSrc: "/watch.png",
    url: "/devices/gadget",
    decorationImage: {
      src: "/el1.svg",
      size: {
        width: 215,
        height: 192
      }
    },
  },
  {
    title: "Ноутбуками",
    imageSrc: "/laptop.png",
    url: "/devices/laptop",
    decorationImage: {
      src: "/el2.svg",
      size: {
        width: 183,
        height: 170
      }
    },
  },
  {
    title: "Моноблоками и PC",
    imageSrc: "/monoblock.png",
    url: "/devices/pc",
    decorationImage: {
      src: "/el3.svg",
      size: {
        width: 193,
        height: 183
      }
    },
  },
  {
    title: "Другими устройствами",
    imageSrc: "/gamepad.png",
    url: "/devices/other",
    decorationImage: {
      src: "/el4.svg",
      size: {
        width: 187,
        height: 200
      }
    },
  },
];

const Gadgets: React.FC<GadgetsProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : '';

  const gadgetBlock = (item: IGadgetItem) => {
    return (
      <div className="relative pr-30">
        <div className="relative">
          <Image
            src={item.imageSrc || ""}
            width={199}
            height={240}
            alt={item.title || ""}
            className="max-h-243 mx-auto"
          />
          {item && item.additionalIconName && (
            <div className="absolute bg-white rounded-full size-92 flex justify-center items-center -right-45 top-1/3 shadow-gadget-icon">
              <SvgIcon iconName={item.additionalIconName || ""} />
            </div>
          )}
        </div>
        <p className="mt-16 font-semibold text-[20px] md:text-[22px] leading-26 md:leading-30">
          {item.title}
        </p>
        <div className="absolute w-270 md:w-302 h-278 md:h-310 rounded-[30px] top-0 right-0 -z-2 shadow-gadgets -skew-y-6"></div>
        {/** Link */}
        <div className="absolute size-64 bg-white/50 rounded-full flex justify-center items-center right-0 -bottom-40">
          <ActionIcon
            href={item.url || "#"}
            component={Link}
            className="size-40 bg-white hover:bg-alizarin-crimson text-alizarin-crimson hover:text-white flex justify-center items-center rounded-full shadow-gadget-icon"
          >
            <SvgIcon iconName="chevronRight" className="size-24" />
          </ActionIcon>
        </div>
        {/** Decoration */}
        {item && item.decorationImage && (
          <div className="absolute -z-1 top-0 bottom-0 left-0 right-0">
            <Image
              src={item.decorationImage.src}
              width={item.decorationImage.size.width}
              height={item.decorationImage.size.height}
              alt=""
            />
          </div>
        )}
      </div>
    );
  };
  
  return (
    <Container className={`mt-83 xl:mt-139 ${classNameValue}`}>
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 justify-center justify-items-center gap-60 gap-y-70 4xl:gap-30">
        <div className="md:col-span-2 justify-self-start">
          <h2 className="font-bebas font-bold text-[26px] md:text-[40px] 4xl:text-[80px] 4xl:leading-84 leading-26 md:leading-40 2xl:max-w-500 uppercase">
            Мы работаем c устройствами:
          </h2>
        </div>
        {gadgetItems.map((item, index) => (
          <React.Fragment key={index}>{gadgetBlock(item)}</React.Fragment>
        ))}
      </div>
      <div className="md:hidden">
        <h2 className="font-bebas font-bold text-[26px] leading-26 uppercase text-center">
          Мы работаем c устройствами:
        </h2>
        <Carousel
          height={349}
          slideSize={270}
          withControls={false}
          withIndicators
          classNames={{
            root: "mt-40",
            container: "gap-60",
            indicator:
              "size-4 bg-masala/40 data-active:size-12 data-active:bg-transparent data-active:border-2 data-active:border-alizarin-crimson",
            indicators: "items-center"
          }}
        >
          {gadgetItems.map((item, index) => (
            <CarouselSlide key={index}>{gadgetBlock(item)}</CarouselSlide>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Gadgets;
