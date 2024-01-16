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
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
