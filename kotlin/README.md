# org.openapitools.client - Kotlin client library for Railway

## Requires

* Kotlin 1.4.30
* Gradle 6.8.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://railway.test*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**apiAccountsGet**](docs/DefaultApi.md#apiaccountsget) | **GET** /api/accounts | List accounts
*DefaultApi* | [**apiAccountsMetadataGet**](docs/DefaultApi.md#apiaccountsmetadataget) | **GET** /api/accounts/metadata | List account metadata
*DefaultApi* | [**apiBlocksGet**](docs/DefaultApi.md#apiblocksget) | **GET** /api/blocks | List blocks
*DefaultApi* | [**apiEntitiesGet**](docs/DefaultApi.md#apientitiesget) | **GET** /api/entities | List entities
*DefaultApi* | [**apiTransactionsGet**](docs/DefaultApi.md#apitransactionsget) | **GET** /api/transactions | List transactions
*DefaultApi* | [**apiTransactionsMetadataGet**](docs/DefaultApi.md#apitransactionsmetadataget) | **GET** /api/transactions/metadata | List transaction metadata
*DefaultApi* | [**apiTransactionsReceiptsGet**](docs/DefaultApi.md#apitransactionsreceiptsget) | **GET** /api/transactions/receipts | List transaction receipts
*DefaultApi* | [**apiValidatorsUpdatesGet**](docs/DefaultApi.md#apivalidatorsupdatesget) | **GET** /api/validators/updates | List validator updates


<a name="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.Account](docs/Account.md)
 - [org.openapitools.client.models.AccountMetadata](docs/AccountMetadata.md)
 - [org.openapitools.client.models.ApiAccountsGet200Response](docs/ApiAccountsGet200Response.md)
 - [org.openapitools.client.models.ApiAccountsGetFieldsAccountsParameter](docs/ApiAccountsGetFieldsAccountsParameter.md)
 - [org.openapitools.client.models.ApiAccountsGetIncludeParameter](docs/ApiAccountsGetIncludeParameter.md)
 - [org.openapitools.client.models.ApiAccountsGetSortParameter](docs/ApiAccountsGetSortParameter.md)
 - [org.openapitools.client.models.ApiAccountsMetadataGet200Response](docs/ApiAccountsMetadataGet200Response.md)
 - [org.openapitools.client.models.ApiAccountsMetadataGetFieldsAccountsMetadataParameter](docs/ApiAccountsMetadataGetFieldsAccountsMetadataParameter.md)
 - [org.openapitools.client.models.ApiAccountsMetadataGetIncludeParameter](docs/ApiAccountsMetadataGetIncludeParameter.md)
 - [org.openapitools.client.models.ApiAccountsMetadataGetSortParameter](docs/ApiAccountsMetadataGetSortParameter.md)
 - [org.openapitools.client.models.ApiBlocksGet200Response](docs/ApiBlocksGet200Response.md)
 - [org.openapitools.client.models.ApiBlocksGetFieldsBlocksParameter](docs/ApiBlocksGetFieldsBlocksParameter.md)
 - [org.openapitools.client.models.ApiBlocksGetIncludeParameter](docs/ApiBlocksGetIncludeParameter.md)
 - [org.openapitools.client.models.ApiBlocksGetSortParameter](docs/ApiBlocksGetSortParameter.md)
 - [org.openapitools.client.models.ApiEntitiesGet200Response](docs/ApiEntitiesGet200Response.md)
 - [org.openapitools.client.models.ApiEntitiesGetFieldsEntitiesParameter](docs/ApiEntitiesGetFieldsEntitiesParameter.md)
 - [org.openapitools.client.models.ApiEntitiesGetSortParameter](docs/ApiEntitiesGetSortParameter.md)
 - [org.openapitools.client.models.ApiTransactionsGet200Response](docs/ApiTransactionsGet200Response.md)
 - [org.openapitools.client.models.ApiTransactionsGetFieldsAccountsParameter](docs/ApiTransactionsGetFieldsAccountsParameter.md)
 - [org.openapitools.client.models.ApiTransactionsGetIncludeParameter](docs/ApiTransactionsGetIncludeParameter.md)
 - [org.openapitools.client.models.ApiTransactionsGetSortParameter](docs/ApiTransactionsGetSortParameter.md)
 - [org.openapitools.client.models.ApiTransactionsMetadataGet200Response](docs/ApiTransactionsMetadataGet200Response.md)
 - [org.openapitools.client.models.ApiTransactionsMetadataGetFieldsTransactionMetadataParameter](docs/ApiTransactionsMetadataGetFieldsTransactionMetadataParameter.md)
 - [org.openapitools.client.models.ApiTransactionsMetadataGetIncludeParameter](docs/ApiTransactionsMetadataGetIncludeParameter.md)
 - [org.openapitools.client.models.ApiTransactionsMetadataGetSortParameter](docs/ApiTransactionsMetadataGetSortParameter.md)
 - [org.openapitools.client.models.ApiTransactionsReceiptsGet200Response](docs/ApiTransactionsReceiptsGet200Response.md)
 - [org.openapitools.client.models.ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter](docs/ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter.md)
 - [org.openapitools.client.models.ApiTransactionsReceiptsGetSortParameter](docs/ApiTransactionsReceiptsGetSortParameter.md)
 - [org.openapitools.client.models.ApiValidatorsUpdatesGet200Response](docs/ApiValidatorsUpdatesGet200Response.md)
 - [org.openapitools.client.models.ApiValidatorsUpdatesGetFieldsBlockNumberParameter](docs/ApiValidatorsUpdatesGetFieldsBlockNumberParameter.md)
 - [org.openapitools.client.models.ApiValidatorsUpdatesGetIncludeParameter](docs/ApiValidatorsUpdatesGetIncludeParameter.md)
 - [org.openapitools.client.models.ApiValidatorsUpdatesGetSortParameter](docs/ApiValidatorsUpdatesGetSortParameter.md)
 - [org.openapitools.client.models.Block](docs/Block.md)
 - [org.openapitools.client.models.Entity](docs/Entity.md)
 - [org.openapitools.client.models.Transaction](docs/Transaction.md)
 - [org.openapitools.client.models.TransactionMetadata](docs/TransactionMetadata.md)
 - [org.openapitools.client.models.TransactionReceipt](docs/TransactionReceipt.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
