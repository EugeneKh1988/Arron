
interface ContainerProps {
    children: React.ReactNode,
    className?: string,
}


const Container: React.FC<ContainerProps> = ({ children, className, }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <div
      className={`container px-11 md:px-24 4xl:px-30 mx-auto ${classNameValue}`}
    >
      {children}
    </div>
  );
};

export default Container;

