import Hero from "../sections/home/Hero/Hero";
import FeaturedCreations from "../sections/home/FeaturedCreations";
import HowItWorks from "../sections/home/HowItWorks";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import CustomerStories from "../sections/home/CustomerStories";

function Home() {
    return (
        <main>
            <Hero />
            <FeaturedCreations />
            <HowItWorks />
            <WhyChooseUs />
            <CustomerStories />
        </main>
    );
}

export default Home;