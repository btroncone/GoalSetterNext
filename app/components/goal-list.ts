import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';

@Component({
    selector: 'goal-list',
    template: ``,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalList{
    @Input() goals;
    @Input() loading;
    @Output() updateGoal = new EventEmitter(false);
}