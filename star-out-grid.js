function starOutGrid(grid) {

    let x = []
    let y = []
    let result = grid

    // Loads the indices to go through and star
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j] == "*"){
                console.log("MATCH")
                x.push(i)
                y.push(j)
            }

        }
    }

    // Goes through copy of input and stars where x-index indicates
    for (let i = 0; i < grid.length; i++){
        if (x.includes(i)){
            for (let char in result[i]){
                result[i][char] = '*'
            }
        }
    }

    // Goes through the copy and stars where the y-index indicates. Some repetition.
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            if (y.includes(j)){
                result[i][j] = "*"
            }
        }
    }
    return result
}
