import { Modal } from '../../..';
import { ErrorCode, ErrorType } from '../model/type';

interface ErrorProps {
    error: ErrorType;
}

export function Error({ error }: ErrorProps) {
    let message = '';

    switch (error.status) {
        case ErrorCode.notAuth:
            message = 'Ошибка авторизации';
            break;
        case ErrorCode.invalidRequest:
            message = error.data!.message;
            break;
        case 500:
            message = 'Все упало';
            break;

        default:
            message = error.error;
            break;
    }

    return <Modal message={message} />;
}
