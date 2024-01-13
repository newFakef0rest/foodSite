import styles from './CustomButton.module.scss';

type TButtonProps = {
    pX: number;
    pY: number;
    title: string;
}

export const CustomButton: React.FC<TButtonProps> = ({pY, pX, title}) => {
  return (
    <button 
        className={styles.customButton} 
        type="button" 
        style={{padding: `${pY}px ${pX}px`}}>
        {title}
    </button>
  )
}
