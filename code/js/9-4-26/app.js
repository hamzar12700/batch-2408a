// var names = ['junaid','sufiyan','awais','ahmed','ayan'];


var rest = [{
    item: "biryani",
    price: "200 Rs",
}, {
    item: "halwa pori",
    price: "50 Rs"
}, {
    item: "mandi",
    price: "1,200 Rs"
}]


// console.log(rest);


rest.forEach(function(items){
console.log(items);

const div = document.createElement("div")
div.id = "boxes";
div.innerHTML = `${items.item}`

document.querySelector(".container").appendChild(div)

})





// console.log(names[2]);


// names.forEach(function(item){
// // console.log(item);

// })


// let maped = names.map(function(aptech){
// return aptech === "ahmed"

// })


// console.log(maped);





// let filtered = names.filter(function(item){
// return item === "awais"
// })


// console.log(filtered);







