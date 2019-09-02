const request = require('request-promise');

const createOption = () => {
    return {
        headers: {
            'moduleId': 1,
                'optAccountType': 1,
                'Content-Type': 'application/json;charset=utf-8',
                'optName': encodeURIComponent(req.session.username),
                'userName': encodeURIComponent(req.session.username)
        },
        data: _.extend({}, (req.originalMethod === 'GET' ? req.query : req.body), {
            optAccountType: 1,
            optName: req.session.username,
            logId: logId,
            appKey: 'jupingssp',
            sign: md5(logId + 'jupingssp')
        }),
            method: 'POST',
        pack: 'json',
        path: req.url,
    }
}

module.exports = {
    '/api/*': {
        target: 'http://localhost:3100',
        bypass: function (req, res, proxyOptions) {
            // console.log(req.query);
            // console.log(res);
            console.log(req.url);
            switch (req.url) {
                case '/api/login':
                    console.log(req.url);
                    res.send({pp:'2222'});
                    break;
            }

            // request()
        }
    }
};