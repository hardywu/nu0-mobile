import utils from './utils';

export default api = {
    //创建一个新的sessions
    postV1Sessions: params => {
        return new Promise((resolve, reject) => {
            utils.disRequest(`${utils.domain}/v1/sessions`, {
                method: 'POST',
                body: utils.jsonToUrlencoded(params)
            }).then(res => {
                if (utils.checkRequestSuccess(res)) {
                    //成功回调
                    res.json().then(data => resolve(data));
                } else {
                    //失败回调
                    reject(utils.checkErrorType(res));
                }
            }).catch(err => {
                //失败回调
                reject(utils.errCodeMessage[5000]);
            });
        });
    },

    //返回当前的用户信息
    getV1AccountsMe: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain}/v1/accounts/me`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: utils.jsonToUrlencoded(params || {})
                }).then(res => {
                    if (utils.checkRequestSuccess(res)) {
                        //成功回调
                        res.json().then(data => resolve(data));
                    } else {
                        //失败回调
                        reject(utils.checkErrorType(res));
                    }
                }).catch(err => {
                    //失败回调
                    reject(utils.errCodeMessage[5000]);
                });
            });
        });
    },

    //返回当前的用户信息
    getV1ProfilesMe: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain}/v1/profiles/me`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: utils.jsonToUrlencoded(params || {})
                }).then(res => {
                    if (utils.checkRequestSuccess(res)) {
                        //成功回调
                        res.json().then(data => resolve(data));
                    } else {
                        //失败回调
                        reject(utils.checkErrorType(res));
                    }
                }).catch(err => {
                    //失败回调
                    reject(utils.errCodeMessage[5000]);
                });
            });
        });
    },

    //
    getV2Currencies: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain2}/v2/currencies`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: utils.jsonToUrlencoded(params || {})
                }).then(res => {
                    if (utils.checkRequestSuccess(res)) {
                        //成功回调
                        res.json().then(data => resolve(data));
                    } else {
                        //失败回调
                        reject(utils.checkErrorType(res));
                    }
                }).catch(err => {
                    //失败回调
                    reject(utils.errCodeMessage[5000]);
                });
            });
        });
    },
}