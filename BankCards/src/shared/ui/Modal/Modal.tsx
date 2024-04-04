import ReactDOM from 'react-dom';
import './Modal.scss';
import { Button } from '..';
import { useBlur } from './model/hook';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks@deprecated';
import { closeModal, openModal } from './api/ModalSlice';

interface ModalProps {
    children: string | JSX.Element;
    message?: string;
    cb?: () => void;
}

const modal = document.getElementById('modal') as HTMLElement;

export function Modal({ message, cb, children }: ModalProps) {
    console.log('modal');
    console.log(cb);
    const dispatch = useAppDispatch();
    const isModalOpenStore = useAppSelector((store) => store.modal.isModalOpen);

    const [, setIsBlur] = useBlur(false);

    const fnCloseModal = () => {
        if (cb) {
            cb();
        }
        dispatch(closeModal());
    };

    useEffect(() => {
        dispatch(openModal());
        setIsBlur();
    }, []);

    const handleClick = () => {
        setIsBlur();
        setTimeout(fnCloseModal, 10);
    };

    if (children && isModalOpenStore) {
        return ReactDOM.createPortal(
            <div className="modal">
                <p>{children}</p>
                <Button onClick={handleClick}>Закрыть</Button>
            </div>,
            modal
        );
    }

    if (isModalOpenStore) {
        return ReactDOM.createPortal(
            <div className="modal">
                <p>{message}</p>
                <Button onClick={handleClick}>Закрыть</Button>
            </div>,
            modal
        );
    } else {
        return ReactDOM.createPortal(<></>, modal);
    }
}
