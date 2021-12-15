const Manager = require("../classes/manager");
 
describe("Manager class", () => {
    describe("Manager initialization", () => {
        it("should create an object with a 'name' string, 'id' number, 'email' string, and 'office number' string", () => {
            const mng = new Manager("Janet", 3, "janet@gmail.com", "555-555-5555");
            
            expect(mng).toEqual({ name: "Janet", id: 3, email: "janet@gmail.com", officeNumber: "555-555-5555" });
         });
     });
    describe("getOfficeNumber method", () => {
        it("should return the office number of Manager", () => {
           const mng = new Manager("Janet", 3, "janet@gmail.com", "555-555-5555");

           mng.getOfficeNumber("555-555-5555");
           expect(mng.officeNumber).toBe("555-555-5555");
        });
    });
    describe("getRole method", () => {
        it("should return the role of Manager", () => {
           const mng = new Manager();

           expect(mng.getRole()).toBe("Manager");
        });
    });
 });