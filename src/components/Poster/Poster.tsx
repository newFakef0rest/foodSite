import { CustomButton } from '../CustomButton/CustomButton';
import styles from '../Poster/Poster.module.scss';

export const Poster: React.FC = () => {
  return (
    <div className={styles.poster}>
        <div className="container">
            <div className="row">
                <div className={styles.poster__box}>
                    <div className={styles.poster__title}>
                        <h1>Making time a good time by making food the good food.</h1>
                    </div>
                    <div className={styles.poster__text}>
                        <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                    </div>
                    <div className={styles.poster__buttons}>
                        <CustomButton pY={20} pX={40} title='Order Now' />
                        <CustomButton pY={20} pX={40} title='Food Details' backgroundCol='light'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
