import { Server } from 'socket.io';
export declare class SocketIoGateway {
    server: Server;
    docs: Map<any, any>;
    handleMessage(client: any, data: any): Promise<any>;
    update(client: any, data: any): void;
    handleDisconnect(client: any): Promise<void>;
}
