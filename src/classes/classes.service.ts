import { Injectable } from '@nestjs/common';

@Injectable()
export class ClassesService {

    private readonly classes = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          password: 'guess',
        },
      ];
    
    async getAll(): Promise<Object[]> {
        return this.classes;
    }

    async findOne(username: string): Promise<Object> {
        return this.classes.find(classe => classe.username === username);
    }

}
