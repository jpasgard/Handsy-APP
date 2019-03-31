type perfil = 'CLIENTE';
export interface JwtResponse {
    token: string;
    email: string;
    perfil: perfil;
}