//
//
//var ill1  = {
//name: "Mechanical Object | Pocket watch",
//image: "imgs/illustrations/clock.svg"
//};
//
//var ill2  = {
//name: "Dream World",
//image: "imgs/illustrations/dreamworld.svg"
//};
//
//var ill3  = {
//name: "Classical Music Type Poster 1",
//image: "imgs/illustrations/type1.svg"
//};
//
//var ill4  = {
//name: "Classical Music Type Poster 2",
//image: "imgs/illustrations/type2.svg"
//};
//
//
//
//var products = [ ];
//
//products.push(ill1, ill2, ill3, ill4);
//console.log(products);
//
//
//var images = document.getElementById("display-images"),
//    info = document.getElementById("info");
//
//
//window.onload = function loadinfo(){
//    images.src = products[0].image; 
//    info.innerHTML = products[0].name;
//}
//
//
//var imgNum = 1;
//
//var position = 0;
//
////NEXT BUTTON: goes forwards 
//
//function next() {
//    
//     if(position >= 3){
//        position = 0;
//    }
//    else{
//        position++;
//    }    
//
//    
//    images.src = products[position].image; 
//    info.innerHTML = products[position].name;
//
//}
//
////PREVIOUS BUTTON: goes backwards 
//
//function previous() { 
//    
//       if(position <= 1){
//        position = 3;
//    }
//    else{
//        position--;
//    }    
//
//    
//    images.src = products[position].image; 
//    info.innerHTML = products[position].name;
//    
//}
//
//
//
//
//
//
//
//
//
//
//
