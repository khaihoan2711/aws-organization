#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsOrganizationStack } from '../lib/aws-organization-stack';
import { AwsEnv } from './configs';

const app = new cdk.App();
const organizationStack = new AwsOrganizationStack(app, 'AwsOrganization', {
  env: AwsEnv.root,
});

/**
 * This is a test stack to test the tag policies
 * The test stack is not part of the AWS Organization stack
 *  
 * const testStack = new cdk.Stack(app, 'TestStack', {});
 * const lambdaFunction = new cdk.aws_lambda.Function(testStack, 'MyFunction', {
 *   runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
 *   code: cdk.aws_lambda.Code.fromInline('exports.handler2 = function(event, context) { console.log("Hello World"); }'),
 *   handler: 'index.handler2'
 * });
 * // Replace the tag in the comment lines to test the tag policies.
 * // Check the compliance status of the tag policies in the AWS Resource Groups console.
 * cdk.Tags.of(testStack).add('Product', 'web');
 * cdk.Tags.of(testStack).add('Environment', 'develop');
 * // cdk.Tags.of(testStack).add('Product', 'webTEST');
 * // cdk.Tags.of(testStack).add('Environment', 'developTEST');
*/