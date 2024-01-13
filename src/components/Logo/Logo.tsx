import LogoImg from '../../img/logo.svg'

type TSize = {
  width: number;
  height: number;
}

export const Logo: React.FC<TSize> =  ({width = 44, height = 43}) => {
  return (
    <div className="logo">
        <img src={LogoImg} alt="Logo" style={{width: width, height: height}}/>
    </div>
  )
}
