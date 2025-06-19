import Header from "./components/layout/Header";
import MainApp from "./components/layout/MainApp";
import SideBar from "./components/layout/SideBar";
import PrefetchComponent from "./utils/PrefetchComponent";

export default function Home() {
  return (
    <div className="">
      <SideBar />
      <Header />
      <PrefetchComponent>

        <MainApp />
      </PrefetchComponent>
    </div>
  );
}
