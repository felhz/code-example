import { Repository } from 'typeorm';
import { CreateDocDto } from './dto/create-doc.dto';
import { Doc } from './entities/doc.entity';
export declare class DocsService {
    private readonly docRepository;
    constructor(docRepository: Repository<Doc>);
    create(CreateDocDto: CreateDocDto): Promise<CreateDocDto & Doc>;
    findAll(): Promise<Doc[]>;
    findOne(id: number): string;
    update(id: number, updateDocDto: any): string;
    remove(id: number): string;
}
