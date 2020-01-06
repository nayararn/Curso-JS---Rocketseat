/*var minhaPromise = function name() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/nayararn');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject('Erro na requisição');
            }
        }
    });
}*/

axios.get('https://api.github.com/users/nayararn')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });