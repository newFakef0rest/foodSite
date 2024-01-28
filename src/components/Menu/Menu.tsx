import { Cart } from '../Cart/Cart';
import { CustomButton } from '../CustomButton/CustomButton';
import { TitleInfo } from '../TitleInfo/TitleInfo';
import styles from './Menu.module.scss';

import firstImage from '../../img/cartItem__1.jpg'
import secondImage from '../../img/cartItem__2.jpg'
import thirdImage from '../../img/cartItem__3.jpg'
import fourthImage from '../../img/cartItem__4.jpg'
import fifthImage from '../../img/cartItem__5.jpg'
import sixthImage from '../../img/cartItem__6.jpg'

import fourStars from '../../img/4 stars.svg';

export const Menu = () => {
  return (
    <div className={styles.menu}>
        <div className="container">
            <div className={styles.menu__title_box}>
                <TitleInfo 
                    mainTitle="Food Full of treaty Love"
                    orangeTitle="menu"
                    className={styles.menu__title} 
                    textInfo="There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, "/>
            </div>
            <div className={`row ${styles.menu__row}`}>
                <ul className={styles.menu__ul}>
                  <li><Cart title="Vegie Muffen" price="16" image={firstImage} rating={fourStars}/></li>
                  <li><Cart title="Salads" price="12" image={secondImage} rating={fourStars}/></li>
                  <li><Cart title="Burger" price="10" image={thirdImage} rating={fourStars}/></li>
                </ul>
                <ul className={styles.menu__ul}>
                  <li><Cart title="Delmonico Steak dish" price="14" image={fourthImage} rating={fourStars}/></li>
                  <li><Cart title="Egg Masala" price="9" image={fifthImage} rating={fourStars}/></li>
                  <li><Cart title="Peach Melba dish" price="15" image={sixthImage} rating={fourStars}/></li>
                </ul>
                <CustomButton pY={11} pX={20} title="Learn More" backgroundCol='light'/>
            </div>
        </div>
    </div>
  )
}
