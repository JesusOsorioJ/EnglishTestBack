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
    console.log("id, test, score",id,test, score)
    const titleses = await titlesEvaluation.find({subtitle:id});
    console.log("titleses.length",titleses.length)
    if (titleses.length == 0){
      const titleses = await 
      titlesEvaluation.create({subtitle:id, result:[{test:test.join(),score:score, try:1}]});
    }else{
      const sdas = (titleses[0]).result.filter((index)=>{return index.test==test.join()})
      if (sdas.length == 0){
        const cxcxmc = {result:[...(titleses[0].result),{test:test.join(),score:score, try:1}]}
        await titlesEvaluation.findOneAndUpdate({subtitle:id}, cxcxmc)
      }else{
        const sda =sdas[0]
        const sdaaasd = (titleses[0]).result.filter((index)=>{return !(index.test == test.join())})
        await titlesEvaluation.findOneAndUpdate({subtitle:id}, 
          {result: [...sdaaasd,{test:sda.test,score:score, try : (sda.try + 1)}]}) 
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