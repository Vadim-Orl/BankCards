import { Loader } from '../Loader/Loader';
import './LoadingCompany.scss';

export function LoadingCompany() {
    return (
        <div className="loading">
            <Loader />
            <p>Подгрузка компаний</p>
        </div>
    );
}
