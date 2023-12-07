const request = require("supertest");
const app = require("../app-nera");

describe("Login / Cadastro ", () => {
    test("Testando Login caso funcione code 200 caso nao code 401", async () => {
        const res = await request(app)
            .post("/usuario/login")
            .send({
                email: 'keke2',
                senha: '12345'
            }
            )
            expect(res.statusCode).toEqual(200);
    });

    test("Testando Cadastro caso funcione code 200 caso nao code 401", async () => {
        const res = await request(app)
            .post("/usuario/cadastrar")
            .send({
                email: 'kekeTesteJest',
                senha: '12345'
            }
            )
            expect(res.statusCode).toEqual(200);
    });
})

