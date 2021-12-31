//Dependencies
const Axios = require("axios")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <url/link>")
    process.exit()
}

void async function Main(){
    try{
        const response = await Axios({
            method: "GET",
            url: Self_Args[0],
            headers: {
                "X-Forwarded-Host": "52159851258152091251209512571819.attacker.com"
            }
        })

        if(response.headers.hasOwnProperty("X-Forwarded-Host")){
            console.log("Website is vulnerable to host header injection.")
        }else{
            console.log("Website is not vulnerable to host header injection.")
        }
    }catch{
        console.log("Unable to make a request to the url/link, please make sure the url/link is valid.")
    }
}()