import { userRegistration, userVerification, readUserById, 
    readUserByName, updateUser, deleteUser, } from "../main_function/user";
import { Request, Response } from "express";

//User
export async function registration(req: Request, res: Response){
    if(!req.body.username || !req.body.password || !req.body.role || !req.body.email){
        res.status(400).json({ 
            ok : false,
            msg : 'username, password, email, and role must be filled' 
        });
    }else{
        let user = await userRegistration(req.body);
        if(!user){
            res.status(400).json({ 
                ok : false,
                msg : 'username must be unique' 
            });
        }else{
            res.json(user);
        }
    }
}

export async function login(req: Request, res: Response){
    if(!req.body.username || !req.body.password){
        res.status(400).json({ 
            ok : false,
            msg : 'username and password must be filled' 
        });
    }else{
        let token = await userVerification(req.body);
        if(!token){
            res.status(400).json({ 
                ok : false,
                msg : 'account does not exist' 
            });
        }else{
            res.json({
                ok : true,
                token : token
            });
        }
    }
}

export async function readUsername(req: Request, res: Response){
    let query = {
        username : req.query.username
    }
    let users = await readUserByName(JSON.parse(JSON.stringify(query)));
    if(!users){
        res.status(400).send( {
            ok : false,
            msg : 'user is not found'
        });
    }else{
        res.json(users);
    }
}

export async function readUserId(req: Request, res: Response){
    let users = await readUserById(req.params.userid);
    if(!users){
        res.status(400).send({
            ok : false,
            msg : 'user is not found'
        });
    }else{
        res.json(users);
    }
}

export async function updateUserAccount(req: Request, res: Response){
    let user = await updateUser(req.params.userid, req.body);
    if(!user){
        res.status(400).send({
            ok : false,
            msg : 'user is not found'
        });
    }else{
        res.json({
            ok : true,
            msg : `user ${req.params.userid} has been updated`
        });
    }
}

export async function deleteUserAccount(req: Request, res: Response){
    let user = await deleteUser(req.params.userid);
    if(!user){
        res.status(400).send({
            ok : false,
            msg : 'user is not found'
        });
    }else{
        res.json({
            ok : true,
            msg : `user ${req.params.userid} has been deleted`
        });
    }
}
