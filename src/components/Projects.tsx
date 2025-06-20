import Image from "next/image";
import waves from "../../public/waves.svg";
import Container from "./Container";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import SvgIcon from "./SvgIcon";

interface ProjectsProps {
  className?: string;
}

const projectsPhotos: string[] = [
    "/project1.png",
    "/project2.png",
    "/project3.png",
    "/project1.png",
]; 

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : '';
  
  return (
    <div className="bg-[#EBF3F8] mt-60 md:mt-46 2xl:mt-121 pt-80">
      <Container
        className={`relative ${classNameValue}`}
      >
        <h1 className="uppercase font-bebas text-[26px] md:text-[40px] 4xl:text-[56px] leading-26 md:leading-56 font-bold text-center md:text-left">
          Выполненные заказы
        </h1>
        <Carousel
          slideSize={412}
          withIndicators
          nextControlIcon={
            <SvgIcon iconName="chevronRight" className="size-24" />
          }
          previousControlIcon={
            <SvgIcon iconName="chevronLeft" className="size-24" />
          }
          classNames={{
            root: "mt-37 md:mt-45 4xl:mt-39",
            container: "gap-10 md:gap-19 xl:gap-32",
            viewport: "h-226 md:h-404 xl:h-448",
            slide: "basis-226 md:basis-340 xl:basis-412",
            indicator:
              "size-4 bg-masala/40 data-active:size-12 data-active:bg-transparent data-active:border-2 data-active:border-alizarin-crimson",
            indicators: "hidden md:flex items-center",
            controls: "hidden md:flex justify-end gap-16 md:-top-95",
            control:
              "size-48 bg-white hover:bg-alizarin-crimson text-alizarin-crimson hover:text-white shadow-gadget-icon",
          }}
        >
          {projectsPhotos.map((photoSrc, index) => (
            <CarouselSlide key={index}>
              <div className="relative">
                <Image
                  src={photoSrc}
                  width={412}
                  height={400}
                  alt=""
                  className="rounded-[15px] max-w-226 md:max-w-350 xl:max-w-none object-contain"
                />
              </div>
            </CarouselSlide>
          ))}
        </Carousel>
        {/** Decoration */}
        <div className="absolute left-2/3 bottom-0">
          <Image src={waves} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Projects;
