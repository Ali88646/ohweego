import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <div className={twMerge("text-2xl font-semibold", className)}>Ohweego</div>
  );
};

export default Logo;
