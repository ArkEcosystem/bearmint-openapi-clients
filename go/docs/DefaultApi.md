# \DefaultApi

All URIs are relative to *http://railway.test*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiAccountsGet**](DefaultApi.md#ApiAccountsGet) | **Get** /api/accounts | List accounts
[**ApiAccountsMetadataGet**](DefaultApi.md#ApiAccountsMetadataGet) | **Get** /api/accounts/metadata | List account metadata
[**ApiBlocksGet**](DefaultApi.md#ApiBlocksGet) | **Get** /api/blocks | List blocks
[**ApiEntitiesGet**](DefaultApi.md#ApiEntitiesGet) | **Get** /api/entities | List entities
[**ApiTransactionsGet**](DefaultApi.md#ApiTransactionsGet) | **Get** /api/transactions | List transactions
[**ApiTransactionsMetadataGet**](DefaultApi.md#ApiTransactionsMetadataGet) | **Get** /api/transactions/metadata | List transaction metadata
[**ApiTransactionsReceiptsGet**](DefaultApi.md#ApiTransactionsReceiptsGet) | **Get** /api/transactions/receipts | List transaction receipts
[**ApiValidatorsUpdatesGet**](DefaultApi.md#ApiValidatorsUpdatesGet) | **Get** /api/validators/updates | List validator updates



## ApiAccountsGet

> ApiAccountsGet200Response ApiAccountsGet(ctx).FieldsAccounts(fieldsAccounts).FilterAddress(filterAddress).FilterAddressNeq(filterAddressNeq).FilterAddressLike(filterAddressLike).FilterAddressIlike(filterAddressIlike).FilterPublicKey(filterPublicKey).FilterPublicKeyNeq(filterPublicKeyNeq).FilterPublicKeyLike(filterPublicKeyLike).FilterPublicKeyIlike(filterPublicKeyIlike).FilterName(filterName).FilterNameNeq(filterNameNeq).FilterNameLike(filterNameLike).FilterNameIlike(filterNameIlike).FilterNonce(filterNonce).FilterValidatorAddress(filterValidatorAddress).FilterValidatorAddressNeq(filterValidatorAddressNeq).FilterValidatorAddressLike(filterValidatorAddressLike).FilterValidatorAddressIlike(filterValidatorAddressIlike).FilterValidatorPublicKey(filterValidatorPublicKey).FilterValidatorPublicKeyNeq(filterValidatorPublicKeyNeq).FilterValidatorPublicKeyLike(filterValidatorPublicKeyLike).FilterValidatorPublicKeyIlike(filterValidatorPublicKeyIlike).FilterValidatorPower(filterValidatorPower).FilterValidatorPowerNeq(filterValidatorPowerNeq).FilterValidatorPowerLike(filterValidatorPowerLike).FilterValidatorPowerIlike(filterValidatorPowerIlike).Include(include).Sort(sort).Execute()

List accounts

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    fieldsAccounts := *openapiclient.NewApiAccountsGetFieldsAccountsParameter() // ApiAccountsGetFieldsAccountsParameter | Include the given fields in the response. (optional)
    filterAddress := "filterAddress_example" // string | Filter the results where the [address] field is equal to the given value. (optional)
    filterAddressNeq := "filterAddressNeq_example" // string | Filter the results where the [address] field is not equal to the given value. (optional)
    filterAddressLike := "filterAddressLike_example" // string | Filter the results where the [address] field is similar to the given case sensitive value. (optional)
    filterAddressIlike := "filterAddressIlike_example" // string | Filter the results where the [address] field is similar to the given case insensitive value. (optional)
    filterPublicKey := "filterPublicKey_example" // string | Filter the results where the [public_key] field is equal to the given value. (optional)
    filterPublicKeyNeq := "filterPublicKeyNeq_example" // string | Filter the results where the [public_key] field is not equal to the given value. (optional)
    filterPublicKeyLike := "filterPublicKeyLike_example" // string | Filter the results where the [public_key] field is similar to the given case sensitive value. (optional)
    filterPublicKeyIlike := "filterPublicKeyIlike_example" // string | Filter the results where the [public_key] field is similar to the given case insensitive value. (optional)
    filterName := "filterName_example" // string | Filter the results where the [name] field is equal to the given value. (optional)
    filterNameNeq := "filterNameNeq_example" // string | Filter the results where the [name] field is not equal to the given value. (optional)
    filterNameLike := "filterNameLike_example" // string | Filter the results where the [name] field is similar to the given case sensitive value. (optional)
    filterNameIlike := "filterNameIlike_example" // string | Filter the results where the [name] field is similar to the given case insensitive value. (optional)
    filterNonce := int32(56) // int32 | Filter the results where the [nonce] field is equal to the given value. (optional)
    filterValidatorAddress := "filterValidatorAddress_example" // string | Filter the results where the [validator.address] field is equal to the given value. (optional)
    filterValidatorAddressNeq := "filterValidatorAddressNeq_example" // string | Filter the results where the [validator.address] field is not equal to the given value. (optional)
    filterValidatorAddressLike := "filterValidatorAddressLike_example" // string | Filter the results where the [validator.address] field is similar to the given case sensitive value. (optional)
    filterValidatorAddressIlike := "filterValidatorAddressIlike_example" // string | Filter the results where the [validator.address] field is similar to the given case insensitive value. (optional)
    filterValidatorPublicKey := "filterValidatorPublicKey_example" // string | Filter the results where the [validator.publicKey] field is equal to the given value. (optional)
    filterValidatorPublicKeyNeq := "filterValidatorPublicKeyNeq_example" // string | Filter the results where the [validator.publicKey] field is not equal to the given value. (optional)
    filterValidatorPublicKeyLike := "filterValidatorPublicKeyLike_example" // string | Filter the results where the [validator.publicKey] field is similar to the given case sensitive value. (optional)
    filterValidatorPublicKeyIlike := "filterValidatorPublicKeyIlike_example" // string | Filter the results where the [validator.publicKey] field is similar to the given case insensitive value. (optional)
    filterValidatorPower := "filterValidatorPower_example" // string | Filter the results where the [validator.power] field is equal to the given value. (optional)
    filterValidatorPowerNeq := "filterValidatorPowerNeq_example" // string | Filter the results where the [validator.power] field is not equal to the given value. (optional)
    filterValidatorPowerLike := "filterValidatorPowerLike_example" // string | Filter the results where the [validator.power] field is similar to the given case sensitive value. (optional)
    filterValidatorPowerIlike := "filterValidatorPowerIlike_example" // string | Filter the results where the [validator.power] field is similar to the given case insensitive value. (optional)
    include := *openapiclient.NewApiAccountsGetIncludeParameter() // ApiAccountsGetIncludeParameter | Include the given relationships. (optional)
    sort := *openapiclient.NewApiAccountsGetSortParameter() // ApiAccountsGetSortParameter | Sort the results by the given field and direction. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.ApiAccountsGet(context.Background()).FieldsAccounts(fieldsAccounts).FilterAddress(filterAddress).FilterAddressNeq(filterAddressNeq).FilterAddressLike(filterAddressLike).FilterAddressIlike(filterAddressIlike).FilterPublicKey(filterPublicKey).FilterPublicKeyNeq(filterPublicKeyNeq).FilterPublicKeyLike(filterPublicKeyLike).FilterPublicKeyIlike(filterPublicKeyIlike).FilterName(filterName).FilterNameNeq(filterNameNeq).FilterNameLike(filterNameLike).FilterNameIlike(filterNameIlike).FilterNonce(filterNonce).FilterValidatorAddress(filterValidatorAddress).FilterValidatorAddressNeq(filterValidatorAddressNeq).FilterValidatorAddressLike(filterValidatorAddressLike).FilterValidatorAddressIlike(filterValidatorAddressIlike).FilterValidatorPublicKey(filterValidatorPublicKey).FilterValidatorPublicKeyNeq(filterValidatorPublicKeyNeq).FilterValidatorPublicKeyLike(filterValidatorPublicKeyLike).FilterValidatorPublicKeyIlike(filterValidatorPublicKeyIlike).FilterValidatorPower(filterValidatorPower).FilterValidatorPowerNeq(filterValidatorPowerNeq).FilterValidatorPowerLike(filterValidatorPowerLike).FilterValidatorPowerIlike(filterValidatorPowerIlike).Include(include).Sort(sort).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ApiAccountsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiAccountsGet`: ApiAccountsGet200Response
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ApiAccountsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiAccountsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsAccounts** | [**ApiAccountsGetFieldsAccountsParameter**](ApiAccountsGetFieldsAccountsParameter.md) | Include the given fields in the response. | 
 **filterAddress** | **string** | Filter the results where the [address] field is equal to the given value. | 
 **filterAddressNeq** | **string** | Filter the results where the [address] field is not equal to the given value. | 
 **filterAddressLike** | **string** | Filter the results where the [address] field is similar to the given case sensitive value. | 
 **filterAddressIlike** | **string** | Filter the results where the [address] field is similar to the given case insensitive value. | 
 **filterPublicKey** | **string** | Filter the results where the [public_key] field is equal to the given value. | 
 **filterPublicKeyNeq** | **string** | Filter the results where the [public_key] field is not equal to the given value. | 
 **filterPublicKeyLike** | **string** | Filter the results where the [public_key] field is similar to the given case sensitive value. | 
 **filterPublicKeyIlike** | **string** | Filter the results where the [public_key] field is similar to the given case insensitive value. | 
 **filterName** | **string** | Filter the results where the [name] field is equal to the given value. | 
 **filterNameNeq** | **string** | Filter the results where the [name] field is not equal to the given value. | 
 **filterNameLike** | **string** | Filter the results where the [name] field is similar to the given case sensitive value. | 
 **filterNameIlike** | **string** | Filter the results where the [name] field is similar to the given case insensitive value. | 
 **filterNonce** | **int32** | Filter the results where the [nonce] field is equal to the given value. | 
 **filterValidatorAddress** | **string** | Filter the results where the [validator.address] field is equal to the given value. | 
 **filterValidatorAddressNeq** | **string** | Filter the results where the [validator.address] field is not equal to the given value. | 
 **filterValidatorAddressLike** | **string** | Filter the results where the [validator.address] field is similar to the given case sensitive value. | 
 **filterValidatorAddressIlike** | **string** | Filter the results where the [validator.address] field is similar to the given case insensitive value. | 
 **filterValidatorPublicKey** | **string** | Filter the results where the [validator.publicKey] field is equal to the given value. | 
 **filterValidatorPublicKeyNeq** | **string** | Filter the results where the [validator.publicKey] field is not equal to the given value. | 
 **filterValidatorPublicKeyLike** | **string** | Filter the results where the [validator.publicKey] field is similar to the given case sensitive value. | 
 **filterValidatorPublicKeyIlike** | **string** | Filter the results where the [validator.publicKey] field is similar to the given case insensitive value. | 
 **filterValidatorPower** | **string** | Filter the results where the [validator.power] field is equal to the given value. | 
 **filterValidatorPowerNeq** | **string** | Filter the results where the [validator.power] field is not equal to the given value. | 
 **filterValidatorPowerLike** | **string** | Filter the results where the [validator.power] field is similar to the given case sensitive value. | 
 **filterValidatorPowerIlike** | **string** | Filter the results where the [validator.power] field is similar to the given case insensitive value. | 
 **include** | [**ApiAccountsGetIncludeParameter**](ApiAccountsGetIncludeParameter.md) | Include the given relationships. | 
 **sort** | [**ApiAccountsGetSortParameter**](ApiAccountsGetSortParameter.md) | Sort the results by the given field and direction. | 

### Return type

[**ApiAccountsGet200Response**](ApiAccountsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiAccountsMetadataGet

> ApiAccountsMetadataGet200Response ApiAccountsMetadataGet(ctx).FieldsAccountsMetadata(fieldsAccountsMetadata).FilterAccountId(filterAccountId).FilterModule(filterModule).FilterModuleNeq(filterModuleNeq).FilterModuleLike(filterModuleLike).FilterModuleIlike(filterModuleIlike).FilterKey(filterKey).FilterKeyNeq(filterKeyNeq).FilterKeyLike(filterKeyLike).FilterKeyIlike(filterKeyIlike).FilterValue(filterValue).FilterValueNeq(filterValueNeq).FilterValueLike(filterValueLike).FilterValueIlike(filterValueIlike).Include(include).Sort(sort).Execute()

List account metadata

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    fieldsAccountsMetadata := *openapiclient.NewApiAccountsMetadataGetFieldsAccountsMetadataParameter() // ApiAccountsMetadataGetFieldsAccountsMetadataParameter | Include the given fields in the response. (optional)
    filterAccountId := int32(56) // int32 | Filter the results where the [account_id] field is equal to the given value. (optional)
    filterModule := "filterModule_example" // string | Filter the results where the [module] field is equal to the given value. (optional)
    filterModuleNeq := "filterModuleNeq_example" // string | Filter the results where the [module] field is not equal to the given value. (optional)
    filterModuleLike := "filterModuleLike_example" // string | Filter the results where the [module] field is similar to the given case sensitive value. (optional)
    filterModuleIlike := "filterModuleIlike_example" // string | Filter the results where the [module] field is similar to the given case insensitive value. (optional)
    filterKey := "filterKey_example" // string | Filter the results where the [key] field is equal to the given value. (optional)
    filterKeyNeq := "filterKeyNeq_example" // string | Filter the results where the [key] field is not equal to the given value. (optional)
    filterKeyLike := "filterKeyLike_example" // string | Filter the results where the [key] field is similar to the given case sensitive value. (optional)
    filterKeyIlike := "filterKeyIlike_example" // string | Filter the results where the [key] field is similar to the given case insensitive value. (optional)
    filterValue := "filterValue_example" // string | Filter the results where the [value] field is equal to the given value. (optional)
    filterValueNeq := "filterValueNeq_example" // string | Filter the results where the [value] field is not equal to the given value. (optional)
    filterValueLike := "filterValueLike_example" // string | Filter the results where the [value] field is similar to the given case sensitive value. (optional)
    filterValueIlike := "filterValueIlike_example" // string | Filter the results where the [value] field is similar to the given case insensitive value. (optional)
    include := *openapiclient.NewApiAccountsMetadataGetIncludeParameter() // ApiAccountsMetadataGetIncludeParameter | Include the given relationships. (optional)
    sort := *openapiclient.NewApiAccountsMetadataGetSortParameter() // ApiAccountsMetadataGetSortParameter | Sort the results by the given field and direction. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.ApiAccountsMetadataGet(context.Background()).FieldsAccountsMetadata(fieldsAccountsMetadata).FilterAccountId(filterAccountId).FilterModule(filterModule).FilterModuleNeq(filterModuleNeq).FilterModuleLike(filterModuleLike).FilterModuleIlike(filterModuleIlike).FilterKey(filterKey).FilterKeyNeq(filterKeyNeq).FilterKeyLike(filterKeyLike).FilterKeyIlike(filterKeyIlike).FilterValue(filterValue).FilterValueNeq(filterValueNeq).FilterValueLike(filterValueLike).FilterValueIlike(filterValueIlike).Include(include).Sort(sort).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ApiAccountsMetadataGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiAccountsMetadataGet`: ApiAccountsMetadataGet200Response
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ApiAccountsMetadataGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiAccountsMetadataGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsAccountsMetadata** | [**ApiAccountsMetadataGetFieldsAccountsMetadataParameter**](ApiAccountsMetadataGetFieldsAccountsMetadataParameter.md) | Include the given fields in the response. | 
 **filterAccountId** | **int32** | Filter the results where the [account_id] field is equal to the given value. | 
 **filterModule** | **string** | Filter the results where the [module] field is equal to the given value. | 
 **filterModuleNeq** | **string** | Filter the results where the [module] field is not equal to the given value. | 
 **filterModuleLike** | **string** | Filter the results where the [module] field is similar to the given case sensitive value. | 
 **filterModuleIlike** | **string** | Filter the results where the [module] field is similar to the given case insensitive value. | 
 **filterKey** | **string** | Filter the results where the [key] field is equal to the given value. | 
 **filterKeyNeq** | **string** | Filter the results where the [key] field is not equal to the given value. | 
 **filterKeyLike** | **string** | Filter the results where the [key] field is similar to the given case sensitive value. | 
 **filterKeyIlike** | **string** | Filter the results where the [key] field is similar to the given case insensitive value. | 
 **filterValue** | **string** | Filter the results where the [value] field is equal to the given value. | 
 **filterValueNeq** | **string** | Filter the results where the [value] field is not equal to the given value. | 
 **filterValueLike** | **string** | Filter the results where the [value] field is similar to the given case sensitive value. | 
 **filterValueIlike** | **string** | Filter the results where the [value] field is similar to the given case insensitive value. | 
 **include** | [**ApiAccountsMetadataGetIncludeParameter**](ApiAccountsMetadataGetIncludeParameter.md) | Include the given relationships. | 
 **sort** | [**ApiAccountsMetadataGetSortParameter**](ApiAccountsMetadataGetSortParameter.md) | Sort the results by the given field and direction. | 

### Return type

[**ApiAccountsMetadataGet200Response**](ApiAccountsMetadataGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiBlocksGet

> ApiBlocksGet200Response ApiBlocksGet(ctx).FieldsBlocks(fieldsBlocks).FilterHash(filterHash).FilterHashNeq(filterHashNeq).FilterHashLike(filterHashLike).FilterHashIlike(filterHashIlike).FilterHeight(filterHeight).FilterHeaderVersionBlock(filterHeaderVersionBlock).FilterHeaderChainId(filterHeaderChainId).FilterHeaderChainIdNeq(filterHeaderChainIdNeq).FilterHeaderChainIdLike(filterHeaderChainIdLike).FilterHeaderChainIdIlike(filterHeaderChainIdIlike).FilterHeaderHeight(filterHeaderHeight).FilterHeaderTime(filterHeaderTime).FilterHeaderTimeNeq(filterHeaderTimeNeq).FilterHeaderTimeLike(filterHeaderTimeLike).FilterHeaderTimeIlike(filterHeaderTimeIlike).FilterHeaderLastBlockIdHash(filterHeaderLastBlockIdHash).FilterHeaderLastBlockIdHashNeq(filterHeaderLastBlockIdHashNeq).FilterHeaderLastBlockIdHashLike(filterHeaderLastBlockIdHashLike).FilterHeaderLastBlockIdHashIlike(filterHeaderLastBlockIdHashIlike).FilterHeaderLastBlockIdPartSetHeaderTotal(filterHeaderLastBlockIdPartSetHeaderTotal).FilterHeaderLastBlockIdPartSetHeaderHash(filterHeaderLastBlockIdPartSetHeaderHash).FilterHeaderLastBlockIdPartSetHeaderHashNeq(filterHeaderLastBlockIdPartSetHeaderHashNeq).FilterHeaderLastBlockIdPartSetHeaderHashLike(filterHeaderLastBlockIdPartSetHeaderHashLike).FilterHeaderLastBlockIdPartSetHeaderHashIlike(filterHeaderLastBlockIdPartSetHeaderHashIlike).FilterHeaderLastCommitHash(filterHeaderLastCommitHash).FilterHeaderLastCommitHashNeq(filterHeaderLastCommitHashNeq).FilterHeaderLastCommitHashLike(filterHeaderLastCommitHashLike).FilterHeaderLastCommitHashIlike(filterHeaderLastCommitHashIlike).FilterHeaderDataHash(filterHeaderDataHash).FilterHeaderDataHashNeq(filterHeaderDataHashNeq).FilterHeaderDataHashLike(filterHeaderDataHashLike).FilterHeaderDataHashIlike(filterHeaderDataHashIlike).FilterHeaderValidatorsHash(filterHeaderValidatorsHash).FilterHeaderValidatorsHashNeq(filterHeaderValidatorsHashNeq).FilterHeaderValidatorsHashLike(filterHeaderValidatorsHashLike).FilterHeaderValidatorsHashIlike(filterHeaderValidatorsHashIlike).FilterHeaderNextValidatorsHash(filterHeaderNextValidatorsHash).FilterHeaderNextValidatorsHashNeq(filterHeaderNextValidatorsHashNeq).FilterHeaderNextValidatorsHashLike(filterHeaderNextValidatorsHashLike).FilterHeaderNextValidatorsHashIlike(filterHeaderNextValidatorsHashIlike).FilterHeaderConsensusHash(filterHeaderConsensusHash).FilterHeaderConsensusHashNeq(filterHeaderConsensusHashNeq).FilterHeaderConsensusHashLike(filterHeaderConsensusHashLike).FilterHeaderConsensusHashIlike(filterHeaderConsensusHashIlike).FilterHeaderAppHash(filterHeaderAppHash).FilterHeaderAppHashNeq(filterHeaderAppHashNeq).FilterHeaderAppHashLike(filterHeaderAppHashLike).FilterHeaderAppHashIlike(filterHeaderAppHashIlike).FilterHeaderLastResultsHash(filterHeaderLastResultsHash).FilterHeaderLastResultsHashNeq(filterHeaderLastResultsHashNeq).FilterHeaderLastResultsHashLike(filterHeaderLastResultsHashLike).FilterHeaderLastResultsHashIlike(filterHeaderLastResultsHashIlike).FilterHeaderEvidenceHash(filterHeaderEvidenceHash).FilterHeaderEvidenceHashNeq(filterHeaderEvidenceHashNeq).FilterHeaderEvidenceHashLike(filterHeaderEvidenceHashLike).FilterHeaderEvidenceHashIlike(filterHeaderEvidenceHashIlike).FilterHeaderProposerAddress(filterHeaderProposerAddress).FilterHeaderProposerAddressNeq(filterHeaderProposerAddressNeq).FilterHeaderProposerAddressLike(filterHeaderProposerAddressLike).FilterHeaderProposerAddressIlike(filterHeaderProposerAddressIlike).Include(include).Sort(sort).Execute()

List blocks

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    fieldsBlocks := *openapiclient.NewApiBlocksGetFieldsBlocksParameter() // ApiBlocksGetFieldsBlocksParameter | Include the given fields in the response. (optional)
    filterHash := "filterHash_example" // string | Filter the results where the [hash] field is equal to the given value. (optional)
    filterHashNeq := "filterHashNeq_example" // string | Filter the results where the [hash] field is not equal to the given value. (optional)
    filterHashLike := "filterHashLike_example" // string | Filter the results where the [hash] field is similar to the given case sensitive value. (optional)
    filterHashIlike := "filterHashIlike_example" // string | Filter the results where the [hash] field is similar to the given case insensitive value. (optional)
    filterHeight := int32(56) // int32 | Filter the results where the [height] field is equal to the given value. (optional)
    filterHeaderVersionBlock := int32(56) // int32 | Filter the results where the [header.version.block] field is equal to the given value. (optional)
    filterHeaderChainId := "filterHeaderChainId_example" // string | Filter the results where the [header.chainId] field is equal to the given value. (optional)
    filterHeaderChainIdNeq := "filterHeaderChainIdNeq_example" // string | Filter the results where the [header.chainId] field is not equal to the given value. (optional)
    filterHeaderChainIdLike := "filterHeaderChainIdLike_example" // string | Filter the results where the [header.chainId] field is similar to the given case sensitive value. (optional)
    filterHeaderChainIdIlike := "filterHeaderChainIdIlike_example" // string | Filter the results where the [header.chainId] field is similar to the given case insensitive value. (optional)
    filterHeaderHeight := int32(56) // int32 | Filter the results where the [header.height] field is equal to the given value. (optional)
    filterHeaderTime := "filterHeaderTime_example" // string | Filter the results where the [header.time] field is equal to the given value. (optional)
    filterHeaderTimeNeq := "filterHeaderTimeNeq_example" // string | Filter the results where the [header.time] field is not equal to the given value. (optional)
    filterHeaderTimeLike := "filterHeaderTimeLike_example" // string | Filter the results where the [header.time] field is similar to the given case sensitive value. (optional)
    filterHeaderTimeIlike := "filterHeaderTimeIlike_example" // string | Filter the results where the [header.time] field is similar to the given case insensitive value. (optional)
    filterHeaderLastBlockIdHash := "filterHeaderLastBlockIdHash_example" // string | Filter the results where the [header.lastBlockId.hash] field is equal to the given value. (optional)
    filterHeaderLastBlockIdHashNeq := "filterHeaderLastBlockIdHashNeq_example" // string | Filter the results where the [header.lastBlockId.hash] field is not equal to the given value. (optional)
    filterHeaderLastBlockIdHashLike := "filterHeaderLastBlockIdHashLike_example" // string | Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value. (optional)
    filterHeaderLastBlockIdHashIlike := "filterHeaderLastBlockIdHashIlike_example" // string | Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value. (optional)
    filterHeaderLastBlockIdPartSetHeaderTotal := int32(56) // int32 | Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value. (optional)
    filterHeaderLastBlockIdPartSetHeaderHash := "filterHeaderLastBlockIdPartSetHeaderHash_example" // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value. (optional)
    filterHeaderLastBlockIdPartSetHeaderHashNeq := "filterHeaderLastBlockIdPartSetHeaderHashNeq_example" // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value. (optional)
    filterHeaderLastBlockIdPartSetHeaderHashLike := "filterHeaderLastBlockIdPartSetHeaderHashLike_example" // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value. (optional)
    filterHeaderLastBlockIdPartSetHeaderHashIlike := "filterHeaderLastBlockIdPartSetHeaderHashIlike_example" // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value. (optional)
    filterHeaderLastCommitHash := "filterHeaderLastCommitHash_example" // string | Filter the results where the [header.lastCommitHash] field is equal to the given value. (optional)
    filterHeaderLastCommitHashNeq := "filterHeaderLastCommitHashNeq_example" // string | Filter the results where the [header.lastCommitHash] field is not equal to the given value. (optional)
    filterHeaderLastCommitHashLike := "filterHeaderLastCommitHashLike_example" // string | Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value. (optional)
    filterHeaderLastCommitHashIlike := "filterHeaderLastCommitHashIlike_example" // string | Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value. (optional)
    filterHeaderDataHash := "filterHeaderDataHash_example" // string | Filter the results where the [header.dataHash] field is equal to the given value. (optional)
    filterHeaderDataHashNeq := "filterHeaderDataHashNeq_example" // string | Filter the results where the [header.dataHash] field is not equal to the given value. (optional)
    filterHeaderDataHashLike := "filterHeaderDataHashLike_example" // string | Filter the results where the [header.dataHash] field is similar to the given case sensitive value. (optional)
    filterHeaderDataHashIlike := "filterHeaderDataHashIlike_example" // string | Filter the results where the [header.dataHash] field is similar to the given case insensitive value. (optional)
    filterHeaderValidatorsHash := "filterHeaderValidatorsHash_example" // string | Filter the results where the [header.validatorsHash] field is equal to the given value. (optional)
    filterHeaderValidatorsHashNeq := "filterHeaderValidatorsHashNeq_example" // string | Filter the results where the [header.validatorsHash] field is not equal to the given value. (optional)
    filterHeaderValidatorsHashLike := "filterHeaderValidatorsHashLike_example" // string | Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value. (optional)
    filterHeaderValidatorsHashIlike := "filterHeaderValidatorsHashIlike_example" // string | Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value. (optional)
    filterHeaderNextValidatorsHash := "filterHeaderNextValidatorsHash_example" // string | Filter the results where the [header.nextValidatorsHash] field is equal to the given value. (optional)
    filterHeaderNextValidatorsHashNeq := "filterHeaderNextValidatorsHashNeq_example" // string | Filter the results where the [header.nextValidatorsHash] field is not equal to the given value. (optional)
    filterHeaderNextValidatorsHashLike := "filterHeaderNextValidatorsHashLike_example" // string | Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value. (optional)
    filterHeaderNextValidatorsHashIlike := "filterHeaderNextValidatorsHashIlike_example" // string | Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value. (optional)
    filterHeaderConsensusHash := "filterHeaderConsensusHash_example" // string | Filter the results where the [header.consensusHash] field is equal to the given value. (optional)
    filterHeaderConsensusHashNeq := "filterHeaderConsensusHashNeq_example" // string | Filter the results where the [header.consensusHash] field is not equal to the given value. (optional)
    filterHeaderConsensusHashLike := "filterHeaderConsensusHashLike_example" // string | Filter the results where the [header.consensusHash] field is similar to the given case sensitive value. (optional)
    filterHeaderConsensusHashIlike := "filterHeaderConsensusHashIlike_example" // string | Filter the results where the [header.consensusHash] field is similar to the given case insensitive value. (optional)
    filterHeaderAppHash := "filterHeaderAppHash_example" // string | Filter the results where the [header.appHash] field is equal to the given value. (optional)
    filterHeaderAppHashNeq := "filterHeaderAppHashNeq_example" // string | Filter the results where the [header.appHash] field is not equal to the given value. (optional)
    filterHeaderAppHashLike := "filterHeaderAppHashLike_example" // string | Filter the results where the [header.appHash] field is similar to the given case sensitive value. (optional)
    filterHeaderAppHashIlike := "filterHeaderAppHashIlike_example" // string | Filter the results where the [header.appHash] field is similar to the given case insensitive value. (optional)
    filterHeaderLastResultsHash := "filterHeaderLastResultsHash_example" // string | Filter the results where the [header.lastResultsHash] field is equal to the given value. (optional)
    filterHeaderLastResultsHashNeq := "filterHeaderLastResultsHashNeq_example" // string | Filter the results where the [header.lastResultsHash] field is not equal to the given value. (optional)
    filterHeaderLastResultsHashLike := "filterHeaderLastResultsHashLike_example" // string | Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value. (optional)
    filterHeaderLastResultsHashIlike := "filterHeaderLastResultsHashIlike_example" // string | Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value. (optional)
    filterHeaderEvidenceHash := "filterHeaderEvidenceHash_example" // string | Filter the results where the [header.evidenceHash] field is equal to the given value. (optional)
    filterHeaderEvidenceHashNeq := "filterHeaderEvidenceHashNeq_example" // string | Filter the results where the [header.evidenceHash] field is not equal to the given value. (optional)
    filterHeaderEvidenceHashLike := "filterHeaderEvidenceHashLike_example" // string | Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value. (optional)
    filterHeaderEvidenceHashIlike := "filterHeaderEvidenceHashIlike_example" // string | Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value. (optional)
    filterHeaderProposerAddress := "filterHeaderProposerAddress_example" // string | Filter the results where the [header.proposerAddress] field is equal to the given value. (optional)
    filterHeaderProposerAddressNeq := "filterHeaderProposerAddressNeq_example" // string | Filter the results where the [header.proposerAddress] field is not equal to the given value. (optional)
    filterHeaderProposerAddressLike := "filterHeaderProposerAddressLike_example" // string | Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value. (optional)
    filterHeaderProposerAddressIlike := "filterHeaderProposerAddressIlike_example" // string | Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value. (optional)
    include := *openapiclient.NewApiBlocksGetIncludeParameter() // ApiBlocksGetIncludeParameter | Include the given relationships. (optional)
    sort := *openapiclient.NewApiBlocksGetSortParameter() // ApiBlocksGetSortParameter | Sort the results by the given field and direction. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.ApiBlocksGet(context.Background()).FieldsBlocks(fieldsBlocks).FilterHash(filterHash).FilterHashNeq(filterHashNeq).FilterHashLike(filterHashLike).FilterHashIlike(filterHashIlike).FilterHeight(filterHeight).FilterHeaderVersionBlock(filterHeaderVersionBlock).FilterHeaderChainId(filterHeaderChainId).FilterHeaderChainIdNeq(filterHeaderChainIdNeq).FilterHeaderChainIdLike(filterHeaderChainIdLike).FilterHeaderChainIdIlike(filterHeaderChainIdIlike).FilterHeaderHeight(filterHeaderHeight).FilterHeaderTime(filterHeaderTime).FilterHeaderTimeNeq(filterHeaderTimeNeq).FilterHeaderTimeLike(filterHeaderTimeLike).FilterHeaderTimeIlike(filterHeaderTimeIlike).FilterHeaderLastBlockIdHash(filterHeaderLastBlockIdHash).FilterHeaderLastBlockIdHashNeq(filterHeaderLastBlockIdHashNeq).FilterHeaderLastBlockIdHashLike(filterHeaderLastBlockIdHashLike).FilterHeaderLastBlockIdHashIlike(filterHeaderLastBlockIdHashIlike).FilterHeaderLastBlockIdPartSetHeaderTotal(filterHeaderLastBlockIdPartSetHeaderTotal).FilterHeaderLastBlockIdPartSetHeaderHash(filterHeaderLastBlockIdPartSetHeaderHash).FilterHeaderLastBlockIdPartSetHeaderHashNeq(filterHeaderLastBlockIdPartSetHeaderHashNeq).FilterHeaderLastBlockIdPartSetHeaderHashLike(filterHeaderLastBlockIdPartSetHeaderHashLike).FilterHeaderLastBlockIdPartSetHeaderHashIlike(filterHeaderLastBlockIdPartSetHeaderHashIlike).FilterHeaderLastCommitHash(filterHeaderLastCommitHash).FilterHeaderLastCommitHashNeq(filterHeaderLastCommitHashNeq).FilterHeaderLastCommitHashLike(filterHeaderLastCommitHashLike).FilterHeaderLastCommitHashIlike(filterHeaderLastCommitHashIlike).FilterHeaderDataHash(filterHeaderDataHash).FilterHeaderDataHashNeq(filterHeaderDataHashNeq).FilterHeaderDataHashLike(filterHeaderDataHashLike).FilterHeaderDataHashIlike(filterHeaderDataHashIlike).FilterHeaderValidatorsHash(filterHeaderValidatorsHash).FilterHeaderValidatorsHashNeq(filterHeaderValidatorsHashNeq).FilterHeaderValidatorsHashLike(filterHeaderValidatorsHashLike).FilterHeaderValidatorsHashIlike(filterHeaderValidatorsHashIlike).FilterHeaderNextValidatorsHash(filterHeaderNextValidatorsHash).FilterHeaderNextValidatorsHashNeq(filterHeaderNextValidatorsHashNeq).FilterHeaderNextValidatorsHashLike(filterHeaderNextValidatorsHashLike).FilterHeaderNextValidatorsHashIlike(filterHeaderNextValidatorsHashIlike).FilterHeaderConsensusHash(filterHeaderConsensusHash).FilterHeaderConsensusHashNeq(filterHeaderConsensusHashNeq).FilterHeaderConsensusHashLike(filterHeaderConsensusHashLike).FilterHeaderConsensusHashIlike(filterHeaderConsensusHashIlike).FilterHeaderAppHash(filterHeaderAppHash).FilterHeaderAppHashNeq(filterHeaderAppHashNeq).FilterHeaderAppHashLike(filterHeaderAppHashLike).FilterHeaderAppHashIlike(filterHeaderAppHashIlike).FilterHeaderLastResultsHash(filterHeaderLastResultsHash).FilterHeaderLastResultsHashNeq(filterHeaderLastResultsHashNeq).FilterHeaderLastResultsHashLike(filterHeaderLastResultsHashLike).FilterHeaderLastResultsHashIlike(filterHeaderLastResultsHashIlike).FilterHeaderEvidenceHash(filterHeaderEvidenceHash).FilterHeaderEvidenceHashNeq(filterHeaderEvidenceHashNeq).FilterHeaderEvidenceHashLike(filterHeaderEvidenceHashLike).FilterHeaderEvidenceHashIlike(filterHeaderEvidenceHashIlike).FilterHeaderProposerAddress(filterHeaderProposerAddress).FilterHeaderProposerAddressNeq(filterHeaderProposerAddressNeq).FilterHeaderProposerAddressLike(filterHeaderProposerAddressLike).FilterHeaderProposerAddressIlike(filterHeaderProposerAddressIlike).Include(include).Sort(sort).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ApiBlocksGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiBlocksGet`: ApiBlocksGet200Response
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ApiBlocksGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiBlocksGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsBlocks** | [**ApiBlocksGetFieldsBlocksParameter**](ApiBlocksGetFieldsBlocksParameter.md) | Include the given fields in the response. | 
 **filterHash** | **string** | Filter the results where the [hash] field is equal to the given value. | 
 **filterHashNeq** | **string** | Filter the results where the [hash] field is not equal to the given value. | 
 **filterHashLike** | **string** | Filter the results where the [hash] field is similar to the given case sensitive value. | 
 **filterHashIlike** | **string** | Filter the results where the [hash] field is similar to the given case insensitive value. | 
 **filterHeight** | **int32** | Filter the results where the [height] field is equal to the given value. | 
 **filterHeaderVersionBlock** | **int32** | Filter the results where the [header.version.block] field is equal to the given value. | 
 **filterHeaderChainId** | **string** | Filter the results where the [header.chainId] field is equal to the given value. | 
 **filterHeaderChainIdNeq** | **string** | Filter the results where the [header.chainId] field is not equal to the given value. | 
 **filterHeaderChainIdLike** | **string** | Filter the results where the [header.chainId] field is similar to the given case sensitive value. | 
 **filterHeaderChainIdIlike** | **string** | Filter the results where the [header.chainId] field is similar to the given case insensitive value. | 
 **filterHeaderHeight** | **int32** | Filter the results where the [header.height] field is equal to the given value. | 
 **filterHeaderTime** | **string** | Filter the results where the [header.time] field is equal to the given value. | 
 **filterHeaderTimeNeq** | **string** | Filter the results where the [header.time] field is not equal to the given value. | 
 **filterHeaderTimeLike** | **string** | Filter the results where the [header.time] field is similar to the given case sensitive value. | 
 **filterHeaderTimeIlike** | **string** | Filter the results where the [header.time] field is similar to the given case insensitive value. | 
 **filterHeaderLastBlockIdHash** | **string** | Filter the results where the [header.lastBlockId.hash] field is equal to the given value. | 
 **filterHeaderLastBlockIdHashNeq** | **string** | Filter the results where the [header.lastBlockId.hash] field is not equal to the given value. | 
 **filterHeaderLastBlockIdHashLike** | **string** | Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value. | 
 **filterHeaderLastBlockIdHashIlike** | **string** | Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value. | 
 **filterHeaderLastBlockIdPartSetHeaderTotal** | **int32** | Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value. | 
 **filterHeaderLastBlockIdPartSetHeaderHash** | **string** | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value. | 
 **filterHeaderLastBlockIdPartSetHeaderHashNeq** | **string** | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value. | 
 **filterHeaderLastBlockIdPartSetHeaderHashLike** | **string** | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value. | 
 **filterHeaderLastBlockIdPartSetHeaderHashIlike** | **string** | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value. | 
 **filterHeaderLastCommitHash** | **string** | Filter the results where the [header.lastCommitHash] field is equal to the given value. | 
 **filterHeaderLastCommitHashNeq** | **string** | Filter the results where the [header.lastCommitHash] field is not equal to the given value. | 
 **filterHeaderLastCommitHashLike** | **string** | Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value. | 
 **filterHeaderLastCommitHashIlike** | **string** | Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value. | 
 **filterHeaderDataHash** | **string** | Filter the results where the [header.dataHash] field is equal to the given value. | 
 **filterHeaderDataHashNeq** | **string** | Filter the results where the [header.dataHash] field is not equal to the given value. | 
 **filterHeaderDataHashLike** | **string** | Filter the results where the [header.dataHash] field is similar to the given case sensitive value. | 
 **filterHeaderDataHashIlike** | **string** | Filter the results where the [header.dataHash] field is similar to the given case insensitive value. | 
 **filterHeaderValidatorsHash** | **string** | Filter the results where the [header.validatorsHash] field is equal to the given value. | 
 **filterHeaderValidatorsHashNeq** | **string** | Filter the results where the [header.validatorsHash] field is not equal to the given value. | 
 **filterHeaderValidatorsHashLike** | **string** | Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value. | 
 **filterHeaderValidatorsHashIlike** | **string** | Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value. | 
 **filterHeaderNextValidatorsHash** | **string** | Filter the results where the [header.nextValidatorsHash] field is equal to the given value. | 
 **filterHeaderNextValidatorsHashNeq** | **string** | Filter the results where the [header.nextValidatorsHash] field is not equal to the given value. | 
 **filterHeaderNextValidatorsHashLike** | **string** | Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value. | 
 **filterHeaderNextValidatorsHashIlike** | **string** | Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value. | 
 **filterHeaderConsensusHash** | **string** | Filter the results where the [header.consensusHash] field is equal to the given value. | 
 **filterHeaderConsensusHashNeq** | **string** | Filter the results where the [header.consensusHash] field is not equal to the given value. | 
 **filterHeaderConsensusHashLike** | **string** | Filter the results where the [header.consensusHash] field is similar to the given case sensitive value. | 
 **filterHeaderConsensusHashIlike** | **string** | Filter the results where the [header.consensusHash] field is similar to the given case insensitive value. | 
 **filterHeaderAppHash** | **string** | Filter the results where the [header.appHash] field is equal to the given value. | 
 **filterHeaderAppHashNeq** | **string** | Filter the results where the [header.appHash] field is not equal to the given value. | 
 **filterHeaderAppHashLike** | **string** | Filter the results where the [header.appHash] field is similar to the given case sensitive value. | 
 **filterHeaderAppHashIlike** | **string** | Filter the results where the [header.appHash] field is similar to the given case insensitive value. | 
 **filterHeaderLastResultsHash** | **string** | Filter the results where the [header.lastResultsHash] field is equal to the given value. | 
 **filterHeaderLastResultsHashNeq** | **string** | Filter the results where the [header.lastResultsHash] field is not equal to the given value. | 
 **filterHeaderLastResultsHashLike** | **string** | Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value. | 
 **filterHeaderLastResultsHashIlike** | **string** | Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value. | 
 **filterHeaderEvidenceHash** | **string** | Filter the results where the [header.evidenceHash] field is equal to the given value. | 
 **filterHeaderEvidenceHashNeq** | **string** | Filter the results where the [header.evidenceHash] field is not equal to the given value. | 
 **filterHeaderEvidenceHashLike** | **string** | Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value. | 
 **filterHeaderEvidenceHashIlike** | **string** | Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value. | 
 **filterHeaderProposerAddress** | **string** | Filter the results where the [header.proposerAddress] field is equal to the given value. | 
 **filterHeaderProposerAddressNeq** | **string** | Filter the results where the [header.proposerAddress] field is not equal to the given value. | 
 **filterHeaderProposerAddressLike** | **string** | Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value. | 
 **filterHeaderProposerAddressIlike** | **string** | Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value. | 
 **include** | [**ApiBlocksGetIncludeParameter**](ApiBlocksGetIncludeParameter.md) | Include the given relationships. | 
 **sort** | [**ApiBlocksGetSortParameter**](ApiBlocksGetSortParameter.md) | Sort the results by the given field and direction. | 

### Return type

[**ApiBlocksGet200Response**](ApiBlocksGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiEntitiesGet

> ApiEntitiesGet200Response ApiEntitiesGet(ctx).FieldsEntities(fieldsEntities).FilterModule(filterModule).FilterModuleNeq(filterModuleNeq).FilterModuleLike(filterModuleLike).FilterModuleIlike(filterModuleIlike).FilterType(filterType).FilterTypeNeq(filterTypeNeq).FilterTypeLike(filterTypeLike).FilterTypeIlike(filterTypeIlike).FilterKey(filterKey).FilterKeyNeq(filterKeyNeq).FilterKeyLike(filterKeyLike).FilterKeyIlike(filterKeyIlike).FilterValue(filterValue).FilterValueNeq(filterValueNeq).FilterValueLike(filterValueLike).FilterValueIlike(filterValueIlike).Sort(sort).Execute()

List entities

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    fieldsEntities := *openapiclient.NewApiEntitiesGetFieldsEntitiesParameter() // ApiEntitiesGetFieldsEntitiesParameter | Include the given fields in the response. (optional)
    filterModule := "filterModule_example" // string | Filter the results where the [module] field is equal to the given value. (optional)
    filterModuleNeq := "filterModuleNeq_example" // string | Filter the results where the [module] field is not equal to the given value. (optional)
    filterModuleLike := "filterModuleLike_example" // string | Filter the results where the [module] field is similar to the given case sensitive value. (optional)
    filterModuleIlike := "filterModuleIlike_example" // string | Filter the results where the [module] field is similar to the given case insensitive value. (optional)
    filterType := "filterType_example" // string | Filter the results where the [type] field is equal to the given value. (optional)
    filterTypeNeq := "filterTypeNeq_example" // string | Filter the results where the [type] field is not equal to the given value. (optional)
    filterTypeLike := "filterTypeLike_example" // string | Filter the results where the [type] field is similar to the given case sensitive value. (optional)
    filterTypeIlike := "filterTypeIlike_example" // string | Filter the results where the [type] field is similar to the given case insensitive value. (optional)
    filterKey := "filterKey_example" // string | Filter the results where the [key] field is equal to the given value. (optional)
    filterKeyNeq := "filterKeyNeq_example" // string | Filter the results where the [key] field is not equal to the given value. (optional)
    filterKeyLike := "filterKeyLike_example" // string | Filter the results where the [key] field is similar to the given case sensitive value. (optional)
    filterKeyIlike := "filterKeyIlike_example" // string | Filter the results where the [key] field is similar to the given case insensitive value. (optional)
    filterValue := "filterValue_example" // string | Filter the results where the [value] field is equal to the given value. (optional)
    filterValueNeq := "filterValueNeq_example" // string | Filter the results where the [value] field is not equal to the given value. (optional)
    filterValueLike := "filterValueLike_example" // string | Filter the results where the [value] field is similar to the given case sensitive value. (optional)
    filterValueIlike := "filterValueIlike_example" // string | Filter the results where the [value] field is similar to the given case insensitive value. (optional)
    sort := *openapiclient.NewApiEntitiesGetSortParameter() // ApiEntitiesGetSortParameter | Sort the results by the given field and direction. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.ApiEntitiesGet(context.Background()).FieldsEntities(fieldsEntities).FilterModule(filterModule).FilterModuleNeq(filterModuleNeq).FilterModuleLike(filterModuleLike).FilterModuleIlike(filterModuleIlike).FilterType(filterType).FilterTypeNeq(filterTypeNeq).FilterTypeLike(filterTypeLike).FilterTypeIlike(filterTypeIlike).FilterKey(filterKey).FilterKeyNeq(filterKeyNeq).FilterKeyLike(filterKeyLike).FilterKeyIlike(filterKeyIlike).FilterValue(filterValue).FilterValueNeq(filterValueNeq).FilterValueLike(filterValueLike).FilterValueIlike(filterValueIlike).Sort(sort).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ApiEntitiesGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiEntitiesGet`: ApiEntitiesGet200Response
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ApiEntitiesGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiEntitiesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsEntities** | [**ApiEntitiesGetFieldsEntitiesParameter**](ApiEntitiesGetFieldsEntitiesParameter.md) | Include the given fields in the response. | 
 **filterModule** | **string** | Filter the results where the [module] field is equal to the given value. | 
 **filterModuleNeq** | **string** | Filter the results where the [module] field is not equal to the given value. | 
 **filterModuleLike** | **string** | Filter the results where the [module] field is similar to the given case sensitive value. | 
 **filterModuleIlike** | **string** | Filter the results where the [module] field is similar to the given case insensitive value. | 
 **filterType** | **string** | Filter the results where the [type] field is equal to the given value. | 
 **filterTypeNeq** | **string** | Filter the results where the [type] field is not equal to the given value. | 
 **filterTypeLike** | **string** | Filter the results where the [type] field is similar to the given case sensitive value. | 
 **filterTypeIlike** | **string** | Filter the results where the [type] field is similar to the given case insensitive value. | 
 **filterKey** | **string** | Filter the results where the [key] field is equal to the given value. | 
 **filterKeyNeq** | **string** | Filter the results where the [key] field is not equal to the given value. | 
 **filterKeyLike** | **string** | Filter the results where the [key] field is similar to the given case sensitive value. | 
 **filterKeyIlike** | **string** | Filter the results where the [key] field is similar to the given case insensitive value. | 
 **filterValue** | **string** | Filter the results where the [value] field is equal to the given value. | 
 **filterValueNeq** | **string** | Filter the results where the [value] field is not equal to the given value. | 
 **filterValueLike** | **string** | Filter the results where the [value] field is similar to the given case sensitive value. | 
 **filterValueIlike** | **string** | Filter the results where the [value] field is similar to the given case insensitive value. | 
 **sort** | [**ApiEntitiesGetSortParameter**](ApiEntitiesGetSortParameter.md) | Sort the results by the given field and direction. | 

### Return type

[**ApiEntitiesGet200Response**](ApiEntitiesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiTransactionsGet

> ApiTransactionsGet200Response ApiTransactionsGet(ctx).FieldsAccounts(fieldsAccounts).FilterHash(filterHash).FilterHashNeq(filterHashNeq).FilterHashLike(filterHashLike).FilterHashIlike(filterHashIlike).FilterSender(filterSender).FilterSenderNeq(filterSenderNeq).FilterSenderLike(filterSenderLike).FilterSenderIlike(filterSenderIlike).FilterRecipient(filterRecipient).FilterRecipientNeq(filterRecipientNeq).FilterRecipientLike(filterRecipientLike).FilterRecipientIlike(filterRecipientIlike).FilterGas(filterGas).FilterNonce(filterNonce).FilterSignature(filterSignature).FilterSignatureNeq(filterSignatureNeq).FilterSignatureLike(filterSignatureLike).FilterSignatureIlike(filterSignatureIlike).FilterVersion(filterVersion).FilterVersionNeq(filterVersionNeq).FilterVersionLike(filterVersionLike).FilterVersionIlike(filterVersionIlike).FilterMessageHandler(filterMessageHandler).FilterMessageHandlerNeq(filterMessageHandlerNeq).FilterMessageHandlerLike(filterMessageHandlerLike).FilterMessageHandlerIlike(filterMessageHandlerIlike).FilterMessageVersion(filterMessageVersion).FilterMessageVersionNeq(filterMessageVersionNeq).FilterMessageVersionLike(filterMessageVersionLike).FilterMessageVersionIlike(filterMessageVersionIlike).FilterMessageNetwork(filterMessageNetwork).FilterMessageNetworkNeq(filterMessageNetworkNeq).FilterMessageNetworkLike(filterMessageNetworkLike).FilterMessageNetworkIlike(filterMessageNetworkIlike).FilterMessageContent(filterMessageContent).FilterMessageContentNeq(filterMessageContentNeq).FilterMessageContentLike(filterMessageContentLike).FilterMessageContentIlike(filterMessageContentIlike).Include(include).Sort(sort).Execute()

List transactions

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    fieldsAccounts := *openapiclient.NewApiTransactionsGetFieldsAccountsParameter() // ApiTransactionsGetFieldsAccountsParameter | Include the given fields in the response. (optional)
    filterHash := "filterHash_example" // string | Filter the results where the [hash] field is equal to the given value. (optional)
    filterHashNeq := "filterHashNeq_example" // string | Filter the results where the [hash] field is not equal to the given value. (optional)
    filterHashLike := "filterHashLike_example" // string | Filter the results where the [hash] field is similar to the given case sensitive value. (optional)
    filterHashIlike := "filterHashIlike_example" // string | Filter the results where the [hash] field is similar to the given case insensitive value. (optional)
    filterSender := "filterSender_example" // string | Filter the results where the [sender] field is equal to the given value. (optional)
    filterSenderNeq := "filterSenderNeq_example" // string | Filter the results where the [sender] field is not equal to the given value. (optional)
    filterSenderLike := "filterSenderLike_example" // string | Filter the results where the [sender] field is similar to the given case sensitive value. (optional)
    filterSenderIlike := "filterSenderIlike_example" // string | Filter the results where the [sender] field is similar to the given case insensitive value. (optional)
    filterRecipient := "filterRecipient_example" // string | Filter the results where the [recipient] field is equal to the given value. (optional)
    filterRecipientNeq := "filterRecipientNeq_example" // string | Filter the results where the [recipient] field is not equal to the given value. (optional)
    filterRecipientLike := "filterRecipientLike_example" // string | Filter the results where the [recipient] field is similar to the given case sensitive value. (optional)
    filterRecipientIlike := "filterRecipientIlike_example" // string | Filter the results where the [recipient] field is similar to the given case insensitive value. (optional)
    filterGas := int32(56) // int32 | Filter the results where the [gas] field is equal to the given value. (optional)
    filterNonce := int32(56) // int32 | Filter the results where the [nonce] field is equal to the given value. (optional)
    filterSignature := "filterSignature_example" // string | Filter the results where the [signature] field is equal to the given value. (optional)
    filterSignatureNeq := "filterSignatureNeq_example" // string | Filter the results where the [signature] field is not equal to the given value. (optional)
    filterSignatureLike := "filterSignatureLike_example" // string | Filter the results where the [signature] field is similar to the given case sensitive value. (optional)
    filterSignatureIlike := "filterSignatureIlike_example" // string | Filter the results where the [signature] field is similar to the given case insensitive value. (optional)
    filterVersion := "filterVersion_example" // string | Filter the results where the [version] field is equal to the given value. (optional)
    filterVersionNeq := "filterVersionNeq_example" // string | Filter the results where the [version] field is not equal to the given value. (optional)
    filterVersionLike := "filterVersionLike_example" // string | Filter the results where the [version] field is similar to the given case sensitive value. (optional)
    filterVersionIlike := "filterVersionIlike_example" // string | Filter the results where the [version] field is similar to the given case insensitive value. (optional)
    filterMessageHandler := "filterMessageHandler_example" // string | Filter the results where the [message.handler] field is equal to the given value. (optional)
    filterMessageHandlerNeq := "filterMessageHandlerNeq_example" // string | Filter the results where the [message.handler] field is not equal to the given value. (optional)
    filterMessageHandlerLike := "filterMessageHandlerLike_example" // string | Filter the results where the [message.handler] field is similar to the given case sensitive value. (optional)
    filterMessageHandlerIlike := "filterMessageHandlerIlike_example" // string | Filter the results where the [message.handler] field is similar to the given case insensitive value. (optional)
    filterMessageVersion := "filterMessageVersion_example" // string | Filter the results where the [message.version] field is equal to the given value. (optional)
    filterMessageVersionNeq := "filterMessageVersionNeq_example" // string | Filter the results where the [message.version] field is not equal to the given value. (optional)
    filterMessageVersionLike := "filterMessageVersionLike_example" // string | Filter the results where the [message.version] field is similar to the given case sensitive value. (optional)
    filterMessageVersionIlike := "filterMessageVersionIlike_example" // string | Filter the results where the [message.version] field is similar to the given case insensitive value. (optional)
    filterMessageNetwork := "filterMessageNetwork_example" // string | Filter the results where the [message.network] field is equal to the given value. (optional)
    filterMessageNetworkNeq := "filterMessageNetworkNeq_example" // string | Filter the results where the [message.network] field is not equal to the given value. (optional)
    filterMessageNetworkLike := "filterMessageNetworkLike_example" // string | Filter the results where the [message.network] field is similar to the given case sensitive value. (optional)
    filterMessageNetworkIlike := "filterMessageNetworkIlike_example" // string | Filter the results where the [message.network] field is similar to the given case insensitive value. (optional)
    filterMessageContent := "filterMessageContent_example" // string | Filter the results where the [message.content] field is equal to the given value. (optional)
    filterMessageContentNeq := "filterMessageContentNeq_example" // string | Filter the results where the [message.content] field is not equal to the given value. (optional)
    filterMessageContentLike := "filterMessageContentLike_example" // string | Filter the results where the [message.content] field is similar to the given case sensitive value. (optional)
    filterMessageContentIlike := "filterMessageContentIlike_example" // string | Filter the results where the [message.content] field is similar to the given case insensitive value. (optional)
    include := *openapiclient.NewApiTransactionsGetIncludeParameter() // ApiTransactionsGetIncludeParameter | Include the given relationships. (optional)
    sort := *openapiclient.NewApiTransactionsGetSortParameter() // ApiTransactionsGetSortParameter | Sort the results by the given field and direction. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.ApiTransactionsGet(context.Background()).FieldsAccounts(fieldsAccounts).FilterHash(filterHash).FilterHashNeq(filterHashNeq).FilterHashLike(filterHashLike).FilterHashIlike(filterHashIlike).FilterSender(filterSender).FilterSenderNeq(filterSenderNeq).FilterSenderLike(filterSenderLike).FilterSenderIlike(filterSenderIlike).FilterRecipient(filterRecipient).FilterRecipientNeq(filterRecipientNeq).FilterRecipientLike(filterRecipientLike).FilterRecipientIlike(filterRecipientIlike).FilterGas(filterGas).FilterNonce(filterNonce).FilterSignature(filterSignature).FilterSignatureNeq(filterSignatureNeq).FilterSignatureLike(filterSignatureLike).FilterSignatureIlike(filterSignatureIlike).FilterVersion(filterVersion).FilterVersionNeq(filterVersionNeq).FilterVersionLike(filterVersionLike).FilterVersionIlike(filterVersionIlike).FilterMessageHandler(filterMessageHandler).FilterMessageHandlerNeq(filterMessageHandlerNeq).FilterMessageHandlerLike(filterMessageHandlerLike).FilterMessageHandlerIlike(filterMessageHandlerIlike).FilterMessageVersion(filterMessageVersion).FilterMessageVersionNeq(filterMessageVersionNeq).FilterMessageVersionLike(filterMessageVersionLike).FilterMessageVersionIlike(filterMessageVersionIlike).FilterMessageNetwork(filterMessageNetwork).FilterMessageNetworkNeq(filterMessageNetworkNeq).FilterMessageNetworkLike(filterMessageNetworkLike).FilterMessageNetworkIlike(filterMessageNetworkIlike).FilterMessageContent(filterMessageContent).FilterMessageContentNeq(filterMessageContentNeq).FilterMessageContentLike(filterMessageContentLike).FilterMessageContentIlike(filterMessageContentIlike).Include(include).Sort(sort).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ApiTransactionsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiTransactionsGet`: ApiTransactionsGet200Response
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ApiTransactionsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiTransactionsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsAccounts** | [**ApiTransactionsGetFieldsAccountsParameter**](ApiTransactionsGetFieldsAccountsParameter.md) | Include the given fields in the response. | 
 **filterHash** | **string** | Filter the results where the [hash] field is equal to the given value. | 
 **filterHashNeq** | **string** | Filter the results where the [hash] field is not equal to the given value. | 
 **filterHashLike** | **string** | Filter the results where the [hash] field is similar to the given case sensitive value. | 
 **filterHashIlike** | **string** | Filter the results where the [hash] field is similar to the given case insensitive value. | 
 **filterSender** | **string** | Filter the results where the [sender] field is equal to the given value. | 
 **filterSenderNeq** | **string** | Filter the results where the [sender] field is not equal to the given value. | 
 **filterSenderLike** | **string** | Filter the results where the [sender] field is similar to the given case sensitive value. | 
 **filterSenderIlike** | **string** | Filter the results where the [sender] field is similar to the given case insensitive value. | 
 **filterRecipient** | **string** | Filter the results where the [recipient] field is equal to the given value. | 
 **filterRecipientNeq** | **string** | Filter the results where the [recipient] field is not equal to the given value. | 
 **filterRecipientLike** | **string** | Filter the results where the [recipient] field is similar to the given case sensitive value. | 
 **filterRecipientIlike** | **string** | Filter the results where the [recipient] field is similar to the given case insensitive value. | 
 **filterGas** | **int32** | Filter the results where the [gas] field is equal to the given value. | 
 **filterNonce** | **int32** | Filter the results where the [nonce] field is equal to the given value. | 
 **filterSignature** | **string** | Filter the results where the [signature] field is equal to the given value. | 
 **filterSignatureNeq** | **string** | Filter the results where the [signature] field is not equal to the given value. | 
 **filterSignatureLike** | **string** | Filter the results where the [signature] field is similar to the given case sensitive value. | 
 **filterSignatureIlike** | **string** | Filter the results where the [signature] field is similar to the given case insensitive value. | 
 **filterVersion** | **string** | Filter the results where the [version] field is equal to the given value. | 
 **filterVersionNeq** | **string** | Filter the results where the [version] field is not equal to the given value. | 
 **filterVersionLike** | **string** | Filter the results where the [version] field is similar to the given case sensitive value. | 
 **filterVersionIlike** | **string** | Filter the results where the [version] field is similar to the given case insensitive value. | 
 **filterMessageHandler** | **string** | Filter the results where the [message.handler] field is equal to the given value. | 
 **filterMessageHandlerNeq** | **string** | Filter the results where the [message.handler] field is not equal to the given value. | 
 **filterMessageHandlerLike** | **string** | Filter the results where the [message.handler] field is similar to the given case sensitive value. | 
 **filterMessageHandlerIlike** | **string** | Filter the results where the [message.handler] field is similar to the given case insensitive value. | 
 **filterMessageVersion** | **string** | Filter the results where the [message.version] field is equal to the given value. | 
 **filterMessageVersionNeq** | **string** | Filter the results where the [message.version] field is not equal to the given value. | 
 **filterMessageVersionLike** | **string** | Filter the results where the [message.version] field is similar to the given case sensitive value. | 
 **filterMessageVersionIlike** | **string** | Filter the results where the [message.version] field is similar to the given case insensitive value. | 
 **filterMessageNetwork** | **string** | Filter the results where the [message.network] field is equal to the given value. | 
 **filterMessageNetworkNeq** | **string** | Filter the results where the [message.network] field is not equal to the given value. | 
 **filterMessageNetworkLike** | **string** | Filter the results where the [message.network] field is similar to the given case sensitive value. | 
 **filterMessageNetworkIlike** | **string** | Filter the results where the [message.network] field is similar to the given case insensitive value. | 
 **filterMessageContent** | **string** | Filter the results where the [message.content] field is equal to the given value. | 
 **filterMessageContentNeq** | **string** | Filter the results where the [message.content] field is not equal to the given value. | 
 **filterMessageContentLike** | **string** | Filter the results where the [message.content] field is similar to the given case sensitive value. | 
 **filterMessageContentIlike** | **string** | Filter the results where the [message.content] field is similar to the given case insensitive value. | 
 **include** | [**ApiTransactionsGetIncludeParameter**](ApiTransactionsGetIncludeParameter.md) | Include the given relationships. | 
 **sort** | [**ApiTransactionsGetSortParameter**](ApiTransactionsGetSortParameter.md) | Sort the results by the given field and direction. | 

### Return type

[**ApiTransactionsGet200Response**](ApiTransactionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiTransactionsMetadataGet

> ApiTransactionsMetadataGet200Response ApiTransactionsMetadataGet(ctx).FieldsTransactionMetadata(fieldsTransactionMetadata).FilterTransactionId(filterTransactionId).FilterKey(filterKey).FilterKeyNeq(filterKeyNeq).FilterKeyLike(filterKeyLike).FilterKeyIlike(filterKeyIlike).FilterValue(filterValue).FilterValueNeq(filterValueNeq).FilterValueLike(filterValueLike).FilterValueIlike(filterValueIlike).Include(include).Sort(sort).Execute()

List transaction metadata

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    fieldsTransactionMetadata := *openapiclient.NewApiTransactionsMetadataGetFieldsTransactionMetadataParameter() // ApiTransactionsMetadataGetFieldsTransactionMetadataParameter | Include the given fields in the response. (optional)
    filterTransactionId := int32(56) // int32 | Filter the results where the [transaction_id] field is equal to the given value. (optional)
    filterKey := "filterKey_example" // string | Filter the results where the [key] field is equal to the given value. (optional)
    filterKeyNeq := "filterKeyNeq_example" // string | Filter the results where the [key] field is not equal to the given value. (optional)
    filterKeyLike := "filterKeyLike_example" // string | Filter the results where the [key] field is similar to the given case sensitive value. (optional)
    filterKeyIlike := "filterKeyIlike_example" // string | Filter the results where the [key] field is similar to the given case insensitive value. (optional)
    filterValue := "filterValue_example" // string | Filter the results where the [value] field is equal to the given value. (optional)
    filterValueNeq := "filterValueNeq_example" // string | Filter the results where the [value] field is not equal to the given value. (optional)
    filterValueLike := "filterValueLike_example" // string | Filter the results where the [value] field is similar to the given case sensitive value. (optional)
    filterValueIlike := "filterValueIlike_example" // string | Filter the results where the [value] field is similar to the given case insensitive value. (optional)
    include := *openapiclient.NewApiTransactionsMetadataGetIncludeParameter() // ApiTransactionsMetadataGetIncludeParameter | Include the given relationships. (optional)
    sort := *openapiclient.NewApiTransactionsMetadataGetSortParameter() // ApiTransactionsMetadataGetSortParameter | Sort the results by the given field and direction. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.ApiTransactionsMetadataGet(context.Background()).FieldsTransactionMetadata(fieldsTransactionMetadata).FilterTransactionId(filterTransactionId).FilterKey(filterKey).FilterKeyNeq(filterKeyNeq).FilterKeyLike(filterKeyLike).FilterKeyIlike(filterKeyIlike).FilterValue(filterValue).FilterValueNeq(filterValueNeq).FilterValueLike(filterValueLike).FilterValueIlike(filterValueIlike).Include(include).Sort(sort).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ApiTransactionsMetadataGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiTransactionsMetadataGet`: ApiTransactionsMetadataGet200Response
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ApiTransactionsMetadataGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiTransactionsMetadataGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsTransactionMetadata** | [**ApiTransactionsMetadataGetFieldsTransactionMetadataParameter**](ApiTransactionsMetadataGetFieldsTransactionMetadataParameter.md) | Include the given fields in the response. | 
 **filterTransactionId** | **int32** | Filter the results where the [transaction_id] field is equal to the given value. | 
 **filterKey** | **string** | Filter the results where the [key] field is equal to the given value. | 
 **filterKeyNeq** | **string** | Filter the results where the [key] field is not equal to the given value. | 
 **filterKeyLike** | **string** | Filter the results where the [key] field is similar to the given case sensitive value. | 
 **filterKeyIlike** | **string** | Filter the results where the [key] field is similar to the given case insensitive value. | 
 **filterValue** | **string** | Filter the results where the [value] field is equal to the given value. | 
 **filterValueNeq** | **string** | Filter the results where the [value] field is not equal to the given value. | 
 **filterValueLike** | **string** | Filter the results where the [value] field is similar to the given case sensitive value. | 
 **filterValueIlike** | **string** | Filter the results where the [value] field is similar to the given case insensitive value. | 
 **include** | [**ApiTransactionsMetadataGetIncludeParameter**](ApiTransactionsMetadataGetIncludeParameter.md) | Include the given relationships. | 
 **sort** | [**ApiTransactionsMetadataGetSortParameter**](ApiTransactionsMetadataGetSortParameter.md) | Sort the results by the given field and direction. | 

### Return type

[**ApiTransactionsMetadataGet200Response**](ApiTransactionsMetadataGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiTransactionsReceiptsGet

> ApiTransactionsReceiptsGet200Response ApiTransactionsReceiptsGet(ctx).FieldsTransactionReceipts(fieldsTransactionReceipts).FilterTransactionId(filterTransactionId).FilterBlockHash(filterBlockHash).FilterBlockHashNeq(filterBlockHashNeq).FilterBlockHashLike(filterBlockHashLike).FilterBlockHashIlike(filterBlockHashIlike).FilterBlockNumber(filterBlockNumber).FilterBlockNumberNeq(filterBlockNumberNeq).FilterBlockNumberLike(filterBlockNumberLike).FilterBlockNumberIlike(filterBlockNumberIlike).Include(include).Sort(sort).Execute()

List transaction receipts

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    fieldsTransactionReceipts := *openapiclient.NewApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter() // ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter | Include the given fields in the response. (optional)
    filterTransactionId := int32(56) // int32 | Filter the results where the [transaction_id] field is equal to the given value. (optional)
    filterBlockHash := "filterBlockHash_example" // string | Filter the results where the [block_hash] field is equal to the given value. (optional)
    filterBlockHashNeq := "filterBlockHashNeq_example" // string | Filter the results where the [block_hash] field is not equal to the given value. (optional)
    filterBlockHashLike := "filterBlockHashLike_example" // string | Filter the results where the [block_hash] field is similar to the given case sensitive value. (optional)
    filterBlockHashIlike := "filterBlockHashIlike_example" // string | Filter the results where the [block_hash] field is similar to the given case insensitive value. (optional)
    filterBlockNumber := "filterBlockNumber_example" // string | Filter the results where the [block_number] field is equal to the given value. (optional)
    filterBlockNumberNeq := "filterBlockNumberNeq_example" // string | Filter the results where the [block_number] field is not equal to the given value. (optional)
    filterBlockNumberLike := "filterBlockNumberLike_example" // string | Filter the results where the [block_number] field is similar to the given case sensitive value. (optional)
    filterBlockNumberIlike := "filterBlockNumberIlike_example" // string | Filter the results where the [block_number] field is similar to the given case insensitive value. (optional)
    include := *openapiclient.NewApiTransactionsMetadataGetIncludeParameter() // ApiTransactionsMetadataGetIncludeParameter | Include the given relationships. (optional)
    sort := *openapiclient.NewApiTransactionsReceiptsGetSortParameter() // ApiTransactionsReceiptsGetSortParameter | Sort the results by the given field and direction. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.ApiTransactionsReceiptsGet(context.Background()).FieldsTransactionReceipts(fieldsTransactionReceipts).FilterTransactionId(filterTransactionId).FilterBlockHash(filterBlockHash).FilterBlockHashNeq(filterBlockHashNeq).FilterBlockHashLike(filterBlockHashLike).FilterBlockHashIlike(filterBlockHashIlike).FilterBlockNumber(filterBlockNumber).FilterBlockNumberNeq(filterBlockNumberNeq).FilterBlockNumberLike(filterBlockNumberLike).FilterBlockNumberIlike(filterBlockNumberIlike).Include(include).Sort(sort).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ApiTransactionsReceiptsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiTransactionsReceiptsGet`: ApiTransactionsReceiptsGet200Response
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ApiTransactionsReceiptsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiTransactionsReceiptsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsTransactionReceipts** | [**ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter**](ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter.md) | Include the given fields in the response. | 
 **filterTransactionId** | **int32** | Filter the results where the [transaction_id] field is equal to the given value. | 
 **filterBlockHash** | **string** | Filter the results where the [block_hash] field is equal to the given value. | 
 **filterBlockHashNeq** | **string** | Filter the results where the [block_hash] field is not equal to the given value. | 
 **filterBlockHashLike** | **string** | Filter the results where the [block_hash] field is similar to the given case sensitive value. | 
 **filterBlockHashIlike** | **string** | Filter the results where the [block_hash] field is similar to the given case insensitive value. | 
 **filterBlockNumber** | **string** | Filter the results where the [block_number] field is equal to the given value. | 
 **filterBlockNumberNeq** | **string** | Filter the results where the [block_number] field is not equal to the given value. | 
 **filterBlockNumberLike** | **string** | Filter the results where the [block_number] field is similar to the given case sensitive value. | 
 **filterBlockNumberIlike** | **string** | Filter the results where the [block_number] field is similar to the given case insensitive value. | 
 **include** | [**ApiTransactionsMetadataGetIncludeParameter**](ApiTransactionsMetadataGetIncludeParameter.md) | Include the given relationships. | 
 **sort** | [**ApiTransactionsReceiptsGetSortParameter**](ApiTransactionsReceiptsGetSortParameter.md) | Sort the results by the given field and direction. | 

### Return type

[**ApiTransactionsReceiptsGet200Response**](ApiTransactionsReceiptsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiValidatorsUpdatesGet

> ApiValidatorsUpdatesGet200Response ApiValidatorsUpdatesGet(ctx).FieldsBlockNumber(fieldsBlockNumber).FilterBlockNumber(filterBlockNumber).Include(include).Sort(sort).Execute()

List validator updates

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    fieldsBlockNumber := *openapiclient.NewApiValidatorsUpdatesGetFieldsBlockNumberParameter() // ApiValidatorsUpdatesGetFieldsBlockNumberParameter | Include the given fields in the response. (optional)
    filterBlockNumber := int32(56) // int32 | Filter the results where the [block_number] field is equal to the given value. (optional)
    include := *openapiclient.NewApiValidatorsUpdatesGetIncludeParameter() // ApiValidatorsUpdatesGetIncludeParameter | Include the given relationships. (optional)
    sort := *openapiclient.NewApiValidatorsUpdatesGetSortParameter() // ApiValidatorsUpdatesGetSortParameter | Sort the results by the given field and direction. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.ApiValidatorsUpdatesGet(context.Background()).FieldsBlockNumber(fieldsBlockNumber).FilterBlockNumber(filterBlockNumber).Include(include).Sort(sort).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ApiValidatorsUpdatesGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiValidatorsUpdatesGet`: ApiValidatorsUpdatesGet200Response
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ApiValidatorsUpdatesGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiValidatorsUpdatesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsBlockNumber** | [**ApiValidatorsUpdatesGetFieldsBlockNumberParameter**](ApiValidatorsUpdatesGetFieldsBlockNumberParameter.md) | Include the given fields in the response. | 
 **filterBlockNumber** | **int32** | Filter the results where the [block_number] field is equal to the given value. | 
 **include** | [**ApiValidatorsUpdatesGetIncludeParameter**](ApiValidatorsUpdatesGetIncludeParameter.md) | Include the given relationships. | 
 **sort** | [**ApiValidatorsUpdatesGetSortParameter**](ApiValidatorsUpdatesGetSortParameter.md) | Sort the results by the given field and direction. | 

### Return type

[**ApiValidatorsUpdatesGet200Response**](ApiValidatorsUpdatesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

