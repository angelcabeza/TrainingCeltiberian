import { Team, newTeam } from "../actions/types"
import http from "../http-common"
import {ObjectId} from 'bson'

const token = localStorage.getItem('token');

class TeamDataService {
    getAll() {
        return http.get<Team[]>('/api/teams?_sort=id&_order=asc',{
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    get(id:number | string) {
        return http.get<Team>(`/api/teams/${id}`);
    }

    create(data: newTeam){
        return http.post<Team>("/api/teams/add", data,{
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

    update(data: Team, id: number | string){
        return http.put(`/api/teams/${id}`,{
            headers: {
                Authorization: 'Bearer ' + token
            },
            data: data
        });
    }

    delete(id: ObjectId){
        return http.delete(`/api/teams/${id}`,{
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

    deleteAll(){
        return http.delete('/api/teams');
    }

    findByName(name: string){
        return http.get<Team[]>(`/api/teams/${name}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }
}

export default new TeamDataService();