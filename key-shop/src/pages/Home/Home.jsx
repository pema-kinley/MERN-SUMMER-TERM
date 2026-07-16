import Hero from "./sections/Hero/Hero";
import FeaturedCreations from "./sections/FeatureCreation/FeaturedCreations";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import WhyChooseUs from "./sections/WhyChooseUs/WhyChooseUs";
import CustomerStories from "./sections/CustomerStories/CustomerStories";
import FinalCTA from "./sections/FinalCTA/FinalCTA";
import Footer from "./sections/Footer/Footer";

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