import { Request } from 'express'

export interface IGetUserAuthInfoRequest extends Request {
}

export interface IContract {
    id:string
    name:string
    renewalDate:string
    value:number
}