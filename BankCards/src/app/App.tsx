import { lazy, useEffect, useState } from 'react';
import './App.scss';
import { LoadingWelcom } from '../shared/ui/LoadingWelcom/LoadingWelcom';
const CardList = lazy(() => import('../widgets/CardList/ui/CardList'));

export default function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="app">{loading ? <LoadingWelcom /> : <CardList />}</div>
    );
}
