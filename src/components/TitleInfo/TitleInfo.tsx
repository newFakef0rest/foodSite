import './TitleInfo.scss';

type TInfo = {
    mainTitle: string;
    orangeTitle: string;
    textInfo?: string;
}

export const TitleInfo: React.FC<TInfo> = ({mainTitle, orangeTitle, textInfo}) => {
    const styleMargin = {
        marginBottom: '0'
    }
    if (textInfo) {
        styleMargin.marginBottom = '30px'
    }
  return (
    <div className='titleInfo'>
        <span>{orangeTitle}</span>
        <h3 style={styleMargin}>{mainTitle}</h3>
        {textInfo && <p>{textInfo}</p>}
    </div>
  )
}
