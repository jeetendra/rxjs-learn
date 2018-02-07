import { Observable, Subject } from "rxjs";

let source1$ = Observable.interval(1000);


source1$.subscribe(data => {
    console.log(data)
})