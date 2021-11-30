const add = (data,req)=>{
    data.push(Object.assign((req.body), {quantity: 1}))
    return JSON.stringify(data, null, 4)
}

const change = (data, req)=>{
    let find = data.find(item => item.id === req.body[0].id)
    if(req.body[1].operation === "add"){
        find.quantity++
        return JSON.stringify(data, null, 4)
    } else {
        find.quantity--
    }
    return JSON.stringify(data, null, 4)
}

const del = (data, req)=>{
    let find = data.find(item => item.id === req.body.id)
    data.splice(data.indexOf(find), 1)
    return JSON.stringify(data, null, 4)
}

module.exports ={
    add,
    change,
    del
}