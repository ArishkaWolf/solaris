import styles from './Description.module.css';

export default function Translation() {
  const text = `Знаешь, проявляя жалость, мы опустошаемся. Страдание придает всей жизни мрачный и подозрительный вид. Но я не признаю. Нет, я не признаю.
То, что не составляет необходимости для нашей жизни, то вредит ей… Хотя, Конечно, не вредит. 
Любовь это чувство, которое можно переживать, но объяснить нельзя. Объяснить можно понятие. А любишь то, что можно потерять.`;

  return (
    <section className={styles.TransltionSection}>
      <p>{text}</p>
    </section>
  );
}
