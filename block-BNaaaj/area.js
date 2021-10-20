// 3. In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports

function areaSquare(side){
    return side*side;
}
function areaRectangle(length,width){
    return length*width;
}
function areaCircle(radious){
    return 3.14*radious*radious;
}

module.exports={
    areaSquare:areaSquare,
    areaRectangle:areaRectangle,
    areaCircle:areaCircle,
}