import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 5050;
const API_URL = String(process.env.API_URL);

export const config = {
    api: {
        url: API_URL,
    },
};
