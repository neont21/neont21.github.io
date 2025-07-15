import { error } from '@sveltejs/kit';
import { portfolios } from '$lib/portfolio-components/data.js';

export function load({ params }) {
    const portfolio = portfolios.find((p) => p.tag === params.tag);

    if (!portfolio) error(404);

    return { portfolio };
}