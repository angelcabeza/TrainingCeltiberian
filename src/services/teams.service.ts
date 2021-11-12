import { Team, newTeam } from "../actions/types"
import http from "../http-common"
import {ObjectId} from 'bson'

class TeamDataService {
    getAll() {
        return http.get<Team[]>('/api/teams?_sort=id&_order=asc')
    }

    get(id:number | string) {
        return http.get<Team>(`/api/teams/${id}`);
    }

    create(data: newTeam){
        console.log("Aniado equipo")
        return http.post<Team>("/api/teams/add",data);
    }

    update(data: Team, id: number | string){
        return http.put(`/api/teams/${id}`, data);
    }

    delete(id: ObjectId){
        return http.delete(`/api/teams/${id}`);
    }

    deleteAll(){
        return http.delete('/api/teams');
    }

    findByName(name: string){
        return http.get<Team[]>(`/teams/?q=${name}`);
    }
}

export default new TeamDataService();