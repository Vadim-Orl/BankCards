import CardInfo from '../../../../entities/CardInfo/ui/CardInfo';
import CardNav from '../../../../features/CardNav/ui/CardNav';
import { CardI } from '../../../../entities/CardInfo';

interface ICardItemProps {
    card: CardI;
    myref?: React.Ref<HTMLLIElement>;
}

const CardItem = ({ card, myref }: ICardItemProps) => {
    const { mobileAppDashboard: cardDesign } = card;

    const { accentColor, mainColor, backgroundColor } = cardDesign;

    const cardBackground = {
        background: cardDesign.cardBackgroundColor,
    };

    return (
        <li className="card__item" ref={myref} style={cardBackground}>
            <CardInfo card={card} />
            <CardNav
                accentColor={accentColor}
                mainColor={mainColor}
                backgroundColor={backgroundColor}
                companyId={card.company.companyId}
            />
        </li>
    );
};

export default CardItem;
