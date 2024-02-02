import express from 'express';
import bodyParser from 'body-parser';
import { createRouter } from '../routes/createRoute';
import { readRouter } from '../routes/readRoutes';
import { updateRouter } from '../routes/updateRoute';
import { deleteRouter } from '../routes/deteleRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(createRouter);
app.use(readRouter);
app.use(updateRouter);
app.use(deleteRouter);

function start() {
    app.listen(PORT, () => {
        console.log(`servidor en ejecución en http://localhost:${PORT}`);
    });
}

export { start };  