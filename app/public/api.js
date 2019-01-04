import utils from './utils';

export default api = {
    //创建一个新的sessions
    postV1Sessions: params => {
        return new Promise((resolve, reject) => {
            utils.disRequest(`${utils.domain}/v2/identity/sessions`, {
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
                utils.disRequest(`${utils.domain}/v2/resource/users/me`, {
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
                utils.disRequest(`${utils.domain}/v2/resource/profiles/me`, {
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
                utils.disRequest(`${utils.domain2}/v2/public/markets`, {
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

    // 比 Currency 币（例如ETH) 在最近的24小时的交易信息，包括交易量，最高最低价等。
    getV2CurrencyTrades: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain2}/v2/public/markets/tickers?${utils.jsonToUrlencoded(params || {})}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(res => {
                    if (utils.checkRequestSuccess(res)) {
                        //成功回调
                        res.json().then(data => resolve(data));
                    } else {
                        //失败回调
                        reject(utils.checkErrorType(res));
                    }
                }).catch(err => {
                    console.log(err)
                    //失败回调
                    reject(utils.errCodeMessage[5000]);
                });
            });
        });
    },
}