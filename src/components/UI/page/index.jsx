import Header from "../Header";
import Footer from "../Footer";

export default function Page({ children }) {
  return (
    <div className="ESTE ES MI PAGE">
      <Header />
      <h1>BBVA</h1>
      {...children}
      <Footer />
    </div>
  );
}
