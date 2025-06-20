import Image from "next/image";
import dots from "../../public/dots.svg";
import Container from "./Container";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { ActionIcon } from "@mantine/core";
import SvgIcon from "./SvgIcon";

interface ReviewsProps {
  className?: string;
}

const clientsPhotos: string[] = [
    "/client1.png",
    "/client2.png",
    "/client3.png",
    "/client4.png",
    "/client1.png",
]; 

const Reviews: React.FC<ReviewsProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : '';
  
  return (
    <Container
      className={`mt-60 md:mt-46 2xl:mt-121 relative ${classNameValue}`}
    >
      <h1 className="uppercase font-bebas text-[26px] md:text-[40px] 4xl:text-[56px] leading-26 md:leading-56 font-bold text-center md:text-left">
        Отзывы счастливых клиентов
      </h1>
      <Carousel
        slideSize={302}
        slideGap={30}
        height={280}
        withIndicators
        nextControlIcon={
          <SvgIcon iconName="chevronRight" className="size-24" />
        }
        previousControlIcon={
          <SvgIcon iconName="chevronLeft" className="size-24" />
        }
        classNames={{
          root: "mt-37 md:mt-45 4xl:mt-39",
          indicator:
            "size-4 bg-masala/40 data-active:size-12 data-active:bg-transparent data-active:border-2 data-active:border-alizarin-crimson",
          indicators: "items-center",
          controls: "hidden md:flex justify-end gap-16 md:-top-95",
          control:
            "size-48 bg-white hover:bg-alizarin-crimson text-alizarin-crimson hover:text-white shadow-gadget-icon",
        }}
      >
        {clientsPhotos.map((photoSrc, index) => (
          <CarouselSlide key={index}>
            <div className="relative">
              <Image
                src={photoSrc}
                width={302}
                height={250}
                alt=""
                className="rounded-[15px]"
              />
              <div className="absolute flex justify-center items-center left-0 top-0 right-0 bottom-0">
                <div className="size-72 bg-white/50 rounded-full flex justify-center items-center">
                  <ActionIcon className="size-56 bg-white hover:bg-alizarin-crimson text-alizarin-crimson hover:text-white flex justify-center items-center rounded-full shadow-gadget-icon">
                    <SvgIcon iconName="play" className="size-18" />
                  </ActionIcon>
                </div>
              </div>
            </div>
          </CarouselSlide>
        ))}
      </Carousel>
      {/** Decoration */}
      <div className="absolute left-2/3 bottom-0 -z-1">
        <Image src={dots} alt="" />
      </div>
    </Container>
  );
};

export default Reviews;
