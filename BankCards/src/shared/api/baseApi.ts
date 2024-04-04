import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://devapp.bonusmoney.pro/mobileapp/getAllCompanies',
    }),
    endpoints: () => ({}),
});
