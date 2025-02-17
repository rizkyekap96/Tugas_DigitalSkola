const assert = require("assert");

describe('Delete User', async function() {
    it('Delete user should be success', async function() {
        this.timeout(5000);
        const url = 'https://reqres.in/api/users/1';

        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    });
});
