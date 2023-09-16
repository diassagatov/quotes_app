const dis = document.querySelector("#content");

const handlerPress = async () => {
    const res = await axios.get("https://type.fit/api/quotes")
    const data = await res.data[Math.floor(Math.random()*16)].text;
    dis.innerHTML = data;
}




