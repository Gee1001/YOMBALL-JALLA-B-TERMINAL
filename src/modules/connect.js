const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/YOMBALL-JALLA-B-TERMINAL';

const connect =() => {
return mongoose.connect(URI,{
    useNewUrlparser:true,
    useUnifiedtopology:true,
    autoIndex:false,

})
};

module.exports = connect;

