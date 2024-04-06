import { Result } from '..';
import { baseApi } from '../../../shared/api/baseApi';

export const widgetsCardListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCards: build.query<Result, { offset: number; limit: number }>({
            query: ({ offset = 0, limit = 10 }) => ({
                url: ``,
                body: {
                    offset: offset,
                    limit: limit,
                },
                method: 'POST',
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                currentCache.companies.push(...newItems.companies);
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
    }),
});

export const { useGetCardsQuery } = widgetsCardListApi;
