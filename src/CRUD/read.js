
const fetchCollection = async (collection) => {
    let data = []
    await fetch(`/api/${collection}`)
        .then(response => response.json())
        .then(res => data =res) // either this or data.push(res)
        .catch(error => console.log(error.message))
    return data[0]
}

export default fetchCollection 