import { Content } from "../model/orm";

export async function createContent(content){
    let result = await Content.create(content, {
        raw : true
    });
    return(result);
}

export async function readContent(query){
    let result = await Content.findAll({
        where : query,
        raw : true
    });
    if(!result){
        return(false);
    }else{
        return(result);
    }
}


export async function updateContent(contentId, values){
    let result = await Content.update(values, {
        where : {
            id : contentId
        }
    });
    if(!result){
        return(false);
    }else{
        return(result);
    }
}

export async function deleteContent(contentId){
    let result = await Content.destroy({
        where : {
            id : contentId
        }
    });
    if(!result){
        return(false);
    }else{
        return(result);
    }
}