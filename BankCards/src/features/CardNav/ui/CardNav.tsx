import { Button } from '../../../shared';
import './CardNav.scss';
import EyeIcon from '../../../../public/assets/img/eye_white.svg?react';
import TrashIcon from '../../../../public/assets/img/trash_white.svg?react';
import { Modal } from '../../../shared/';
import { useToggle } from '..';

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

    const handleClickView = () => {
        setModalViewBtn();
    };

    const handleClickDel = () => {
        setModalDeleteBtn();
    };

    const handleClickDetails = () => {
        setModalDetailsBtn();
    };

    const modalView = (
        <div>
            <p>View</p>
            <p>{companyId}</p>
        </div>
    );
    const modalDel = (
        <div>
            <p>Delete</p>
            <p>{companyId}</p>
        </div>
    );

    const modalDeteles = (
        <div>
            <p>Details</p>
            <p>{companyId}</p>
        </div>
    );

    return (
        <div className="card__nav">
            <Button onClick={handleClickView} className="card__nav--view">
                <EyeIcon fill={mainColor} />
            </Button>
            <Button onClick={handleClickDel} className="card__nav--del">
                <TrashIcon fill={accentColor} />
            </Button>
            <Button onClick={handleClickDetails} style={styleText}>
                Подробнее
            </Button>

            {modalViewBtn && <Modal cb={setModalViewBtn}>{modalView}</Modal>}
            {modalDeleteBtn && <Modal cb={setModalDeleteBtn}>{modalDel}</Modal>}
            {modalDetailsBtn && (
                <Modal cb={setModalDetailsBtn}>{modalDeteles}</Modal>
            )}
        </div>
    );
};

export default CardNav;
