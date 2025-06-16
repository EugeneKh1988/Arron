import Image from "next/image";
import fire from "../../public/fire.svg";

interface DiscountPercentProps {
  className?: string;
}

const DiscountPercent: React.FC<DiscountPercentProps> = ({ className }) => {
  const classNameValue = className ? { className } : {};
  
  return (
    <div {...classNameValue}>
      <h1 className="mt-44 xl:mt-0 font-bold text-[113px] tracking-[-0.01em] leading-none text-blaze-orange shadow-soft-glow">
        50%
      </h1>
      <Image src={fire} alt="Fire" className="xl:pb-15" />
    </div>
  );
};

export default DiscountPercent;
