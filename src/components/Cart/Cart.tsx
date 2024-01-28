import styles from './Cart.module.scss';

import { CustomButton } from '../CustomButton/CustomButton';

import CartImage from '../../img/cartItem__1.jpg';
import StarsImage from '../../img/4 stars.svg';

type TCart = {
    title: string;
    price: string;
    image: string;
    rating: string;
}

export const Cart: React.FC<TCart> = ({title, price, image, rating}) => {
  return (
    <div className={styles.cart}>
        <div className={styles.cart__image}>
            <img src={image} alt="" />
        </div>
        <div className={styles.cart__info}>
            <div className={styles.cart__headInfo}>
                <h6>{title}</h6>
                <h6>{price}$</h6>
            </div>
            <div className={styles.cart__mainInfo}>
                <span>There are many things are needed to start the Fast Food Business.</span>
            </div>
            <div className={styles.cart__rate}>
                <CustomButton pY={7} pX={11} title="+" className={styles.cart__button}/>
                <img src={rating} alt="" />
            </div>
        </div>
    </div>
  )
}
