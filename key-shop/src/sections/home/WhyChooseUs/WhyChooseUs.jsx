// WhyChooseUs.jsx
import FeatureCard from "../../../components/FeatureCard/FeatureCard";
import styles from "./WhyChooseUs.module.css";

function WhyChooseUs() {
  const features = [
    {
        id: 1,
        icon: "❤️",
        title: "Handcrafted with Care",
        description:
            "Every keepsake is carefully handmade with attention to every detail.",
    },
    {
        id: 2,
        icon: "✨",
        title: "Fully Personalized",
        description:
            "Customize names, dates, photos, and meaningful messages to make every piece unique.",
    },
    {
        id: 3,
        icon: "🎁",
        title: "Gift Ready",
        description:
            "Beautifully packaged, making every keepsake ready to gift from the moment it arrives.",
    },
    {
        id: 4,
        icon: "🌿",
        title: "Premium Materials",
        description:
            "Crafted using carefully selected materials designed to last for years.",
    },
];

  return (
    <section className={styles.whyChooseUs}>
      <span className={styles.eyebrow}>Why Choose Echo & Ember</span>
      <h2>Small enough to carry, big enough to remember</h2>
      <p className={styles.subtitle}>
        Thoughtfully handcrafted to celebrate memories you'll carry every day
      </p>

      <div className={styles.grid}>
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;