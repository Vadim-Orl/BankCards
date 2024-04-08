import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../app/AppStore';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://devapp.bonusmoney.pro/mobileapp/getAllCompanies',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).data.token;
            if (token) {
                headers.set('Token', token);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
});
