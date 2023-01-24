
class MarvelService { 
	_apiBase = "https://gateway.marvel.com:443/v1/public/";
	_apiKey = 'apikey=9a5d155bad1e2ac8bdca5d7f3ec24c20'

	getResourse = async (url) => { 
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error (`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json()
	}

	getAllCharacters = () => {
		return this.getResourse(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
	}

	getCharacters = (id) => {
		return this.getResourse(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=9a5d155bad1e2ac8bdca5d7f3ec24c20`);
	}
}

export default MarvelService;