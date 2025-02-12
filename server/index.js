import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/posts.js'
const app = express();

app.use('/posts', router);

app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://mernstack:mernstack123@akash.vjzmr.mongodb.net/?retryWrites=true&w=majority&appName=Akash';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));


