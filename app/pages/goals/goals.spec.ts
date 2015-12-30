import { Goals } from "./goals";
import { describe, it, expect, beforeEachProviders, inject } from "angular2/testing";


describe("The dasboard component", () => {
    beforeEachProviders(() => [
       Goals 
    ]);
    
    it("should exist", inject([Goals], (goals) => {
        expect(goals).toBeDefined();
    }));
    
    it("should have a title of Goals", inject([Goals], (goals) => {
        expect(goals.title).toBe("Goals");
    }));
    
})