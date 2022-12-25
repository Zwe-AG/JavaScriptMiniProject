let result = document.getElementById('result');
let filter = document.getElementById('filter');
let listItem  = [];

let getData = async ()=>{
    let data = await fetch("https://randomuser.me/api?results=50");
    let {results}= await data.json();
    result.innerHTML = "";
    results.forEach(user => {
        let li = document.createElement("li");
        listItem.push(li);
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `;
        result.appendChild(li);
    });
}
getData();

filter.addEventListener("input",(e)=>filterData(e.target.value));
function filterData(inputText){
    listItem.forEach(item=>{
        if(item.innerText.toLowerCase().includes(inputText.toLowerCase())){
            item.classList.remove('hide');
        }else {
            item.classList.add('hide');
        }
    })
}