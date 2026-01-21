import { Injectable, inject } from "@angular/core"
import { url_path } from "../constants/endpoints.constant"
import { Utilisateur } from "../model/utilisateur.model"
import { ApiRequestService } from "./globals/api-request.service"

@Injectable({
    providedIn: 'root'
})
export class UserKeycloakService {
    private _apiRequestService = inject(ApiRequestService)

    createUser(userKeycloak: Utilisateur) {
        return this._apiRequestService.post({ endpoint: url_path.UTILISATEURS, data: userKeycloak })
    }
    updateUser(userKeycloak: Utilisateur) {
        return this._apiRequestService.put({ endpoint: url_path.UTILISATEURS + '/' + userKeycloak.id, data: userKeycloak })
    }
    reinitPassword(userId: string, password: string) {
        return this._apiRequestService.getById(url_path.UTILISATEURS + '/' + userId + '/' + password)
    }

    listRole() {
        return this._apiRequestService.getAll(url_path.UTILISATEURS + '/roles-frontend-client')
    }

    listUser() {
        return this._apiRequestService.getAll(url_path.UTILISATEURS)
    }

    getUserByLogin(username: string) {
        return this._apiRequestService.getById(url_path.UTILISATEURS + '/getByUsername/' + username)
    }

    getUserById(userId: string) {
        return this._apiRequestService.getById(url_path.UTILISATEURS + '/getById/' + userId)
    }

    delete(id: string) {
    return this._apiRequestService.delete(url_path.UTILISATEURS + "/" + id)
  }
}