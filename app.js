var order = prompt("what type of flower do you want tulip or roses");

while (order !== "tulip" && order !== "roses" ){

    order = prompt("what type of flower do you want tulip or roses");
}

var itemorder = ' ';
if (order === 'tulip')
{
itemorder = '<img style="width:200px; " src = "images/tulips.jpg"/>'
}
else if (order === 'roses'){
    itemorder = '<img style="width:200px; " src = "images/rose.jpg"/>'
}


var nobouquet = prompt("How manya bouquet do you want");

var result = '';
for ( var i = 0; i<nobouquet ; i++){
    result = result + itemorder;

}
document.write(result);