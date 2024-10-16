import Header from "../components/Header";
import Main from "../components/Main";
import "../index.css";

export default function Home() {
  return (
    <div className="max-w-[1440px] h-screen mx-auto">
      <Header />
      <Main />
    </div>
  );
}
