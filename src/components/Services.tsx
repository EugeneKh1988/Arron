import Image from "next/image";
import dots from "../../public/dots.svg";
import checklistImage from "../../public/checklist.svg";
import Container from "./Container";
import { Button } from "@mantine/core";
import React from "react";

interface ServicesProps {
  className?: string;
}

const serviceItems = [
  [
    "ремонт ноутбуков",
    "ремонт смартфонов",
    "заправка и ремонт картриджей",
    "установка СНПЧ",
    "ремонт компьютеров",
    "ремонт моноблоков"
  ],
  [
    "ремонт планшетов",
    "ремонт КПК",
    "ремонт мониторов",
    "ремонт принтеров",
    "ремонт роутеров",
    "восстановление жестких дисков",
    "компьютерная помощь и IT аутсорсинги др."
  ],
];

const Services: React.FC<ServicesProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : '';
  
  return (
    <Container className={`mt-60 md:mt-120 ${classNameValue}`}>
      <div className="flex gap-39 md:gap-81 xl:gap-80 4xl:gap-127 flex-col xl:flex-row">
        <div className="text-center md:text-left w-full xl:w-auto md:flex md:gap-42 md:justify-between md:items-center xl:block">
          <h1 className="md:max-w-328 xl:min-w-427 font-bebas font-bold text-[26px] md:text-[40px] 4xl:text-[48px] leading-none md:leading-56 4xl:leading-none">
            Что делать если ноутбук или телефон медлено работает
          </h1>
          <div className="mt-20  md:max-w-333">
            <div className="flex items-center justify-center gap-10">
              <Image
                src={checklistImage}
                alt="Checklist image"
                className="w-35"
              />
              <p className="text-[12px] md:text-[14px] leading-none text-black">
                Получите чек лист - Что делать, если ноутбук или телефон
                грузится
              </p>
            </div>
            <Button className="md:w-full mt-15 md:mt-36 4xl:mt-32 px-30 md:px-63 min-h-50 md:min-h-64 4xl:min-h-80 font-semibold text-[16px] leading-26 text-white bg-alizarin-crimson hover:bg-torch-red hover:shadow-[0_10px_30px_0_#FC142F33]">
              Получить чек лист
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-50 md:gap-y-32 relative">
          {serviceItems.map((colItems, colIndex) => (
            <ul key={colIndex} className="space-y-5 md:space-y-18">
              {colIndex == 0 && (
                <h2 className="hidden xl:block uppercase font-bebas font-bold xl:text-[40px] 4xl:text-[48px] leading-none">
                  наши услуги
                </h2>
              )}
              {colItems.map((item, index) => (
                <li
                  key={`${colIndex}_${index}`}
                  className="flex items-center gap-7 md:gap-12"
                >
                  <span className="size-6 md:size-10 bg-alizarin-crimson rounded-full shrink-0"></span>
                  <p className="text-[14px] md:text-[18px] leading-20 md:leading-24 text-masala">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          ))}
          <div className="absolute right-50 top-50 -z-1 rotate-45">
            <Image src={dots} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
