import cheerio from 'cheerio'
import striptags from 'striptags'

export default function extractSummary(contentString, fallBack = null) {
	let summary = 'No summary provided'

	try {
		const $ = cheerio.load(`<div>${contentString}</div>`)
		summary = $('div > p > i').text()
	} catch (error) {
		// Fail silently
	}

	if (!summary && fallBack) {
		summary = striptags(fallBack)
	}

	return summary
}
