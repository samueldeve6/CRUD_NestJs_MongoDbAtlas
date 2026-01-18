import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StudentSchema = HydratedDocument<Student>;


@Schema()

export class Student {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    age: number;

    @Prop({required: false})
    country: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);