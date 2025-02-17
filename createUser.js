const assert = require("assert");

describe('Create User', async function(){
    it('Create user should be success', async function (){
        this.timeout(5000)
        const url ='https://reqres.in/api/users'
        const requestData = {
            "name":"Rizky Eka Pratama",
            "job":"Digital Skola Batch 8"
        };

        const response = await fetch(url, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

        //console.log("Response : " + JSON.stringify(Responsedata, null, 1));

        assert.strictEqual(response.status, 201, "Status harus 201");

        assert.strictEqual(Responsedata.name, "Rizky Eka Pratama");
    })
})