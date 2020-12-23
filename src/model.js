class Driver {
    constructor(attributes) {
        // whitelisted attributes get passed in as if I wrote this.id & this.name,  stores them, and returns the object with the proper attributes  Ex: ==> new Driver({id: 4, name: "Niki Lauda"})
        let whitelist = ["id", "name"]
        whitelist.forEach(attr => this[attr] = attributes[attr])
    }

    static all() {
        // Driver.all returns a promise for all driver objects by fetching /drivers. 
        // These objects get stored in Driver.collection so we can reference it after calling Driver.all()
        console.log("called .all")
        return fetch("http://localhost:3000/drivers", {
            headers: {
                "accept": "application/json",
                
            }
        })
    } 


}

