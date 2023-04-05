import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader = async () => {
    const loadedProducts = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const products = await loadedProducts.json()
    
    let savedCard = [];
    const storedCard = getShoppingCart()
    for (const id in storedCard) {
        const addedProduct = products.find(pd => pd.id === id)
        if (addedProduct) {
            const quantity = storedCard[id]
            // console.log(quantity);
            addedProduct.quantity = quantity;
            // console.log(addedProduct);
            savedCard.push(addedProduct)
            // console.log(savedCard);
        }
    }




    return savedCard;

}

export default cardProductLoader;