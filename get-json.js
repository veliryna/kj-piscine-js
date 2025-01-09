const getJSON = async(path, params) => {
    let url = path + '?' + Object.keys(params).map((key) => {
                return (
                    key.replace(' ', '+') + '=' +
                    params[key].toString().replace(' ', '+')
                )}).join('&')
    let result = await fetch(url).then((response) => {
        if (response.ok) {
            return response.json()
        } 
        else {
            throw new Error(response.statusText)
        }
    })
    if(result.error){
        throw new Error(result.error)
    }
    else return result.data
}