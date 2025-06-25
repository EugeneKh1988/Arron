import Image from "next/image";
import dots from "../../public/dots.svg";
import Container from "./Container";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import SvgIcon from "./SvgIcon";

interface WorkersProps {
  className?: string;
}

const workerPhotos: string[] = [
    "/worker1.png",
    "/worker1.png",
    "/worker1.png",
]; 

const Workers: React.FC<WorkersProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container
      className={`mt-70 md:mt-149 2xl:mt-145 relative ${classNameValue}`}
    >
      <div>
        <p className="relative font-medium text-[16px] md:text-[24px] leading-24 md:leading-32 md:tracking-[0.01em] md:max-w-700 mx-auto">
          В нашей компании работают лучшие специалисты, которые прекрасно
          разбираются в современных технологиях и имеют более 3-х лет опыта
          работы.
          <span className="absolute left-0 -top-20 md:-left-16 md:bottom-full  text-[#3D8AFF] text-4xl md:text-[44px] select-none">
            ❝
          </span>
          <span className="absolute top-full right-0 md:-right-16 text-[#3D8AFF] text-4xl md:text-[44px] select-none">
            ❞
          </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center mt-40 md:mt-48 xl:mt-56 gap-40 md:gap-22 xl:gap-155">
        <div className="order-last md:order-first text-[14px] md:text-[18px] leading-22 md:leading-24 text-storm-dust space-y-10 md:space-y-24">
          <p>
            За счет этого мы гарантируем устранение любых неполадок и
            предоставляем гарантию на все выполненные работы.
          </p>
          <p>
            Мы поможем не только восстановить работоспособность техники, но и
            подскажем, как избежать возникновения подобных поломок в будущем.
          </p>
          <p>
            Квалифицированная консультация специалиста поможет безопасно
            пользоваться компьютером. В нашем штате работают опытные
            специалисты.
          </p>
        </div>
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
            viewport: "",
            slide: "basis-full",
            indicator:
              "size-4 bg-masala/40 data-active:size-12 data-active:bg-transparent data-active:border-2 data-active:border-alizarin-crimson",
            indicators: "flex items-center -bottom-32 xl:-bottom-25",
            controls: "hidden xl:flex justify-between items-center gap-16",
            control:
              "size-48 bg-white hover:bg-alizarin-crimson text-alizarin-crimson hover:text-white shadow-gadget-icon",
          }}
        >
          {workerPhotos.map((photoSrc, index) => (
            <CarouselSlide key={index}>
              <div className="relative">
                <Image
                  src={photoSrc}
                  width={635}
                  height={480}
                  alt=""
                  className="rounded-[15px]"
                />
              </div>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
      {/** Decoration */}
      <div className="absolute right-2/3 bottom-0 -z-1 rotate-45">
        <Image src={dots} alt="" />
      </div>
    </Container>
  );
};

export default Workers;
