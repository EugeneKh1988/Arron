import Image from "next/image";
import waves from "../../public/waves.svg";
import Container from "./Container";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import SvgIcon from "./SvgIcon";
import { IGadgetItem } from "@/lib/interfaces";
import React from "react";

interface GiftsProps {
  className?: string;
}

const giftItems: IGadgetItem[] = [
  {
    title: "Чехлы",
    imageSrc: "/phonecase.png",
  },
  {
    title: "Защитные стёкла",
    imageSrc: "/protectglass.png",
  },
  {
    title: "Кабели",
    imageSrc: "/cable.png",
  },
  {
    title: "Car holder",
    imageSrc: "/car_holder.png",
  },
  {
    title: "Зарядки",
    imageSrc: "/charger.png",
  },
  {
    title: "Наушники",
    imageSrc: "/headphones.png",
  },
  {
    title: "Другие аксессуары",
    imageSrc: "/memory.png",
  },
];

const Gifts: React.FC<GiftsProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : '';

  const gadgetBlock = (item: IGadgetItem) => {
    return (
      <div className="relative">
        <div className="relative">
          <Image
            src={item.imageSrc || ""}
            width={262}
            height={262}
            alt={item.title || ""}
            className="mx-auto"
          />
          {item && item.additionalIconName && (
            <div className="absolute bg-white rounded-full size-92 flex justify-center items-center -right-45 top-1/3 shadow-gadget-icon">
              <SvgIcon iconName={item.additionalIconName || ""} />
            </div>
          )}
        </div>
        <p className="pl-30 md:mt-5 font-semibold text-[20px] md:text-[22px] leading-26 md:leading-30">
          {item.title}
        </p>
        <div className="absolute w-270 md:w-302 h-278 md:h-310 rounded-[30px] top-0 right-0 -z-2 shadow-gadgets -skew-y-6 bg-white/50"></div>
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
    <Container
      className={`mt-79 md:mt-51 2xl:mt-63 relative ${classNameValue}`}
    >
      <h1 className="uppercase font-bebas text-[26px] md:text-[40px] 4xl:text-[80px] leading-26 md:leading-56 4xl:leading-84 font-bold text-center md:text-left xl:max-w-966">
        На каждый ремонт гарантировано подарок на ваш выбор:
      </h1>
      <Carousel
        slideSize={302}
        height={349}
        withIndicators
        nextControlIcon={
          <SvgIcon iconName="chevronRight" className="size-24" />
        }
        previousControlIcon={
          <SvgIcon iconName="chevronLeft" className="size-24" />
        }
        classNames={{
          root: "md:hidden xl:block mt-61 4xl:mt-39",
          container: "gap-10 xl:gap-30",
          slide: "basis-270 xl:basis-302",
          indicator:
            "size-4 bg-masala/40 data-active:size-12 data-active:bg-transparent data-active:border-2 data-active:border-alizarin-crimson",
          indicators: "items-center",
          controls: "hidden md:flex justify-end gap-16 md:-top-95",
          control:
            "size-48 bg-white hover:bg-alizarin-crimson text-alizarin-crimson hover:text-white shadow-gadget-icon",
        }}
      >
        {giftItems.map((gift, index) => (
          <CarouselSlide key={index}>{gadgetBlock(gift)}</CarouselSlide>
        ))}
      </Carousel>
      {/** Grid for tablets */}
      <div className="hidden md:grid md:grid-cols-2 xl:hidden justify-center justify-items-center gap-x-66 gap-y-80">
        {giftItems.map((item, index) => (
          <React.Fragment key={index}>{gadgetBlock(item)}</React.Fragment>
        ))}
      </div>
      {/** Decoration */}
      <div className="absolute left-2/3 top-20 -z-1">
        <Image src={waves} alt="" />
      </div>
    </Container>
  );
};

export default Gifts;
