import { error } from '@sveltejs/kit';
import { type Project, projects } from '$lib/component-projects/projects';

export function load({params}) {
    const project : Project | undefined = projects.find((p) => p.tag === params.tag);

    if (!project) error(404);

    return { project };
}