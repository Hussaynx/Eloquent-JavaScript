function remove(array, index) {
    return array.slice(0, index)
    .concate(array.slice(index+1))
}

console.log(remove(["a", "b", "c", "d", "e"], 2));