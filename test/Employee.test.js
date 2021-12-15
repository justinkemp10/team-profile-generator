const Employee = require("../classes/employee");
 
describe("Employee class", () => {
    describe("Employee initialization", () => {
        it("should create an object with a name string, id number, and email string", () => {
            const emp = new Employee("Janet", 3, "janet@gmail.com");
            
            expect(emp).toEqual({ name: "Janet", id: 3, email: "janet@gmail.com" });
         });
     });
    describe("getName method", () => {
        it("should return the name of Employee", () => {
            const emp = new Employee("Janet", 3, "janet@gmail.com");

            emp.getName("Janet");
            expect(emp.name).toBe("Janet");
         });
     });
    describe("getId method", () => {
        it("should return the ID of Employee", () => {
           const emp = new Employee("Janet", 3, "janet@gmail.com");

           emp.getId(3);
           expect(emp.id).toBe(3);
        });
    });
    describe("getEmail method", () => {
        it("should return the email of Employee", () => {
           const emp = new Employee("Janet", 3, "janet@gmail.com");

           emp.getEmail("janet@gmail.com");
           expect(emp.email).toBe("janet@gmail.com");
        });
    });
    describe("getRole method", () => {
        it("should return the role of Employee", () => {
           const emp = new Employee();

           expect(emp.getRole()).toBe("Employee");
        });
    });
 });