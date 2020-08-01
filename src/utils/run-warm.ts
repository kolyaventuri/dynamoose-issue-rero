type LambdaFn = (event: any, context: any, callback: any) => any;

const runWarm = (lambdaFunc: LambdaFn): AWSLambda.Handler => (event, context, cb): any => {
  if (event.source === 'serverless-plugin-warmup') {
    console.log('Function warmed up.');
    return 'pinged';
  }

  return lambdaFunc(event, context, cb);
};

export default runWarm;
