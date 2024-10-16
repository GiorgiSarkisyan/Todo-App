import { HiMoon } from "react-icons/hi";

export default function Logo() {
  return (
    <div className="flex justify-between  w-[100%]">
      <span className=" text-white font-[700] text-[40px] tracking-[15px] select-none font-josefin text-4xl">
        TODO
      </span>
      <HiMoon size={"40px"} color="white" />
    </div>
  );
}
