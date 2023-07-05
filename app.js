
const laptop = {
    img: 'https://avatars.mds.yandex.net/get-marketpic/5503876/pic15cb92a8be808aa5ff02f4b7f537c354/orig',
    model: ' HP 470 G8',
    price: 146580,
    color: 'white',
    ssd: 256
}
const laptop2 = {
    ...laptop,
    img: 'https://avatars.mds.yandex.net/get-mpic/6223149/img_id81753980366130292.jpeg/orig',
    model: 'HP 255 G8 ',
    price: '59577',
    color: 'black'
}
const laptop3 = {
   
    img:'https://cdn.citilink.ru/4vkJqvpmkGcPnjaguUplSDv8Ve1Sl0k318PcrJHXCyY/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1844017_v01_b.jpg',
    model:'HP EliteBook 850 G8',
    price:141590,
    ssd:512,
    color:'silver'
}
    
    const laptop4 = {
        ...laptop3,
        img:'https://cdn.citilink.ru/1OOTw0VzmXYHfhNUnEDuapa_j0VdsPrrgr0PCIdv4YU/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1858963_v04_b.jpg',
        price:128090,
        model: 'HP ProBook 450 G8'
    }

const smartlaptops = [laptop, laptop2, laptop3, laptop4]

function fetchLaptop(laptopName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (laptopName === "hp") {
                resolve(smartlaptops)
            } else {
                reject("Product Not Found")
            }
        }, 2000);
    });
}

const input = document.getElementById("input")
const btn = document.getElementById("btn-s")
const emptyDiv = document.getElementById("laptop")

btn.onclick = () => {
    const name = input.value
    emptyDiv.innerHTML = "<h4>Loading...</h4>"
    const res = fetchLaptop(name).then((data) => {
        emptyDiv.innerHTML = ""
        for (let i = 0; i < data.length; i++) {
            emptyDiv.innerHTML += `
        <div>
            <img src="${data[i].img}" width="150px" alt="" />
        </div>
        <div>
             <h4>${data[i].model}</h4>
             <p>Price:${data[i].price}  ₽ </p>
             <p>Ssd:${data[i].ssd}</p>
             <p>Color:${data[i].color}</p>
        </div>
        `
        }
    }).catch((error) => {
        emptyDiv.innerText = error
    }).finally(() => {
        input.value = ""
    })
    console.log(res);
}