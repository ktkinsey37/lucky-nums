function snakeToCamel(input) {

    let result = input.split('')
    console.log(result)

    for (let i = 0; i < result.length; i++){
        if (result[i] == '_'){
            result[i + 1] = result[i + 1].toUpperCase()
            result.splice(i, 1)
        }
    }
    result = result.join('')

    return result

}

