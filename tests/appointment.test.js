const request = require("supertest");
const app = require("../src/app");

describe("POST /api/citas", () => {
  it("se debio crear una cita exitosamente", async () => {
    const nuevaCita = {
      fecha: "2026-10-25",
      hora: "10:00",
      duracion: "60",
      email: "cliente@gmail.com",
    };
    const res = await request(app).post("/api/citas").send(nuevaCita);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.email).toBe(nuevaCita.email);
  });

  it("GET /a pi/citas/:id -> Retorna una cita especifica", async () => {
    const res = await request(app).get("/api/citas/1");

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.email).toBe(nuevaCita.email);
  });
});
