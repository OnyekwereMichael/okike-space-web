import Faq from "./pages/Faq/Faq"
import Footer from "./pages/Footer/Footer"
import Hero from "./pages/Hero/Hero"
import HowItWorks from "./pages/howItWorks/howItWorks"
import WhyChoose from "./pages/whyChoose/WhyChoose"

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <WhyChoose />
        <HowItWorks />
        <Faq />
        <Footer />
    </div>
  )
}

export default LandingPage
