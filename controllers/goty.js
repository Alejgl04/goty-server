const { response } = require('express');
const Goty = require('../models/goty');


const gotyData = async( req, res = response ) => {
  const [ totals, goty ] = await Promise.all([
    Goty.countDocuments(),
    Goty.find()
  ]);

  return res.json({
    ok:true,
    totals,
    goty
  });   
}

const gotyVoto = async( req, res = response ) => {
  const id = req.params.id;
  try {
    const gotyId   = await Goty.findById( id );
  
    if( !gotyId ){
      return res.status(404).json({
        ok:false,
        message: 'No existe un juego con ese ID'
      });
    }
    else {
      gotyUpdate = await Goty.findByIdAndUpdate( id, {votos: gotyId.votos + 1}, { new: true });
      return res.json({
        ok:true,
        message:'Gracias por tu voto a ' + gotyId.name,
        gotyUpdate
      }); 
    }
  } catch (error) {
    return res.status(404).json({
      ok:false,
      error
    })
  }
}

module.exports = {
  gotyVoto,
  gotyData
}