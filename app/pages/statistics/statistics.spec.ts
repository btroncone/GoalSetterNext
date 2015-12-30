import { Statistics } from "./statistics";
import { describe, it, expect, beforeEachProviders, inject } from "angular2/testing";


describe("The dasboard component", () => {
    beforeEachProviders(() => [
       Statistics 
    ]);
    
    it("should exist", inject([Statistics], (statistics) => {
        expect(statistics).toBeDefined();
    }));
    
    it("should have a title of Statistics", inject([Statistics], (statistics) => {
        expect(statistics.title).toBe("Statistics");
    }));
    
})