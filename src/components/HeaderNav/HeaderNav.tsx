import styles from './HeaderNav.module.scss'


export const HeaderNav: React.FC = () => {
  return (
    <div className={styles.headerNav}>
      <nav>
        <ul className={styles.headerNav__ul}>
          <li><button>Home</button></li>
          <li><button>About us</button></li>
          <li><button>Menu</button></li>
          <li><button>Features</button></li>
          <li><button>Contact us</button></li>
        </ul>
      </nav>
    </div>
  )
}
