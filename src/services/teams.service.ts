import { Team, newTeam } from "../actions/types"
import http from "../http-common"

class TeamDataService {
    getAll() {
        return http.get<Team[]>('/teams?_sort=id&_order=asc')
    }

    get(id:number | string) {
        return http.get<Team>(`/teams/${id}`);
    }

    create(data: newTeam){
        return http.post<Team>("/teams",data);
    }

    update(data: Team, id: number | string){
        return http.put(`/teams/${id}`, data);
    }

    delete(id:number | string){
        return http.delete(`/teams/${id}`);
    }

    deleteAll(){
        return http.delete('/teams');
    }

    findByName(name: string){
        return http.get<Team[]>(`/teams?name_like=${name}`);
    }
}

export default new TeamDataService();