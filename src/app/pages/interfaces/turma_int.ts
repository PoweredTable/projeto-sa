import { imagem } from "./imagem_int"

export interface turma {
    id: Number,
    image_id: Number 
    name: String,
    shift: String,
    description?: String,
    students?: Number
}