import { Get, Post } from "../Requests/Requests";

export const Register = (data)=>Post("auth/register", data)

export const Login = (data)=>Post("auth/login", data)
