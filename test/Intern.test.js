const Intern = require("../classes/intern");
 
describe("Intern class", () => {
    describe("Intern initialization", () => {
        it("should create an object with a 'name' string, 'id' number, 'email' string, and 'school' string", () => {
            const int = new Intern("Janet", 3, "janet@gmail.com", "UNLV");
            
            expect(int).toEqual({ name: "Janet", id: 3, email: "janet@gmail.com", school: "UNLV" });
         });
     });
    describe("getSchool method", () => {
        it("should return the school of Intern", () => {
           const int = new Intern("Janet", 3, "janet@gmail.com", "UNLV");

           int.getSchool("UNLV");
           expect(int.school).toBe("UNLV");
        });
    });
    describe("getRole method", () => {
        it("should return the role of Intern", () => {
           const int = new Intern();

           expect(int.getRole()).toBe("Intern");
        });
    });
 });