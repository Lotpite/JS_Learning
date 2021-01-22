const postData = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    });
    return await result.json();
};

async function getResource(url) {
    let result = await fetch(url);
    
    if (!result.ok) {
        throw new Error('Error');
    }      
    
    return await result.json(); 
}

export {postData};
export {getResource};