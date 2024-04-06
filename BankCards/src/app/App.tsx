import { Suspense, lazy, useEffect, useState } from 'react';
import './App.scss';
import { WelcomeLogo } from '../shared';
const CardList = lazy(() => import('../widgets/CardList/ui/CardList/CardList'));

export default function App(): JSX.Element {
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
                <WelcomeLogo />
            ) : (
                <Suspense fallback={<WelcomeLogo />}>
                    <CardList />
                </Suspense>
            )}
        </div>
    );
}
