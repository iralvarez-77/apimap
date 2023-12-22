import DB from './db.json' assert { type: 'json' }

export const getAllPointsDB = () => {
  return DB.points;
};