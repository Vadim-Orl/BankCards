import { ICardItemProps } from './ts';
import LogoIcon from './img/react.svg?react';

const CardItem = ({ ...props }: ICardItemProps) => {
    return (
        <div className="card__item">
            <div className="card__title">
                Bonus Name
                <LogoIcon />
            </div>
        </div>
    );
};

export default CardItem;
