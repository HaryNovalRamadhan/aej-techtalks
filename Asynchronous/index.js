function login(resolve,rejected){
    const token = "awdaliwdilauwdliuawidawdiawbdlia1g23awd"
    const password = "test123"

    console.log("Proses Login Berlangsung...")
    setTimeout(() => {
        if(password == "test123"){
            resolve(token)
        } else {
            rejected(null)
        }
    }, 1000)
}

function gambar(token){
    console.log("Proses Pengambilan Gambar Berlangsung...")
    if(token != null){
        return function gambarResult(resolve,rejected){
            setTimeout(() => {
                if(token != null){
                    resolve("Gambar Tersedia!")
                } else {
                    rejected("Gambar Tidak Tersedia")
                }
            },3000)
        }
    } else {
        console.log("Token tidak di temukan!")
    }
}

async function ngambilGambar(){
    try{
        const loginresult = await new Promise(login)
        console.log(loginresult)
        const gambarresult = await gambar(loginresult)
        const hasilgambar = await new Promise(gambarresult)
        console.log("Gambar Result", hasilgambar)     
    } catch(error){
        console.log("ERROR ",error)
    }
}

ngambilGambar()