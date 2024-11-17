class Request {
    static async get(url) {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data
    }

    static async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            throw new Error(`POST Request Failed: ${error.message}`);
        }
    }

    static async put(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            throw new Error(`PUT Request Failed: ${error.message}`);
        }
    }

    static async delete(url) {
        try {
            const response = await fetch(url, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = "İşlem Başarılı"
            return data;
        } catch (error) {
            throw new Error(`DELETE Request Failed: ${error.message}`);
        }
    }
}

Request.get("https://jsonplaceholder.typicode.com/posts")
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));