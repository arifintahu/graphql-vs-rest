import { 
    createContent, 
    readContent, 
    updateContent, 
    deleteContent 
} from "../main_function/content";
import { Request, Response } from "express";

export async function createContentService(req: Request, res: Response){
    let data = req.body;
    if(!data.user_id || !data.title || 
        !data.id_teacher || !data.body){
        res.status(400).json({ 
            ok : false,
            msg : 'all parameters must be filled' 
        });
    }else{
        let result = await createContent(req.body);
        res.json({
            result : result,
            ok : true
        });
    }
}

export async function readContentService(req: Request, res: Response){
    let query = {
        id : req.query.id,
        user_id : req.query.user_id
    }
    let result = await readContent(JSON.parse(JSON.stringify(query)));
    if(!result){
        res.status(400).send( {
            ok : false,
            msg : 'content is not found'
        });
    }else{
        res.json(result);
    }
}

export async function updateContentService(req: Request, res: Response){
    let result = await updateContent(req.params.contentId, req.body);
    if(!result){
        res.status(400).send({
            ok : false,
            msg : 'content is not found'
        });
    }else{
        res.json({
            ok : true,
            msg : `content ${req.params.contentId} has been updated`
        });
    }
}

export async function deleteContentService(req: Request, res: Response){
    let result = await deleteContent(req.params.contentId);
    if(!result){
        res.status(400).send({
            ok : false,
            msg : 'content is not found'
        });
    }else{
        res.json({
            ok : true,
            msg : `content ${req.params.contentId} has been deleted`
        });
    }
}