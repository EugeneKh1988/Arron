import Image from "next/image";
import Container from "./Container";
import { IAdvantageItem } from "@/lib/interfaces";

interface AdvantagesProps {
  className?: string;
}

const advantagesItems: IAdvantageItem[] = [
  {
    title: "Курьер  по городу",
    description: "Выезд курьера Буюканы Чеканы, Рышкановка, центр, Ботаника.",
    imageSrc: "/shipping.svg",
  },
  {
    title: "Подменный телефон -  Беслатно",
    description: "Телефон взамен Беслатно, пока ваш в ремонте",
    imageSrc: "/phone_exchange.svg",
  },
  {
    title: "Забота о вас",
    description: "Незначительные поломки - делаем бесплатно.",
    imageSrc: "/fix.svg",
  },
];

const Advantages: React.FC<AdvantagesProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : '';
  
  return (
    <Container className={`mt-100 ${classNameValue}`}>
      <div className="flex flex-wrap flex-col md:flex-row justify-center gap-44 4xl:gap-107">
        {advantagesItems.map((item, index) => (
          <div
            key={index}
            className="w-full md:max-w-364 text-center md:text-left"
          >
            <Image
              src={item.imageSrc || ""}
              width={80}
              height={80}
              alt={item.title || "Image"}
              className="mx-auto md:mx-0"
            />
            <h5 className="mt-24 font-semibold text-[16px] md:text-[20px] leading-none">
              {item.title}
            </h5>
            <p className="text-[14px] md:text-[18px] leading-24 mt-16 text-masala">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Advantages;
