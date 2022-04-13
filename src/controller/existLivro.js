

module.exports  = (id,arrayObj) => {
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].id == id) {
            return i
        }
    }
    return -1
}