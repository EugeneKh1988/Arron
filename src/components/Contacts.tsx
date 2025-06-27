import Image from "next/image";
import entranceImg from "../../public/entrance.png";
import Container from "./Container";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import SvgIcon from "./SvgIcon";
import { ActionIcon, Rating } from "@mantine/core";
import { IContact } from "@/lib/interfaces";
import React from "react";
import Link from "next/link";

interface ContactsProps {
  className?: string;
}

const workerPhotos: string[] = [
    "/worker2.png",
    "/worker2.png",
    "/worker2.png",
]; 

const contactData: IContact[] = [
    {
        values: ["069 82 77 38", "/", "079 92 77 38"],
        imageSrc: "/call.svg"
    },
    {
        value: "info@arron.md",
        imageSrc: "/mail.svg"
    },
    {
        value: "г. Кишинев, ул. Бэнулеску Бодони, д.33",
        imageSrc: "/addr.svg"
    }
];

const socialLinks = [
  {
    link: "https://www.instagram.com",
    iconName: "instagram",
  },
  {
    link: "https://www.facebook.com",
    iconName: "facebook",
  },
  {
    link: "https://www.tiktok.com",
    iconName: "tiktok",
  },
  {
    link: "https://www.youtube.com",
    iconName: "youtube",
  },
];

const Contacts: React.FC<ContactsProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : '';
  
  return (
    <div className="bg-[#EBF3F8] mt-93 md:mt-120 xl:mt-116 pb-20">
      <Container className={`pt-40 ${classNameValue}`}>
        <h1 className="text-center md:text-left font-bebas uppercase font-bold text-[26px] md:text-[56px] leading-none">
          наши контакты
        </h1>
        <div className="mt-48 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-51 md:gap-60 xl:gap-111">
          <Carousel
            controlSize={48}
            withIndicators
            nextControlIcon={
              <SvgIcon iconName="chevronRight" className="size-24" />
            }
            previousControlIcon={
              <SvgIcon iconName="chevronLeft" className="size-24" />
            }
            classNames={{
              root: "",
              slide: "basis-full",
              indicator:
                "size-4 bg-masala/40 data-active:size-12 data-active:bg-transparent data-active:border-2 data-active:border-alizarin-crimson",
              indicators: "flex items-center -bottom-32 xl:-bottom-25",
              controls:
                "hidden xl:flex justify-between items-center gap-16 px-0 -mx-24",
              control:
                "size-48 bg-white hover:bg-alizarin-crimson text-alizarin-crimson hover:text-white shadow-gadget-icon",
            }}
          >
            {workerPhotos.map((photoSrc, index) => (
              <CarouselSlide key={index}>
                <div className="relative">
                  <Image
                    src={photoSrc}
                    width={594}
                    height={576}
                    alt=""
                    className="rounded-[15px] 4xl:ml-auto"
                  />
                </div>
              </CarouselSlide>
            ))}
          </Carousel>
          <div className="relative">
            <Image src={entranceImg} alt="Entrance photo" />
            <div className="absolute flex justify-center items-center left-0 top-0 right-0 bottom-0">
              <div className="size-72 bg-white/50 rounded-full flex justify-center items-center">
                <ActionIcon className="size-56 bg-white hover:bg-alizarin-crimson text-alizarin-crimson hover:text-white flex justify-center items-center rounded-full shadow-gadget-icon">
                  <SvgIcon iconName="play" className="size-18" />
                </ActionIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-67 md:mt-87 xl:mt-90 rounded-[30px] bg-white px-14 pb-43 pt-30 md:px-27 md:pb-34 md:pt-42 xl:px-69 xl:pb-42 xl:pt-55">
          {/** Address */}
          <div className="flex flex-col md:flex-row gap-20 md:gap-5 items-center md:items-start md:justify-between">
            {contactData.map((contactItem, index) => (
              <div
                key={index}
                className="flex flex-col xl:flex-row xl:gap-16 items-center justify-center md:min-w-220"
              >
                <Image
                  src={contactItem.imageSrc || "#"}
                  width={56}
                  height={56}
                  alt=""
                  className="mb-10 md:mb-16 xl:mb-0 shrink-0"
                />
                {contactItem.values && (
                  <div className="xl:flex xl:gap-12 space-y-5">
                    {contactItem.values.map((value, indexValue) => (
                      <React.Fragment key={`${index}_${indexValue}`}>
                        {value == "/" ? (
                          <p className="hidden xl:block font-medium text-[20px] leading-none text-black/20">
                            {value}
                          </p>
                        ) : (
                          <p className="text-center xl:text-left font-medium text-[18px] xl:text-[20px] leading-none">
                            {value}
                          </p>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {contactItem.value && (
                  <p className="text-center xl:text-left font-medium text-[18px] xl:text-[20px] leading-none">
                    {contactItem.value}
                  </p>
                )}
              </div>
            ))}
          </div>
          {/** Social links */}
          <div className="flex flex-col md:flex-row gap-54 md:gap-80 xl:gap-244 items-center md:items-start mt-45 md:mt-54 xl:mt-34">
            <div className="text-center md:text-left">
              <h5 className="font-semibold text-[20px] leading-none">
                Рейтинг сервиса
              </h5>
              <Rating
                defaultValue={4.5}
                fractions={2}
                size={30}
                color="#FFD66B"
                className="mx-auto md:mx-0 mt-16"
              />
              <p className="mx-auto md:mx-0 mt-8 text-[18px] leading-24 text-masala">
                4.8/5.0 - 403 голоса
              </p>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-semibold text-[20px] leading-none">
                Мы в соцсетях
              </h5>
              <div className="flex mx-auto md:mx-0 mt-22 gap-15">
                {socialLinks.map((linkItem, index) => (
                  <Link
                    href={linkItem?.link || "#"}
                    key={index}
                    className="shrink-0 size-35 bg-[#005AAA] rounded-full flex justify-center items-center"
                  >
                    <SvgIcon iconName={linkItem?.iconName || ""} className="text-goldenrod" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
