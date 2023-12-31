import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
	params: {
		maxResults: '50',
	},
	headers: {
		'X-RapidAPI-Key': "31f7d511d9msh9248a24e24c978ap1c9467jsnadcf26defa75",
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
}

export const ApiService = {
	async fetching(url) {
		const response = await axios.get(`${BASE_URI}/${url}`, options)
		return response.data
	},
}