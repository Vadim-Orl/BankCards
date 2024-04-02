import CardNav from '../../features/CardNav/ui/CardNav';
import './CardItem.scss';
import { companyMok } from './model/mok';
import { ICardItemProps } from './ts';
// import LogoIcon from '../../../img/logo.svg?react';

const CardItem = ({ ...props }: ICardItemProps): JSX.Element => {
    const { mobileAppDashboard: cardDesign, customerMarkParameters: cardInfo } =
        companyMok;
    const { accentColor, mainColor, backgroundColor } = cardDesign;

    const highlightTextColor = {
        color: cardDesign.highlightTextColor,
    };
    const cardBackground = {
        background: cardDesign.cardBackgroundColor,
    };
    const textColor = {
        color: cardDesign.textColor,
    };
    return (
        <div className="card__item" style={cardBackground}>
            <div className="card__title">
                <p style={highlightTextColor}>{cardDesign.companyName}</p>
                <img src={cardDesign.logo}></img>
            </div>
            <div className="card__info">
                <p className="card__desc" style={textColor}>
                    <span
                        className="card__desc--ball"
                        style={highlightTextColor}
                    >
                        {cardInfo.mark}{' '}
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
            <CardNav
                accentColor={accentColor}
                mainColor={mainColor}
                backgroundColor={backgroundColor}
            />
        </div>
    );
};

export default CardItem;
