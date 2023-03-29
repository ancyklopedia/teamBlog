export interface BlogObj {
    body: string;
    id: number;
    title: string;
    userId: number
}
export interface BlogProps {
    post: BlogObj;
    key: number
}
export interface AlbumsObj {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}
export interface AlbumsProps {
    photo: AlbumsObj,
    key: number
}
export interface TodoObj {
    completed: boolean;
    id: number;
    title: string;
    userId: number
}

export interface LoginData {
    email: string,
    password:string
}

export interface RegisterData  extends LoginData {
    password2:string
}
export interface NavbarProps {
    loggedIn: boolean
}