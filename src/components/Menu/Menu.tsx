import { Cart } from '../Cart/Cart';
import { TitleInfo } from '../TitleInfo/TitleInfo';
import styles from './Menu.module.scss';

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
            <div className="row">
                <Cart />
            </div>
        </div>
    </div>
  )
}
