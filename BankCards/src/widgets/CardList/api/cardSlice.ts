import { createSlice } from '@reduxjs/toolkit';
import { CardItem } from '../../../entities/CardItem/model/types';
import { widgetsCardListApi } from './widgetsCardListApi';

type IInitialState = {
    cards: CardItem[];
    loadAllCards: boolean;
    token: string;
    nameToken: string;
    offset: number;
    limit: number;
    isModalOpen: boolean;
};

const initialState: IInitialState = {
    cards: [],
    loadAllCards: false,
    offset: 0,
    limit: 10,
    nameToken: 'TOKEN',
    token: '123',
    isModalOpen: false,
};

const cardSlice = createSlice({
    name: '@listCard',
    initialState,
    reducers: {
        incrementOffset(state) {
            state.offset += state.limit;
        },
        openModal(state) {
            state.isModalOpen = true;
        },
        closeModal(state) {
            state.isModalOpen = false;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            widgetsCardListApi.endpoints.getCards.matchFulfilled,
            (state, { payload }) => {
                if (payload.companies.length > 0) {
                    state.cards = state.cards.concat(payload.companies);
                } else {
                    state.loadAllCards = true;
                }
            }
        );
    },
});

export default cardSlice.reducer;
export const { incrementOffset, openModal, closeModal } = cardSlice.actions;
