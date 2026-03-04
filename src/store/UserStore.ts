import { makeAutoObservable } from "mobx";

// нужен тип пользователя в соответствии с бекендом
export type UserType = {
  id: number;
  username: string;
  role: 'guest' | 'user' | 'admin' | 'super';
  // что еще
}

export default class UserStore {
    private _isAuth: boolean;
    private _user: UserType | null;
    constructor() {
        this._isAuth = false;
        this._user = null;
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool
    }
    setUser(user: UserType | null) {
        this._user = user;
    }
    logout() {
        this._isAuth = false;
        this._user = null;
        localStorage.removeItem('token');
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get role(): 'guest' | 'user' | 'admin' | 'super' {
        return this._user?.role ?? 'guest';
    }
}