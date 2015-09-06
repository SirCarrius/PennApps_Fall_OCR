// function changeImage() {
//     if (document.getElementById("imageOne").onclick = function()) {
//         document.getElementById("image1").src == "img/receipt-one.jpg";
//         //return false;
//     }
//     else if (document.getElementById("imageTwo").onclick = function()) {
//         document.getElementById("image2").src == "img/receipt-two.jpg";
//         //return false;

//     }
// }

// document.getElementById("imageOne").onclick = function() {
//         document.getElementById("image").src = "img/receipt_one.jpg";
//         return false;
// }

// document.getElementById("imageTwo").onclick = function() {
//         document.getElementById("image").src = "img/receipt_two.jpg";
//         return false;
// }

var displayImage = function(imagePath) {
    document.getElementById("image").src = imagePath;
    return false;
}