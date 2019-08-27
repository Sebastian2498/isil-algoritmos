//Hallar el minimo/máximo de los valores
//procedores del arreglo
let a = [4,8,1,5,10,3]

function getMin(a) {
    if (a.length == 0) return -1

     let min = a[0]
     for (let i = 0; i< a.length; i++) {

        if (square(a[i])< min  ) min = square(a[i])
     }
        return min

}

function square(n) {
    return n*n

}
console.log(getMin(a))