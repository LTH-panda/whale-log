import client from './client';

export const getCareers = () => client.get('/careers');
