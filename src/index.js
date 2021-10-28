function set(url, options) {

	/* Constructing Parameters passed */
	if (!url && !options) {
		return '';
	}
	if (url) {
		if (typeof(url) === 'object') {
			options = url;
			url = '';
		}
	} else {
		url = '';
	}
	if (!options) {
		options = {};
	}
	if (!url && options && options.url) {
		url = options.url;
	}

	/* Removing last slash if present */
	url = url.replace(/(.*)\/$/, "$1")

	/* Supplying options */
	if (options) {
		const qs = [];
		const temp = get(url);
		options.query = {
			...(temp || {}),
			...options.query,
		};
		if (options.query) {
			url = url.replace(/(.*)\/$/, "$1")
			for(const key in options.query) {
				if (options.query[key] !== undefined && options.query[key] !== null) {
					qs.push(`${key}=${encodeURIComponent(String(options.query[key]).trim())}`);
				}
			}
		}
		url = url.replace(/(.*)\?.*$/, "$1");
		return `${url}${qs.length > 0 ? `?${qs.join('&')}` : ''}`;;
	}
}

function get(url, key) {
	try {
		const extra = url.match(/.*\?(.*)$/);
		if (extra) {
			if (extra[1]) {
				const obj = {};
				const params = extra[1].split('&');
				if (params && params.length > 0) {
					for (let i = 0; i < params.length; i++) {
						const temp = params[i].split('=');
						obj[temp[0]] = decodeURIComponent(temp[1] || true);
					}
				}
				if (key) {
					return obj[key];
				}
				return obj;
			}
		}
	} catch (e) {
		console.log(e);
	}
	return undefined;
}

export {
	set, get,
};

export default {
	set, get,
};