import { Observable } from 'rxjs';
export declare class WsGateway {
    server: any;
    OnGatewayConnection(client: any): void;
    handleMessage(client: any, data: any): Observable<any>;
}
