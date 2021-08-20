import axios from 'axios'

/*
Github adapter is a file containing all functions to interact with the github api.
An adapter is a set of functions related to external application connection.
For more information about api interactions, look at the axios website:
https://axios-http.com/
*/

/** Creates a new instance for github api */
function createInstance() {
	return axios.create({
		baseURL: 'https://api.github.com/'
	})
}

/** Basic github instance */
export const api = createInstance()

/**
 * Retrieves a list of repositories or an error
 * @param user username or organization
 * @param thenCb callback executed when a request is successful
 * @param catchCb callback executed when a request is not successful
 */
export function getRepos(user: string,
	thenCb: (repos: object[]) => void,
	catchCb: (error: string) => void) {
	api.get(`/users/${user}/repos`, {
		params: {
			per_page: 100
		}
	})
		.then(res => thenCb(res.data))
		.catch(res => catchCb(res.message))
}
