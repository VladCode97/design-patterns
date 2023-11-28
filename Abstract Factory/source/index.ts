import {SamsungSellerProducts} from "./specific-factories/samsung-seller-products";

const sellerSamsung = new SamsungSellerProducts();


console.log(sellerSamsung.sellTV().onTV());
console.log(sellerSamsung.sellLaptop().onLaptop());