import { Button } from "@mantine/core";
import Container from "./Container";
import Image from "next/image";
import masterImg from "../../public/master.png";
import elementsImg from "../../public/elements.svg";
import HeroTimer from "./HeroTimer";
import DiscountPercent from "./DiscountPercent";

interface HeroProps {
    className?: string,
}


const Hero: React.FC<HeroProps> = ({ className, }) => {
  const classNameValue = className ? {className} : {};
  return (
    <Container {...classNameValue}>
      <div className="xl:mt-139 flex flex-col xl:flex-row xl:relative xl:justify-center items-center">
        <div className="relative xl:static w-full xl:max-w-765 xl:order-last">
          <div className="md:max-w-476 xl:max-w-609 mx-auto xl:mx-0 xl:relative">
            <Image src={masterImg} alt="Master" />
            <div className="hidden xl:block max-w-264 rounded-[30px] bg-white absolute right-0 top-1/3 px-20 pb-30 shadow-blaze-orange-500 shadow-xs">
              <DiscountPercent className="flex justify-center -mt-60 items-end" />
              <div>
                <p className="text-[16px] md:text-[20px] leading-22 md:leading-26 tracking-[-0.01em] md:max-w-213">
                  скидка на ремонт телефонов, ноутбуков и планшетов до{" "}
                  <span className="font-bold">-50%</span>
                </p>
                <p className="mt-20 text-[20px] leading-none tracking-[-0.01em] text-bunker/50">
                  Конец акции:
                </p>
                <HeroTimer className="mt-6" />
              </div>
            </div>
          </div>
          <div className="absolute -z-1 top-0 left-0 right-0 bottom-0">
            <Image src={elementsImg} alt="Elements" className="h-full" />
          </div>
        </div>
        <div className="text-center xl:text-left w-full xl:max-w-625">
          <h1 className="font-bold text-[32px] md:text-[70px] 4xl:text-[110px] leading-none 4xl:leading-100 tracking-[-0.01em]">
            Проблемы с Вашим устройством?
          </h1>
          <div className="mt-10 4xl:mt-20 mx-auto xl:mx-0 text-center xl:text-left max-w-393 text-masala text-[24px] leading-34 tracking-[-0.01em]">
            <p>Решаем любые проблемы!</p>
            <p>Большой склад и опытные мастера</p>
          </div>
          <Button className="mt-30 px-20 md:px-30 min-h-48 md:min-h-64 font-semibold text-[14px] md:text-[16px] leading-28 tracking-[-0.01em] text-white bg-alizarin-crimson hover:bg-torch-red hover:shadow-[0_10px_30px_0_#FC142F33]">
            Бесплатная консультация
          </Button>
          {/** Discount */}
          <DiscountPercent className="flex justify-center md:hidden" />
          <div className="md:flex xl:hidden gap-43 items-center bg-white rounded-[30px] text-center md:text-left px-25 py-25 pt-64 pb-30 shadow-timer -mt-60 md:mt-40">
            {/** Discount */}
            <DiscountPercent className="hidden md:flex justify-center" />
            <div>
              <p className="text-[16px] md:text-[20px] leading-22 md:leading-26 tracking-[-0.01em] md:max-w-328">
                скидка на ремонт телефонов, ноутбуков и планшетов до{" "}
                <span className="font-bold">-50%</span>
              </p>
              <p className="mt-20 text-[20px] leading-none tracking-[-0.01em] text-bunker/50">
                Конец акции:
              </p>
              <HeroTimer className="mt-6" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

