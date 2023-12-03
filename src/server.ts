import { app } from './app';
import env from 'dotenv';
import { checkEnvVar } from './utils/check-environment-variables';

env.config({ path: `${__dirname}/../.env` });

// environment variables check
checkEnvVar(
    'APP_PORT'
);

const port = process.env.APP_PORT || 7892;

const server = app.listen(port, () => {
    console.log(`listening on port ${port} ...`);
});

process.on('unhandledRejection', (err: Error) => {
    console.log(err.name, err.message);

    server.close(() => {
        console.log('App in shutting down ❌');

        process.exit(1);
    });
});