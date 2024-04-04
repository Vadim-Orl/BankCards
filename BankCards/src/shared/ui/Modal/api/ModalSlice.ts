import { createSlice } from '@reduxjs/toolkit';

type IInitialState = {
    isModalOpen: boolean;
};

const initialState: IInitialState = {
    isModalOpen: false,
};

const modalSlice = createSlice({
    name: '@listCardNav',
    initialState,
    reducers: {
        openModal(state) {
            state.isModalOpen = true;
        },
        closeModal(state) {
            state.isModalOpen = false;
        },
    },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
