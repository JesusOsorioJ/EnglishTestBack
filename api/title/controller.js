const titleModel = require('./model');
const infotest = require('./info.model');
const titlesEvaluation  =require('./test.model');


async function handlerAllTitle(req, res) {
  res.json(await titleModel.find());
}

async function handlerSingleBySubtittle(req, res) {
  try {
    const { id } = req.params;
    const client = await infotest.find({subtitle:id});
    return res.status(200).json(client);
  } catch (error) {
    return res.status(404).json({ message: `Client not found with id: ${id}` });
  }
}

async function handlerSearchTestBySubtittle(req, res) {
  try {
    const { id } = req.params;
    const client = await titlesEvaluation.find({subtitle:id});
    return res.status(200).json(client);
  } catch (error) {
    return res.status(404).json({ message: `Client not found with id: ${id}` });
  }
}

async function handlerCreateBySubtittle(req, res) {
  
    
    const {id, test, score} = req.body;
    const titleses = await titlesEvaluation.find({subtitle:id});
    
    if (titleses.length == 0){
      const titleses = await 
      titlesEvaluation.create({subtitle:id, result:{[test.join()]:{score:score, try:1}}});
    }else{
      const sdas = (titleses[0]).result[test.join()]
      if (!sdas){
        const cxcxmc = {result:{...(titleses[0].result),[test.join()]:{score:score, try:1}}}
        await titlesEvaluation.findOneAndUpdate({subtitle:id}, cxcxmc)
      }else{
        await titlesEvaluation.findOneAndUpdate({subtitle:id}, 
          {result: {...(titleses[0]).result,[test.join()]:{score:score, try : (sdas.try + 1)}}}) 
        // await titlesEvaluation.findOneAndUpdate({subtitle:id}, 
        //   {result: [...sdaaasd,{test:sda.test,score:
        //     (sda.score*sda.try+score)/(sda.try+1), try : (sda.try + 1)}]}) 
      }
    }
    return res.status(200).json("client");
  
}


module.exports= {
  handlerAllTitle,
  handlerSingleBySubtittle,
  handlerCreateBySubtittle,
  handlerSearchTestBySubtittle
  // handlerCreateClient,
  // handlerUpdateClient,
}