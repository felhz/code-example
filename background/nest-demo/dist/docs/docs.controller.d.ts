import { DocsService } from './docs.service';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';
export declare class DocsController {
    private readonly docsService;
    constructor(docsService: DocsService);
    create(createDocDto: CreateDocDto): Promise<CreateDocDto & import("./entities/doc.entity").Doc>;
    findAll(): Promise<import("./entities/doc.entity").Doc[]>;
    findOne(id: string): string;
    update(id: string, updateDocDto: UpdateDocDto): string;
    remove(id: string): string;
}
