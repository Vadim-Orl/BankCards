import CardInfo from '../../../../entities/CardInfo/ui/CardInfo';
import CardNav from '../../../../features/CardNav/ui/CardNav';
import { CardI } from '../../../../entities/CardInfo';

interface ICardItemProps {
    card: CardI;
}

const CardItem = ({ card }: ICardItemProps): JSX.Element => {
    const { mobileAppDashboard: cardDesign } = card;

    const { accentColor, mainColor, backgroundColor } = cardDesign;

    const cardBackground = {
        background: cardDesign.cardBackgroundColor,
    };

    return (
        <article className="card__item" style={cardBackground}>
            <CardInfo card={card} />
            <CardNav
                accentColor={accentColor}
                mainColor={mainColor}
                backgroundColor={backgroundColor}
                companyId={card.company.companyId}
            />
        </article>
    );
};

export default CardItem;
