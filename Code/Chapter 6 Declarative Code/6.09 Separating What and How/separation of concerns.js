class Workflow {
    moveToNextTransition() {
        if (this.canWeMoveOn()) {
           this.moveToNextStep();
        } else {
           throw new Error('Preconditions are not met yet..');            
        }
    }

    canMoveOn() {
        // You hide accidental implementation 'the how'
        // under the 'what'
        return !this.stepWork.hasPendingTasks();
    }
}