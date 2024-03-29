import { CustomButton } from '../CustomButton/CustomButton';
import { TitleInfo } from '../TitleInfo/TitleInfo';
import styles from './About.module.scss';

export const About: React.FC = () => {
  return (
    <div className={styles.about}>
        <div className="container">
            <div className="row">
                <div className={styles.about__items}>
                    <div className={styles.about__image}>
                    </div>
                    <div className={styles.about__text}>
                        <TitleInfo 
                            mainTitle='Food Stalls with 
                                Persons but  to  Product marketing plane catlogues etc to. ' 
                            orangeTitle='About us'
                            textInfo="There are many things are needed 
                                to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                                equipment  make your marketing plane Effective."
                            className={styles.titleInfo}
                        />
                        <div className={styles.about__image_box}>
                            <CustomButton pY={11} pX={20} title="Read More" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
