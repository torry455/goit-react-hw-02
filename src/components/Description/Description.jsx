import css from "./Description.module.css";

const Description = () => {
  return (
    <>
      <h1 className={css.descriptionTitle}>Sip Happenes Cafe</h1>
      <p className={css.descriptionText}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
    </>
  );
};

export default Description;