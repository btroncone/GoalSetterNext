import { describe, it, expect, beforeEach, beforeEachProviders, inject } from "angular2/testing";
import { provide } from "angular2/core";
import { Goals } from "./goals";
import { GoalService } from "../../services/goal-service";
const moment = require("moment");

describe("The dasboard component", () => {
    class MockGoalService{
        retrieveGoalsByDate(){}
    }
    
    beforeEachProviders(() => [
       Goals,
       provide(GoalService, {useClass: MockGoalService})
    ]);
    
    beforeEach(inject([GoalService], (goalService) => {
        spyOn(goalService, "retrieveGoalsByDate").and.returnValue(new Promise(() => {}));
    }));
    
    it("should exist", inject([Goals], (goals) => {
        expect(goals).toBeDefined();
    }));
    
    it("should have a title of the current date", inject([Goals], (goals) => {
        expect(goals.titleDate).toBe(moment().format("MMM Do YY"));
    }));
    
    it("should invoke the GoalService with the correct parameters when constructed", inject([Goals, GoalService], (goals, goalService) => {
        expect(goalService.retrieveGoalsByDate).toHaveBeenCalledWith(moment().format('L'));
    }));
    
    it("should correctly decrement a day when decrement day is invoked", inject([Goals], (goals) => {
        goals.decrementDay();
        expect(goals.goalDate).toBe(moment().add(-1, 'd').format('L'));
    }));
    
    it("should correctly increment a day when incrementDay is invoked", inject([Goals], (goals) => {
        goals.incrementDay();
        expect(goals.goalDate).toBe(moment().add(1, 'd').format('L'));
    }));
    
})