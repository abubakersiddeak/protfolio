import Hero from "./component/Hero";
import Icon from "./component/Icon";

import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="bg-black rounded-2xl ">
      <Hero />

      <Icon />

      <Footer />
    </div>
  );
}
