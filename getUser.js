const assert = require("assert");

describe('request GET', ()=>{
    it('User get request should be success', async function (){
        this.timeout(5000);

        //untuk get url
        const response = await fetch('https://reqres.in/api/users/1');

        //untuk mencetak response
        //const ResponseData = await response.json();
        //console.log("Response: " + JSON.stringify(ResponseData, null, 1));

        //untuk kasih kondisi kalau response status 200
        assert.strictEqual(response.status, 200, "Status harus 200");

        })
    it('User get invalid request should be error', async function (){
        this.timeout(5000);

        const response = await fetch('https://reqres.in/api/users/20000');

        //const ResponseData = await response.json();
        //console.log("Response: " + JSON.stringify(ResponseData, null, 1));

        assert.strictEqual(response.status, 404, "Status harus 404");
    })
})