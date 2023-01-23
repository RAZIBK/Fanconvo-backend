const userRouteDoc = require("../../routes/userRouter/user.docs");

const swaggerDocumation={
    openapi:'3.0.0',
    info:{
        title:'fanonvo',
        version:'1.0.0'
    },
    server:[
        {
            url:'http://localhost:5000',
        }
    ],
    tags:[
        {
            name:'User',
            description:'User Router'
        }
    ],
    paths:{
       ...userRouteDoc
    }
};

module.exports=swaggerDocumation