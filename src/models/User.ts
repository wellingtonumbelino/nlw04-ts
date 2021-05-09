import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn() //chave primária do banco
  readonly id: string;

  @Column() //coluna da base
  name: string;

  @Column() //coluna da base
  email: string;

  @CreateDateColumn() //tipo data
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User }