const ACTION_ADD = "ACTION_ADD"
const CLEAR_ALL = "CLEAR_ALL"
const REMOVE_ITEM = "REMOVE_ITEM"
const PLUS_ITEM = "PLUS_ITEM"
const MINUS_ITEM = "MINUS_ITEM"


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

export const cartReducer = (state = initialState, action) => {
    switch (action.type){

        case ACTION_ADD: {
            const currentPizzaItems = !state.items[action.product._id]
                ? [action.product]
                : [...state.items[action.product._id].items, action.product];

            const newItems = {
                ...state.items,
                [action.product._id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case CLEAR_ALL:{
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        }

        case REMOVE_ITEM:{
            const newItems = {
                ...state.items,
            }
            const currentTotalPrice = newItems[action._id].totalPrice
            const currentTotalCount = newItems[action._id].items.length
            delete newItems[action._id]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }

        case PLUS_ITEM: {
            const newObjItems = [
                ...state.items[action._id].items,
                state.items[action._id].items[0],
            ];
            const newItems = {
                ...state.items,
                [action._id]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case MINUS_ITEM: {
            const oldItems = state.items[action._id].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action._id].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action._id]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        default: return state
    }
}

export const actionAdd = (product) => ({type:ACTION_ADD, product})
export const actionClearCart = () => ({type:CLEAR_ALL})
export const removeItemAction = (_id) => ({type:REMOVE_ITEM, _id: _id})
export const plusItemAction = (_id) => ({type:PLUS_ITEM, _id: _id})
export const minusItemAction = (_id) => ({type:MINUS_ITEM, _id: _id})

