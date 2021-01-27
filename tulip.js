var flowerType =prompt("what type of flower do you want?");
var noflower = prompt("How much do you want a bouquet of flowers?");

var orderDetalis;
if (noflower >= 2 && noflower <5 ){

orderDetalis="congrats you gain adiscount of 25% ";

}
else if
(noflower >= 5 && noflower <8){

orderDetalis="congrats you gain adiscount of 40% and afree bouquet  "
}
else if(noflower >= 8 ){

    orderDetalis="congrats you gain adiscount of 60% and afree 2 bouquet :)";

}else {
    orderDetalis="no discount";

}

document.write(orderDetalis);
document.getElementById("Order").innerText=noflower ;

confirm("You honored us by your visit");
alert(" Thank you ,Good by ");