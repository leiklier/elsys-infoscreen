import cheerio from 'cheerio'

export default function extractSummary(contentString) {
	let summary = 'No summary provided'
	try {
		const $ = cheerio.load(`<div>${contentString}</div>`)
		summary = $('div > p > i').text()
	} catch (error) {
		// Fail silently
	}

	return summary
}
