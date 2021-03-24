let urlConfig = 'http://39.102.52.155:83';

const request = (url, method = 'POST', headers={'content-type': 'application/x-www-form-urlencoded'}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: urlConfig + url,
			method: method,
			timeout: 60000,
			dataType: 'json',
			header: headers,
		}).then((response) => {
			if(response[0] == null){
				return resolve(response[1].data);//请求成功
			}else{
				return reject(response[0].data);//请求失败
			}
        }).catch(parmas => {
			switch (parmas.code) {
				case 401:
					uni.clearStorageSync()
					break
				default:
					uni.showToast({
						title: parmas.message,
						icon: 'none'
					})
					return Promise.reject()
					break
			}
		})
	})
}
export default request
