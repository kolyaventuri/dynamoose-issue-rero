import * as dynamoose from 'dynamoose';

const isLocal = Boolean(process.env.DYNAMO_URL);

if (isLocal) {
  dynamoose.aws.ddb.local();
}

export default dynamoose;
