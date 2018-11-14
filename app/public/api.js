import utils from './utils';

const api = {
    //创建一个新的sessions
    postV1Sessions: (params) => {
        return new Promise((resolve, reject) => {
            utils.disRequest(`${utils.domain}/v1/sessions`, {
                method: 'POST',
                body: utils.jsonToFormData(params)
            }).then((res) => {
                if (utils.checkRequestSuccess(res)) {
                    res.json().then(data => resolve(data));
                } else {
                    res.json().then(data => {
                        alert(`错误: ${data.error}`);
                        reject(data.error);
                    });
                }
            }).catch(err => {
                alert(`网络异常`);
                reject(err)
            });
        });
    },
}

export default api;