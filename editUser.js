const assert = require("assert");

describe('Edit User', async function(){
    it('Edit user should be success', async function (){
        this.timeout(5000)
        const url ='https://reqres.in/api/users/1'
        const requestData = {
            "name":"Rizky Eka Pratama",
            "job":"Digital Skola Batch 8"
        };

        const response = await fetch(url, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

        console.log("Response : " + JSON.stringify(Responsedata, null, 1));

        assert.strictEqual(response.status, 200, "Status harus 200");

        //assert.strictEqual(Responsedata.name, "Rizky Eka Pratama");
    })
})