import { ContentTag } from "../model/orm";


export async function createContentTag(data){
    let result = await ContentTag.create(data, {
        raw : true
    });
    return(result);
}

export async function readContentTag(query){
    let result = await ContentTag.findAll({
        where: query,
        raw : true
    });
    if(!result){
        return(false);
    }else{
        return(result);
    }
}


