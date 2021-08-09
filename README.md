# Certificate Create and Mail (Cloud function)

## How to deploy this script to the cloud function

run the below command in the cloud shell with the correct sendgrid API_KEY

```sh
gcloud functions deploy certAutomate \
--set-env-vars API_KEY="<ENTER_A_VALID_API_KEY>" \
--runtime nodejs14 --trigger-http --allow-unauthenticated
```
