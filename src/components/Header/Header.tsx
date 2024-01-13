import { CustomButton } from "../CustomButton/CustomButton";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { Logo } from "../Logo/Logo"
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className='container'>   
          <div className={`row ${styles.header__row}`}>
            <div className={`${styles.header__box} ${styles.header__left}`}>
              <Logo width={44} height={43} />
              <HeaderNav/>
            </div>
            <div className={`${styles.header__box} ${styles.header__right}`}>
              <CustomButton title="Booking Now" pY={13} pX={30}/>
            </div>
          </div>
      </div>
    </div>
  )
}
