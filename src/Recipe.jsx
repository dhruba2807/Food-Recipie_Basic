import styles from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={styles.recipe}>
      <h1 className={styles.title}>{title}</h1>
      <ol className={styles.ingredients}>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={styles.ingredient}>
            {ingredient.text}
          </li>
        ))}
      </ol>
      <p className={styles.calories}>{calories} calories</p>
      <img className={styles.image} src={image} alt={title} />
    </div>
  );
};

export default Recipe;
