const Engineer = require("../classes/engineer");
 
describe("Engineer class", () => {
    describe("Engineer initialization", () => {
        it("should create an object with a 'name' string, 'id' number, 'email' string, and 'GitHub' string", () => {
            const eng = new Engineer("Janet", 3, "janet@gmail.com", "janet54321");
            
            expect(eng).toEqual({ name: "Janet", id: 3, email: "janet@gmail.com", github: "janet54321" });
         });
     });
    describe("getGithub method", () => {
        it("should return the GitHub username of Engineer", () => {
           const eng = new Engineer("Janet", 3, "janet@gmail.com", "janet54321");

           eng.getGithub("janet54321");
           expect(eng.github).toBe("janet54321");
        });
    });
    describe("getRole method", () => {
        it("should return the role of Engineer", () => {
           const eng = new Engineer();

           expect(eng.getRole()).toBe("Engineer");
        });
    });
 });