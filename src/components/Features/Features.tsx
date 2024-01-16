import styles from './Features.module.scss';

import FeaturesImage1 from '../../img/features-1.svg';
import FeaturesImage2 from '../../img/features-2.svg';
import FeaturesImage3 from '../../img/features-3.svg';
import { TitleInfo } from '../TitleInfo/TitleInfo';

export const Features: React.FC = () => {
  return (
    <div className={styles.features}>
        <div className="container">
            <div className="row">
                <div className={styles.features__box}>
                    <div className={styles.features__title}>
                        <TitleInfo mainTitle="Food with a New Passion" orangeTitle='Features'/>
                    </div>
                    <div className={styles.features__box_items}>
                        <div className={styles.features__box_item}>
                            <div className={`${styles.features__box_item__image} ${styles.features__box_item__image_green}`}>
                                <img src={FeaturesImage1} alt="" />
                            </div>
                            <div className={styles.features__box_item__info}>
                                <h4>Quality Food</h4>
                                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                            </div>
                        </div>
                        <div className={styles.features__box_item}>
                            <div className={`${styles.features__box_item__image} ${styles.features__box_item__image_red}`}>
                                <img src={FeaturesImage2} alt="" />
                            </div>
                            <div className={styles.features__box_item__info}>
                                <h4>Food Delivery</h4>
                                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                            </div>
                        </div>
                        <div className={styles.features__box_item}>
                            <div className={`${styles.features__box_item__image} ${styles.features__box_item__image_orange}`}>
                                <img src={FeaturesImage3} alt="" />
                            </div>
                            <div className={styles.features__box_item__info}>
                                <h4>Super Taste</h4>
                                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
