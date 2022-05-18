const API_URL = "https://api.github.com/users/";

var form = document.getElementById('form')
var result = document.getElementById('result');
var search = document.getElementById('search')


const getUser = async (username) =>{
    const res = await fetch(API_URL + username);
    const resDate = await res.json();
    console.log(resDate)
    createUser(resDate)
}

getUser("Samandar0021305")

form.addEventListener('submit',(e)=>{
e.preventDefault();
const user = search.value;
if(user){
    getUser(user)
    search.value = "";
}
})


const createUser = (user)=>{
    if(user.name ==null){
        user.name = ""
    }
    const cardHTML = `
    <div class="card">
    <img class="user-img" src=${user.avatar_url} alt=${user.name} />
     
    <div class="user-info">
     <h2 class="name">${user.name}</h2>
     <h3 class="login>${user.login}</h3>
     <p class="bio>${user.bio}</p>
     <ul class="info">
         <ul class="followers">
          <li><strong>
           ${user.followers}
          </strong></li>
          <li><strong>
           ${user.following}
          </strong></li>

          <li><strong>
           ${user.public_repos}
          </strong></li>
        </ul>
     </ul>
    </div>
    </div>
    `
    result.innerHTML = cardHTML
}