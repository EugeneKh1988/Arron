import Image from "next/image";
import waves from "../../public/waves.svg";
import Container from "./Container";
import { IAdvantageItem } from "@/lib/interfaces";
import { Button } from "@mantine/core";
import SvgIcon from "./SvgIcon";

interface AboutProps {
  className?: string;
}

const features: IAdvantageItem[] = [
  {
    title: "Выезжаем в любую точку Кишинева",
    description: "Выезд курьера Буюканы Чеканы, Рышкановка, центр, Ботаника.",
    imageSrc: "/shipping.svg",
  },
  {
    title: "Работы от 30 минут",
    description: "Время работы или настройки занимает от 30 минут до несколько часов.",
    imageSrc: "/shipping.svg",
  },
  {
    title: "Удобный способ оплаты",
    description: "Оплата наличными или по перечеслению компаниям.",
    imageSrc: "/payment.svg",
  },
  {
    title: "Гарантия на все выполненые услуги",
    description: "Запчасти, фотографии и сообщения под Вашим контролем. После работ инженер отдаст Вам старые запчасти.",
    imageSrc: "/secure.svg",
  },
];

const About: React.FC<AboutProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : '';
  
  return (
    <div className="bg-[#EBF3F8] mt-60 md:mt-120 pt-60 md:pt-80">
      <Container className={` ${classNameValue}`}>
        <div className="flex gap-48 xl:gap-60 flex-col xl:flex-row">
          <div className="text-center md:text-left w-full xl:w-auto md:flex md:justify-between md:items-center xl:block">
            <div className="md:min-w-317 4xl:min-w-333">
              <h1 className="font-bebas font-bold text-[26px] md:text-[40px] 4xl:text-[80px] leading-none">
                О компании Arron
              </h1>
              <p className="mt-10 md:mt-16 4xl:mt-24 text-[16px] md:text-[18px] 4xl:text-[24px] leading-22 md:leading-24 4xl:leading-30 text-masala">
                Узнайте о нашей компании больше из видео за 1 минуту.
              </p>
            </div>
            <Button
              rightSection={<SvgIcon iconName="play" />}
              className="shrink-0 mt-20 4xl:mt-64 px-20 md:px-30 min-h-48 md:min-h-64 font-semibold text-[14px] md:text-[16px] leading-26 text-white bg-alizarin-crimson hover:bg-torch-red hover:shadow-[0_10px_30px_0_#FC142F33]"
            >
              Смотреть
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-x-50 md:gap-y-32 relative">
            {features.map((item, index) => (
              <div key={index} className="text-center md:text-left">
                <Image
                  src={item.imageSrc || "#"}
                  width={80}
                  height={80}
                  alt={item.title || ""}
                  className="size-80 mx-auto md:mx-0"
                />
                <h4 className="mt-10 md:mt-24 text-[16px] md:text-[20px] leading-22 md:leading-none font-semibold">
                  {item.title}
                </h4>
                <p className="mt-6 md:mt-16 text-[14px] md:text-[18px] leading-18 md:leading-24 text-masala">
                  {item.description}
                </p>
              </div>
            ))}
            <div className="absolute right-30 bottom-50">
              <Image src={waves} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
