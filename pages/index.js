import Navbar from "../components/shared/Navbar";
import Registre from "../components/registre/Registre";
import Footer from "../components/shared/Footer";
export default function Home() {
  return (
    <div>
      <Navbar signout={false} />
      <Registre />
      <Footer />
    </div>
  );
}
