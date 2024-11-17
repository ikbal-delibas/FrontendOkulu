// function getTextFile(){
//     fetch("text.txt")
//      .then(response => response.text())
//      .then((data)=> console.log(data))
//      .catch(error => console.error('Error:', error));
// }

// getTextFile()

// function getJsonFile(){
//     fetch("users.json")
//      .then(response => response.json())
//      .then((data)=> console.log(data))
//      .catch(error => console.error('Error:', error));
// }

// getJsonFile()

// function getApi(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//      .then(response => response.json())
//      .then((data)=> console.log(data))
//      .catch(error => console.error('Error:', error));
// }

// getApi()

class Request {
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then((data) => resolve(data))
                .catch(error => reject(error, "Veri alınamadı."));

        })
    }

    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then((data) => resolve(data))
                .catch(error => reject(error, "Veri gönderilemedi."));
        }
        )
    }

    static put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then((data) => resolve(data))
                .catch(error => reject(error, "Veri güncellenemedi."));
        }
        )
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE'
            })
               .then(response => response.json())
               .then((data) => resolve(data))
               .catch(error => reject(error, "Veri silinemedi."));
        }
        )
    }
}

// Request.get("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))


// Request.post("https://jsonplaceholder.typicode.com/posts", {
//     userId: 1,
//     title: "New Post",
//     body: "This is a new post",
// })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

// Request.put("https://jsonplaceholder.typicode.com/posts/1", {
//     userId: 1,
//     title: "New Post",
//     body: "This is a updated post",
// })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))



Request.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => console.log("Deleted"))
    .catch((error) => console.log(error))