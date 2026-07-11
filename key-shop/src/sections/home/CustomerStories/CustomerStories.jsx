// Customerstories.jsx
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import styles from "./Customerstories.module.css";

const storiesData = [
  {
    id: 1,
    name: "Shoyo Tanaka",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    rating: 5,
    review: "Beautiful craftsmanship! The custom flowers look perfect, making it a wonderful keepsake.",
    location: "Tokyo, Japan"
  },
  {
    id: 2,
    name: "Pema Sonam",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 4.8,
    review: "Stunning craftsmanship! The hand-stamped initials are perfectly aligned. Highly recommend.",
    location: "Thimphu, Bhutan"
  },
  {
    id: 3,
    name: "Melam Choden",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    review: "Great anniversary gift! The hand-painted wooden detail is incredible and it feels sturdy.",
    location: "Paro, Bhutan"
  }
];

export default function CustomerStories() {
  return (
    <section className={styles.container}>
      <p className={styles.eyebrow}>Reviews from the keyring</p>
      <h3>Small charms, well loved</h3>
      <div className={styles.grid}>
        {storiesData.map((story) => (
          <TestimonialCard
            key={story.id}
            name={story.name}
            profileImage={story.profileImage}
            rating={story.rating}
            review={story.review}
            location={story.location}
          />
        ))}
      </div>
    </section>
  );
}