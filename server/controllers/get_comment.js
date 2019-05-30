import  models from "../models";
 

const { Comment } = models;
    // Find all comments
const getComment = async (req, res) => {

    const comment = await Comment.findAll();
    console.log("========");
    console.log(comment);
    let data=[];
    comment.forEach(element => {
        data.push(element.dataValues)
    });
    return res.status(200).send({
        status: res.statusCode,
        message: "Here they are",
        data: data
    })
};

export default getComment;