import express from 'express';
import executeQuery from './DBConnector.js';
// -------------------- express --------------------

var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get("/flights", (request, response, next) => {
    executeQuery('SELECT * FROM public.flight_leg',[], (err, result) => {
        if (err) {
            return next(err);
        }
       
        console.log(result.rows); 
        response.json(result.rows);
    });
})

app.get("/flights/:id", (request, response, next) => {
    executeQuery('SELECT * FROM public.flight_leg WHERE id=$1',[request.params.id], (err, result) => {
        if (err) {
            return next(err);
        }
       
        console.log(result.rows); 
        response.json(result.rows);
    });
})

// -------------------------------------------------
