import {Quote} from '../models'
import {URL_FRONT} from '../constants';

export const listAll = () =>
Quote.find()
     .then(quoteList =>{
       let listUpdated = []
       listUpdated = quoteList.map((el)=>{
         el.set('url',`${URL_FRONT.url}/${el._id}`,{strict: false})
         return el
       })
       return listUpdated
     })
     .catch(e => {
        console.warn(e)
        return {error: e};
     })

export const getOne =id=>{
  return Quote.findById(id)
    .then(quote => {
      return quote;
    })
    .catch(e => {
       console.warn(e)
       return {error: e};
    });

}

export const addOne =quote=> {
  let newQuote = new Quote(quote)
  let count = 0
  return Quote.find()
  .then(count=>{
    newQuote.folio = `000000${count.length}`.slice(-5)
    return newQuote
    .save()
  })
  .then(quoteNew => {
    return quoteNew;
  })
  .catch(err => {
    let response = {
      message: "No se pudo agregar la cotización ",
      error: err.message
    };

    return response;
  });
}

export const updateOne=(id,body)=>{
  return Quote.findByIdAndUpdate(id, body, { new: true })
    .then(service => {
      return service;
    })
    .catch(err => {
      let response = { message: "No se pudieron actualizar los datos", error: err.message };
      return response;
    });

}
