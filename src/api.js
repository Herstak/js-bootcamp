export async function getUsersData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data.map(user => user.name);
    } catch (error) {
        alert(error);
        return [];
    }
}