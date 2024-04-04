import { Error, LoadingCompany } from '../../../shared';
import './CardList.scss';
import { widgetsCardListApi } from '../api/widgetsCardListApi';
import { useAppDispatch, useAppSelector } from '../../../app/hooks@deprecated';
import { debounce } from '../../../shared/';
import { incrementOffset } from '..';
import { useEffect } from 'react';
import { ErrorType } from '../../../shared/ui/Error';
import CardItem from '../../../entities/CardItem/ui/CardItem';

const CardList = (): JSX.Element => {
    const dispatch = useAppDispatch();

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

    useEffect(() => {
        const onScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 10;

            if (scrolledToBottom && !isFetching && !isLoadAllCard && !isError) {
                dispatch(incrementOffset());
            }
        };

        const debounceScroll = debounce(onScroll);
        document.addEventListener('scroll', debounceScroll);

        return function () {
            document.removeEventListener('scroll', debounceScroll);
        };
    }, [offset, isFetching]);

    return (
        <section className="section__list">
            <h2> Управление картами </h2>

            <ul className="list__card">
                {cardList.map((el) => {
                    return <CardItem key={el.company.companyId} card={el} />;
                })}

                {isFetching && <LoadingCompany />}
            </ul>
            {isError && <Error error={errorCard} />}
        </section>
    );
};

export default CardList;
