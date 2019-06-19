export default {
    namespace: 'productModel',
    state: {
        data: [{
            id: 1,
            name: '单马甲',
            photo: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            price: 26,
            num: 0,
            description: '360度清洗，全面烘干',
        },
        {
            id: 2,
            name: '毛衣',
            photo: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            price: 50,
            num: 0,
            description: '不是所有的兼职汪都需要风吹日晒',
        },],
        
        total: 0
    },
    subscriptions: {},
    effects: {},
    reducers: {
        setData(state, action) {
            return { ...state, data: action.payload };
        },
        setTotal(state, action) {
            return { ...state, total: action.payload };
        }
    },
}
