import Image from "next/image";
import fire from "../../public/fire.svg";
import Container from "./Container";
import { Button, TextInput } from "@mantine/core";

interface DiagnosticFormProps {
  className?: string;
}

const DiagnosticForm: React.FC<DiagnosticFormProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : '';
  
  return (
    <Container className={`mt-107 md:mt-138 xl:mt-84${classNameValue}`}>
      <div className="rounded-[30px] border border-[#C7D1D7] p-20 md:p-40 xl:px-111 xl:py-48">
        <div className="pl-10 flex items-start -mt-60 md:-mt-105 bg-white max-w-145 md:max-w-190 mx-auto md:ml-auto md:mr-0 xl:mr-auto xl:ml-0">
          <h1 className="font-bebas font-bold text-[80px] md:text-[113px] tracking-[-0.01em] leading-none text-blaze-orange shadow-soft-glow">
            50%
          </h1>
          <Image src={fire} alt="Fire" className="xl:pb-15" />
        </div>
        <div className="flex gap-24 xl:gap-60 flex-col xl:flex-row xl:justify-between xl:items-center">
          <div className="text-center md:text-left w-full xl:w-auto">
            <h1 className="font-bebas text-[24px] md:text-[48px] md:max-w-463 xl:max-w-377 leading-none uppercase">
              Записаться на диагностику в{" "}
              <span className="text-alizarin-crimson">удобное</span> вам время
            </h1>
          </div>
          <div className="xl:min-w-524">
            <div className="flex flex-col md:flex-row gap-17 md:gap-30 xl:gap-24">
              <TextInput
                placeholder="День"
                classNames={{
                  root: "w-full",
                  input:
                    "min-h-48 md:min-h-64 text-[14px] leading-26 pl-24 text-bunker placeholder:text-storm-dust border border-[#DADADA] focus:border-[#867E7E]",
                }}
              />
              <TextInput
                placeholder="Время"
                classNames={{
                  root: "w-full",
                  input:
                    "min-h-48 md:min-h-64 text-[14px] leading-26 pl-24 text-bunker placeholder:text-storm-dust border border-[#DADADA] focus:border-[#867E7E]",
                }}
              />
            </div>
            <TextInput
              placeholder="Телефон"
              classNames={{
                root: "w-full mt-17",
                input:
                  "min-h-48 md:min-h-64 text-[14px] leading-26 pl-24 text-bunker placeholder:text-storm-dust border border-[#DADADA] focus:border-[#867E7E]",
              }}
            />
            <Button className="w-full md:w-auto mt-19 md:mt-24 xl:mt-20 px-30 md:px-71 min-h-48 md:min-h-64 font-semibold text-[14px] md:text-[16px] leading-28 text-white bg-alizarin-crimson hover:bg-torch-red hover:shadow-[0_10px_30px_0_#FC142F33]">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DiagnosticForm;
