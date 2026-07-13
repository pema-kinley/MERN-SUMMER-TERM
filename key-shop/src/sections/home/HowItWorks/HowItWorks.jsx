// HowItWorks.jsx
import StepCard from "../../../components/StepCards/StepCards";
import styles from "./HowItWorks.module.css";

function HowItWorks() {
  const steps = [
    {
      id: 1,
      stepNumber: "01",
      title: "Choose Your Design",
      description: "Browse our handcrafted collection or upload your own idea.",
    },
    {
      id: 2,
      stepNumber: "02",
      title: "Personalize It",
      description: "Add names, dates, photos, or meaningful messages.",
    },
    {
      id: 3,
      stepNumber: "03",
      title: "Handcrafted With Care",
      description: "Every keepsake is carefully handmade with attention to every detail.",
    },
    {
      id: 4,
      stepNumber: "04",
      title: "Delivered To You",
      description: "Your finished keepsake is securely packaged and shipped to your doorstep.",
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <span className={styles.eyebrow}>Just in four Simple Steps.</span>
      <h2>How It Works</h2>

      <p className={styles.subtitle}>
        Every memory tells a story. Together, we’ll gently weave yours into a treasure to hold forever.
      </p>

      <div className={styles.stepsWrapper}>
        <div className={styles.steps}>
          {steps.map((step) => (
            <StepCard
              key={step.id}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;