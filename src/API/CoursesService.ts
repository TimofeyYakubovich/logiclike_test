import axios from "axios"
import { CoursesType } from "../types/courses"

export default class CoursesService {
    static async getAll() {
            const response = await axios.get<CoursesType[]>('https://logiclike.com/docs/courses.json')
            return response.data
    }
}