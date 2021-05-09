import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("surveys_users")
class SurveyUser {
  @PrimaryColumn() //chave primária do banco
  readonly id: string;

  @Column() //coluna da base
  user_id: string;

  @Column() //coluna da base
  survey_id: string;

  @Column()
  value: number;

  @CreateDateColumn() //tipo data
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { SurveyUser };