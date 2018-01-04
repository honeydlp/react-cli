var initialState = {
  permissSideBar:{
    '用户管理': [
        {   path: '/index/users',
            name: '用户信息检索',
            icon:'icon-yonghu',
            id: '10000',
        },
        {   path: '/index/usersbill',
            name: '用户账务记录查询',
            icon:'icon-yonghu',
            id: '11000',
        },
        {   path: '/index/present',
            name: '收送礼记录查询',
            icon:'icon-yonghu',
            id: '12000',
        }
    ],
    '其他':[
        {   path: '/index/sendJpush',
            name: '群发系统消息',
            icon:'icon-qita',
            id: '14000',
        }        
    ]
  },
  userInfo:{}
}

export default initialState;