import { Dashboard } from "./dashboard";
import { describe, it, expect, beforeEachProviders, inject } from "angular2/testing";


describe("The dasboard component", () => {
    beforeEachProviders(() => [
       Dashboard 
    ]);
    
    it("should exist", inject([Dashboard], (dashboard) => {
        expect(dashboard).toBeDefined();
    }));
    
    it("should have a title of Dashboard", inject([Dashboard], (dashboard) => {
        expect(dashboard.title).toBe("Dashboard");
    }));
    
})