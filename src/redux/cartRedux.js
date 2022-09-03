// cartRedux toolkit install

// 다음은 카트를 장바구니 추가할때 연동하여 navbar 상단에 장바구니 갯수를 추가해주는 작업이다.

import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        products: [],
        quantity : 0,
        total: 0,
    },
    // 해당 product를 추가하는 장바구니에 대한 데이터를 전달해준다.
    reducers:{
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price
        }
    }
});


export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;