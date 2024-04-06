import { Button } from '../../../shared';
import './CardNav.scss';
import EyeIcon from '../../../../public/assets/img/eye_white.svg?react';
import TrashIcon from '../../../../public/assets/img/trash_white.svg?react';
import { Modal } from '../../../shared/';
import { useToggle } from '..';
import { ViewBody } from '../../../entities';
import { DelBody } from '../../../entities/DelBody';
import { DetailsBody } from '../../../entities/DetailsBody';

interface CardNavProps {
    accentColor: string;
    mainColor: string;
    backgroundColor: string;
    companyId: string;
}

const CardNav = ({
    accentColor,
    mainColor,
    backgroundColor,
    companyId,
}: CardNavProps): JSX.Element => {
    const styleText = { color: mainColor, background: backgroundColor };

    const [modalViewBtn, setModalViewBtn] = useToggle(false);
    const [modalDeleteBtn, setModalDeleteBtn] = useToggle(false);
    const [modalDetailsBtn, setModalDetailsBtn] = useToggle(false);

    return (
        <div className="card__nav">
            <Button onClick={setModalViewBtn} className="card__nav--view">
                <EyeIcon fill={mainColor} />
            </Button>
            <Button onClick={setModalDeleteBtn} className="card__nav--del">
                <TrashIcon fill={accentColor} />
            </Button>
            <Button onClick={setModalDetailsBtn} style={styleText}>
                Подробнее
            </Button>

            {modalViewBtn && (
                <Modal cb={setModalViewBtn}>
                    <ViewBody companyId={companyId}></ViewBody>
                </Modal>
            )}
            {modalDeleteBtn && (
                <Modal cb={setModalDeleteBtn}>
                    <DelBody companyId={companyId} />
                </Modal>
            )}
            {modalDetailsBtn && (
                <Modal cb={setModalDetailsBtn}>
                    <DetailsBody companyId={companyId} />
                </Modal>
            )}
        </div>
    );
};

export default CardNav;
