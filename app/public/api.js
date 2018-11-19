import utils from './utils';

const api = {
    //创建一个新的sessions
    postV1Sessions: params => {
        return new Promise((resolve, reject) => {
            utils.disRequest(`${utils.domain}/v1/sessions`, {
                method: 'POST',
                body: utils.jsonToFormData(params)
            }).then(res => {
                if (utils.checkRequestSuccess(res)) {
                    res.json().then(data => resolve(data));
                } else {
                    res.json().then(data => {
                        reject(data.error);
                    });
                }
            }).catch(err => {
                alert(`网络异常`);
                reject(err)
            });
        });
    },

    //返回当前的用户信息
    getV1AccountsMe: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain}/v1/accounts/me`, {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${token}` },
                    body: utils.jsonToFormData(params || {})
                }).then(res => {
                    if (utils.checkRequestSuccess(res)) {
                        res.json().then(data => resolve(data));
                    } else {
                        res.json().then(data => {
                            reject(data.error);
                        });
                    }
                }).catch(err => {
                    alert(`网络异常`);
                    reject(err)
                });
            });
        });
    },

    //返回当前的用户信息
    getV1ProfilesMe:  params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain}/v1/profiles/me`, {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${token}` },
                    body: utils.jsonToFormData(params || {})
                }).then(res => {
                    if (utils.checkRequestSuccess(res)) {
                        res.json().then(data => resolve(data));
                    } else {
                        res.json().then(data => {
                            reject(data.error);
                        });
                    }
                }).catch(err => {
                    alert(`网络异常`);
                    reject(err)
                });
            });
        });
    },

    
}

export default api;