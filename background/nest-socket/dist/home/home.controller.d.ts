import { SocketIoGateway } from 'src/socket-io/socket-io.gateway';
export declare class HomeController {
    readonly socket: SocketIoGateway;
    constructor(socket: SocketIoGateway);
    index(): string;
}
