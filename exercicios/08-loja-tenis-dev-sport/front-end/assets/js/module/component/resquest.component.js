export class Requester {
    /*
    static returnProducts() {
        const url = `http://localhost:3000/produtos`
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText)

                    if (!data.erro) {
                        return data
                    }
                }
            }
        };

        xhr.open('GET', url)
        xhr.send()
    } 
    */
   
    static async returnProducts() {
        return (await fetch(`http://localhost:3000/produtos`)).json()
    }
}