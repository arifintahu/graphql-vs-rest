import { User } from "../model/orm";
import * as jwt from "jsonwebtoken";

//User
export async function userRegistration(account){
    let check = await User.findOne({
        where : {
            username : account.username
        }
    });
    if(check){
        return(false);
    }else{
        let user = await User.create(account);
        return(user);
    }
}

export async function userVerification(account){
    let user = await User.findOne({
        where : account,
        attributes : ['id','username', 'email', 'role', 'password']
    });
    if(!user){
        return(false);
    }else{
        let token = await generateToken(user, "tekateki");
        return(token);
    }
}

export async function readUserByName(username){
    let user = await User.findAll({
        where : username,
        attributes : ['id', 'username']
    });
    if(!user){
        return(false);
    }else if(user.length == 0){
        return(false);
    }else{
        return(user);
    }
}

export async function readUserById(userid){
    let user = await User.findOne({
        where : {
            id : userid
        },
        attributes : ['id', 'username', 'password', 'email', 'role', 'createdAt', 'updatedAt']
    });
    if(!user){
        return(false);
    }else{
        return(user);
    }
}

export async function updateUser(userid, values){
    let user = await User.update(values, {
        where : {
            id : userid
        }
    });
    if(user[0] == 0){
        return(false);
    }else{
        return(user[0]);
    }
}

export async function deleteUser(userid){
    let user = await User.destroy({
        where : {
            id : userid
        }
    });
    if(!user){
        return(false);
    }else{
        return(user);
    }
}

async function generateToken(payload, key){
    return new Promise((resolve, reject) => {
        try{
            resolve(jwt.sign({payload : payload}, key, { expiresIn : "7d"}));
        }catch (e){
            reject(e);
        }
    });
}

export function verifyToken(token){
    try{
        return(jwt.verify(token, 'tekateki'));
    } catch(e){
        return(false);
    }
}