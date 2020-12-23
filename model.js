class Driver {
    constructor(attributes) {
        // whitelisted attributes get passed in as if I wrote this.id & this.name,  stores them, and returns the object with the proper attributes  Ex: ==> new Driver({id: 4, name: "Niki Lauda"})
        let whitelist = ["id", "name"]
        whitelist.forEach(attr => this[attr] = attributes[attr])
    }
}