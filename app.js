const APIURL = "https://api.github.com/users/";

const main = document.querySelector("#main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

getUser("b0llu");

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  const respData = await resp.json();

  createUserCard(respData);

  getRepos(username);
}

function createUserCard(user) {
  cardHTML = `
    <div class="card">
        <div class="img-container">
            <img class='avatar' src='${user.avatar_url}' alt='${user.name}' />
        </div>
        <div class='user-info'>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            
            <ul class='info'>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            <a href='${user.html_url}' target='_blank'>Check GitHub</a>
            <a href='${user.blog}' target='_blank'>Check Site</a>
        </div>
    </div>
    `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
