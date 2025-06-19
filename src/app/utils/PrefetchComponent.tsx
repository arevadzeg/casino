import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { fetchGamesByType } from '../api/hooks/useGetGames';

const queryClient = new QueryClient();

interface PrefetchComponentProps {
    children: ReactNode;
}

const gameTypes = ["featured-games",
    "new-releases",
    "hot-games",
    "bonus-buy",
    "live-games"]

export default async function PrefetchComponent({
    children,
}: PrefetchComponentProps) {

    const prefetchPromises = gameTypes.map(type =>
        queryClient.prefetchQuery({
            queryKey: ['games', type],
            queryFn: () => fetchGamesByType(type),
            staleTime: Infinity,
        })
    );

    await Promise.all(prefetchPromises);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    );
}