const supertest = require("supertest")
const server = require("../index")
const db = require("../data/db-config")


beforeEach(async () => {
    await db.seed.run
    await db("users").truncate()
})


    describe("LOGIN ROUTE", () => {
        test("login route", async () => {
          const regRes = await supertest(server)
            .post("/api/auth/register")
            .send({ 
                username: "SuperTest", 
            password: "password",
            email: "super@test.com",
            first_name: "Super",
            last_name: "Test",
            city: "SuperTestapolis",
            state: "Stable",
            zip_code: 61401,
            is_admin: 0
         });
          expect(regRes.status).toBe(201);
          expect(regRes.type).toBe("application/json");
          expect(regRes.body.user.username).toBe("SuperTest");

          const res = await supertest(server)
            .post("/api/auth/login")
            .send({ username: "SuperTest", password: "password" });
          expect(res.status).toBe(200);
          expect(res.type).toBe("application/json");
          expect(regRes.body.user.username).toBe("SuperTest");
        });
      });