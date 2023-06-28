for (let i of array) {
    console.log(i)
}

for (let i in array) {
    console.log(array[i])
}

array.forEach((data, num) => {
    console.log(data)
    console.log(num)
})


array.forEach(function (value, index) {
    console.log(value, index)
})
