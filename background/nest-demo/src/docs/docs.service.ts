import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDocDto } from './dto/create-doc.dto';
import { Doc } from './entities/doc.entity';

@Injectable()
export class DocsService {
  constructor(
    @Inject('DocRepository') private readonly docRepository: Repository<Doc>,
  ) {}
  create(CreateDocDto: CreateDocDto) {
    console.log(CreateDocDto);
    return this.docRepository.save(CreateDocDto);
  }

  findAll() {
    console.log(11);

    return this.docRepository.find();
  }

  findOne(id: number) {
    return `${id}`;
  }

  update(id: number, updateDocDto: any) {
    return `This action updates a #${id} doc${updateDocDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} doc`;
  }
}
