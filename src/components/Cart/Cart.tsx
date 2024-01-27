import styles from './Cart.module.scss';

import { CustomButton } from '../CustomButton/CustomButton';

import CartImage from '../../img/cartItem__1.jpg';
import StarsImage from '../../img/4 stars.svg';

export const Cart = () => {
  return (
    <div className={styles.cart}>
        <div className={styles.cart__image}>
            <img src={CartImage} alt="" />
        </div>
        <div className={styles.cart__info}>
            <div className={styles.cart__headInfo}>
                <h6>Vegie Muffen</h6>
                <h6>16$</h6>
            </div>
            <div className={styles.cart__mainInfo}>
                <span>There are many things are needed to start the Fast Food Business.</span>
            </div>
            <div className={styles.cart__rate}>
                <CustomButton pY={7} pX={11} title="+" className={styles.cart__button}/>
                <img src={StarsImage} alt="" />
            </div>
        </div>
    </div>
  )
}
