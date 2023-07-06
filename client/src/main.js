export async function fetchData(route='', data={},methodType){
    const response=await fetch(`http://localhost:5000${route}`,{
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    //dealing with our responce from server
    if(response.ok){
        return await response.json();
    }else{
        throw await response.json();
    }


}