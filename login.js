let dbusers = [
    {
        username: "fadzlan",
        password: "hehehe",
        name: "lan",
        email: "lan@utem.com"
    },
    {
        username: "syed",
        password: "syed123",
        name: "ahmad",
        email: "syed@utem.com"
    },
    {
        username: "zaid",
        password: "zaid123",
        name: "zaidi",
        email: "zaid@utem.com"
    }
]

function login(requsername, reqpassword) {
    let matchuser = dbusers.find(
        user => user.username == requsername
    )
    console.log(matchuser)
}

login("fadzlan","hehehe")

function register(requsername,reqpassword,reqname,reqemail){
    dbusers.push({
        username: requsername,
        password: reqpassword,
        name: reqname, 
        email: reqemail 
    })
    }
register("syed","syed123","ahmad","syed@utem.com")
console.log(login("syed","syed123"))