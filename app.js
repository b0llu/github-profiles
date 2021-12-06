const APIURL = "https://api.github.com/users/";

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  const respData = await resp.json(); 

  createUserCard(respData)
}


