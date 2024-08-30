import axios from 'axios'
import { API_PATH } from '@app/config/environment'

const api = axios.create({ baseURL: API_PATH })

api.interceptors.request.use(
	config => {
		config.headers = {
			...config.headers,
			'x-token': localStorage.getItem('facebook-clone-token')
		}

		return config;
	}
)

export default api
