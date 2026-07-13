import styles from "./StepCards.module.css";


function StepCards({
    stepNumber,
    title,
    description,
}) {
    return (
        <article className={styles.stepCard}>
            <span className={styles.stepNumber}>
                {stepNumber}
            </span>

            <h3>{title}</h3>

            <p>{description}</p>
        </article>
    );
}

export default StepCards;

