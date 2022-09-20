// removeImages(document.getElementsByTagName('img'))

// // get all images
// function removeImages(images) {
//     var srcList = [];
//     for (var i = 0; i < images.length; i++) {
//         srcList.push(images[i].src);
//     }
// }

for (var i= document.images.length; i-->0;)
    document.images[i].parentNode.removeChild(document.images[i]);