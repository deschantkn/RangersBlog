import models from '../models';

//Destructuring Comment from Models
const {Comment,Article}=models;

module.exports={
    checkCommentOwner : async(req,res,next) => {
        
        const {id,commentId} = req.params
        //check if the params ids are valid
        if (isNaN(id) || isNaN(commentId)) {
            return res.status(400).send({
                status:res.statusCode,
                error:"Invalid id of the article or comment"
            })
        }

        //check if the article exists
        const result = await Article.findOne({ where: { id:id } });
        if (result === null) {
            return res.status(404).send({
                status:res.statusCode,
                error:"Article is not found!"
            })
        }

        //check if the comment exists
        const response = await Comment.findOne({ where: { id:commentId} });
        if (response === null) {
            return res.status(404).send({
                status:res.statusCode,
                error:"Comment Not found"
            })
        }

        //check if the loggedin user is the owner of that comment
        const commentOwner = await Comment.findOne( { where: {id:id,UserId:req.userData.id} });
        if(!commentOwner){
            return res.status(400).send({
                status:res.statusCode,
                error: "Sorry! You are Only allowed to delete your own comment"
            })
        }

        return next();
    }
}