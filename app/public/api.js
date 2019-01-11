import utils from './utils';

export default api = {
    //创建一个新的sessions
    postV1Sessions: params => {
        return new Promise((resolve, reject) => {
            utils.disRequest(`${utils.domain}/identity/sessions`, {
                method: 'POST',
                body: utils.jsonToUrlencoded(params)
            }).then(res => {
                if (utils.checkRequestSuccess(res)) {
                    //成功回调
                    resolve(res)
                    // res.json().then(data => resolve(data));
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
                utils.disRequest(`${utils.domain}/resource/users/me`, {
                    method: 'GET',
                    headers: {
                        JWT: `Bearer ${token}`
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
                utils.disRequest(`${utils.domain}/resource/profiles/me`, {
                    method: 'GET',
                    headers: {
                        JWT: `Bearer ${token}`
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
                utils.disRequest(`${utils.domain2}/public/markets`, {
                    method: 'GET',
                    headers: {
                        JWT: `Bearer ${token}`
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
                utils.disRequest(`${utils.domain2}/public/markets/tickers?${utils.jsonToUrlencoded(params || {})}`, {
                    method: 'GET',
                    headers: {
                        JWT: `Bearer ${token}`
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
                    //失败回调
                    reject(utils.errCodeMessage[5000]);
                });
            });
        });
    },

    //Get ticker of specific market.
    getV2TickersMarket: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain2}/tickers/${params || ''}`, {
                    method: 'GET',
                    headers: {
                        JWT: `Bearer ${token}`
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
                    //失败回调
                    reject(utils.errCodeMessage[5000]);
                });
            });
        });
    },

    //Get user account by currency
    getV2AccountsCurrency: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain2}/accounts/${params || ''}`, {
                    method: 'GET',
                    headers: {
                        JWT: `Bearer ${token}`
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
                    //失败回调
                    reject(utils.errCodeMessage[5000]);
                });
            });
        });
    },

    //Create a Sell/Buy order.
    postV2Orders: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain2}/orders`, {
                    method: 'POST',
                    headers: {
                        JWT: `Bearer ${token}`
                    },
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
        });
    },

    //Get ticker of all markets.
    getPublicMarketsTickers: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain2}/public/markets/tickers`, {
                    method: 'GET',
                    headers: {
                        JWT: `Bearer ${token}`
                    },
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
        });
    },

    //Get ticker of specific market
    getPublicMarketsMarketTickers: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain2}/public/markets/${params || ''}/tickers`, {
                    method: 'GET',
                    headers: {
                        JWT: `Bearer ${token}`
                    },
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
        });
    },

    getPublicCurrencies: params => {
        return utils.storage.get('token').then(token => {
            return new Promise((resolve, reject) => {
                utils.disRequest(`${utils.domain2}/public/currencies`, {
                    method: 'GET',
                    headers: {
                        JWT: `Bearer ${token}`
                    },
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
        });
    },
}