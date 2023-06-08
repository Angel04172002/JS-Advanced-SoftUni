function constructionCrew(worker) {

    if(worker.dizziness) {
        
        let waterToAdd = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += waterToAdd;
        worker.dizziness = false;
    }

    return worker;
}
