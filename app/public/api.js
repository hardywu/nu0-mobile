import utils from './utils';

let api = {
    test: (data) => {
        return new Promise(function (resolve, reject) {
            utils.disRequest('http://api.apiopen.top/singlePoetry', {
                method: 'GET',
            }).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        });
    }
}

export default api;