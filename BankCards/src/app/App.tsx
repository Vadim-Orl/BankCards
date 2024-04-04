import { Suspense } from 'react';
import CardList from '../widgets/CardList/ui/CardList';
import './App.scss';
import { Loader } from '../shared/ui';

export default function App() {
    return (
        <div className="app">
            <Suspense fallback={<Loader />}>
                <CardList />
            </Suspense>
        </div>
    );
}
