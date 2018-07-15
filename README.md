##  阔阔的个人主页

Static folder contains all static resources. Just modify.

Stack folder contains AWS cloud formation template.
```
# To manually create/update the stack
sam package --template-file cloudformation.yaml --output-template-file serverless-output.yaml --s3-bucket hello-world-kuoxin
sam deploy --template-file serverless-output.yaml --stack-name my-home-page --capabilities CAPABILITY_IAM

# To manually the DNS record set in Rout53

```
