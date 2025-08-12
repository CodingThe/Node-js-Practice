async function getUsers() {
    try{
        console.log("Fetching api");
        const user = await fetchData();
        console.log("users",user);
    }catch(error){
        console.log("error",error);
    }
}

getUsers();