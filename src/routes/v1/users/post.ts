import {Handler} from 'aws-lambda';
import runWarm from '../../../utils/run-warm';
import BadRequestError from '../../../errors/bad-request-error';
import InternalServerError from '../../../errors/internal-server-error';
import User from '../../../db/models/user';

const requiredAttributes = ['username'];

export const userPost: Handler = async (request: AWSLambda.APIGatewayEvent): Promise<AWSLambda.APIGatewayProxyResult> => {
  const body = request?.body ?? '{}';
  let data: {[k: string]: string} | null = null;

  try {
    data = JSON.parse(body);
  } catch (error) {
    console.error(error);
    return BadRequestError;
  }

  if (!data) {
    return BadRequestError;
  }

  for (const attribute of requiredAttributes) {
    if (!Object.prototype.hasOwnProperty.call(data, attribute)) {
      return BadRequestError;
    }
  }

  try {
    const {phoneNumber, username, email} = data;
    const newUser = new User({
      phoneNumber,
      username,
      email
    });

    await newUser.save();
    console.log('User saved');
  } catch (error) {
    console.error(error);

    return InternalServerError;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({success: true})
  };
};

export const handler = runWarm(userPost);
