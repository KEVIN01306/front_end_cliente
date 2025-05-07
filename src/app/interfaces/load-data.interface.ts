import { Subject } from "rxjs";

export interface LoadDataParams<T>{
    url: String,
    body?: any;
    resposeData: T[];
    dtElement: any;
    dtTrigger: Subject<any>;
    error: any;
}