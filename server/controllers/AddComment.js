
import comment from "../models/comment";
import models from "../models";

const addComment = async (req, res) => {
    const comment=await models.Comment.create (
        {
            comment: 'this is me',
        },

    );
    console.log('==============');
    console.log(comment.dataValues);
};

export default addComment;