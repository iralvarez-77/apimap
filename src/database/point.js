import DB from './db.json' assert { type: 'json' }

let data = DB.points

export const getAllPointsDB = ( time ) => {
  if (time) 
    return data.filter( point => point.time.toLocaleLowerCase().includes(time.toLocaleLowerCase()) )

  return data;
};

export const getOnePointsDB = ( pointId ) => {
  return data.find( point => point.id === pointId )
};