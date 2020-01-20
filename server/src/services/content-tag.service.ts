import { 
    createContentTag, 
    readContentTag 
} from "../main_function/content-tag";
import { Request, Response } from "express";

export async function createContentTagService(req: Request, res: Response){
    let data = req.body;
    if(!data.content_id || !data.tag_name){
        res.status(400).json({ 
            ok : false,
            msg : 'all parameters must be filled' 
        });
    }else{
        let result = await createContentTag(req.body);
        res.json({
            result : result,
            ok : true
        });
    }
}

export async function readContentTagService(req: Request, res: Response){
    let query = {
        content_id : req.query.content_id
    }
    let result = await readContentTag(JSON.parse(JSON.stringify(query)));
    if(!result){
        res.status(400).send( {
            ok : false,
            msg : 'content_tag is not found'
        });
    }else{
        res.json(result);
    }
}