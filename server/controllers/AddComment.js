import models from "../models";

    
   const addComment = (req, res) => {
       console.log("============")
       console.log(req.body);
       console.log(req.userData)
       
        const { content } = req.body; 
        models.Comment.create({
            comment:content,
            articleId:req.params.id,
            UserId: req.userData.id,
        }).then(Comment => res.json(Comment));
    };

    export default addComment;