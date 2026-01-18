import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schema/student.schema';
import { Model } from 'mongoose';
@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>
  ){}
  create(createStudentDto: CreateStudentDto) {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  findAll() {
    return this.studentModel.find().exec();
  }

  findOne(id: string) {
    return this.studentModel.findById(id).exec();
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.findByIdAndUpdate(id, updateStudentDto, {new:true}).exec();
  }

  remove(id: string) {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
