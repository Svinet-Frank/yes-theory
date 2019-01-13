let objUsers = [
        {
        username: "Mikkel",
        password: "mikkel123"
        },
        {
        username: "Underviser",
        password: "qazwsx123"
        },
        {
        username: "Bruger",
        password: "bruger123"
        }
            ];
        
    function getInfo() {
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value
        
        for(i = 0; i < objUsers.length; i++)
            if(username == objUsers[i].username && password == objUsers[i].password) {
                location=("index.html");
            }
    }