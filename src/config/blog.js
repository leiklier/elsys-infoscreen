export const constants = {
	fetchInterval: 30, // seconds between each fetch
	cycleInterval: 60, // seconds between each time a new blog post is shown
	totalPosts: 5, // Number of posts to cycle through
	host: 'http://elsys.blog/',
	basePath: 'wp-json/wp/v2/',
	summaryFallbackToExcerpt: true // set this to false if not excerpt should be used when no summary
}
