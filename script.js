let firstname = " Visitor";
function greet(){
    // code here
    alert("Hello," + firstname + " Welcome to My Page!");
}
// greet(firstname);


document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
try {
    const response = await fetch('http://localhost:1080/api/login', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({username,password})

    });
    const data = await response.json();
    document.getElementById("response").textContent = JSON.stringify(data, null, 2);

    console.log(data);



} catch (err){
    document.getElementById("response").textContent = 'ERROR:' + err.message;
}
})

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const intro = document.getElementById('intro-overlay');
    if (intro) intro.style.display = 'none';
  }, 4500); // 3.5s delay + 4s fade
});