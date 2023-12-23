import DB from './db.json' assert { type: 'json' }

const data = DB.points

export const getAllPointsDB = ( ) => {
  return data;
};

export const getOnePointsDB = ( pointId ) => {
  return data.find( point => point.id === pointId )
};