import { Modal } from '../Modal/Modal';
import './Error.scss';
import { ErrorType } from './model/type';

interface ErrorProps {
    error: ErrorType;
}

export function Error({ error }: ErrorProps) {
    let message = '';

    switch (error.status) {
        case 401:
            message = 'Ошибка авторизации';
            break;
        case 400:
            message = error.data!.message;
            break;
        case 500:
            message = 'Все упало';
            break;

        default:
            break;
    }

    return <Modal message={message} />;
}
