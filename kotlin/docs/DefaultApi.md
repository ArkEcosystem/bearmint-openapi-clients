# DefaultApi

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


<a name="apiAccountsGet"></a>
# **apiAccountsGet**
> ApiAccountsGet200Response apiAccountsGet(fieldsAccounts, filterAddress, filterAddressNeq, filterAddressLike, filterAddressIlike, filterPublicKey, filterPublicKeyNeq, filterPublicKeyLike, filterPublicKeyIlike, filterName, filterNameNeq, filterNameLike, filterNameIlike, filterNonce, filterValidatorAddress, filterValidatorAddressNeq, filterValidatorAddressLike, filterValidatorAddressIlike, filterValidatorPublicKey, filterValidatorPublicKeyNeq, filterValidatorPublicKeyLike, filterValidatorPublicKeyIlike, filterValidatorPower, filterValidatorPowerNeq, filterValidatorPowerLike, filterValidatorPowerIlike, include, sort)

List accounts

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val fieldsAccounts : ApiAccountsGetFieldsAccountsParameter =  // ApiAccountsGetFieldsAccountsParameter | Include the given fields in the response.
val filterAddress : kotlin.String = filterAddress_example // kotlin.String | Filter the results where the [address] field is equal to the given value.
val filterAddressNeq : kotlin.String = filterAddressNeq_example // kotlin.String | Filter the results where the [address] field is not equal to the given value.
val filterAddressLike : kotlin.String = filterAddressLike_example // kotlin.String | Filter the results where the [address] field is similar to the given case sensitive value.
val filterAddressIlike : kotlin.String = filterAddressIlike_example // kotlin.String | Filter the results where the [address] field is similar to the given case insensitive value.
val filterPublicKey : kotlin.String = filterPublicKey_example // kotlin.String | Filter the results where the [public_key] field is equal to the given value.
val filterPublicKeyNeq : kotlin.String = filterPublicKeyNeq_example // kotlin.String | Filter the results where the [public_key] field is not equal to the given value.
val filterPublicKeyLike : kotlin.String = filterPublicKeyLike_example // kotlin.String | Filter the results where the [public_key] field is similar to the given case sensitive value.
val filterPublicKeyIlike : kotlin.String = filterPublicKeyIlike_example // kotlin.String | Filter the results where the [public_key] field is similar to the given case insensitive value.
val filterName : kotlin.String = filterName_example // kotlin.String | Filter the results where the [name] field is equal to the given value.
val filterNameNeq : kotlin.String = filterNameNeq_example // kotlin.String | Filter the results where the [name] field is not equal to the given value.
val filterNameLike : kotlin.String = filterNameLike_example // kotlin.String | Filter the results where the [name] field is similar to the given case sensitive value.
val filterNameIlike : kotlin.String = filterNameIlike_example // kotlin.String | Filter the results where the [name] field is similar to the given case insensitive value.
val filterNonce : kotlin.Int = 56 // kotlin.Int | Filter the results where the [nonce] field is equal to the given value.
val filterValidatorAddress : kotlin.String = filterValidatorAddress_example // kotlin.String | Filter the results where the [validator.address] field is equal to the given value.
val filterValidatorAddressNeq : kotlin.String = filterValidatorAddressNeq_example // kotlin.String | Filter the results where the [validator.address] field is not equal to the given value.
val filterValidatorAddressLike : kotlin.String = filterValidatorAddressLike_example // kotlin.String | Filter the results where the [validator.address] field is similar to the given case sensitive value.
val filterValidatorAddressIlike : kotlin.String = filterValidatorAddressIlike_example // kotlin.String | Filter the results where the [validator.address] field is similar to the given case insensitive value.
val filterValidatorPublicKey : kotlin.String = filterValidatorPublicKey_example // kotlin.String | Filter the results where the [validator.publicKey] field is equal to the given value.
val filterValidatorPublicKeyNeq : kotlin.String = filterValidatorPublicKeyNeq_example // kotlin.String | Filter the results where the [validator.publicKey] field is not equal to the given value.
val filterValidatorPublicKeyLike : kotlin.String = filterValidatorPublicKeyLike_example // kotlin.String | Filter the results where the [validator.publicKey] field is similar to the given case sensitive value.
val filterValidatorPublicKeyIlike : kotlin.String = filterValidatorPublicKeyIlike_example // kotlin.String | Filter the results where the [validator.publicKey] field is similar to the given case insensitive value.
val filterValidatorPower : kotlin.String = filterValidatorPower_example // kotlin.String | Filter the results where the [validator.power] field is equal to the given value.
val filterValidatorPowerNeq : kotlin.String = filterValidatorPowerNeq_example // kotlin.String | Filter the results where the [validator.power] field is not equal to the given value.
val filterValidatorPowerLike : kotlin.String = filterValidatorPowerLike_example // kotlin.String | Filter the results where the [validator.power] field is similar to the given case sensitive value.
val filterValidatorPowerIlike : kotlin.String = filterValidatorPowerIlike_example // kotlin.String | Filter the results where the [validator.power] field is similar to the given case insensitive value.
val include : ApiAccountsGetIncludeParameter =  // ApiAccountsGetIncludeParameter | Include the given relationships.
val sort : ApiAccountsGetSortParameter =  // ApiAccountsGetSortParameter | Sort the results by the given field and direction.
try {
    val result : ApiAccountsGet200Response = apiInstance.apiAccountsGet(fieldsAccounts, filterAddress, filterAddressNeq, filterAddressLike, filterAddressIlike, filterPublicKey, filterPublicKeyNeq, filterPublicKeyLike, filterPublicKeyIlike, filterName, filterNameNeq, filterNameLike, filterNameIlike, filterNonce, filterValidatorAddress, filterValidatorAddressNeq, filterValidatorAddressLike, filterValidatorAddressIlike, filterValidatorPublicKey, filterValidatorPublicKeyNeq, filterValidatorPublicKeyLike, filterValidatorPublicKeyIlike, filterValidatorPower, filterValidatorPowerNeq, filterValidatorPowerLike, filterValidatorPowerIlike, include, sort)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#apiAccountsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#apiAccountsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsAccounts** | [**ApiAccountsGetFieldsAccountsParameter**](.md)| Include the given fields in the response. | [optional]
 **filterAddress** | **kotlin.String**| Filter the results where the [address] field is equal to the given value. | [optional]
 **filterAddressNeq** | **kotlin.String**| Filter the results where the [address] field is not equal to the given value. | [optional]
 **filterAddressLike** | **kotlin.String**| Filter the results where the [address] field is similar to the given case sensitive value. | [optional]
 **filterAddressIlike** | **kotlin.String**| Filter the results where the [address] field is similar to the given case insensitive value. | [optional]
 **filterPublicKey** | **kotlin.String**| Filter the results where the [public_key] field is equal to the given value. | [optional]
 **filterPublicKeyNeq** | **kotlin.String**| Filter the results where the [public_key] field is not equal to the given value. | [optional]
 **filterPublicKeyLike** | **kotlin.String**| Filter the results where the [public_key] field is similar to the given case sensitive value. | [optional]
 **filterPublicKeyIlike** | **kotlin.String**| Filter the results where the [public_key] field is similar to the given case insensitive value. | [optional]
 **filterName** | **kotlin.String**| Filter the results where the [name] field is equal to the given value. | [optional]
 **filterNameNeq** | **kotlin.String**| Filter the results where the [name] field is not equal to the given value. | [optional]
 **filterNameLike** | **kotlin.String**| Filter the results where the [name] field is similar to the given case sensitive value. | [optional]
 **filterNameIlike** | **kotlin.String**| Filter the results where the [name] field is similar to the given case insensitive value. | [optional]
 **filterNonce** | **kotlin.Int**| Filter the results where the [nonce] field is equal to the given value. | [optional]
 **filterValidatorAddress** | **kotlin.String**| Filter the results where the [validator.address] field is equal to the given value. | [optional]
 **filterValidatorAddressNeq** | **kotlin.String**| Filter the results where the [validator.address] field is not equal to the given value. | [optional]
 **filterValidatorAddressLike** | **kotlin.String**| Filter the results where the [validator.address] field is similar to the given case sensitive value. | [optional]
 **filterValidatorAddressIlike** | **kotlin.String**| Filter the results where the [validator.address] field is similar to the given case insensitive value. | [optional]
 **filterValidatorPublicKey** | **kotlin.String**| Filter the results where the [validator.publicKey] field is equal to the given value. | [optional]
 **filterValidatorPublicKeyNeq** | **kotlin.String**| Filter the results where the [validator.publicKey] field is not equal to the given value. | [optional]
 **filterValidatorPublicKeyLike** | **kotlin.String**| Filter the results where the [validator.publicKey] field is similar to the given case sensitive value. | [optional]
 **filterValidatorPublicKeyIlike** | **kotlin.String**| Filter the results where the [validator.publicKey] field is similar to the given case insensitive value. | [optional]
 **filterValidatorPower** | **kotlin.String**| Filter the results where the [validator.power] field is equal to the given value. | [optional]
 **filterValidatorPowerNeq** | **kotlin.String**| Filter the results where the [validator.power] field is not equal to the given value. | [optional]
 **filterValidatorPowerLike** | **kotlin.String**| Filter the results where the [validator.power] field is similar to the given case sensitive value. | [optional]
 **filterValidatorPowerIlike** | **kotlin.String**| Filter the results where the [validator.power] field is similar to the given case insensitive value. | [optional]
 **include** | [**ApiAccountsGetIncludeParameter**](.md)| Include the given relationships. | [optional]
 **sort** | [**ApiAccountsGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional]

### Return type

[**ApiAccountsGet200Response**](ApiAccountsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiAccountsMetadataGet"></a>
# **apiAccountsMetadataGet**
> ApiAccountsMetadataGet200Response apiAccountsMetadataGet(fieldsAccountsMetadata, filterAccountId, filterModule, filterModuleNeq, filterModuleLike, filterModuleIlike, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, include, sort)

List account metadata

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val fieldsAccountsMetadata : ApiAccountsMetadataGetFieldsAccountsMetadataParameter =  // ApiAccountsMetadataGetFieldsAccountsMetadataParameter | Include the given fields in the response.
val filterAccountId : kotlin.Int = 56 // kotlin.Int | Filter the results where the [account_id] field is equal to the given value.
val filterModule : kotlin.String = filterModule_example // kotlin.String | Filter the results where the [module] field is equal to the given value.
val filterModuleNeq : kotlin.String = filterModuleNeq_example // kotlin.String | Filter the results where the [module] field is not equal to the given value.
val filterModuleLike : kotlin.String = filterModuleLike_example // kotlin.String | Filter the results where the [module] field is similar to the given case sensitive value.
val filterModuleIlike : kotlin.String = filterModuleIlike_example // kotlin.String | Filter the results where the [module] field is similar to the given case insensitive value.
val filterKey : kotlin.String = filterKey_example // kotlin.String | Filter the results where the [key] field is equal to the given value.
val filterKeyNeq : kotlin.String = filterKeyNeq_example // kotlin.String | Filter the results where the [key] field is not equal to the given value.
val filterKeyLike : kotlin.String = filterKeyLike_example // kotlin.String | Filter the results where the [key] field is similar to the given case sensitive value.
val filterKeyIlike : kotlin.String = filterKeyIlike_example // kotlin.String | Filter the results where the [key] field is similar to the given case insensitive value.
val filterValue : kotlin.String = filterValue_example // kotlin.String | Filter the results where the [value] field is equal to the given value.
val filterValueNeq : kotlin.String = filterValueNeq_example // kotlin.String | Filter the results where the [value] field is not equal to the given value.
val filterValueLike : kotlin.String = filterValueLike_example // kotlin.String | Filter the results where the [value] field is similar to the given case sensitive value.
val filterValueIlike : kotlin.String = filterValueIlike_example // kotlin.String | Filter the results where the [value] field is similar to the given case insensitive value.
val include : ApiAccountsMetadataGetIncludeParameter =  // ApiAccountsMetadataGetIncludeParameter | Include the given relationships.
val sort : ApiAccountsMetadataGetSortParameter =  // ApiAccountsMetadataGetSortParameter | Sort the results by the given field and direction.
try {
    val result : ApiAccountsMetadataGet200Response = apiInstance.apiAccountsMetadataGet(fieldsAccountsMetadata, filterAccountId, filterModule, filterModuleNeq, filterModuleLike, filterModuleIlike, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, include, sort)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#apiAccountsMetadataGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#apiAccountsMetadataGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsAccountsMetadata** | [**ApiAccountsMetadataGetFieldsAccountsMetadataParameter**](.md)| Include the given fields in the response. | [optional]
 **filterAccountId** | **kotlin.Int**| Filter the results where the [account_id] field is equal to the given value. | [optional]
 **filterModule** | **kotlin.String**| Filter the results where the [module] field is equal to the given value. | [optional]
 **filterModuleNeq** | **kotlin.String**| Filter the results where the [module] field is not equal to the given value. | [optional]
 **filterModuleLike** | **kotlin.String**| Filter the results where the [module] field is similar to the given case sensitive value. | [optional]
 **filterModuleIlike** | **kotlin.String**| Filter the results where the [module] field is similar to the given case insensitive value. | [optional]
 **filterKey** | **kotlin.String**| Filter the results where the [key] field is equal to the given value. | [optional]
 **filterKeyNeq** | **kotlin.String**| Filter the results where the [key] field is not equal to the given value. | [optional]
 **filterKeyLike** | **kotlin.String**| Filter the results where the [key] field is similar to the given case sensitive value. | [optional]
 **filterKeyIlike** | **kotlin.String**| Filter the results where the [key] field is similar to the given case insensitive value. | [optional]
 **filterValue** | **kotlin.String**| Filter the results where the [value] field is equal to the given value. | [optional]
 **filterValueNeq** | **kotlin.String**| Filter the results where the [value] field is not equal to the given value. | [optional]
 **filterValueLike** | **kotlin.String**| Filter the results where the [value] field is similar to the given case sensitive value. | [optional]
 **filterValueIlike** | **kotlin.String**| Filter the results where the [value] field is similar to the given case insensitive value. | [optional]
 **include** | [**ApiAccountsMetadataGetIncludeParameter**](.md)| Include the given relationships. | [optional]
 **sort** | [**ApiAccountsMetadataGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional]

### Return type

[**ApiAccountsMetadataGet200Response**](ApiAccountsMetadataGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiBlocksGet"></a>
# **apiBlocksGet**
> ApiBlocksGet200Response apiBlocksGet(fieldsBlocks, filterHash, filterHashNeq, filterHashLike, filterHashIlike, filterHeight, filterHeaderVersionBlock, filterHeaderChainId, filterHeaderChainIdNeq, filterHeaderChainIdLike, filterHeaderChainIdIlike, filterHeaderHeight, filterHeaderTime, filterHeaderTimeNeq, filterHeaderTimeLike, filterHeaderTimeIlike, filterHeaderLastBlockIdHash, filterHeaderLastBlockIdHashNeq, filterHeaderLastBlockIdHashLike, filterHeaderLastBlockIdHashIlike, filterHeaderLastBlockIdPartSetHeaderTotal, filterHeaderLastBlockIdPartSetHeaderHash, filterHeaderLastBlockIdPartSetHeaderHashNeq, filterHeaderLastBlockIdPartSetHeaderHashLike, filterHeaderLastBlockIdPartSetHeaderHashIlike, filterHeaderLastCommitHash, filterHeaderLastCommitHashNeq, filterHeaderLastCommitHashLike, filterHeaderLastCommitHashIlike, filterHeaderDataHash, filterHeaderDataHashNeq, filterHeaderDataHashLike, filterHeaderDataHashIlike, filterHeaderValidatorsHash, filterHeaderValidatorsHashNeq, filterHeaderValidatorsHashLike, filterHeaderValidatorsHashIlike, filterHeaderNextValidatorsHash, filterHeaderNextValidatorsHashNeq, filterHeaderNextValidatorsHashLike, filterHeaderNextValidatorsHashIlike, filterHeaderConsensusHash, filterHeaderConsensusHashNeq, filterHeaderConsensusHashLike, filterHeaderConsensusHashIlike, filterHeaderAppHash, filterHeaderAppHashNeq, filterHeaderAppHashLike, filterHeaderAppHashIlike, filterHeaderLastResultsHash, filterHeaderLastResultsHashNeq, filterHeaderLastResultsHashLike, filterHeaderLastResultsHashIlike, filterHeaderEvidenceHash, filterHeaderEvidenceHashNeq, filterHeaderEvidenceHashLike, filterHeaderEvidenceHashIlike, filterHeaderProposerAddress, filterHeaderProposerAddressNeq, filterHeaderProposerAddressLike, filterHeaderProposerAddressIlike, include, sort)

List blocks

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val fieldsBlocks : ApiBlocksGetFieldsBlocksParameter =  // ApiBlocksGetFieldsBlocksParameter | Include the given fields in the response.
val filterHash : kotlin.String = filterHash_example // kotlin.String | Filter the results where the [hash] field is equal to the given value.
val filterHashNeq : kotlin.String = filterHashNeq_example // kotlin.String | Filter the results where the [hash] field is not equal to the given value.
val filterHashLike : kotlin.String = filterHashLike_example // kotlin.String | Filter the results where the [hash] field is similar to the given case sensitive value.
val filterHashIlike : kotlin.String = filterHashIlike_example // kotlin.String | Filter the results where the [hash] field is similar to the given case insensitive value.
val filterHeight : kotlin.Int = 56 // kotlin.Int | Filter the results where the [height] field is equal to the given value.
val filterHeaderVersionBlock : kotlin.Int = 56 // kotlin.Int | Filter the results where the [header.version.block] field is equal to the given value.
val filterHeaderChainId : kotlin.String = filterHeaderChainId_example // kotlin.String | Filter the results where the [header.chainId] field is equal to the given value.
val filterHeaderChainIdNeq : kotlin.String = filterHeaderChainIdNeq_example // kotlin.String | Filter the results where the [header.chainId] field is not equal to the given value.
val filterHeaderChainIdLike : kotlin.String = filterHeaderChainIdLike_example // kotlin.String | Filter the results where the [header.chainId] field is similar to the given case sensitive value.
val filterHeaderChainIdIlike : kotlin.String = filterHeaderChainIdIlike_example // kotlin.String | Filter the results where the [header.chainId] field is similar to the given case insensitive value.
val filterHeaderHeight : kotlin.Int = 56 // kotlin.Int | Filter the results where the [header.height] field is equal to the given value.
val filterHeaderTime : kotlin.String = filterHeaderTime_example // kotlin.String | Filter the results where the [header.time] field is equal to the given value.
val filterHeaderTimeNeq : kotlin.String = filterHeaderTimeNeq_example // kotlin.String | Filter the results where the [header.time] field is not equal to the given value.
val filterHeaderTimeLike : kotlin.String = filterHeaderTimeLike_example // kotlin.String | Filter the results where the [header.time] field is similar to the given case sensitive value.
val filterHeaderTimeIlike : kotlin.String = filterHeaderTimeIlike_example // kotlin.String | Filter the results where the [header.time] field is similar to the given case insensitive value.
val filterHeaderLastBlockIdHash : kotlin.String = filterHeaderLastBlockIdHash_example // kotlin.String | Filter the results where the [header.lastBlockId.hash] field is equal to the given value.
val filterHeaderLastBlockIdHashNeq : kotlin.String = filterHeaderLastBlockIdHashNeq_example // kotlin.String | Filter the results where the [header.lastBlockId.hash] field is not equal to the given value.
val filterHeaderLastBlockIdHashLike : kotlin.String = filterHeaderLastBlockIdHashLike_example // kotlin.String | Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value.
val filterHeaderLastBlockIdHashIlike : kotlin.String = filterHeaderLastBlockIdHashIlike_example // kotlin.String | Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value.
val filterHeaderLastBlockIdPartSetHeaderTotal : kotlin.Int = 56 // kotlin.Int | Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value.
val filterHeaderLastBlockIdPartSetHeaderHash : kotlin.String = filterHeaderLastBlockIdPartSetHeaderHash_example // kotlin.String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value.
val filterHeaderLastBlockIdPartSetHeaderHashNeq : kotlin.String = filterHeaderLastBlockIdPartSetHeaderHashNeq_example // kotlin.String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value.
val filterHeaderLastBlockIdPartSetHeaderHashLike : kotlin.String = filterHeaderLastBlockIdPartSetHeaderHashLike_example // kotlin.String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value.
val filterHeaderLastBlockIdPartSetHeaderHashIlike : kotlin.String = filterHeaderLastBlockIdPartSetHeaderHashIlike_example // kotlin.String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value.
val filterHeaderLastCommitHash : kotlin.String = filterHeaderLastCommitHash_example // kotlin.String | Filter the results where the [header.lastCommitHash] field is equal to the given value.
val filterHeaderLastCommitHashNeq : kotlin.String = filterHeaderLastCommitHashNeq_example // kotlin.String | Filter the results where the [header.lastCommitHash] field is not equal to the given value.
val filterHeaderLastCommitHashLike : kotlin.String = filterHeaderLastCommitHashLike_example // kotlin.String | Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value.
val filterHeaderLastCommitHashIlike : kotlin.String = filterHeaderLastCommitHashIlike_example // kotlin.String | Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value.
val filterHeaderDataHash : kotlin.String = filterHeaderDataHash_example // kotlin.String | Filter the results where the [header.dataHash] field is equal to the given value.
val filterHeaderDataHashNeq : kotlin.String = filterHeaderDataHashNeq_example // kotlin.String | Filter the results where the [header.dataHash] field is not equal to the given value.
val filterHeaderDataHashLike : kotlin.String = filterHeaderDataHashLike_example // kotlin.String | Filter the results where the [header.dataHash] field is similar to the given case sensitive value.
val filterHeaderDataHashIlike : kotlin.String = filterHeaderDataHashIlike_example // kotlin.String | Filter the results where the [header.dataHash] field is similar to the given case insensitive value.
val filterHeaderValidatorsHash : kotlin.String = filterHeaderValidatorsHash_example // kotlin.String | Filter the results where the [header.validatorsHash] field is equal to the given value.
val filterHeaderValidatorsHashNeq : kotlin.String = filterHeaderValidatorsHashNeq_example // kotlin.String | Filter the results where the [header.validatorsHash] field is not equal to the given value.
val filterHeaderValidatorsHashLike : kotlin.String = filterHeaderValidatorsHashLike_example // kotlin.String | Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value.
val filterHeaderValidatorsHashIlike : kotlin.String = filterHeaderValidatorsHashIlike_example // kotlin.String | Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value.
val filterHeaderNextValidatorsHash : kotlin.String = filterHeaderNextValidatorsHash_example // kotlin.String | Filter the results where the [header.nextValidatorsHash] field is equal to the given value.
val filterHeaderNextValidatorsHashNeq : kotlin.String = filterHeaderNextValidatorsHashNeq_example // kotlin.String | Filter the results where the [header.nextValidatorsHash] field is not equal to the given value.
val filterHeaderNextValidatorsHashLike : kotlin.String = filterHeaderNextValidatorsHashLike_example // kotlin.String | Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value.
val filterHeaderNextValidatorsHashIlike : kotlin.String = filterHeaderNextValidatorsHashIlike_example // kotlin.String | Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value.
val filterHeaderConsensusHash : kotlin.String = filterHeaderConsensusHash_example // kotlin.String | Filter the results where the [header.consensusHash] field is equal to the given value.
val filterHeaderConsensusHashNeq : kotlin.String = filterHeaderConsensusHashNeq_example // kotlin.String | Filter the results where the [header.consensusHash] field is not equal to the given value.
val filterHeaderConsensusHashLike : kotlin.String = filterHeaderConsensusHashLike_example // kotlin.String | Filter the results where the [header.consensusHash] field is similar to the given case sensitive value.
val filterHeaderConsensusHashIlike : kotlin.String = filterHeaderConsensusHashIlike_example // kotlin.String | Filter the results where the [header.consensusHash] field is similar to the given case insensitive value.
val filterHeaderAppHash : kotlin.String = filterHeaderAppHash_example // kotlin.String | Filter the results where the [header.appHash] field is equal to the given value.
val filterHeaderAppHashNeq : kotlin.String = filterHeaderAppHashNeq_example // kotlin.String | Filter the results where the [header.appHash] field is not equal to the given value.
val filterHeaderAppHashLike : kotlin.String = filterHeaderAppHashLike_example // kotlin.String | Filter the results where the [header.appHash] field is similar to the given case sensitive value.
val filterHeaderAppHashIlike : kotlin.String = filterHeaderAppHashIlike_example // kotlin.String | Filter the results where the [header.appHash] field is similar to the given case insensitive value.
val filterHeaderLastResultsHash : kotlin.String = filterHeaderLastResultsHash_example // kotlin.String | Filter the results where the [header.lastResultsHash] field is equal to the given value.
val filterHeaderLastResultsHashNeq : kotlin.String = filterHeaderLastResultsHashNeq_example // kotlin.String | Filter the results where the [header.lastResultsHash] field is not equal to the given value.
val filterHeaderLastResultsHashLike : kotlin.String = filterHeaderLastResultsHashLike_example // kotlin.String | Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value.
val filterHeaderLastResultsHashIlike : kotlin.String = filterHeaderLastResultsHashIlike_example // kotlin.String | Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value.
val filterHeaderEvidenceHash : kotlin.String = filterHeaderEvidenceHash_example // kotlin.String | Filter the results where the [header.evidenceHash] field is equal to the given value.
val filterHeaderEvidenceHashNeq : kotlin.String = filterHeaderEvidenceHashNeq_example // kotlin.String | Filter the results where the [header.evidenceHash] field is not equal to the given value.
val filterHeaderEvidenceHashLike : kotlin.String = filterHeaderEvidenceHashLike_example // kotlin.String | Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value.
val filterHeaderEvidenceHashIlike : kotlin.String = filterHeaderEvidenceHashIlike_example // kotlin.String | Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value.
val filterHeaderProposerAddress : kotlin.String = filterHeaderProposerAddress_example // kotlin.String | Filter the results where the [header.proposerAddress] field is equal to the given value.
val filterHeaderProposerAddressNeq : kotlin.String = filterHeaderProposerAddressNeq_example // kotlin.String | Filter the results where the [header.proposerAddress] field is not equal to the given value.
val filterHeaderProposerAddressLike : kotlin.String = filterHeaderProposerAddressLike_example // kotlin.String | Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value.
val filterHeaderProposerAddressIlike : kotlin.String = filterHeaderProposerAddressIlike_example // kotlin.String | Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value.
val include : ApiBlocksGetIncludeParameter =  // ApiBlocksGetIncludeParameter | Include the given relationships.
val sort : ApiBlocksGetSortParameter =  // ApiBlocksGetSortParameter | Sort the results by the given field and direction.
try {
    val result : ApiBlocksGet200Response = apiInstance.apiBlocksGet(fieldsBlocks, filterHash, filterHashNeq, filterHashLike, filterHashIlike, filterHeight, filterHeaderVersionBlock, filterHeaderChainId, filterHeaderChainIdNeq, filterHeaderChainIdLike, filterHeaderChainIdIlike, filterHeaderHeight, filterHeaderTime, filterHeaderTimeNeq, filterHeaderTimeLike, filterHeaderTimeIlike, filterHeaderLastBlockIdHash, filterHeaderLastBlockIdHashNeq, filterHeaderLastBlockIdHashLike, filterHeaderLastBlockIdHashIlike, filterHeaderLastBlockIdPartSetHeaderTotal, filterHeaderLastBlockIdPartSetHeaderHash, filterHeaderLastBlockIdPartSetHeaderHashNeq, filterHeaderLastBlockIdPartSetHeaderHashLike, filterHeaderLastBlockIdPartSetHeaderHashIlike, filterHeaderLastCommitHash, filterHeaderLastCommitHashNeq, filterHeaderLastCommitHashLike, filterHeaderLastCommitHashIlike, filterHeaderDataHash, filterHeaderDataHashNeq, filterHeaderDataHashLike, filterHeaderDataHashIlike, filterHeaderValidatorsHash, filterHeaderValidatorsHashNeq, filterHeaderValidatorsHashLike, filterHeaderValidatorsHashIlike, filterHeaderNextValidatorsHash, filterHeaderNextValidatorsHashNeq, filterHeaderNextValidatorsHashLike, filterHeaderNextValidatorsHashIlike, filterHeaderConsensusHash, filterHeaderConsensusHashNeq, filterHeaderConsensusHashLike, filterHeaderConsensusHashIlike, filterHeaderAppHash, filterHeaderAppHashNeq, filterHeaderAppHashLike, filterHeaderAppHashIlike, filterHeaderLastResultsHash, filterHeaderLastResultsHashNeq, filterHeaderLastResultsHashLike, filterHeaderLastResultsHashIlike, filterHeaderEvidenceHash, filterHeaderEvidenceHashNeq, filterHeaderEvidenceHashLike, filterHeaderEvidenceHashIlike, filterHeaderProposerAddress, filterHeaderProposerAddressNeq, filterHeaderProposerAddressLike, filterHeaderProposerAddressIlike, include, sort)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#apiBlocksGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#apiBlocksGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsBlocks** | [**ApiBlocksGetFieldsBlocksParameter**](.md)| Include the given fields in the response. | [optional]
 **filterHash** | **kotlin.String**| Filter the results where the [hash] field is equal to the given value. | [optional]
 **filterHashNeq** | **kotlin.String**| Filter the results where the [hash] field is not equal to the given value. | [optional]
 **filterHashLike** | **kotlin.String**| Filter the results where the [hash] field is similar to the given case sensitive value. | [optional]
 **filterHashIlike** | **kotlin.String**| Filter the results where the [hash] field is similar to the given case insensitive value. | [optional]
 **filterHeight** | **kotlin.Int**| Filter the results where the [height] field is equal to the given value. | [optional]
 **filterHeaderVersionBlock** | **kotlin.Int**| Filter the results where the [header.version.block] field is equal to the given value. | [optional]
 **filterHeaderChainId** | **kotlin.String**| Filter the results where the [header.chainId] field is equal to the given value. | [optional]
 **filterHeaderChainIdNeq** | **kotlin.String**| Filter the results where the [header.chainId] field is not equal to the given value. | [optional]
 **filterHeaderChainIdLike** | **kotlin.String**| Filter the results where the [header.chainId] field is similar to the given case sensitive value. | [optional]
 **filterHeaderChainIdIlike** | **kotlin.String**| Filter the results where the [header.chainId] field is similar to the given case insensitive value. | [optional]
 **filterHeaderHeight** | **kotlin.Int**| Filter the results where the [header.height] field is equal to the given value. | [optional]
 **filterHeaderTime** | **kotlin.String**| Filter the results where the [header.time] field is equal to the given value. | [optional]
 **filterHeaderTimeNeq** | **kotlin.String**| Filter the results where the [header.time] field is not equal to the given value. | [optional]
 **filterHeaderTimeLike** | **kotlin.String**| Filter the results where the [header.time] field is similar to the given case sensitive value. | [optional]
 **filterHeaderTimeIlike** | **kotlin.String**| Filter the results where the [header.time] field is similar to the given case insensitive value. | [optional]
 **filterHeaderLastBlockIdHash** | **kotlin.String**| Filter the results where the [header.lastBlockId.hash] field is equal to the given value. | [optional]
 **filterHeaderLastBlockIdHashNeq** | **kotlin.String**| Filter the results where the [header.lastBlockId.hash] field is not equal to the given value. | [optional]
 **filterHeaderLastBlockIdHashLike** | **kotlin.String**| Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value. | [optional]
 **filterHeaderLastBlockIdHashIlike** | **kotlin.String**| Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value. | [optional]
 **filterHeaderLastBlockIdPartSetHeaderTotal** | **kotlin.Int**| Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value. | [optional]
 **filterHeaderLastBlockIdPartSetHeaderHash** | **kotlin.String**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value. | [optional]
 **filterHeaderLastBlockIdPartSetHeaderHashNeq** | **kotlin.String**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value. | [optional]
 **filterHeaderLastBlockIdPartSetHeaderHashLike** | **kotlin.String**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value. | [optional]
 **filterHeaderLastBlockIdPartSetHeaderHashIlike** | **kotlin.String**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value. | [optional]
 **filterHeaderLastCommitHash** | **kotlin.String**| Filter the results where the [header.lastCommitHash] field is equal to the given value. | [optional]
 **filterHeaderLastCommitHashNeq** | **kotlin.String**| Filter the results where the [header.lastCommitHash] field is not equal to the given value. | [optional]
 **filterHeaderLastCommitHashLike** | **kotlin.String**| Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value. | [optional]
 **filterHeaderLastCommitHashIlike** | **kotlin.String**| Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value. | [optional]
 **filterHeaderDataHash** | **kotlin.String**| Filter the results where the [header.dataHash] field is equal to the given value. | [optional]
 **filterHeaderDataHashNeq** | **kotlin.String**| Filter the results where the [header.dataHash] field is not equal to the given value. | [optional]
 **filterHeaderDataHashLike** | **kotlin.String**| Filter the results where the [header.dataHash] field is similar to the given case sensitive value. | [optional]
 **filterHeaderDataHashIlike** | **kotlin.String**| Filter the results where the [header.dataHash] field is similar to the given case insensitive value. | [optional]
 **filterHeaderValidatorsHash** | **kotlin.String**| Filter the results where the [header.validatorsHash] field is equal to the given value. | [optional]
 **filterHeaderValidatorsHashNeq** | **kotlin.String**| Filter the results where the [header.validatorsHash] field is not equal to the given value. | [optional]
 **filterHeaderValidatorsHashLike** | **kotlin.String**| Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value. | [optional]
 **filterHeaderValidatorsHashIlike** | **kotlin.String**| Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value. | [optional]
 **filterHeaderNextValidatorsHash** | **kotlin.String**| Filter the results where the [header.nextValidatorsHash] field is equal to the given value. | [optional]
 **filterHeaderNextValidatorsHashNeq** | **kotlin.String**| Filter the results where the [header.nextValidatorsHash] field is not equal to the given value. | [optional]
 **filterHeaderNextValidatorsHashLike** | **kotlin.String**| Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value. | [optional]
 **filterHeaderNextValidatorsHashIlike** | **kotlin.String**| Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value. | [optional]
 **filterHeaderConsensusHash** | **kotlin.String**| Filter the results where the [header.consensusHash] field is equal to the given value. | [optional]
 **filterHeaderConsensusHashNeq** | **kotlin.String**| Filter the results where the [header.consensusHash] field is not equal to the given value. | [optional]
 **filterHeaderConsensusHashLike** | **kotlin.String**| Filter the results where the [header.consensusHash] field is similar to the given case sensitive value. | [optional]
 **filterHeaderConsensusHashIlike** | **kotlin.String**| Filter the results where the [header.consensusHash] field is similar to the given case insensitive value. | [optional]
 **filterHeaderAppHash** | **kotlin.String**| Filter the results where the [header.appHash] field is equal to the given value. | [optional]
 **filterHeaderAppHashNeq** | **kotlin.String**| Filter the results where the [header.appHash] field is not equal to the given value. | [optional]
 **filterHeaderAppHashLike** | **kotlin.String**| Filter the results where the [header.appHash] field is similar to the given case sensitive value. | [optional]
 **filterHeaderAppHashIlike** | **kotlin.String**| Filter the results where the [header.appHash] field is similar to the given case insensitive value. | [optional]
 **filterHeaderLastResultsHash** | **kotlin.String**| Filter the results where the [header.lastResultsHash] field is equal to the given value. | [optional]
 **filterHeaderLastResultsHashNeq** | **kotlin.String**| Filter the results where the [header.lastResultsHash] field is not equal to the given value. | [optional]
 **filterHeaderLastResultsHashLike** | **kotlin.String**| Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value. | [optional]
 **filterHeaderLastResultsHashIlike** | **kotlin.String**| Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value. | [optional]
 **filterHeaderEvidenceHash** | **kotlin.String**| Filter the results where the [header.evidenceHash] field is equal to the given value. | [optional]
 **filterHeaderEvidenceHashNeq** | **kotlin.String**| Filter the results where the [header.evidenceHash] field is not equal to the given value. | [optional]
 **filterHeaderEvidenceHashLike** | **kotlin.String**| Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value. | [optional]
 **filterHeaderEvidenceHashIlike** | **kotlin.String**| Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value. | [optional]
 **filterHeaderProposerAddress** | **kotlin.String**| Filter the results where the [header.proposerAddress] field is equal to the given value. | [optional]
 **filterHeaderProposerAddressNeq** | **kotlin.String**| Filter the results where the [header.proposerAddress] field is not equal to the given value. | [optional]
 **filterHeaderProposerAddressLike** | **kotlin.String**| Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value. | [optional]
 **filterHeaderProposerAddressIlike** | **kotlin.String**| Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value. | [optional]
 **include** | [**ApiBlocksGetIncludeParameter**](.md)| Include the given relationships. | [optional]
 **sort** | [**ApiBlocksGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional]

### Return type

[**ApiBlocksGet200Response**](ApiBlocksGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiEntitiesGet"></a>
# **apiEntitiesGet**
> ApiEntitiesGet200Response apiEntitiesGet(fieldsEntities, filterModule, filterModuleNeq, filterModuleLike, filterModuleIlike, filterType, filterTypeNeq, filterTypeLike, filterTypeIlike, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, sort)

List entities

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val fieldsEntities : ApiEntitiesGetFieldsEntitiesParameter =  // ApiEntitiesGetFieldsEntitiesParameter | Include the given fields in the response.
val filterModule : kotlin.String = filterModule_example // kotlin.String | Filter the results where the [module] field is equal to the given value.
val filterModuleNeq : kotlin.String = filterModuleNeq_example // kotlin.String | Filter the results where the [module] field is not equal to the given value.
val filterModuleLike : kotlin.String = filterModuleLike_example // kotlin.String | Filter the results where the [module] field is similar to the given case sensitive value.
val filterModuleIlike : kotlin.String = filterModuleIlike_example // kotlin.String | Filter the results where the [module] field is similar to the given case insensitive value.
val filterType : kotlin.String = filterType_example // kotlin.String | Filter the results where the [type] field is equal to the given value.
val filterTypeNeq : kotlin.String = filterTypeNeq_example // kotlin.String | Filter the results where the [type] field is not equal to the given value.
val filterTypeLike : kotlin.String = filterTypeLike_example // kotlin.String | Filter the results where the [type] field is similar to the given case sensitive value.
val filterTypeIlike : kotlin.String = filterTypeIlike_example // kotlin.String | Filter the results where the [type] field is similar to the given case insensitive value.
val filterKey : kotlin.String = filterKey_example // kotlin.String | Filter the results where the [key] field is equal to the given value.
val filterKeyNeq : kotlin.String = filterKeyNeq_example // kotlin.String | Filter the results where the [key] field is not equal to the given value.
val filterKeyLike : kotlin.String = filterKeyLike_example // kotlin.String | Filter the results where the [key] field is similar to the given case sensitive value.
val filterKeyIlike : kotlin.String = filterKeyIlike_example // kotlin.String | Filter the results where the [key] field is similar to the given case insensitive value.
val filterValue : kotlin.String = filterValue_example // kotlin.String | Filter the results where the [value] field is equal to the given value.
val filterValueNeq : kotlin.String = filterValueNeq_example // kotlin.String | Filter the results where the [value] field is not equal to the given value.
val filterValueLike : kotlin.String = filterValueLike_example // kotlin.String | Filter the results where the [value] field is similar to the given case sensitive value.
val filterValueIlike : kotlin.String = filterValueIlike_example // kotlin.String | Filter the results where the [value] field is similar to the given case insensitive value.
val sort : ApiEntitiesGetSortParameter =  // ApiEntitiesGetSortParameter | Sort the results by the given field and direction.
try {
    val result : ApiEntitiesGet200Response = apiInstance.apiEntitiesGet(fieldsEntities, filterModule, filterModuleNeq, filterModuleLike, filterModuleIlike, filterType, filterTypeNeq, filterTypeLike, filterTypeIlike, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, sort)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#apiEntitiesGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#apiEntitiesGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsEntities** | [**ApiEntitiesGetFieldsEntitiesParameter**](.md)| Include the given fields in the response. | [optional]
 **filterModule** | **kotlin.String**| Filter the results where the [module] field is equal to the given value. | [optional]
 **filterModuleNeq** | **kotlin.String**| Filter the results where the [module] field is not equal to the given value. | [optional]
 **filterModuleLike** | **kotlin.String**| Filter the results where the [module] field is similar to the given case sensitive value. | [optional]
 **filterModuleIlike** | **kotlin.String**| Filter the results where the [module] field is similar to the given case insensitive value. | [optional]
 **filterType** | **kotlin.String**| Filter the results where the [type] field is equal to the given value. | [optional]
 **filterTypeNeq** | **kotlin.String**| Filter the results where the [type] field is not equal to the given value. | [optional]
 **filterTypeLike** | **kotlin.String**| Filter the results where the [type] field is similar to the given case sensitive value. | [optional]
 **filterTypeIlike** | **kotlin.String**| Filter the results where the [type] field is similar to the given case insensitive value. | [optional]
 **filterKey** | **kotlin.String**| Filter the results where the [key] field is equal to the given value. | [optional]
 **filterKeyNeq** | **kotlin.String**| Filter the results where the [key] field is not equal to the given value. | [optional]
 **filterKeyLike** | **kotlin.String**| Filter the results where the [key] field is similar to the given case sensitive value. | [optional]
 **filterKeyIlike** | **kotlin.String**| Filter the results where the [key] field is similar to the given case insensitive value. | [optional]
 **filterValue** | **kotlin.String**| Filter the results where the [value] field is equal to the given value. | [optional]
 **filterValueNeq** | **kotlin.String**| Filter the results where the [value] field is not equal to the given value. | [optional]
 **filterValueLike** | **kotlin.String**| Filter the results where the [value] field is similar to the given case sensitive value. | [optional]
 **filterValueIlike** | **kotlin.String**| Filter the results where the [value] field is similar to the given case insensitive value. | [optional]
 **sort** | [**ApiEntitiesGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional]

### Return type

[**ApiEntitiesGet200Response**](ApiEntitiesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiTransactionsGet"></a>
# **apiTransactionsGet**
> ApiTransactionsGet200Response apiTransactionsGet(fieldsAccounts, filterHash, filterHashNeq, filterHashLike, filterHashIlike, filterSender, filterSenderNeq, filterSenderLike, filterSenderIlike, filterRecipient, filterRecipientNeq, filterRecipientLike, filterRecipientIlike, filterGas, filterNonce, filterSignature, filterSignatureNeq, filterSignatureLike, filterSignatureIlike, filterVersion, filterVersionNeq, filterVersionLike, filterVersionIlike, filterMessageHandler, filterMessageHandlerNeq, filterMessageHandlerLike, filterMessageHandlerIlike, filterMessageVersion, filterMessageVersionNeq, filterMessageVersionLike, filterMessageVersionIlike, filterMessageNetwork, filterMessageNetworkNeq, filterMessageNetworkLike, filterMessageNetworkIlike, filterMessageContent, filterMessageContentNeq, filterMessageContentLike, filterMessageContentIlike, include, sort)

List transactions

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val fieldsAccounts : ApiTransactionsGetFieldsAccountsParameter =  // ApiTransactionsGetFieldsAccountsParameter | Include the given fields in the response.
val filterHash : kotlin.String = filterHash_example // kotlin.String | Filter the results where the [hash] field is equal to the given value.
val filterHashNeq : kotlin.String = filterHashNeq_example // kotlin.String | Filter the results where the [hash] field is not equal to the given value.
val filterHashLike : kotlin.String = filterHashLike_example // kotlin.String | Filter the results where the [hash] field is similar to the given case sensitive value.
val filterHashIlike : kotlin.String = filterHashIlike_example // kotlin.String | Filter the results where the [hash] field is similar to the given case insensitive value.
val filterSender : kotlin.String = filterSender_example // kotlin.String | Filter the results where the [sender] field is equal to the given value.
val filterSenderNeq : kotlin.String = filterSenderNeq_example // kotlin.String | Filter the results where the [sender] field is not equal to the given value.
val filterSenderLike : kotlin.String = filterSenderLike_example // kotlin.String | Filter the results where the [sender] field is similar to the given case sensitive value.
val filterSenderIlike : kotlin.String = filterSenderIlike_example // kotlin.String | Filter the results where the [sender] field is similar to the given case insensitive value.
val filterRecipient : kotlin.String = filterRecipient_example // kotlin.String | Filter the results where the [recipient] field is equal to the given value.
val filterRecipientNeq : kotlin.String = filterRecipientNeq_example // kotlin.String | Filter the results where the [recipient] field is not equal to the given value.
val filterRecipientLike : kotlin.String = filterRecipientLike_example // kotlin.String | Filter the results where the [recipient] field is similar to the given case sensitive value.
val filterRecipientIlike : kotlin.String = filterRecipientIlike_example // kotlin.String | Filter the results where the [recipient] field is similar to the given case insensitive value.
val filterGas : kotlin.Int = 56 // kotlin.Int | Filter the results where the [gas] field is equal to the given value.
val filterNonce : kotlin.Int = 56 // kotlin.Int | Filter the results where the [nonce] field is equal to the given value.
val filterSignature : kotlin.String = filterSignature_example // kotlin.String | Filter the results where the [signature] field is equal to the given value.
val filterSignatureNeq : kotlin.String = filterSignatureNeq_example // kotlin.String | Filter the results where the [signature] field is not equal to the given value.
val filterSignatureLike : kotlin.String = filterSignatureLike_example // kotlin.String | Filter the results where the [signature] field is similar to the given case sensitive value.
val filterSignatureIlike : kotlin.String = filterSignatureIlike_example // kotlin.String | Filter the results where the [signature] field is similar to the given case insensitive value.
val filterVersion : kotlin.String = filterVersion_example // kotlin.String | Filter the results where the [version] field is equal to the given value.
val filterVersionNeq : kotlin.String = filterVersionNeq_example // kotlin.String | Filter the results where the [version] field is not equal to the given value.
val filterVersionLike : kotlin.String = filterVersionLike_example // kotlin.String | Filter the results where the [version] field is similar to the given case sensitive value.
val filterVersionIlike : kotlin.String = filterVersionIlike_example // kotlin.String | Filter the results where the [version] field is similar to the given case insensitive value.
val filterMessageHandler : kotlin.String = filterMessageHandler_example // kotlin.String | Filter the results where the [message.handler] field is equal to the given value.
val filterMessageHandlerNeq : kotlin.String = filterMessageHandlerNeq_example // kotlin.String | Filter the results where the [message.handler] field is not equal to the given value.
val filterMessageHandlerLike : kotlin.String = filterMessageHandlerLike_example // kotlin.String | Filter the results where the [message.handler] field is similar to the given case sensitive value.
val filterMessageHandlerIlike : kotlin.String = filterMessageHandlerIlike_example // kotlin.String | Filter the results where the [message.handler] field is similar to the given case insensitive value.
val filterMessageVersion : kotlin.String = filterMessageVersion_example // kotlin.String | Filter the results where the [message.version] field is equal to the given value.
val filterMessageVersionNeq : kotlin.String = filterMessageVersionNeq_example // kotlin.String | Filter the results where the [message.version] field is not equal to the given value.
val filterMessageVersionLike : kotlin.String = filterMessageVersionLike_example // kotlin.String | Filter the results where the [message.version] field is similar to the given case sensitive value.
val filterMessageVersionIlike : kotlin.String = filterMessageVersionIlike_example // kotlin.String | Filter the results where the [message.version] field is similar to the given case insensitive value.
val filterMessageNetwork : kotlin.String = filterMessageNetwork_example // kotlin.String | Filter the results where the [message.network] field is equal to the given value.
val filterMessageNetworkNeq : kotlin.String = filterMessageNetworkNeq_example // kotlin.String | Filter the results where the [message.network] field is not equal to the given value.
val filterMessageNetworkLike : kotlin.String = filterMessageNetworkLike_example // kotlin.String | Filter the results where the [message.network] field is similar to the given case sensitive value.
val filterMessageNetworkIlike : kotlin.String = filterMessageNetworkIlike_example // kotlin.String | Filter the results where the [message.network] field is similar to the given case insensitive value.
val filterMessageContent : kotlin.String = filterMessageContent_example // kotlin.String | Filter the results where the [message.content] field is equal to the given value.
val filterMessageContentNeq : kotlin.String = filterMessageContentNeq_example // kotlin.String | Filter the results where the [message.content] field is not equal to the given value.
val filterMessageContentLike : kotlin.String = filterMessageContentLike_example // kotlin.String | Filter the results where the [message.content] field is similar to the given case sensitive value.
val filterMessageContentIlike : kotlin.String = filterMessageContentIlike_example // kotlin.String | Filter the results where the [message.content] field is similar to the given case insensitive value.
val include : ApiTransactionsGetIncludeParameter =  // ApiTransactionsGetIncludeParameter | Include the given relationships.
val sort : ApiTransactionsGetSortParameter =  // ApiTransactionsGetSortParameter | Sort the results by the given field and direction.
try {
    val result : ApiTransactionsGet200Response = apiInstance.apiTransactionsGet(fieldsAccounts, filterHash, filterHashNeq, filterHashLike, filterHashIlike, filterSender, filterSenderNeq, filterSenderLike, filterSenderIlike, filterRecipient, filterRecipientNeq, filterRecipientLike, filterRecipientIlike, filterGas, filterNonce, filterSignature, filterSignatureNeq, filterSignatureLike, filterSignatureIlike, filterVersion, filterVersionNeq, filterVersionLike, filterVersionIlike, filterMessageHandler, filterMessageHandlerNeq, filterMessageHandlerLike, filterMessageHandlerIlike, filterMessageVersion, filterMessageVersionNeq, filterMessageVersionLike, filterMessageVersionIlike, filterMessageNetwork, filterMessageNetworkNeq, filterMessageNetworkLike, filterMessageNetworkIlike, filterMessageContent, filterMessageContentNeq, filterMessageContentLike, filterMessageContentIlike, include, sort)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#apiTransactionsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#apiTransactionsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsAccounts** | [**ApiTransactionsGetFieldsAccountsParameter**](.md)| Include the given fields in the response. | [optional]
 **filterHash** | **kotlin.String**| Filter the results where the [hash] field is equal to the given value. | [optional]
 **filterHashNeq** | **kotlin.String**| Filter the results where the [hash] field is not equal to the given value. | [optional]
 **filterHashLike** | **kotlin.String**| Filter the results where the [hash] field is similar to the given case sensitive value. | [optional]
 **filterHashIlike** | **kotlin.String**| Filter the results where the [hash] field is similar to the given case insensitive value. | [optional]
 **filterSender** | **kotlin.String**| Filter the results where the [sender] field is equal to the given value. | [optional]
 **filterSenderNeq** | **kotlin.String**| Filter the results where the [sender] field is not equal to the given value. | [optional]
 **filterSenderLike** | **kotlin.String**| Filter the results where the [sender] field is similar to the given case sensitive value. | [optional]
 **filterSenderIlike** | **kotlin.String**| Filter the results where the [sender] field is similar to the given case insensitive value. | [optional]
 **filterRecipient** | **kotlin.String**| Filter the results where the [recipient] field is equal to the given value. | [optional]
 **filterRecipientNeq** | **kotlin.String**| Filter the results where the [recipient] field is not equal to the given value. | [optional]
 **filterRecipientLike** | **kotlin.String**| Filter the results where the [recipient] field is similar to the given case sensitive value. | [optional]
 **filterRecipientIlike** | **kotlin.String**| Filter the results where the [recipient] field is similar to the given case insensitive value. | [optional]
 **filterGas** | **kotlin.Int**| Filter the results where the [gas] field is equal to the given value. | [optional]
 **filterNonce** | **kotlin.Int**| Filter the results where the [nonce] field is equal to the given value. | [optional]
 **filterSignature** | **kotlin.String**| Filter the results where the [signature] field is equal to the given value. | [optional]
 **filterSignatureNeq** | **kotlin.String**| Filter the results where the [signature] field is not equal to the given value. | [optional]
 **filterSignatureLike** | **kotlin.String**| Filter the results where the [signature] field is similar to the given case sensitive value. | [optional]
 **filterSignatureIlike** | **kotlin.String**| Filter the results where the [signature] field is similar to the given case insensitive value. | [optional]
 **filterVersion** | **kotlin.String**| Filter the results where the [version] field is equal to the given value. | [optional]
 **filterVersionNeq** | **kotlin.String**| Filter the results where the [version] field is not equal to the given value. | [optional]
 **filterVersionLike** | **kotlin.String**| Filter the results where the [version] field is similar to the given case sensitive value. | [optional]
 **filterVersionIlike** | **kotlin.String**| Filter the results where the [version] field is similar to the given case insensitive value. | [optional]
 **filterMessageHandler** | **kotlin.String**| Filter the results where the [message.handler] field is equal to the given value. | [optional]
 **filterMessageHandlerNeq** | **kotlin.String**| Filter the results where the [message.handler] field is not equal to the given value. | [optional]
 **filterMessageHandlerLike** | **kotlin.String**| Filter the results where the [message.handler] field is similar to the given case sensitive value. | [optional]
 **filterMessageHandlerIlike** | **kotlin.String**| Filter the results where the [message.handler] field is similar to the given case insensitive value. | [optional]
 **filterMessageVersion** | **kotlin.String**| Filter the results where the [message.version] field is equal to the given value. | [optional]
 **filterMessageVersionNeq** | **kotlin.String**| Filter the results where the [message.version] field is not equal to the given value. | [optional]
 **filterMessageVersionLike** | **kotlin.String**| Filter the results where the [message.version] field is similar to the given case sensitive value. | [optional]
 **filterMessageVersionIlike** | **kotlin.String**| Filter the results where the [message.version] field is similar to the given case insensitive value. | [optional]
 **filterMessageNetwork** | **kotlin.String**| Filter the results where the [message.network] field is equal to the given value. | [optional]
 **filterMessageNetworkNeq** | **kotlin.String**| Filter the results where the [message.network] field is not equal to the given value. | [optional]
 **filterMessageNetworkLike** | **kotlin.String**| Filter the results where the [message.network] field is similar to the given case sensitive value. | [optional]
 **filterMessageNetworkIlike** | **kotlin.String**| Filter the results where the [message.network] field is similar to the given case insensitive value. | [optional]
 **filterMessageContent** | **kotlin.String**| Filter the results where the [message.content] field is equal to the given value. | [optional]
 **filterMessageContentNeq** | **kotlin.String**| Filter the results where the [message.content] field is not equal to the given value. | [optional]
 **filterMessageContentLike** | **kotlin.String**| Filter the results where the [message.content] field is similar to the given case sensitive value. | [optional]
 **filterMessageContentIlike** | **kotlin.String**| Filter the results where the [message.content] field is similar to the given case insensitive value. | [optional]
 **include** | [**ApiTransactionsGetIncludeParameter**](.md)| Include the given relationships. | [optional]
 **sort** | [**ApiTransactionsGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional]

### Return type

[**ApiTransactionsGet200Response**](ApiTransactionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiTransactionsMetadataGet"></a>
# **apiTransactionsMetadataGet**
> ApiTransactionsMetadataGet200Response apiTransactionsMetadataGet(fieldsTransactionMetadata, filterTransactionId, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, include, sort)

List transaction metadata

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val fieldsTransactionMetadata : ApiTransactionsMetadataGetFieldsTransactionMetadataParameter =  // ApiTransactionsMetadataGetFieldsTransactionMetadataParameter | Include the given fields in the response.
val filterTransactionId : kotlin.Int = 56 // kotlin.Int | Filter the results where the [transaction_id] field is equal to the given value.
val filterKey : kotlin.String = filterKey_example // kotlin.String | Filter the results where the [key] field is equal to the given value.
val filterKeyNeq : kotlin.String = filterKeyNeq_example // kotlin.String | Filter the results where the [key] field is not equal to the given value.
val filterKeyLike : kotlin.String = filterKeyLike_example // kotlin.String | Filter the results where the [key] field is similar to the given case sensitive value.
val filterKeyIlike : kotlin.String = filterKeyIlike_example // kotlin.String | Filter the results where the [key] field is similar to the given case insensitive value.
val filterValue : kotlin.String = filterValue_example // kotlin.String | Filter the results where the [value] field is equal to the given value.
val filterValueNeq : kotlin.String = filterValueNeq_example // kotlin.String | Filter the results where the [value] field is not equal to the given value.
val filterValueLike : kotlin.String = filterValueLike_example // kotlin.String | Filter the results where the [value] field is similar to the given case sensitive value.
val filterValueIlike : kotlin.String = filterValueIlike_example // kotlin.String | Filter the results where the [value] field is similar to the given case insensitive value.
val include : ApiTransactionsMetadataGetIncludeParameter =  // ApiTransactionsMetadataGetIncludeParameter | Include the given relationships.
val sort : ApiTransactionsMetadataGetSortParameter =  // ApiTransactionsMetadataGetSortParameter | Sort the results by the given field and direction.
try {
    val result : ApiTransactionsMetadataGet200Response = apiInstance.apiTransactionsMetadataGet(fieldsTransactionMetadata, filterTransactionId, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, include, sort)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#apiTransactionsMetadataGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#apiTransactionsMetadataGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsTransactionMetadata** | [**ApiTransactionsMetadataGetFieldsTransactionMetadataParameter**](.md)| Include the given fields in the response. | [optional]
 **filterTransactionId** | **kotlin.Int**| Filter the results where the [transaction_id] field is equal to the given value. | [optional]
 **filterKey** | **kotlin.String**| Filter the results where the [key] field is equal to the given value. | [optional]
 **filterKeyNeq** | **kotlin.String**| Filter the results where the [key] field is not equal to the given value. | [optional]
 **filterKeyLike** | **kotlin.String**| Filter the results where the [key] field is similar to the given case sensitive value. | [optional]
 **filterKeyIlike** | **kotlin.String**| Filter the results where the [key] field is similar to the given case insensitive value. | [optional]
 **filterValue** | **kotlin.String**| Filter the results where the [value] field is equal to the given value. | [optional]
 **filterValueNeq** | **kotlin.String**| Filter the results where the [value] field is not equal to the given value. | [optional]
 **filterValueLike** | **kotlin.String**| Filter the results where the [value] field is similar to the given case sensitive value. | [optional]
 **filterValueIlike** | **kotlin.String**| Filter the results where the [value] field is similar to the given case insensitive value. | [optional]
 **include** | [**ApiTransactionsMetadataGetIncludeParameter**](.md)| Include the given relationships. | [optional]
 **sort** | [**ApiTransactionsMetadataGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional]

### Return type

[**ApiTransactionsMetadataGet200Response**](ApiTransactionsMetadataGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiTransactionsReceiptsGet"></a>
# **apiTransactionsReceiptsGet**
> ApiTransactionsReceiptsGet200Response apiTransactionsReceiptsGet(fieldsTransactionReceipts, filterTransactionId, filterBlockHash, filterBlockHashNeq, filterBlockHashLike, filterBlockHashIlike, filterBlockNumber, filterBlockNumberNeq, filterBlockNumberLike, filterBlockNumberIlike, include, sort)

List transaction receipts

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val fieldsTransactionReceipts : ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter =  // ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter | Include the given fields in the response.
val filterTransactionId : kotlin.Int = 56 // kotlin.Int | Filter the results where the [transaction_id] field is equal to the given value.
val filterBlockHash : kotlin.String = filterBlockHash_example // kotlin.String | Filter the results where the [block_hash] field is equal to the given value.
val filterBlockHashNeq : kotlin.String = filterBlockHashNeq_example // kotlin.String | Filter the results where the [block_hash] field is not equal to the given value.
val filterBlockHashLike : kotlin.String = filterBlockHashLike_example // kotlin.String | Filter the results where the [block_hash] field is similar to the given case sensitive value.
val filterBlockHashIlike : kotlin.String = filterBlockHashIlike_example // kotlin.String | Filter the results where the [block_hash] field is similar to the given case insensitive value.
val filterBlockNumber : kotlin.String = filterBlockNumber_example // kotlin.String | Filter the results where the [block_number] field is equal to the given value.
val filterBlockNumberNeq : kotlin.String = filterBlockNumberNeq_example // kotlin.String | Filter the results where the [block_number] field is not equal to the given value.
val filterBlockNumberLike : kotlin.String = filterBlockNumberLike_example // kotlin.String | Filter the results where the [block_number] field is similar to the given case sensitive value.
val filterBlockNumberIlike : kotlin.String = filterBlockNumberIlike_example // kotlin.String | Filter the results where the [block_number] field is similar to the given case insensitive value.
val include : ApiTransactionsMetadataGetIncludeParameter =  // ApiTransactionsMetadataGetIncludeParameter | Include the given relationships.
val sort : ApiTransactionsReceiptsGetSortParameter =  // ApiTransactionsReceiptsGetSortParameter | Sort the results by the given field and direction.
try {
    val result : ApiTransactionsReceiptsGet200Response = apiInstance.apiTransactionsReceiptsGet(fieldsTransactionReceipts, filterTransactionId, filterBlockHash, filterBlockHashNeq, filterBlockHashLike, filterBlockHashIlike, filterBlockNumber, filterBlockNumberNeq, filterBlockNumberLike, filterBlockNumberIlike, include, sort)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#apiTransactionsReceiptsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#apiTransactionsReceiptsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsTransactionReceipts** | [**ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter**](.md)| Include the given fields in the response. | [optional]
 **filterTransactionId** | **kotlin.Int**| Filter the results where the [transaction_id] field is equal to the given value. | [optional]
 **filterBlockHash** | **kotlin.String**| Filter the results where the [block_hash] field is equal to the given value. | [optional]
 **filterBlockHashNeq** | **kotlin.String**| Filter the results where the [block_hash] field is not equal to the given value. | [optional]
 **filterBlockHashLike** | **kotlin.String**| Filter the results where the [block_hash] field is similar to the given case sensitive value. | [optional]
 **filterBlockHashIlike** | **kotlin.String**| Filter the results where the [block_hash] field is similar to the given case insensitive value. | [optional]
 **filterBlockNumber** | **kotlin.String**| Filter the results where the [block_number] field is equal to the given value. | [optional]
 **filterBlockNumberNeq** | **kotlin.String**| Filter the results where the [block_number] field is not equal to the given value. | [optional]
 **filterBlockNumberLike** | **kotlin.String**| Filter the results where the [block_number] field is similar to the given case sensitive value. | [optional]
 **filterBlockNumberIlike** | **kotlin.String**| Filter the results where the [block_number] field is similar to the given case insensitive value. | [optional]
 **include** | [**ApiTransactionsMetadataGetIncludeParameter**](.md)| Include the given relationships. | [optional]
 **sort** | [**ApiTransactionsReceiptsGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional]

### Return type

[**ApiTransactionsReceiptsGet200Response**](ApiTransactionsReceiptsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiValidatorsUpdatesGet"></a>
# **apiValidatorsUpdatesGet**
> ApiValidatorsUpdatesGet200Response apiValidatorsUpdatesGet(fieldsBlockNumber, filterBlockNumber, include, sort)

List validator updates

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val fieldsBlockNumber : ApiValidatorsUpdatesGetFieldsBlockNumberParameter =  // ApiValidatorsUpdatesGetFieldsBlockNumberParameter | Include the given fields in the response.
val filterBlockNumber : kotlin.Int = 56 // kotlin.Int | Filter the results where the [block_number] field is equal to the given value.
val include : ApiValidatorsUpdatesGetIncludeParameter =  // ApiValidatorsUpdatesGetIncludeParameter | Include the given relationships.
val sort : ApiValidatorsUpdatesGetSortParameter =  // ApiValidatorsUpdatesGetSortParameter | Sort the results by the given field and direction.
try {
    val result : ApiValidatorsUpdatesGet200Response = apiInstance.apiValidatorsUpdatesGet(fieldsBlockNumber, filterBlockNumber, include, sort)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#apiValidatorsUpdatesGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#apiValidatorsUpdatesGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsBlockNumber** | [**ApiValidatorsUpdatesGetFieldsBlockNumberParameter**](.md)| Include the given fields in the response. | [optional]
 **filterBlockNumber** | **kotlin.Int**| Filter the results where the [block_number] field is equal to the given value. | [optional]
 **include** | [**ApiValidatorsUpdatesGetIncludeParameter**](.md)| Include the given relationships. | [optional]
 **sort** | [**ApiValidatorsUpdatesGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional]

### Return type

[**ApiValidatorsUpdatesGet200Response**](ApiValidatorsUpdatesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

