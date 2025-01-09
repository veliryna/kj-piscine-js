const queryServers = async(serverName, q) => {
    let url = '/' + serverName + '?q=' + q
    let backupUrl = '/' + serverName + '_backup?q=' + q
    const req1 = getJSON(url)
    const req2 = getJSON(backupUrl)
    let result = await Promise.race([req1, req2])
    return result
}

async function gougleSearch(q) {
    let timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    )
    var web = queryServers('web', q)
    let image = queryServers('image', q)
    let video = queryServers('video', q)

    const result = await Promise.race([timeout, Promise.all([web, image, video])])
    if (result instanceof Error) {
        throw result
    }
    return { image: result[1], video: result[2], web: result[0] }
}
