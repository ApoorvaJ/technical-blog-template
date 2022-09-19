import rss from '@astrojs/rss';

const postImportResult = import.meta.glob('./*.mdx', { eager: true });
const posts = Object.values(postImportResult);
const mappedPosts = posts.map((post) => ({
    intdate: Date.parse(post.frontmatter.date),
    date: post.frontmatter.date,
    title: post.frontmatter.title,
    url: post.url,
}));
const sortedPosts = mappedPosts.sort((a, b) => b.intdate - a.intdate);

export const get = () => rss({
    title: 'technical blog',
    description: '',
    site: import.meta.env.SITE,
    items: sortedPosts.map((post) => ({
        link: post.url,
        pubDate: post.date,
        title: post.title,
    }))
});
