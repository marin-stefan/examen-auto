import { HttpHeaders, HttpParams } from "@angular/common/http";
import { HttpMethods } from "../enums/httpMethodsEnum";

export interface RequestConfig {
    method: HttpMethods,
    url: string,
    options?: {
        body?: any
        headers?: HttpHeaders,
        params?: HttpParams
    }
}