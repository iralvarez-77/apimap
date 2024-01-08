import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

// Create DynamoDB Client and patch it for tracing
const ddbClient = new DynamoDBClient({})

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: false, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: true, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

const translateConfig = { marshallOptions, unmarshallOptions };

// Create the DynamoDB Document client.
const docClient = DynamoDBDocument.from(ddbClient, translateConfig);

export { docClient };
