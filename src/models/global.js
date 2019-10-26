export default {
    namespace: 'global',
    state: {
        text: 'NO.1'
    },
    effects: {
        *fetchTableData({ payload }, { call, put }) {
            yield put({
                type: '_fetchTableData',
                payload: 'NO.2',
            });
        },
    },
    reducers: {
        _fetchTableData(state, action) {
            const text = action.payload;
            return {
              text
            };
        },
    },
};
