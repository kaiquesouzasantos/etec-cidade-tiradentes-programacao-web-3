export class Get {
    static getProduct() {
        return new URLSearchParams(window.location.search).get("id")
    }
}