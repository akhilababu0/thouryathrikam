import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";

export default function Layout({children, home}) {
  return (
    <div className="flex flex-col relative">
      {!home && <Header />}
      <div className="z-20">
        {children}
      </div>
      <Footer/>
    </div>
  )
}
