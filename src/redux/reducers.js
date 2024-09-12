import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';
// import img1 from '../img/img1.jpeg';
// import img2 from '../img/img2.jpeg';
// import img3 from '../img/img3.jpeg';
// import img4 from '../img/img4.jpeg';
// import img1 from '../public/img/img1.jpeg'

const initialState = {
  cart: [],
  products: [
     {  id: 1, name: 'Mobile: Iphone', price: 80000 , img:'/img/img1.jpeg' },
    { id: 2, name: 'Mpbile: Moto', price: 90000,img : '/img/img2.jpeg'},
    { id: 3, name:'Mobile :Vivo', price: 70000 , img:'/img/img3.jpeg'},
     { id: 5, name:'Mobile :Samsung', price: 50000,  img:'/img/img5.jpeg' },
     { id: 6, name:'Mobile :Oppo', price: 40000,  img:'/img/img6.jpeg' },
     { id: 7, name:'Mobile :Realme', price: 340000,  img:'/img/img7.jpeg' },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
