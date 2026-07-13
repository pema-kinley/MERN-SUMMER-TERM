import Hero from "../sections/home/Hero/Hero";
import FeaturedCreations from "../sections/home/FeatureCreation/FeaturedCreations";
import HowItWorks from "../sections/home/HowItWorks/HowItWorks";
import WhyChooseUs from "../sections/home/WhyChooseUs/WhyChooseUs";
import CustomerStories from "../sections/home/CustomerStories/CustomerStories";
import FinalCTA from "../sections/home/FinalCTA/FinalCTA";
import Footer from "../sections/home/Footer/Footer";

function Home() {
    return (
        <main>
            <Hero />
            <FeaturedCreations />
            <HowItWorks />
            <WhyChooseUs />
            <CustomerStories />
            <FinalCTA />
            <Footer />
        </main>
    );
}

export default Home;