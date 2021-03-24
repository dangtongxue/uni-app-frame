import request from '../common/request.js'
const api = {
	index: () => request('/index/index', 'GET')
}
export default api
