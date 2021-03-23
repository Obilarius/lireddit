import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType() // Graphql
@Entity() // Mikro-orm
export class User {
  @Field() // Graphql
  @PrimaryKey() // Mikro-orm
  id!: number;

  @Field(() => String) // Graphql
  @Property({ type: "date" }) // Mikro-orm
  createdAt = new Date();

  @Field(() => String) // Graphql
  @Property({ type: "date", onUpdate: () => new Date() }) // Mikro-orm
  updatedAt = new Date();

  @Field() // Graphql (comment out to hide)
  @Property({ type: "text", unique: true }) // Mikro-orm
  username!: string;

  @Property({ type: "text" }) // Mikro-orm
  password!: string;
}
