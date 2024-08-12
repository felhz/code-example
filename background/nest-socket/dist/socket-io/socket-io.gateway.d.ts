export declare class SocketIoGateway {
    server: any;
    OnGatewayConnection(s: any): void;
    handleMessage(client: any, payload: any): string;
}
