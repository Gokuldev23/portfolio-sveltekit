import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
    console.log(params.slug)
	if (params.slug === 'crossword') {
		return {
			title: 'Crossword page',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

    return {
        title:"nothing"
    }

	// error(404, 'Not found');
};