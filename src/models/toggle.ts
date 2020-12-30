import { Select } from 'antd';
import { delay } from 'lodash';
import { Reducer,Dispatch } from 'umi';

export interface toggleState{
    li: any[]
}

export interface ToggleType {
  namespace: 'toggle';
  state: toggleState;
  reducers: {
    addLi: Reducer<toggleState>;
    deleteLi: Reducer<toggleState>;
  };
  effects: any,
  subscriptions: any,
}

const Toggle: ToggleType = {
  namespace: 'toggle',
  state: {li: [0]},
  reducers: {
    addLi(state = { li: [] },{payload}):toggleState{
        let newData:number = state.li.length ? state.li[state.li.length-1] + 1 : 0
        return {
            ...state,
            li:[...state.li,newData]
        }
    },
    deleteLi(state = { li: [] },{payload}):toggleState{
        console.log(state)
        let li = [...state.li]
        li.splice(payload.index,1)
        return {
            ...state,
            li
        }
    }
  },
  effects: {
    *add({ payload } :any, { call, put, select }:any):any {
      yield select((state:any) => {
          console.log(state)
      })
      yield put({
        type: 'addLi',
        payload,
      })
    },

    *delete({ payload } :any, { call, put }:any):any {
        yield put({
            type: 'deleteLi',
            payload
        })
    }
  },
//   subscriptions: {
//     keyEvent({dispatch}) {
//       key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
//     },
//   }
};
export default Toggle;
