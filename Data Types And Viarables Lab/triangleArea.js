function triangleArea (a, b, c){

    let perimeter = (a + b + c) / 2;
    let triangleArea = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c))
    console.log(triangleArea)
}
triangleArea (2,3.5,4)