import styles from './CustomButton.module.scss';

type TButtonProps = {
    pX: number;
    pY: number;
    title: string;
    backgroundCol?: string;
}

export const CustomButton: React.FC<TButtonProps> = ({pY, pX, title, backgroundCol = "dark"}) => {
  return (
    <button 
        className={`${styles.customButton} 
        ${backgroundCol == 'light' && styles.customButton__light}`} 
        type="button" 
        style={{padding: `${pY}px ${pX}px`}}>
        {title}
    </button>
  )
}
