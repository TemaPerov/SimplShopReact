import ProductList from "../containers/ProductList"
import BasketPage from "../containers/BasketPage"


const routesConfig=[
    {
        path: '/',
        exact:true,
        component:ProductList,
    
    },
    {
        path:"/baskat",
        exact:true,
        component:BasketPage
    }
]

export default routesConfig