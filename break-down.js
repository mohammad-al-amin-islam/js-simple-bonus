const products = [
    {name:'iphone 14', price : 70000},
    {name:'samsung phone 14', price : 6000},
    {name:'lenovo laptop', price : 6000},
    {name:'maclaptop', price : 100000},
    {name:'watch 14', price : 4000},
    {name:'samsung watch', price : 4000},
    {name:'plus one mobile', price : 17000}
]

/* for(const product of products){
    if(product.price<5000){
        break;
    }
    console.log(product);
}
console.log('this is product'); */

for(const product of products){
    if(product.price<10000){
        continue;
    }
    console.log(product);
}
console.log('the loop is ended');