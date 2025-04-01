import Hero from "./component/Hero";
import Icon from "./component/Icon";

import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <div className="bg-black rounded-2xl ">
      <Navbar />
      <Hero />

      <Icon />

      <Footer />
    </div>
  );
}
