import { Error, LoadingCompany } from '../../../../shared';
import './CardList.scss';
import { widgetsCardListApi } from '../../api/widgetsCardListApi';
import {
    useAppDispatch,
    useAppSelector,
} from '../../../../app/hooks@deprecated';
import { incrementOffset } from '../..';
import { useEffect, useState } from 'react';
import { ErrorType } from '../../../../shared/ui/Error';
import CardItem from '../CardItem/CardItem';
import { useInView } from 'react-intersection-observer';

const CardList = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);

    const offset = useAppSelector((store) => store.data.offset);
    const limit = useAppSelector((store) => store.data.limit);
    const isLoadAllCard = useAppSelector((store) => store.data.loadAllCards);

    const { data, isError, isFetching, error } =
        widgetsCardListApi.useGetCardsQuery({
            offset: offset,
            limit: limit,
        });

    const cardList = data?.companies ?? [];
    const errorCard = error as ErrorType;

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView && !loading && !isLoadAllCard) {
            dispatch(incrementOffset());
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [inView]);

    return (
        <section className="section__list">
            <h2>Управление картами</h2>

            <ul className="list__card">
                {cardList.map((el, index) => {
                    if (index + 1 === cardList.length) {
                        return (
                            <CardItem
                                key={el.company.companyId}
                                card={el}
                                myref={ref}
                            />
                        );
                    }
                    return <CardItem key={el.company.companyId} card={el} />;
                })}

                {isFetching && <LoadingCompany />}
            </ul>
            {isError && <Error error={errorCard} />}
        </section>
    );
};

export default CardList;
