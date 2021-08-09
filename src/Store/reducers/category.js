// 1. Khai báo giá trị state reducer quản lý
const initialState = {
    categoryList:[
        { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
        { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
        { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
        { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
        { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
        // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
        { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
        { tabName: 'tabBackground', showName: 'Nền', type: 'background' }
    ],
    selectedCategory:"topclothes",
};
// 2. Khởi tạo reducer: là 1 function tiếp nhận action,chỉnh sửa state
// return về state mới sau khi chỉnh sửa

//shallow comparation: so sánh nong
const reducer= (state=initialState,action) =>{
    switch(action.type){
        case "SET_SELECTED_CATEGORY":
            state.selectedCategory=action.payload;
            return {...state};
        default:
            return state;
    }
    // // chỉnh sửa state theo action
    // return state;
};

export default reducer;