import { EntityRepository, Repository } from "typeorm";

//imports locais
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveyUsersRepository extends Repository<SurveyUser> { }

export { SurveyUsersRepository };