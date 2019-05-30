import models from "../models";

const {Comment}=models;
// Delete everyone named "Jane"
const deleteComment = async (req, res) => {

    // Deleting the Comment in the database
    const result=await Comment.destroy({ where : {id:req.params.commentId}});
    return res.status(200).send({
        status:res.statusCode,
        message: "comment deleted successful"
    })
};
export default deleteComment;