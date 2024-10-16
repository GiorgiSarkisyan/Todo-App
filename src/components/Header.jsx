import LightBackground from "../../public/LightBackground.jpg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-0">
      <img
        src={LightBackground}
        alt="Light Background"
        className="object-cover min-h-[274px] w-full max-w-[1600px] mx-auto"
      />
    </header>
  );
}
