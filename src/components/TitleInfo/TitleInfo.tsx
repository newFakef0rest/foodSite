import './TitleInfo.scss';

type TInfo = {
    mainTitle: string;
    orangeTitle: string;
    textInfo?: string;
    className?: string;
}

export const TitleInfo: React.FC<TInfo> = ({mainTitle, orangeTitle, textInfo, className}) => {
    let insideClassName = className ? className : '';
    const styleMargin = {
        marginBottom: '0'
    }
    if (textInfo) {
        styleMargin.marginBottom = '30px'
    }
  return (
    <div className={`titleInfo ${insideClassName}`}>
        <span>{orangeTitle}</span>
        <h3 style={styleMargin}>{mainTitle}</h3>
        {textInfo && <p>{textInfo}</p>}
    </div>
  )
}
