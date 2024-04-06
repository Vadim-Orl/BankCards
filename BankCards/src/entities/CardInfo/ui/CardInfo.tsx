import './CardInfo.scss';
import { CardI } from '../model/types';

interface ICardItemProps {
    card: CardI;
}

const CardInfo = ({ card }: ICardItemProps): JSX.Element => {
    const { mobileAppDashboard: cardDesign, customerMarkParameters: cardInfo } =
        card;

    const highlightTextColor = {
        color: cardDesign.highlightTextColor,
    };
    const textColor = {
        color: cardDesign.textColor,
    };

    return (
        <>
            <div className="card__title">
                <h2 style={highlightTextColor}>{cardDesign.companyName}</h2>
                <img src={cardDesign.logo} />
            </div>
            <div className="card__info">
                <p className="card__desc" style={textColor}>
                    <span
                        className="card__desc--ball"
                        style={highlightTextColor}
                    >
                        {cardInfo.mark}
                    </span>
                    баллов
                </p>
                <div className="card__desc--other">
                    <dl className="card__desc-list">
                        <div className="list__item">
                            <dt style={textColor}>Кешбэк</dt>
                            <dd>{cardInfo.loyaltyLevel.number}%</dd>
                        </div>
                        <div className="list__item">
                            <dt style={textColor}>Уровень</dt>
                            <dd>{cardInfo.loyaltyLevel.name} уровень</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    );
};

export default CardInfo;
