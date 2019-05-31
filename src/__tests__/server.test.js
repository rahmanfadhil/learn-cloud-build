import supertest from "supertest";
import server from "../server";

test("Should return correct response", done => {
  supertest(server)
    .get("/")
    .expect(200, "Hello world! everyone", done);
});
