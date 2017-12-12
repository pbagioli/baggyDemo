module Tests {

    describe('Jasmine tests should', () => {


        it("be true", () => {
            console.log("Hi sean");
            expect(true).toBe(false); 
        });


        it("be false", () => {
            expect(true).toBe(false);
        });
     


    });

    describe('Jasmine tests  also', () => {


        it("be true", () => {
            expect(true).toBe(false);
        });


        it("be false", () => {
            expect(true).toBe(false);
        });



    });

}