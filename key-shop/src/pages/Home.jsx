import Hero from "../sections/home/Hero/Hero";
import FeaturedCreations from "../sections/home/FeatureCreation/FeaturedCreations";
import HowItWorks from "../sections/home/HowItWorks";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import CustomerStories from "../sections/home/CustomerStories/CustomerStories";

function Home() {
    return (
        <main>
            <Hero />
            <FeaturedCreations />
            <CustomerStories />
            <HowItWorks />
            <WhyChooseUs />
        </main>
    );
}

export default Home;