# .DefaultApi

All URIs are relative to *http://railway.test*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAccountsGet**](DefaultApi.md#apiAccountsGet) | **GET** /api/accounts | List accounts
[**apiAccountsMetadataGet**](DefaultApi.md#apiAccountsMetadataGet) | **GET** /api/accounts/metadata | List account metadata
[**apiBlocksGet**](DefaultApi.md#apiBlocksGet) | **GET** /api/blocks | List blocks
[**apiEntitiesGet**](DefaultApi.md#apiEntitiesGet) | **GET** /api/entities | List entities
[**apiTransactionsGet**](DefaultApi.md#apiTransactionsGet) | **GET** /api/transactions | List transactions
[**apiTransactionsMetadataGet**](DefaultApi.md#apiTransactionsMetadataGet) | **GET** /api/transactions/metadata | List transaction metadata
[**apiTransactionsReceiptsGet**](DefaultApi.md#apiTransactionsReceiptsGet) | **GET** /api/transactions/receipts | List transaction receipts
[**apiValidatorsUpdatesGet**](DefaultApi.md#apiValidatorsUpdatesGet) | **GET** /api/validators/updates | List validator updates


# **apiAccountsGet**
> ApiAccountsGet200Response apiAccountsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiAccountsGetRequest = {
  // ApiAccountsGetFieldsAccountsParameter | Include the given fields in the response. (optional)
  fieldsAccounts: null,
  // string | Filter the results where the [address] field is equal to the given value. (optional)
  filterAddress: "filter[address]_example",
  // string | Filter the results where the [address] field is not equal to the given value. (optional)
  filterAddressNeq: "filter[address.neq]_example",
  // string | Filter the results where the [address] field is similar to the given case sensitive value. (optional)
  filterAddressLike: "filter[address.like]_example",
  // string | Filter the results where the [address] field is similar to the given case insensitive value. (optional)
  filterAddressIlike: "filter[address.ilike]_example",
  // string | Filter the results where the [public_key] field is equal to the given value. (optional)
  filterPublicKey: "filter[public_key]_example",
  // string | Filter the results where the [public_key] field is not equal to the given value. (optional)
  filterPublicKeyNeq: "filter[public_key.neq]_example",
  // string | Filter the results where the [public_key] field is similar to the given case sensitive value. (optional)
  filterPublicKeyLike: "filter[public_key.like]_example",
  // string | Filter the results where the [public_key] field is similar to the given case insensitive value. (optional)
  filterPublicKeyIlike: "filter[public_key.ilike]_example",
  // string | Filter the results where the [name] field is equal to the given value. (optional)
  filterName: "filter[name]_example",
  // string | Filter the results where the [name] field is not equal to the given value. (optional)
  filterNameNeq: "filter[name.neq]_example",
  // string | Filter the results where the [name] field is similar to the given case sensitive value. (optional)
  filterNameLike: "filter[name.like]_example",
  // string | Filter the results where the [name] field is similar to the given case insensitive value. (optional)
  filterNameIlike: "filter[name.ilike]_example",
  // number | Filter the results where the [nonce] field is equal to the given value. (optional)
  filterNonce: 1,
  // string | Filter the results where the [validator.address] field is equal to the given value. (optional)
  filterValidatorAddress: "filter[validator.address]_example",
  // string | Filter the results where the [validator.address] field is not equal to the given value. (optional)
  filterValidatorAddressNeq: "filter[validator.address.neq]_example",
  // string | Filter the results where the [validator.address] field is similar to the given case sensitive value. (optional)
  filterValidatorAddressLike: "filter[validator.address.like]_example",
  // string | Filter the results where the [validator.address] field is similar to the given case insensitive value. (optional)
  filterValidatorAddressIlike: "filter[validator.address.ilike]_example",
  // string | Filter the results where the [validator.publicKey] field is equal to the given value. (optional)
  filterValidatorPublicKey: "filter[validator.publicKey]_example",
  // string | Filter the results where the [validator.publicKey] field is not equal to the given value. (optional)
  filterValidatorPublicKeyNeq: "filter[validator.publicKey.neq]_example",
  // string | Filter the results where the [validator.publicKey] field is similar to the given case sensitive value. (optional)
  filterValidatorPublicKeyLike: "filter[validator.publicKey.like]_example",
  // string | Filter the results where the [validator.publicKey] field is similar to the given case insensitive value. (optional)
  filterValidatorPublicKeyIlike: "filter[validator.publicKey.ilike]_example",
  // string | Filter the results where the [validator.power] field is equal to the given value. (optional)
  filterValidatorPower: "filter[validator.power]_example",
  // string | Filter the results where the [validator.power] field is not equal to the given value. (optional)
  filterValidatorPowerNeq: "filter[validator.power.neq]_example",
  // string | Filter the results where the [validator.power] field is similar to the given case sensitive value. (optional)
  filterValidatorPowerLike: "filter[validator.power.like]_example",
  // string | Filter the results where the [validator.power] field is similar to the given case insensitive value. (optional)
  filterValidatorPowerIlike: "filter[validator.power.ilike]_example",
  // ApiAccountsGetIncludeParameter | Include the given relationships. (optional)
  include: null,
  // ApiAccountsGetSortParameter | Sort the results by the given field and direction. (optional)
  sort: null,
};

apiInstance.apiAccountsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsAccounts** | **ApiAccountsGetFieldsAccountsParameter** | Include the given fields in the response. | (optional) defaults to undefined
 **filterAddress** | [**string**] | Filter the results where the [address] field is equal to the given value. | (optional) defaults to undefined
 **filterAddressNeq** | [**string**] | Filter the results where the [address] field is not equal to the given value. | (optional) defaults to undefined
 **filterAddressLike** | [**string**] | Filter the results where the [address] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterAddressIlike** | [**string**] | Filter the results where the [address] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterPublicKey** | [**string**] | Filter the results where the [public_key] field is equal to the given value. | (optional) defaults to undefined
 **filterPublicKeyNeq** | [**string**] | Filter the results where the [public_key] field is not equal to the given value. | (optional) defaults to undefined
 **filterPublicKeyLike** | [**string**] | Filter the results where the [public_key] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterPublicKeyIlike** | [**string**] | Filter the results where the [public_key] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterName** | [**string**] | Filter the results where the [name] field is equal to the given value. | (optional) defaults to undefined
 **filterNameNeq** | [**string**] | Filter the results where the [name] field is not equal to the given value. | (optional) defaults to undefined
 **filterNameLike** | [**string**] | Filter the results where the [name] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterNameIlike** | [**string**] | Filter the results where the [name] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterNonce** | [**number**] | Filter the results where the [nonce] field is equal to the given value. | (optional) defaults to undefined
 **filterValidatorAddress** | [**string**] | Filter the results where the [validator.address] field is equal to the given value. | (optional) defaults to undefined
 **filterValidatorAddressNeq** | [**string**] | Filter the results where the [validator.address] field is not equal to the given value. | (optional) defaults to undefined
 **filterValidatorAddressLike** | [**string**] | Filter the results where the [validator.address] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterValidatorAddressIlike** | [**string**] | Filter the results where the [validator.address] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterValidatorPublicKey** | [**string**] | Filter the results where the [validator.publicKey] field is equal to the given value. | (optional) defaults to undefined
 **filterValidatorPublicKeyNeq** | [**string**] | Filter the results where the [validator.publicKey] field is not equal to the given value. | (optional) defaults to undefined
 **filterValidatorPublicKeyLike** | [**string**] | Filter the results where the [validator.publicKey] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterValidatorPublicKeyIlike** | [**string**] | Filter the results where the [validator.publicKey] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterValidatorPower** | [**string**] | Filter the results where the [validator.power] field is equal to the given value. | (optional) defaults to undefined
 **filterValidatorPowerNeq** | [**string**] | Filter the results where the [validator.power] field is not equal to the given value. | (optional) defaults to undefined
 **filterValidatorPowerLike** | [**string**] | Filter the results where the [validator.power] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterValidatorPowerIlike** | [**string**] | Filter the results where the [validator.power] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **include** | **ApiAccountsGetIncludeParameter** | Include the given relationships. | (optional) defaults to undefined
 **sort** | **ApiAccountsGetSortParameter** | Sort the results by the given field and direction. | (optional) defaults to undefined


### Return type

**ApiAccountsGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiAccountsMetadataGet**
> ApiAccountsMetadataGet200Response apiAccountsMetadataGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiAccountsMetadataGetRequest = {
  // ApiAccountsMetadataGetFieldsAccountsMetadataParameter | Include the given fields in the response. (optional)
  fieldsAccountsMetadata: null,
  // number | Filter the results where the [account_id] field is equal to the given value. (optional)
  filterAccountId: 1,
  // string | Filter the results where the [module] field is equal to the given value. (optional)
  filterModule: "filter[module]_example",
  // string | Filter the results where the [module] field is not equal to the given value. (optional)
  filterModuleNeq: "filter[module.neq]_example",
  // string | Filter the results where the [module] field is similar to the given case sensitive value. (optional)
  filterModuleLike: "filter[module.like]_example",
  // string | Filter the results where the [module] field is similar to the given case insensitive value. (optional)
  filterModuleIlike: "filter[module.ilike]_example",
  // string | Filter the results where the [key] field is equal to the given value. (optional)
  filterKey: "filter[key]_example",
  // string | Filter the results where the [key] field is not equal to the given value. (optional)
  filterKeyNeq: "filter[key.neq]_example",
  // string | Filter the results where the [key] field is similar to the given case sensitive value. (optional)
  filterKeyLike: "filter[key.like]_example",
  // string | Filter the results where the [key] field is similar to the given case insensitive value. (optional)
  filterKeyIlike: "filter[key.ilike]_example",
  // string | Filter the results where the [value] field is equal to the given value. (optional)
  filterValue: "filter[value]_example",
  // string | Filter the results where the [value] field is not equal to the given value. (optional)
  filterValueNeq: "filter[value.neq]_example",
  // string | Filter the results where the [value] field is similar to the given case sensitive value. (optional)
  filterValueLike: "filter[value.like]_example",
  // string | Filter the results where the [value] field is similar to the given case insensitive value. (optional)
  filterValueIlike: "filter[value.ilike]_example",
  // ApiAccountsMetadataGetIncludeParameter | Include the given relationships. (optional)
  include: null,
  // ApiAccountsMetadataGetSortParameter | Sort the results by the given field and direction. (optional)
  sort: null,
};

apiInstance.apiAccountsMetadataGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsAccountsMetadata** | **ApiAccountsMetadataGetFieldsAccountsMetadataParameter** | Include the given fields in the response. | (optional) defaults to undefined
 **filterAccountId** | [**number**] | Filter the results where the [account_id] field is equal to the given value. | (optional) defaults to undefined
 **filterModule** | [**string**] | Filter the results where the [module] field is equal to the given value. | (optional) defaults to undefined
 **filterModuleNeq** | [**string**] | Filter the results where the [module] field is not equal to the given value. | (optional) defaults to undefined
 **filterModuleLike** | [**string**] | Filter the results where the [module] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterModuleIlike** | [**string**] | Filter the results where the [module] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterKey** | [**string**] | Filter the results where the [key] field is equal to the given value. | (optional) defaults to undefined
 **filterKeyNeq** | [**string**] | Filter the results where the [key] field is not equal to the given value. | (optional) defaults to undefined
 **filterKeyLike** | [**string**] | Filter the results where the [key] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterKeyIlike** | [**string**] | Filter the results where the [key] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterValue** | [**string**] | Filter the results where the [value] field is equal to the given value. | (optional) defaults to undefined
 **filterValueNeq** | [**string**] | Filter the results where the [value] field is not equal to the given value. | (optional) defaults to undefined
 **filterValueLike** | [**string**] | Filter the results where the [value] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterValueIlike** | [**string**] | Filter the results where the [value] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **include** | **ApiAccountsMetadataGetIncludeParameter** | Include the given relationships. | (optional) defaults to undefined
 **sort** | **ApiAccountsMetadataGetSortParameter** | Sort the results by the given field and direction. | (optional) defaults to undefined


### Return type

**ApiAccountsMetadataGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiBlocksGet**
> ApiBlocksGet200Response apiBlocksGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiBlocksGetRequest = {
  // ApiBlocksGetFieldsBlocksParameter | Include the given fields in the response. (optional)
  fieldsBlocks: null,
  // string | Filter the results where the [hash] field is equal to the given value. (optional)
  filterHash: "filter[hash]_example",
  // string | Filter the results where the [hash] field is not equal to the given value. (optional)
  filterHashNeq: "filter[hash.neq]_example",
  // string | Filter the results where the [hash] field is similar to the given case sensitive value. (optional)
  filterHashLike: "filter[hash.like]_example",
  // string | Filter the results where the [hash] field is similar to the given case insensitive value. (optional)
  filterHashIlike: "filter[hash.ilike]_example",
  // number | Filter the results where the [height] field is equal to the given value. (optional)
  filterHeight: 1,
  // number | Filter the results where the [header.version.block] field is equal to the given value. (optional)
  filterHeaderVersionBlock: 1,
  // string | Filter the results where the [header.chainId] field is equal to the given value. (optional)
  filterHeaderChainId: "filter[header.chainId]_example",
  // string | Filter the results where the [header.chainId] field is not equal to the given value. (optional)
  filterHeaderChainIdNeq: "filter[header.chainId.neq]_example",
  // string | Filter the results where the [header.chainId] field is similar to the given case sensitive value. (optional)
  filterHeaderChainIdLike: "filter[header.chainId.like]_example",
  // string | Filter the results where the [header.chainId] field is similar to the given case insensitive value. (optional)
  filterHeaderChainIdIlike: "filter[header.chainId.ilike]_example",
  // number | Filter the results where the [header.height] field is equal to the given value. (optional)
  filterHeaderHeight: 1,
  // string | Filter the results where the [header.time] field is equal to the given value. (optional)
  filterHeaderTime: "filter[header.time]_example",
  // string | Filter the results where the [header.time] field is not equal to the given value. (optional)
  filterHeaderTimeNeq: "filter[header.time.neq]_example",
  // string | Filter the results where the [header.time] field is similar to the given case sensitive value. (optional)
  filterHeaderTimeLike: "filter[header.time.like]_example",
  // string | Filter the results where the [header.time] field is similar to the given case insensitive value. (optional)
  filterHeaderTimeIlike: "filter[header.time.ilike]_example",
  // string | Filter the results where the [header.lastBlockId.hash] field is equal to the given value. (optional)
  filterHeaderLastBlockIdHash: "filter[header.lastBlockId.hash]_example",
  // string | Filter the results where the [header.lastBlockId.hash] field is not equal to the given value. (optional)
  filterHeaderLastBlockIdHashNeq: "filter[header.lastBlockId.hash.neq]_example",
  // string | Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value. (optional)
  filterHeaderLastBlockIdHashLike: "filter[header.lastBlockId.hash.like]_example",
  // string | Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value. (optional)
  filterHeaderLastBlockIdHashIlike: "filter[header.lastBlockId.hash.ilike]_example",
  // number | Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value. (optional)
  filterHeaderLastBlockIdPartSetHeaderTotal: 1,
  // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value. (optional)
  filterHeaderLastBlockIdPartSetHeaderHash: "filter[header.lastBlockId.partSetHeader.hash]_example",
  // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value. (optional)
  filterHeaderLastBlockIdPartSetHeaderHashNeq: "filter[header.lastBlockId.partSetHeader.hash.neq]_example",
  // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value. (optional)
  filterHeaderLastBlockIdPartSetHeaderHashLike: "filter[header.lastBlockId.partSetHeader.hash.like]_example",
  // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value. (optional)
  filterHeaderLastBlockIdPartSetHeaderHashIlike: "filter[header.lastBlockId.partSetHeader.hash.ilike]_example",
  // string | Filter the results where the [header.lastCommitHash] field is equal to the given value. (optional)
  filterHeaderLastCommitHash: "filter[header.lastCommitHash]_example",
  // string | Filter the results where the [header.lastCommitHash] field is not equal to the given value. (optional)
  filterHeaderLastCommitHashNeq: "filter[header.lastCommitHash.neq]_example",
  // string | Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value. (optional)
  filterHeaderLastCommitHashLike: "filter[header.lastCommitHash.like]_example",
  // string | Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value. (optional)
  filterHeaderLastCommitHashIlike: "filter[header.lastCommitHash.ilike]_example",
  // string | Filter the results where the [header.dataHash] field is equal to the given value. (optional)
  filterHeaderDataHash: "filter[header.dataHash]_example",
  // string | Filter the results where the [header.dataHash] field is not equal to the given value. (optional)
  filterHeaderDataHashNeq: "filter[header.dataHash.neq]_example",
  // string | Filter the results where the [header.dataHash] field is similar to the given case sensitive value. (optional)
  filterHeaderDataHashLike: "filter[header.dataHash.like]_example",
  // string | Filter the results where the [header.dataHash] field is similar to the given case insensitive value. (optional)
  filterHeaderDataHashIlike: "filter[header.dataHash.ilike]_example",
  // string | Filter the results where the [header.validatorsHash] field is equal to the given value. (optional)
  filterHeaderValidatorsHash: "filter[header.validatorsHash]_example",
  // string | Filter the results where the [header.validatorsHash] field is not equal to the given value. (optional)
  filterHeaderValidatorsHashNeq: "filter[header.validatorsHash.neq]_example",
  // string | Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value. (optional)
  filterHeaderValidatorsHashLike: "filter[header.validatorsHash.like]_example",
  // string | Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value. (optional)
  filterHeaderValidatorsHashIlike: "filter[header.validatorsHash.ilike]_example",
  // string | Filter the results where the [header.nextValidatorsHash] field is equal to the given value. (optional)
  filterHeaderNextValidatorsHash: "filter[header.nextValidatorsHash]_example",
  // string | Filter the results where the [header.nextValidatorsHash] field is not equal to the given value. (optional)
  filterHeaderNextValidatorsHashNeq: "filter[header.nextValidatorsHash.neq]_example",
  // string | Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value. (optional)
  filterHeaderNextValidatorsHashLike: "filter[header.nextValidatorsHash.like]_example",
  // string | Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value. (optional)
  filterHeaderNextValidatorsHashIlike: "filter[header.nextValidatorsHash.ilike]_example",
  // string | Filter the results where the [header.consensusHash] field is equal to the given value. (optional)
  filterHeaderConsensusHash: "filter[header.consensusHash]_example",
  // string | Filter the results where the [header.consensusHash] field is not equal to the given value. (optional)
  filterHeaderConsensusHashNeq: "filter[header.consensusHash.neq]_example",
  // string | Filter the results where the [header.consensusHash] field is similar to the given case sensitive value. (optional)
  filterHeaderConsensusHashLike: "filter[header.consensusHash.like]_example",
  // string | Filter the results where the [header.consensusHash] field is similar to the given case insensitive value. (optional)
  filterHeaderConsensusHashIlike: "filter[header.consensusHash.ilike]_example",
  // string | Filter the results where the [header.appHash] field is equal to the given value. (optional)
  filterHeaderAppHash: "filter[header.appHash]_example",
  // string | Filter the results where the [header.appHash] field is not equal to the given value. (optional)
  filterHeaderAppHashNeq: "filter[header.appHash.neq]_example",
  // string | Filter the results where the [header.appHash] field is similar to the given case sensitive value. (optional)
  filterHeaderAppHashLike: "filter[header.appHash.like]_example",
  // string | Filter the results where the [header.appHash] field is similar to the given case insensitive value. (optional)
  filterHeaderAppHashIlike: "filter[header.appHash.ilike]_example",
  // string | Filter the results where the [header.lastResultsHash] field is equal to the given value. (optional)
  filterHeaderLastResultsHash: "filter[header.lastResultsHash]_example",
  // string | Filter the results where the [header.lastResultsHash] field is not equal to the given value. (optional)
  filterHeaderLastResultsHashNeq: "filter[header.lastResultsHash.neq]_example",
  // string | Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value. (optional)
  filterHeaderLastResultsHashLike: "filter[header.lastResultsHash.like]_example",
  // string | Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value. (optional)
  filterHeaderLastResultsHashIlike: "filter[header.lastResultsHash.ilike]_example",
  // string | Filter the results where the [header.evidenceHash] field is equal to the given value. (optional)
  filterHeaderEvidenceHash: "filter[header.evidenceHash]_example",
  // string | Filter the results where the [header.evidenceHash] field is not equal to the given value. (optional)
  filterHeaderEvidenceHashNeq: "filter[header.evidenceHash.neq]_example",
  // string | Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value. (optional)
  filterHeaderEvidenceHashLike: "filter[header.evidenceHash.like]_example",
  // string | Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value. (optional)
  filterHeaderEvidenceHashIlike: "filter[header.evidenceHash.ilike]_example",
  // string | Filter the results where the [header.proposerAddress] field is equal to the given value. (optional)
  filterHeaderProposerAddress: "filter[header.proposerAddress]_example",
  // string | Filter the results where the [header.proposerAddress] field is not equal to the given value. (optional)
  filterHeaderProposerAddressNeq: "filter[header.proposerAddress.neq]_example",
  // string | Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value. (optional)
  filterHeaderProposerAddressLike: "filter[header.proposerAddress.like]_example",
  // string | Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value. (optional)
  filterHeaderProposerAddressIlike: "filter[header.proposerAddress.ilike]_example",
  // ApiBlocksGetIncludeParameter | Include the given relationships. (optional)
  include: null,
  // ApiBlocksGetSortParameter | Sort the results by the given field and direction. (optional)
  sort: null,
};

apiInstance.apiBlocksGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsBlocks** | **ApiBlocksGetFieldsBlocksParameter** | Include the given fields in the response. | (optional) defaults to undefined
 **filterHash** | [**string**] | Filter the results where the [hash] field is equal to the given value. | (optional) defaults to undefined
 **filterHashNeq** | [**string**] | Filter the results where the [hash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHashLike** | [**string**] | Filter the results where the [hash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHashIlike** | [**string**] | Filter the results where the [hash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeight** | [**number**] | Filter the results where the [height] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderVersionBlock** | [**number**] | Filter the results where the [header.version.block] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderChainId** | [**string**] | Filter the results where the [header.chainId] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderChainIdNeq** | [**string**] | Filter the results where the [header.chainId] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderChainIdLike** | [**string**] | Filter the results where the [header.chainId] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderChainIdIlike** | [**string**] | Filter the results where the [header.chainId] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderHeight** | [**number**] | Filter the results where the [header.height] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderTime** | [**string**] | Filter the results where the [header.time] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderTimeNeq** | [**string**] | Filter the results where the [header.time] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderTimeLike** | [**string**] | Filter the results where the [header.time] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderTimeIlike** | [**string**] | Filter the results where the [header.time] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderLastBlockIdHash** | [**string**] | Filter the results where the [header.lastBlockId.hash] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderLastBlockIdHashNeq** | [**string**] | Filter the results where the [header.lastBlockId.hash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderLastBlockIdHashLike** | [**string**] | Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderLastBlockIdHashIlike** | [**string**] | Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderLastBlockIdPartSetHeaderTotal** | [**number**] | Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderLastBlockIdPartSetHeaderHash** | [**string**] | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderLastBlockIdPartSetHeaderHashNeq** | [**string**] | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderLastBlockIdPartSetHeaderHashLike** | [**string**] | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderLastBlockIdPartSetHeaderHashIlike** | [**string**] | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderLastCommitHash** | [**string**] | Filter the results where the [header.lastCommitHash] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderLastCommitHashNeq** | [**string**] | Filter the results where the [header.lastCommitHash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderLastCommitHashLike** | [**string**] | Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderLastCommitHashIlike** | [**string**] | Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderDataHash** | [**string**] | Filter the results where the [header.dataHash] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderDataHashNeq** | [**string**] | Filter the results where the [header.dataHash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderDataHashLike** | [**string**] | Filter the results where the [header.dataHash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderDataHashIlike** | [**string**] | Filter the results where the [header.dataHash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderValidatorsHash** | [**string**] | Filter the results where the [header.validatorsHash] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderValidatorsHashNeq** | [**string**] | Filter the results where the [header.validatorsHash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderValidatorsHashLike** | [**string**] | Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderValidatorsHashIlike** | [**string**] | Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderNextValidatorsHash** | [**string**] | Filter the results where the [header.nextValidatorsHash] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderNextValidatorsHashNeq** | [**string**] | Filter the results where the [header.nextValidatorsHash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderNextValidatorsHashLike** | [**string**] | Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderNextValidatorsHashIlike** | [**string**] | Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderConsensusHash** | [**string**] | Filter the results where the [header.consensusHash] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderConsensusHashNeq** | [**string**] | Filter the results where the [header.consensusHash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderConsensusHashLike** | [**string**] | Filter the results where the [header.consensusHash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderConsensusHashIlike** | [**string**] | Filter the results where the [header.consensusHash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderAppHash** | [**string**] | Filter the results where the [header.appHash] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderAppHashNeq** | [**string**] | Filter the results where the [header.appHash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderAppHashLike** | [**string**] | Filter the results where the [header.appHash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderAppHashIlike** | [**string**] | Filter the results where the [header.appHash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderLastResultsHash** | [**string**] | Filter the results where the [header.lastResultsHash] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderLastResultsHashNeq** | [**string**] | Filter the results where the [header.lastResultsHash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderLastResultsHashLike** | [**string**] | Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderLastResultsHashIlike** | [**string**] | Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderEvidenceHash** | [**string**] | Filter the results where the [header.evidenceHash] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderEvidenceHashNeq** | [**string**] | Filter the results where the [header.evidenceHash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderEvidenceHashLike** | [**string**] | Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderEvidenceHashIlike** | [**string**] | Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterHeaderProposerAddress** | [**string**] | Filter the results where the [header.proposerAddress] field is equal to the given value. | (optional) defaults to undefined
 **filterHeaderProposerAddressNeq** | [**string**] | Filter the results where the [header.proposerAddress] field is not equal to the given value. | (optional) defaults to undefined
 **filterHeaderProposerAddressLike** | [**string**] | Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHeaderProposerAddressIlike** | [**string**] | Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **include** | **ApiBlocksGetIncludeParameter** | Include the given relationships. | (optional) defaults to undefined
 **sort** | **ApiBlocksGetSortParameter** | Sort the results by the given field and direction. | (optional) defaults to undefined


### Return type

**ApiBlocksGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiEntitiesGet**
> ApiEntitiesGet200Response apiEntitiesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiEntitiesGetRequest = {
  // ApiEntitiesGetFieldsEntitiesParameter | Include the given fields in the response. (optional)
  fieldsEntities: null,
  // string | Filter the results where the [module] field is equal to the given value. (optional)
  filterModule: "filter[module]_example",
  // string | Filter the results where the [module] field is not equal to the given value. (optional)
  filterModuleNeq: "filter[module.neq]_example",
  // string | Filter the results where the [module] field is similar to the given case sensitive value. (optional)
  filterModuleLike: "filter[module.like]_example",
  // string | Filter the results where the [module] field is similar to the given case insensitive value. (optional)
  filterModuleIlike: "filter[module.ilike]_example",
  // string | Filter the results where the [type] field is equal to the given value. (optional)
  filterType: "filter[type]_example",
  // string | Filter the results where the [type] field is not equal to the given value. (optional)
  filterTypeNeq: "filter[type.neq]_example",
  // string | Filter the results where the [type] field is similar to the given case sensitive value. (optional)
  filterTypeLike: "filter[type.like]_example",
  // string | Filter the results where the [type] field is similar to the given case insensitive value. (optional)
  filterTypeIlike: "filter[type.ilike]_example",
  // string | Filter the results where the [key] field is equal to the given value. (optional)
  filterKey: "filter[key]_example",
  // string | Filter the results where the [key] field is not equal to the given value. (optional)
  filterKeyNeq: "filter[key.neq]_example",
  // string | Filter the results where the [key] field is similar to the given case sensitive value. (optional)
  filterKeyLike: "filter[key.like]_example",
  // string | Filter the results where the [key] field is similar to the given case insensitive value. (optional)
  filterKeyIlike: "filter[key.ilike]_example",
  // string | Filter the results where the [value] field is equal to the given value. (optional)
  filterValue: "filter[value]_example",
  // string | Filter the results where the [value] field is not equal to the given value. (optional)
  filterValueNeq: "filter[value.neq]_example",
  // string | Filter the results where the [value] field is similar to the given case sensitive value. (optional)
  filterValueLike: "filter[value.like]_example",
  // string | Filter the results where the [value] field is similar to the given case insensitive value. (optional)
  filterValueIlike: "filter[value.ilike]_example",
  // ApiEntitiesGetSortParameter | Sort the results by the given field and direction. (optional)
  sort: null,
};

apiInstance.apiEntitiesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsEntities** | **ApiEntitiesGetFieldsEntitiesParameter** | Include the given fields in the response. | (optional) defaults to undefined
 **filterModule** | [**string**] | Filter the results where the [module] field is equal to the given value. | (optional) defaults to undefined
 **filterModuleNeq** | [**string**] | Filter the results where the [module] field is not equal to the given value. | (optional) defaults to undefined
 **filterModuleLike** | [**string**] | Filter the results where the [module] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterModuleIlike** | [**string**] | Filter the results where the [module] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterType** | [**string**] | Filter the results where the [type] field is equal to the given value. | (optional) defaults to undefined
 **filterTypeNeq** | [**string**] | Filter the results where the [type] field is not equal to the given value. | (optional) defaults to undefined
 **filterTypeLike** | [**string**] | Filter the results where the [type] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterTypeIlike** | [**string**] | Filter the results where the [type] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterKey** | [**string**] | Filter the results where the [key] field is equal to the given value. | (optional) defaults to undefined
 **filterKeyNeq** | [**string**] | Filter the results where the [key] field is not equal to the given value. | (optional) defaults to undefined
 **filterKeyLike** | [**string**] | Filter the results where the [key] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterKeyIlike** | [**string**] | Filter the results where the [key] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterValue** | [**string**] | Filter the results where the [value] field is equal to the given value. | (optional) defaults to undefined
 **filterValueNeq** | [**string**] | Filter the results where the [value] field is not equal to the given value. | (optional) defaults to undefined
 **filterValueLike** | [**string**] | Filter the results where the [value] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterValueIlike** | [**string**] | Filter the results where the [value] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **sort** | **ApiEntitiesGetSortParameter** | Sort the results by the given field and direction. | (optional) defaults to undefined


### Return type

**ApiEntitiesGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTransactionsGet**
> ApiTransactionsGet200Response apiTransactionsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiTransactionsGetRequest = {
  // ApiTransactionsGetFieldsAccountsParameter | Include the given fields in the response. (optional)
  fieldsAccounts: null,
  // string | Filter the results where the [hash] field is equal to the given value. (optional)
  filterHash: "filter[hash]_example",
  // string | Filter the results where the [hash] field is not equal to the given value. (optional)
  filterHashNeq: "filter[hash.neq]_example",
  // string | Filter the results where the [hash] field is similar to the given case sensitive value. (optional)
  filterHashLike: "filter[hash.like]_example",
  // string | Filter the results where the [hash] field is similar to the given case insensitive value. (optional)
  filterHashIlike: "filter[hash.ilike]_example",
  // string | Filter the results where the [sender] field is equal to the given value. (optional)
  filterSender: "filter[sender]_example",
  // string | Filter the results where the [sender] field is not equal to the given value. (optional)
  filterSenderNeq: "filter[sender.neq]_example",
  // string | Filter the results where the [sender] field is similar to the given case sensitive value. (optional)
  filterSenderLike: "filter[sender.like]_example",
  // string | Filter the results where the [sender] field is similar to the given case insensitive value. (optional)
  filterSenderIlike: "filter[sender.ilike]_example",
  // string | Filter the results where the [recipient] field is equal to the given value. (optional)
  filterRecipient: "filter[recipient]_example",
  // string | Filter the results where the [recipient] field is not equal to the given value. (optional)
  filterRecipientNeq: "filter[recipient.neq]_example",
  // string | Filter the results where the [recipient] field is similar to the given case sensitive value. (optional)
  filterRecipientLike: "filter[recipient.like]_example",
  // string | Filter the results where the [recipient] field is similar to the given case insensitive value. (optional)
  filterRecipientIlike: "filter[recipient.ilike]_example",
  // number | Filter the results where the [gas] field is equal to the given value. (optional)
  filterGas: 1,
  // number | Filter the results where the [nonce] field is equal to the given value. (optional)
  filterNonce: 1,
  // string | Filter the results where the [signature] field is equal to the given value. (optional)
  filterSignature: "filter[signature]_example",
  // string | Filter the results where the [signature] field is not equal to the given value. (optional)
  filterSignatureNeq: "filter[signature.neq]_example",
  // string | Filter the results where the [signature] field is similar to the given case sensitive value. (optional)
  filterSignatureLike: "filter[signature.like]_example",
  // string | Filter the results where the [signature] field is similar to the given case insensitive value. (optional)
  filterSignatureIlike: "filter[signature.ilike]_example",
  // string | Filter the results where the [version] field is equal to the given value. (optional)
  filterVersion: "filter[version]_example",
  // string | Filter the results where the [version] field is not equal to the given value. (optional)
  filterVersionNeq: "filter[version.neq]_example",
  // string | Filter the results where the [version] field is similar to the given case sensitive value. (optional)
  filterVersionLike: "filter[version.like]_example",
  // string | Filter the results where the [version] field is similar to the given case insensitive value. (optional)
  filterVersionIlike: "filter[version.ilike]_example",
  // string | Filter the results where the [message.handler] field is equal to the given value. (optional)
  filterMessageHandler: "filter[message.handler]_example",
  // string | Filter the results where the [message.handler] field is not equal to the given value. (optional)
  filterMessageHandlerNeq: "filter[message.handler.neq]_example",
  // string | Filter the results where the [message.handler] field is similar to the given case sensitive value. (optional)
  filterMessageHandlerLike: "filter[message.handler.like]_example",
  // string | Filter the results where the [message.handler] field is similar to the given case insensitive value. (optional)
  filterMessageHandlerIlike: "filter[message.handler.ilike]_example",
  // string | Filter the results where the [message.version] field is equal to the given value. (optional)
  filterMessageVersion: "filter[message.version]_example",
  // string | Filter the results where the [message.version] field is not equal to the given value. (optional)
  filterMessageVersionNeq: "filter[message.version.neq]_example",
  // string | Filter the results where the [message.version] field is similar to the given case sensitive value. (optional)
  filterMessageVersionLike: "filter[message.version.like]_example",
  // string | Filter the results where the [message.version] field is similar to the given case insensitive value. (optional)
  filterMessageVersionIlike: "filter[message.version.ilike]_example",
  // string | Filter the results where the [message.network] field is equal to the given value. (optional)
  filterMessageNetwork: "filter[message.network]_example",
  // string | Filter the results where the [message.network] field is not equal to the given value. (optional)
  filterMessageNetworkNeq: "filter[message.network.neq]_example",
  // string | Filter the results where the [message.network] field is similar to the given case sensitive value. (optional)
  filterMessageNetworkLike: "filter[message.network.like]_example",
  // string | Filter the results where the [message.network] field is similar to the given case insensitive value. (optional)
  filterMessageNetworkIlike: "filter[message.network.ilike]_example",
  // string | Filter the results where the [message.content] field is equal to the given value. (optional)
  filterMessageContent: "filter[message.content]_example",
  // string | Filter the results where the [message.content] field is not equal to the given value. (optional)
  filterMessageContentNeq: "filter[message.content.neq]_example",
  // string | Filter the results where the [message.content] field is similar to the given case sensitive value. (optional)
  filterMessageContentLike: "filter[message.content.like]_example",
  // string | Filter the results where the [message.content] field is similar to the given case insensitive value. (optional)
  filterMessageContentIlike: "filter[message.content.ilike]_example",
  // ApiTransactionsGetIncludeParameter | Include the given relationships. (optional)
  include: null,
  // ApiTransactionsGetSortParameter | Sort the results by the given field and direction. (optional)
  sort: null,
};

apiInstance.apiTransactionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsAccounts** | **ApiTransactionsGetFieldsAccountsParameter** | Include the given fields in the response. | (optional) defaults to undefined
 **filterHash** | [**string**] | Filter the results where the [hash] field is equal to the given value. | (optional) defaults to undefined
 **filterHashNeq** | [**string**] | Filter the results where the [hash] field is not equal to the given value. | (optional) defaults to undefined
 **filterHashLike** | [**string**] | Filter the results where the [hash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterHashIlike** | [**string**] | Filter the results where the [hash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterSender** | [**string**] | Filter the results where the [sender] field is equal to the given value. | (optional) defaults to undefined
 **filterSenderNeq** | [**string**] | Filter the results where the [sender] field is not equal to the given value. | (optional) defaults to undefined
 **filterSenderLike** | [**string**] | Filter the results where the [sender] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterSenderIlike** | [**string**] | Filter the results where the [sender] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterRecipient** | [**string**] | Filter the results where the [recipient] field is equal to the given value. | (optional) defaults to undefined
 **filterRecipientNeq** | [**string**] | Filter the results where the [recipient] field is not equal to the given value. | (optional) defaults to undefined
 **filterRecipientLike** | [**string**] | Filter the results where the [recipient] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterRecipientIlike** | [**string**] | Filter the results where the [recipient] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterGas** | [**number**] | Filter the results where the [gas] field is equal to the given value. | (optional) defaults to undefined
 **filterNonce** | [**number**] | Filter the results where the [nonce] field is equal to the given value. | (optional) defaults to undefined
 **filterSignature** | [**string**] | Filter the results where the [signature] field is equal to the given value. | (optional) defaults to undefined
 **filterSignatureNeq** | [**string**] | Filter the results where the [signature] field is not equal to the given value. | (optional) defaults to undefined
 **filterSignatureLike** | [**string**] | Filter the results where the [signature] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterSignatureIlike** | [**string**] | Filter the results where the [signature] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterVersion** | [**string**] | Filter the results where the [version] field is equal to the given value. | (optional) defaults to undefined
 **filterVersionNeq** | [**string**] | Filter the results where the [version] field is not equal to the given value. | (optional) defaults to undefined
 **filterVersionLike** | [**string**] | Filter the results where the [version] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterVersionIlike** | [**string**] | Filter the results where the [version] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterMessageHandler** | [**string**] | Filter the results where the [message.handler] field is equal to the given value. | (optional) defaults to undefined
 **filterMessageHandlerNeq** | [**string**] | Filter the results where the [message.handler] field is not equal to the given value. | (optional) defaults to undefined
 **filterMessageHandlerLike** | [**string**] | Filter the results where the [message.handler] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterMessageHandlerIlike** | [**string**] | Filter the results where the [message.handler] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterMessageVersion** | [**string**] | Filter the results where the [message.version] field is equal to the given value. | (optional) defaults to undefined
 **filterMessageVersionNeq** | [**string**] | Filter the results where the [message.version] field is not equal to the given value. | (optional) defaults to undefined
 **filterMessageVersionLike** | [**string**] | Filter the results where the [message.version] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterMessageVersionIlike** | [**string**] | Filter the results where the [message.version] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterMessageNetwork** | [**string**] | Filter the results where the [message.network] field is equal to the given value. | (optional) defaults to undefined
 **filterMessageNetworkNeq** | [**string**] | Filter the results where the [message.network] field is not equal to the given value. | (optional) defaults to undefined
 **filterMessageNetworkLike** | [**string**] | Filter the results where the [message.network] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterMessageNetworkIlike** | [**string**] | Filter the results where the [message.network] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterMessageContent** | [**string**] | Filter the results where the [message.content] field is equal to the given value. | (optional) defaults to undefined
 **filterMessageContentNeq** | [**string**] | Filter the results where the [message.content] field is not equal to the given value. | (optional) defaults to undefined
 **filterMessageContentLike** | [**string**] | Filter the results where the [message.content] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterMessageContentIlike** | [**string**] | Filter the results where the [message.content] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **include** | **ApiTransactionsGetIncludeParameter** | Include the given relationships. | (optional) defaults to undefined
 **sort** | **ApiTransactionsGetSortParameter** | Sort the results by the given field and direction. | (optional) defaults to undefined


### Return type

**ApiTransactionsGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTransactionsMetadataGet**
> ApiTransactionsMetadataGet200Response apiTransactionsMetadataGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiTransactionsMetadataGetRequest = {
  // ApiTransactionsMetadataGetFieldsTransactionMetadataParameter | Include the given fields in the response. (optional)
  fieldsTransactionMetadata: null,
  // number | Filter the results where the [transaction_id] field is equal to the given value. (optional)
  filterTransactionId: 1,
  // string | Filter the results where the [key] field is equal to the given value. (optional)
  filterKey: "filter[key]_example",
  // string | Filter the results where the [key] field is not equal to the given value. (optional)
  filterKeyNeq: "filter[key.neq]_example",
  // string | Filter the results where the [key] field is similar to the given case sensitive value. (optional)
  filterKeyLike: "filter[key.like]_example",
  // string | Filter the results where the [key] field is similar to the given case insensitive value. (optional)
  filterKeyIlike: "filter[key.ilike]_example",
  // string | Filter the results where the [value] field is equal to the given value. (optional)
  filterValue: "filter[value]_example",
  // string | Filter the results where the [value] field is not equal to the given value. (optional)
  filterValueNeq: "filter[value.neq]_example",
  // string | Filter the results where the [value] field is similar to the given case sensitive value. (optional)
  filterValueLike: "filter[value.like]_example",
  // string | Filter the results where the [value] field is similar to the given case insensitive value. (optional)
  filterValueIlike: "filter[value.ilike]_example",
  // ApiTransactionsMetadataGetIncludeParameter | Include the given relationships. (optional)
  include: null,
  // ApiTransactionsMetadataGetSortParameter | Sort the results by the given field and direction. (optional)
  sort: null,
};

apiInstance.apiTransactionsMetadataGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsTransactionMetadata** | **ApiTransactionsMetadataGetFieldsTransactionMetadataParameter** | Include the given fields in the response. | (optional) defaults to undefined
 **filterTransactionId** | [**number**] | Filter the results where the [transaction_id] field is equal to the given value. | (optional) defaults to undefined
 **filterKey** | [**string**] | Filter the results where the [key] field is equal to the given value. | (optional) defaults to undefined
 **filterKeyNeq** | [**string**] | Filter the results where the [key] field is not equal to the given value. | (optional) defaults to undefined
 **filterKeyLike** | [**string**] | Filter the results where the [key] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterKeyIlike** | [**string**] | Filter the results where the [key] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterValue** | [**string**] | Filter the results where the [value] field is equal to the given value. | (optional) defaults to undefined
 **filterValueNeq** | [**string**] | Filter the results where the [value] field is not equal to the given value. | (optional) defaults to undefined
 **filterValueLike** | [**string**] | Filter the results where the [value] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterValueIlike** | [**string**] | Filter the results where the [value] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **include** | **ApiTransactionsMetadataGetIncludeParameter** | Include the given relationships. | (optional) defaults to undefined
 **sort** | **ApiTransactionsMetadataGetSortParameter** | Sort the results by the given field and direction. | (optional) defaults to undefined


### Return type

**ApiTransactionsMetadataGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTransactionsReceiptsGet**
> ApiTransactionsReceiptsGet200Response apiTransactionsReceiptsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiTransactionsReceiptsGetRequest = {
  // ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter | Include the given fields in the response. (optional)
  fieldsTransactionReceipts: null,
  // number | Filter the results where the [transaction_id] field is equal to the given value. (optional)
  filterTransactionId: 1,
  // string | Filter the results where the [block_hash] field is equal to the given value. (optional)
  filterBlockHash: "filter[block_hash]_example",
  // string | Filter the results where the [block_hash] field is not equal to the given value. (optional)
  filterBlockHashNeq: "filter[block_hash.neq]_example",
  // string | Filter the results where the [block_hash] field is similar to the given case sensitive value. (optional)
  filterBlockHashLike: "filter[block_hash.like]_example",
  // string | Filter the results where the [block_hash] field is similar to the given case insensitive value. (optional)
  filterBlockHashIlike: "filter[block_hash.ilike]_example",
  // string | Filter the results where the [block_number] field is equal to the given value. (optional)
  filterBlockNumber: "filter[block_number]_example",
  // string | Filter the results where the [block_number] field is not equal to the given value. (optional)
  filterBlockNumberNeq: "filter[block_number.neq]_example",
  // string | Filter the results where the [block_number] field is similar to the given case sensitive value. (optional)
  filterBlockNumberLike: "filter[block_number.like]_example",
  // string | Filter the results where the [block_number] field is similar to the given case insensitive value. (optional)
  filterBlockNumberIlike: "filter[block_number.ilike]_example",
  // ApiTransactionsMetadataGetIncludeParameter | Include the given relationships. (optional)
  include: null,
  // ApiTransactionsReceiptsGetSortParameter | Sort the results by the given field and direction. (optional)
  sort: null,
};

apiInstance.apiTransactionsReceiptsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsTransactionReceipts** | **ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter** | Include the given fields in the response. | (optional) defaults to undefined
 **filterTransactionId** | [**number**] | Filter the results where the [transaction_id] field is equal to the given value. | (optional) defaults to undefined
 **filterBlockHash** | [**string**] | Filter the results where the [block_hash] field is equal to the given value. | (optional) defaults to undefined
 **filterBlockHashNeq** | [**string**] | Filter the results where the [block_hash] field is not equal to the given value. | (optional) defaults to undefined
 **filterBlockHashLike** | [**string**] | Filter the results where the [block_hash] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterBlockHashIlike** | [**string**] | Filter the results where the [block_hash] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **filterBlockNumber** | [**string**] | Filter the results where the [block_number] field is equal to the given value. | (optional) defaults to undefined
 **filterBlockNumberNeq** | [**string**] | Filter the results where the [block_number] field is not equal to the given value. | (optional) defaults to undefined
 **filterBlockNumberLike** | [**string**] | Filter the results where the [block_number] field is similar to the given case sensitive value. | (optional) defaults to undefined
 **filterBlockNumberIlike** | [**string**] | Filter the results where the [block_number] field is similar to the given case insensitive value. | (optional) defaults to undefined
 **include** | **ApiTransactionsMetadataGetIncludeParameter** | Include the given relationships. | (optional) defaults to undefined
 **sort** | **ApiTransactionsReceiptsGetSortParameter** | Sort the results by the given field and direction. | (optional) defaults to undefined


### Return type

**ApiTransactionsReceiptsGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiValidatorsUpdatesGet**
> ApiValidatorsUpdatesGet200Response apiValidatorsUpdatesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiValidatorsUpdatesGetRequest = {
  // ApiValidatorsUpdatesGetFieldsBlockNumberParameter | Include the given fields in the response. (optional)
  fieldsBlockNumber: null,
  // number | Filter the results where the [block_number] field is equal to the given value. (optional)
  filterBlockNumber: 1,
  // ApiValidatorsUpdatesGetIncludeParameter | Include the given relationships. (optional)
  include: null,
  // ApiValidatorsUpdatesGetSortParameter | Sort the results by the given field and direction. (optional)
  sort: null,
};

apiInstance.apiValidatorsUpdatesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsBlockNumber** | **ApiValidatorsUpdatesGetFieldsBlockNumberParameter** | Include the given fields in the response. | (optional) defaults to undefined
 **filterBlockNumber** | [**number**] | Filter the results where the [block_number] field is equal to the given value. | (optional) defaults to undefined
 **include** | **ApiValidatorsUpdatesGetIncludeParameter** | Include the given relationships. | (optional) defaults to undefined
 **sort** | **ApiValidatorsUpdatesGetSortParameter** | Sort the results by the given field and direction. | (optional) defaults to undefined


### Return type

**ApiValidatorsUpdatesGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


