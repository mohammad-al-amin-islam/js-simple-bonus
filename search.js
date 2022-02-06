const products = [
    {name:'iphone 14', price : 70000},
    {name:'samsung phone 14', price : 60000},
    {name:'lenovo laptop', price : 50000},
    {name:'maclaptop', price : 100000},
    {name:'watch 14', price : 20000},
    {name:'samsung watch', price : 7000},
    {name:'plus one mobile', price : 17000}
]

function searchProducts(products,searchText){
    const array = [];
    for(let product of products){
        if(product.name.includes('phone')){
            array.push(product);
        }
    }
    return array; 
}

const matched = searchProducts(products,'phone');
console.log(matched);