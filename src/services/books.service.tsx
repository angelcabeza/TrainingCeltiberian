import { getAllJSDocTags } from "typescript"
import http from "../http-common"

class BookDataService {
    getAll() {
        return http.get("/books")
    }

    get(id:number | string) {
        return http.get(`books/${id}`);
    }

    create(data: Book){
        return http.post("/books",data);
    }

    update(data: Book, id: number | string){
        return http.put(`books/${id}`, data);
    }

    delete(id:number | string){
        return http.delete(`books/${id}`);
    }

    deleteAll(){
        return http.delete('/books');
    }

    findByTittle(title: string){
        return http.get(`books?title=${title}`);
    }
}

export default new BookDataService();