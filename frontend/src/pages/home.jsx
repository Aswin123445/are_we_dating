import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import RelationshipOptions from "../components/home/RelationshipOptions";
import Footer from "../components/home/Footer";
import GlobalStyles from "../components/home/GlobalStyles";

export default function Home() {
  const handleNavigate = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#121013] text-[#F3ECE7] selection:bg-[#E29578] selection:text-[#121013]">
      <GlobalStyles />

      <div className="grain pointer-events-none fixed inset-0 z-50 opacity-40" />

      <div className="pointer-events-none fixed left-1/2 top-[30%] -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E29578]/10 blur-[120px]" />

      <Navbar />

      <main id="main-content">
        <Hero />
        <RelationshipOptions onNavigate={handleNavigate} />
      </main>

      <Footer />
    </div>
  );
}
