import express from 'express';
import {STATIC_PATH, HTML_FILES_PATH} from './config';
import path from "path";

const app = express();

app.use(express.static(STATIC_PATH));


app.get('/', (req, res) => {
        const page = path.join(HTML_FILES_PATH, 'index.html');
        res.sendFile(page);
    }
);

export {app}
