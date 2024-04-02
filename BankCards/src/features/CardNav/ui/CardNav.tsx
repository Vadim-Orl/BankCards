import { Button } from '../../../shared/ui';
import './CardNav.scss';
import EyeIcon from '../../../../public/assets/img/eye_white.svg?react';
import TrashIcon from '../../../../public/assets/img/trash_white.svg?react';

interface CardNavProps {
    accentColor: string;
    mainColor: string;
    backgroundColor: string;
}

const CardNav = ({
    accentColor,
    mainColor,
    backgroundColor,
}: CardNavProps): JSX.Element => {
    const styleText = { color: mainColor, background: backgroundColor };

    return (
        <div className="card__nav">
            <Button className="card__nav--view">
                <EyeIcon fill={mainColor} />
            </Button>
            <Button className="card__nav--del">
                <TrashIcon fill={accentColor} />
            </Button>
            <Button style={styleText}>Подробнее</Button>
        </div>
    );
};

export default CardNav;
