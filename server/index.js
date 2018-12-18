let cors = require('cors')
let path = require('path')
let express = require('express')
let server = express()
let data = {
    users: [
        {
            id: 1,
            name: '王琪亮',
            otherId: 1
        },
        {
            id: 2,
            name: '小雪',
            otherId: 2
        },
        {
            id: 3,
            name: '三妹',
            otherId: 3
        }
    ],
    others: [
        {
            id: 1,
            sex: '男',
            address: '北京',
            skill: [
                {
                    id: 1001,
                    name: '计算机'
                },
                {
                    id: 1002,
                    name: '开车'
                }
            ]
        },
        {
            id: 2,
            sex: '女',
            address: '上海',
            skill: [
                {
                    id: 1001,
                    name: '做饭'
                },
                {
                    id: 1002,
                    name: '招聘'
                }
            ]
        },
        {
            id: 3,
            sex: '女',
            address: '深圳',
            skill: [
                {
                    id: 1001,
                    name: '按摩'
                }
            ]
        }
    ]
}

// let appPath = path.resolve(__dirname + '../dist')
// server.use(express.static(appPath))
server.use(cors())

server.get('/', function (req, res) {
    res.send('Hello World')
})

server.get('/users', function (req, res) {
    let retData = {
        result: {
            code: 0,
            message: null
        },
        data: null
    }

    retData.data = data.users
    res.end(JSON.stringify(retData))
})

server.get('/others', function (req, res) {
    let retData = {
        result: {
            code: 0,
            message: null
        },
        data: null
    }

    retData.data = data.others
    res.end(JSON.stringify(retData))
})


server.get('/others/:id', function (req, res) {
    let retData = {
        result: {
            code: 0,
            message: null
        },
        data: null
    }

    let other = {}
    data.others.forEach(item => {
        if(item.id == req.params.id){
            other = item
        }
    })

    retData.data = other
    res.end(JSON.stringify(retData))
})

server.listen(8888, function () {})
