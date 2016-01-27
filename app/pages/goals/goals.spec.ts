// import { describe, it, expect, beforeEach, beforeEachProviders, inject } from "angular2/testing";
// import { provide } from "angular2/core";
// import { Goals } from "./goals";
// import {Modal} from 'ionic-framework/ionic';
// import { GoalService } from "../../services/goal-service";
// const moment = require("moment");

// describe("The dasboard component", () => {
//     class MockGoalService{
//         retrieveGoalsByDate(){}
//         deleteGoal(){}
//         updateGoalStatus(){}
//     }
//     class MockModal{
//         open(){}
//     }
    
//     beforeEachProviders(() => [
//        Goals,
//        provide(Modal, {useClass: MockModal}),
//        provide(GoalService, {useClass: MockGoalService})
//     ]);
    
//     beforeEach(inject([GoalService], (goalService) => {
//         spyOn(goalService, "retrieveGoalsByDate").and.returnValue(new Promise(() => {}));
//         spyOn(goalService, "deleteGoal").and.returnValue(new Promise(() => {}));
//         spyOn(goalService, "updateGoalStatus").and.returnValue(new Promise(() => {}));
//     }));
    
//     it("should exist", inject([Goals], (goals) => {
//         expect(goals).toBeDefined();
//     }));
    
//     it("should have a title of the current date", inject([Goals], (goals) => {
//         expect(goals.titleDate).toBe(moment().format("MMM Do YY"));
//     }));
    
//     it("should invoke the GoalService with the correct parameters when constructed", inject([Goals, GoalService], (goals, goalService) => {
//         expect(goalService.retrieveGoalsByDate).toHaveBeenCalledWith(moment().format('L'));
//     }));
    
//     it("should correctly decrement a day when decrement day is invoked", inject([Goals], (goals) => {
//         goals.decrementDay();
//         expect(goals.goalDate).toBe(moment().add(-1, 'd').format('L'));
//     }));
    
//     it("should correctly increment a day when incrementDay is invoked", inject([Goals], (goals) => {
//         goals.incrementDay();
//         expect(goals.goalDate).toBe(moment().add(1, 'd').format('L'));
//     }));
    
//     it("should open a modal when addGoal clicked", inject([Goals, Modal], (goals, mockModal) => {
//         spyOn(mockModal, 'open');
//         goals.addGoal();
//         expect(mockModal.open).toHaveBeenCalled();
//     }));
    
//     it("should call the goal service with correct parameters when removeGoal is called", inject([Goals, GoalService], (goals, goalService) => {
//         goals.removeGoal(1);
//         expect(goalService.deleteGoal).toHaveBeenCalledWith(1);
//     }));
    
//     it("should call the goal service with correct parameters when updateGoalStatus is called", inject([Goals, GoalService], (goals, goalService) => {
//         const params = {id: 1, status: false};
//         goals.updateGoalStatus(params);
//         expect(goalService.updateGoalStatus).toHaveBeenCalledWith(params);
//     }));
// })