import { Suspense, lazy, useEffect, useState } from 'react';
import './App.scss';
import { WelcomLogo } from '../shared';
// import CardList from '../widgets/CardList/ui/CardList';
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
        <div className="app">
            {loading ? (
                <WelcomLogo />
            ) : (
                <Suspense fallback={<WelcomLogo />}>
                    <CardList />
                </Suspense>
            )}
        </div>
    );
}
