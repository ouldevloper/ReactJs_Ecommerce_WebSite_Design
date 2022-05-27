import { action } from "history";

const cart = [];

const handlerCart = (state = cart , action) =>{
    const product = action.payload;
    switch(action.type){
        case "ADD":
            const exists = state.find((x)=> x.id === product.id);
            if(exists){
                return state.map((x)=>
                    x.id === product.id ? {...x,qty:x.qty+1}:x
                );
            }else{
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ];
            }
            break;
        case "DEL":
            const exist = state.find((x)=> x.id === product.id);
            if(exist.qty === 1 ){
                return state.filter((x)=> x.id !== exist.id);
            }else{
                return state.map((x)=>
                    x.id === product.id ? {...x,qty:x.qty-1}:x
                );
            }
            break;
        default : return state;
        break;
    }
}
export default handlerCart;