# DefaultApi

All URIs are relative to *http://railway.test*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiAccountsGet**](DefaultApi.md#apiAccountsGet) | **GET** /api/accounts | List accounts |
| [**apiAccountsMetadataGet**](DefaultApi.md#apiAccountsMetadataGet) | **GET** /api/accounts/metadata | List account metadata |
| [**apiBlocksGet**](DefaultApi.md#apiBlocksGet) | **GET** /api/blocks | List blocks |
| [**apiEntitiesGet**](DefaultApi.md#apiEntitiesGet) | **GET** /api/entities | List entities |
| [**apiTransactionsGet**](DefaultApi.md#apiTransactionsGet) | **GET** /api/transactions | List transactions |
| [**apiTransactionsMetadataGet**](DefaultApi.md#apiTransactionsMetadataGet) | **GET** /api/transactions/metadata | List transaction metadata |
| [**apiTransactionsReceiptsGet**](DefaultApi.md#apiTransactionsReceiptsGet) | **GET** /api/transactions/receipts | List transaction receipts |
| [**apiValidatorsUpdatesGet**](DefaultApi.md#apiValidatorsUpdatesGet) | **GET** /api/validators/updates | List validator updates |


<a name="apiAccountsGet"></a>
# **apiAccountsGet**
> ApiAccountsGet200Response apiAccountsGet(fieldsAccounts, filterAddress, filterAddressNeq, filterAddressLike, filterAddressIlike, filterPublicKey, filterPublicKeyNeq, filterPublicKeyLike, filterPublicKeyIlike, filterName, filterNameNeq, filterNameLike, filterNameIlike, filterNonce, filterValidatorAddress, filterValidatorAddressNeq, filterValidatorAddressLike, filterValidatorAddressIlike, filterValidatorPublicKey, filterValidatorPublicKeyNeq, filterValidatorPublicKeyLike, filterValidatorPublicKeyIlike, filterValidatorPower, filterValidatorPowerNeq, filterValidatorPowerLike, filterValidatorPowerIlike, include, sort)

List accounts

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://railway.test");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    ApiAccountsGetFieldsAccountsParameter fieldsAccounts = new ApiAccountsGetFieldsAccountsParameter(); // ApiAccountsGetFieldsAccountsParameter | Include the given fields in the response.
    String filterAddress = "filterAddress_example"; // String | Filter the results where the [address] field is equal to the given value.
    String filterAddressNeq = "filterAddressNeq_example"; // String | Filter the results where the [address] field is not equal to the given value.
    String filterAddressLike = "filterAddressLike_example"; // String | Filter the results where the [address] field is similar to the given case sensitive value.
    String filterAddressIlike = "filterAddressIlike_example"; // String | Filter the results where the [address] field is similar to the given case insensitive value.
    String filterPublicKey = "filterPublicKey_example"; // String | Filter the results where the [public_key] field is equal to the given value.
    String filterPublicKeyNeq = "filterPublicKeyNeq_example"; // String | Filter the results where the [public_key] field is not equal to the given value.
    String filterPublicKeyLike = "filterPublicKeyLike_example"; // String | Filter the results where the [public_key] field is similar to the given case sensitive value.
    String filterPublicKeyIlike = "filterPublicKeyIlike_example"; // String | Filter the results where the [public_key] field is similar to the given case insensitive value.
    String filterName = "filterName_example"; // String | Filter the results where the [name] field is equal to the given value.
    String filterNameNeq = "filterNameNeq_example"; // String | Filter the results where the [name] field is not equal to the given value.
    String filterNameLike = "filterNameLike_example"; // String | Filter the results where the [name] field is similar to the given case sensitive value.
    String filterNameIlike = "filterNameIlike_example"; // String | Filter the results where the [name] field is similar to the given case insensitive value.
    Integer filterNonce = 56; // Integer | Filter the results where the [nonce] field is equal to the given value.
    String filterValidatorAddress = "filterValidatorAddress_example"; // String | Filter the results where the [validator.address] field is equal to the given value.
    String filterValidatorAddressNeq = "filterValidatorAddressNeq_example"; // String | Filter the results where the [validator.address] field is not equal to the given value.
    String filterValidatorAddressLike = "filterValidatorAddressLike_example"; // String | Filter the results where the [validator.address] field is similar to the given case sensitive value.
    String filterValidatorAddressIlike = "filterValidatorAddressIlike_example"; // String | Filter the results where the [validator.address] field is similar to the given case insensitive value.
    String filterValidatorPublicKey = "filterValidatorPublicKey_example"; // String | Filter the results where the [validator.publicKey] field is equal to the given value.
    String filterValidatorPublicKeyNeq = "filterValidatorPublicKeyNeq_example"; // String | Filter the results where the [validator.publicKey] field is not equal to the given value.
    String filterValidatorPublicKeyLike = "filterValidatorPublicKeyLike_example"; // String | Filter the results where the [validator.publicKey] field is similar to the given case sensitive value.
    String filterValidatorPublicKeyIlike = "filterValidatorPublicKeyIlike_example"; // String | Filter the results where the [validator.publicKey] field is similar to the given case insensitive value.
    String filterValidatorPower = "filterValidatorPower_example"; // String | Filter the results where the [validator.power] field is equal to the given value.
    String filterValidatorPowerNeq = "filterValidatorPowerNeq_example"; // String | Filter the results where the [validator.power] field is not equal to the given value.
    String filterValidatorPowerLike = "filterValidatorPowerLike_example"; // String | Filter the results where the [validator.power] field is similar to the given case sensitive value.
    String filterValidatorPowerIlike = "filterValidatorPowerIlike_example"; // String | Filter the results where the [validator.power] field is similar to the given case insensitive value.
    ApiAccountsGetIncludeParameter include = new ApiAccountsGetIncludeParameter(); // ApiAccountsGetIncludeParameter | Include the given relationships.
    ApiAccountsGetSortParameter sort = new ApiAccountsGetSortParameter(); // ApiAccountsGetSortParameter | Sort the results by the given field and direction.
    try {
      ApiAccountsGet200Response result = apiInstance.apiAccountsGet(fieldsAccounts, filterAddress, filterAddressNeq, filterAddressLike, filterAddressIlike, filterPublicKey, filterPublicKeyNeq, filterPublicKeyLike, filterPublicKeyIlike, filterName, filterNameNeq, filterNameLike, filterNameIlike, filterNonce, filterValidatorAddress, filterValidatorAddressNeq, filterValidatorAddressLike, filterValidatorAddressIlike, filterValidatorPublicKey, filterValidatorPublicKeyNeq, filterValidatorPublicKeyLike, filterValidatorPublicKeyIlike, filterValidatorPower, filterValidatorPowerNeq, filterValidatorPowerLike, filterValidatorPowerIlike, include, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#apiAccountsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fieldsAccounts** | [**ApiAccountsGetFieldsAccountsParameter**](.md)| Include the given fields in the response. | [optional] |
| **filterAddress** | **String**| Filter the results where the [address] field is equal to the given value. | [optional] |
| **filterAddressNeq** | **String**| Filter the results where the [address] field is not equal to the given value. | [optional] |
| **filterAddressLike** | **String**| Filter the results where the [address] field is similar to the given case sensitive value. | [optional] |
| **filterAddressIlike** | **String**| Filter the results where the [address] field is similar to the given case insensitive value. | [optional] |
| **filterPublicKey** | **String**| Filter the results where the [public_key] field is equal to the given value. | [optional] |
| **filterPublicKeyNeq** | **String**| Filter the results where the [public_key] field is not equal to the given value. | [optional] |
| **filterPublicKeyLike** | **String**| Filter the results where the [public_key] field is similar to the given case sensitive value. | [optional] |
| **filterPublicKeyIlike** | **String**| Filter the results where the [public_key] field is similar to the given case insensitive value. | [optional] |
| **filterName** | **String**| Filter the results where the [name] field is equal to the given value. | [optional] |
| **filterNameNeq** | **String**| Filter the results where the [name] field is not equal to the given value. | [optional] |
| **filterNameLike** | **String**| Filter the results where the [name] field is similar to the given case sensitive value. | [optional] |
| **filterNameIlike** | **String**| Filter the results where the [name] field is similar to the given case insensitive value. | [optional] |
| **filterNonce** | **Integer**| Filter the results where the [nonce] field is equal to the given value. | [optional] |
| **filterValidatorAddress** | **String**| Filter the results where the [validator.address] field is equal to the given value. | [optional] |
| **filterValidatorAddressNeq** | **String**| Filter the results where the [validator.address] field is not equal to the given value. | [optional] |
| **filterValidatorAddressLike** | **String**| Filter the results where the [validator.address] field is similar to the given case sensitive value. | [optional] |
| **filterValidatorAddressIlike** | **String**| Filter the results where the [validator.address] field is similar to the given case insensitive value. | [optional] |
| **filterValidatorPublicKey** | **String**| Filter the results where the [validator.publicKey] field is equal to the given value. | [optional] |
| **filterValidatorPublicKeyNeq** | **String**| Filter the results where the [validator.publicKey] field is not equal to the given value. | [optional] |
| **filterValidatorPublicKeyLike** | **String**| Filter the results where the [validator.publicKey] field is similar to the given case sensitive value. | [optional] |
| **filterValidatorPublicKeyIlike** | **String**| Filter the results where the [validator.publicKey] field is similar to the given case insensitive value. | [optional] |
| **filterValidatorPower** | **String**| Filter the results where the [validator.power] field is equal to the given value. | [optional] |
| **filterValidatorPowerNeq** | **String**| Filter the results where the [validator.power] field is not equal to the given value. | [optional] |
| **filterValidatorPowerLike** | **String**| Filter the results where the [validator.power] field is similar to the given case sensitive value. | [optional] |
| **filterValidatorPowerIlike** | **String**| Filter the results where the [validator.power] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiAccountsGetIncludeParameter**](.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiAccountsGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiAccountsGet200Response**](ApiAccountsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

<a name="apiAccountsMetadataGet"></a>
# **apiAccountsMetadataGet**
> ApiAccountsMetadataGet200Response apiAccountsMetadataGet(fieldsAccountsMetadata, filterAccountId, filterModule, filterModuleNeq, filterModuleLike, filterModuleIlike, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, include, sort)

List account metadata

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://railway.test");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    ApiAccountsMetadataGetFieldsAccountsMetadataParameter fieldsAccountsMetadata = new ApiAccountsMetadataGetFieldsAccountsMetadataParameter(); // ApiAccountsMetadataGetFieldsAccountsMetadataParameter | Include the given fields in the response.
    Integer filterAccountId = 56; // Integer | Filter the results where the [account_id] field is equal to the given value.
    String filterModule = "filterModule_example"; // String | Filter the results where the [module] field is equal to the given value.
    String filterModuleNeq = "filterModuleNeq_example"; // String | Filter the results where the [module] field is not equal to the given value.
    String filterModuleLike = "filterModuleLike_example"; // String | Filter the results where the [module] field is similar to the given case sensitive value.
    String filterModuleIlike = "filterModuleIlike_example"; // String | Filter the results where the [module] field is similar to the given case insensitive value.
    String filterKey = "filterKey_example"; // String | Filter the results where the [key] field is equal to the given value.
    String filterKeyNeq = "filterKeyNeq_example"; // String | Filter the results where the [key] field is not equal to the given value.
    String filterKeyLike = "filterKeyLike_example"; // String | Filter the results where the [key] field is similar to the given case sensitive value.
    String filterKeyIlike = "filterKeyIlike_example"; // String | Filter the results where the [key] field is similar to the given case insensitive value.
    String filterValue = "filterValue_example"; // String | Filter the results where the [value] field is equal to the given value.
    String filterValueNeq = "filterValueNeq_example"; // String | Filter the results where the [value] field is not equal to the given value.
    String filterValueLike = "filterValueLike_example"; // String | Filter the results where the [value] field is similar to the given case sensitive value.
    String filterValueIlike = "filterValueIlike_example"; // String | Filter the results where the [value] field is similar to the given case insensitive value.
    ApiAccountsMetadataGetIncludeParameter include = new ApiAccountsMetadataGetIncludeParameter(); // ApiAccountsMetadataGetIncludeParameter | Include the given relationships.
    ApiAccountsMetadataGetSortParameter sort = new ApiAccountsMetadataGetSortParameter(); // ApiAccountsMetadataGetSortParameter | Sort the results by the given field and direction.
    try {
      ApiAccountsMetadataGet200Response result = apiInstance.apiAccountsMetadataGet(fieldsAccountsMetadata, filterAccountId, filterModule, filterModuleNeq, filterModuleLike, filterModuleIlike, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, include, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#apiAccountsMetadataGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fieldsAccountsMetadata** | [**ApiAccountsMetadataGetFieldsAccountsMetadataParameter**](.md)| Include the given fields in the response. | [optional] |
| **filterAccountId** | **Integer**| Filter the results where the [account_id] field is equal to the given value. | [optional] |
| **filterModule** | **String**| Filter the results where the [module] field is equal to the given value. | [optional] |
| **filterModuleNeq** | **String**| Filter the results where the [module] field is not equal to the given value. | [optional] |
| **filterModuleLike** | **String**| Filter the results where the [module] field is similar to the given case sensitive value. | [optional] |
| **filterModuleIlike** | **String**| Filter the results where the [module] field is similar to the given case insensitive value. | [optional] |
| **filterKey** | **String**| Filter the results where the [key] field is equal to the given value. | [optional] |
| **filterKeyNeq** | **String**| Filter the results where the [key] field is not equal to the given value. | [optional] |
| **filterKeyLike** | **String**| Filter the results where the [key] field is similar to the given case sensitive value. | [optional] |
| **filterKeyIlike** | **String**| Filter the results where the [key] field is similar to the given case insensitive value. | [optional] |
| **filterValue** | **String**| Filter the results where the [value] field is equal to the given value. | [optional] |
| **filterValueNeq** | **String**| Filter the results where the [value] field is not equal to the given value. | [optional] |
| **filterValueLike** | **String**| Filter the results where the [value] field is similar to the given case sensitive value. | [optional] |
| **filterValueIlike** | **String**| Filter the results where the [value] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiAccountsMetadataGetIncludeParameter**](.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiAccountsMetadataGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiAccountsMetadataGet200Response**](ApiAccountsMetadataGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

<a name="apiBlocksGet"></a>
# **apiBlocksGet**
> ApiBlocksGet200Response apiBlocksGet(fieldsBlocks, filterHash, filterHashNeq, filterHashLike, filterHashIlike, filterHeight, filterHeaderVersionBlock, filterHeaderChainId, filterHeaderChainIdNeq, filterHeaderChainIdLike, filterHeaderChainIdIlike, filterHeaderHeight, filterHeaderTime, filterHeaderTimeNeq, filterHeaderTimeLike, filterHeaderTimeIlike, filterHeaderLastBlockIdHash, filterHeaderLastBlockIdHashNeq, filterHeaderLastBlockIdHashLike, filterHeaderLastBlockIdHashIlike, filterHeaderLastBlockIdPartSetHeaderTotal, filterHeaderLastBlockIdPartSetHeaderHash, filterHeaderLastBlockIdPartSetHeaderHashNeq, filterHeaderLastBlockIdPartSetHeaderHashLike, filterHeaderLastBlockIdPartSetHeaderHashIlike, filterHeaderLastCommitHash, filterHeaderLastCommitHashNeq, filterHeaderLastCommitHashLike, filterHeaderLastCommitHashIlike, filterHeaderDataHash, filterHeaderDataHashNeq, filterHeaderDataHashLike, filterHeaderDataHashIlike, filterHeaderValidatorsHash, filterHeaderValidatorsHashNeq, filterHeaderValidatorsHashLike, filterHeaderValidatorsHashIlike, filterHeaderNextValidatorsHash, filterHeaderNextValidatorsHashNeq, filterHeaderNextValidatorsHashLike, filterHeaderNextValidatorsHashIlike, filterHeaderConsensusHash, filterHeaderConsensusHashNeq, filterHeaderConsensusHashLike, filterHeaderConsensusHashIlike, filterHeaderAppHash, filterHeaderAppHashNeq, filterHeaderAppHashLike, filterHeaderAppHashIlike, filterHeaderLastResultsHash, filterHeaderLastResultsHashNeq, filterHeaderLastResultsHashLike, filterHeaderLastResultsHashIlike, filterHeaderEvidenceHash, filterHeaderEvidenceHashNeq, filterHeaderEvidenceHashLike, filterHeaderEvidenceHashIlike, filterHeaderProposerAddress, filterHeaderProposerAddressNeq, filterHeaderProposerAddressLike, filterHeaderProposerAddressIlike, include, sort)

List blocks

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://railway.test");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    ApiBlocksGetFieldsBlocksParameter fieldsBlocks = new ApiBlocksGetFieldsBlocksParameter(); // ApiBlocksGetFieldsBlocksParameter | Include the given fields in the response.
    String filterHash = "filterHash_example"; // String | Filter the results where the [hash] field is equal to the given value.
    String filterHashNeq = "filterHashNeq_example"; // String | Filter the results where the [hash] field is not equal to the given value.
    String filterHashLike = "filterHashLike_example"; // String | Filter the results where the [hash] field is similar to the given case sensitive value.
    String filterHashIlike = "filterHashIlike_example"; // String | Filter the results where the [hash] field is similar to the given case insensitive value.
    Integer filterHeight = 56; // Integer | Filter the results where the [height] field is equal to the given value.
    Integer filterHeaderVersionBlock = 56; // Integer | Filter the results where the [header.version.block] field is equal to the given value.
    String filterHeaderChainId = "filterHeaderChainId_example"; // String | Filter the results where the [header.chainId] field is equal to the given value.
    String filterHeaderChainIdNeq = "filterHeaderChainIdNeq_example"; // String | Filter the results where the [header.chainId] field is not equal to the given value.
    String filterHeaderChainIdLike = "filterHeaderChainIdLike_example"; // String | Filter the results where the [header.chainId] field is similar to the given case sensitive value.
    String filterHeaderChainIdIlike = "filterHeaderChainIdIlike_example"; // String | Filter the results where the [header.chainId] field is similar to the given case insensitive value.
    Integer filterHeaderHeight = 56; // Integer | Filter the results where the [header.height] field is equal to the given value.
    String filterHeaderTime = "filterHeaderTime_example"; // String | Filter the results where the [header.time] field is equal to the given value.
    String filterHeaderTimeNeq = "filterHeaderTimeNeq_example"; // String | Filter the results where the [header.time] field is not equal to the given value.
    String filterHeaderTimeLike = "filterHeaderTimeLike_example"; // String | Filter the results where the [header.time] field is similar to the given case sensitive value.
    String filterHeaderTimeIlike = "filterHeaderTimeIlike_example"; // String | Filter the results where the [header.time] field is similar to the given case insensitive value.
    String filterHeaderLastBlockIdHash = "filterHeaderLastBlockIdHash_example"; // String | Filter the results where the [header.lastBlockId.hash] field is equal to the given value.
    String filterHeaderLastBlockIdHashNeq = "filterHeaderLastBlockIdHashNeq_example"; // String | Filter the results where the [header.lastBlockId.hash] field is not equal to the given value.
    String filterHeaderLastBlockIdHashLike = "filterHeaderLastBlockIdHashLike_example"; // String | Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value.
    String filterHeaderLastBlockIdHashIlike = "filterHeaderLastBlockIdHashIlike_example"; // String | Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value.
    Integer filterHeaderLastBlockIdPartSetHeaderTotal = 56; // Integer | Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value.
    String filterHeaderLastBlockIdPartSetHeaderHash = "filterHeaderLastBlockIdPartSetHeaderHash_example"; // String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value.
    String filterHeaderLastBlockIdPartSetHeaderHashNeq = "filterHeaderLastBlockIdPartSetHeaderHashNeq_example"; // String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value.
    String filterHeaderLastBlockIdPartSetHeaderHashLike = "filterHeaderLastBlockIdPartSetHeaderHashLike_example"; // String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value.
    String filterHeaderLastBlockIdPartSetHeaderHashIlike = "filterHeaderLastBlockIdPartSetHeaderHashIlike_example"; // String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value.
    String filterHeaderLastCommitHash = "filterHeaderLastCommitHash_example"; // String | Filter the results where the [header.lastCommitHash] field is equal to the given value.
    String filterHeaderLastCommitHashNeq = "filterHeaderLastCommitHashNeq_example"; // String | Filter the results where the [header.lastCommitHash] field is not equal to the given value.
    String filterHeaderLastCommitHashLike = "filterHeaderLastCommitHashLike_example"; // String | Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value.
    String filterHeaderLastCommitHashIlike = "filterHeaderLastCommitHashIlike_example"; // String | Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value.
    String filterHeaderDataHash = "filterHeaderDataHash_example"; // String | Filter the results where the [header.dataHash] field is equal to the given value.
    String filterHeaderDataHashNeq = "filterHeaderDataHashNeq_example"; // String | Filter the results where the [header.dataHash] field is not equal to the given value.
    String filterHeaderDataHashLike = "filterHeaderDataHashLike_example"; // String | Filter the results where the [header.dataHash] field is similar to the given case sensitive value.
    String filterHeaderDataHashIlike = "filterHeaderDataHashIlike_example"; // String | Filter the results where the [header.dataHash] field is similar to the given case insensitive value.
    String filterHeaderValidatorsHash = "filterHeaderValidatorsHash_example"; // String | Filter the results where the [header.validatorsHash] field is equal to the given value.
    String filterHeaderValidatorsHashNeq = "filterHeaderValidatorsHashNeq_example"; // String | Filter the results where the [header.validatorsHash] field is not equal to the given value.
    String filterHeaderValidatorsHashLike = "filterHeaderValidatorsHashLike_example"; // String | Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value.
    String filterHeaderValidatorsHashIlike = "filterHeaderValidatorsHashIlike_example"; // String | Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value.
    String filterHeaderNextValidatorsHash = "filterHeaderNextValidatorsHash_example"; // String | Filter the results where the [header.nextValidatorsHash] field is equal to the given value.
    String filterHeaderNextValidatorsHashNeq = "filterHeaderNextValidatorsHashNeq_example"; // String | Filter the results where the [header.nextValidatorsHash] field is not equal to the given value.
    String filterHeaderNextValidatorsHashLike = "filterHeaderNextValidatorsHashLike_example"; // String | Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value.
    String filterHeaderNextValidatorsHashIlike = "filterHeaderNextValidatorsHashIlike_example"; // String | Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value.
    String filterHeaderConsensusHash = "filterHeaderConsensusHash_example"; // String | Filter the results where the [header.consensusHash] field is equal to the given value.
    String filterHeaderConsensusHashNeq = "filterHeaderConsensusHashNeq_example"; // String | Filter the results where the [header.consensusHash] field is not equal to the given value.
    String filterHeaderConsensusHashLike = "filterHeaderConsensusHashLike_example"; // String | Filter the results where the [header.consensusHash] field is similar to the given case sensitive value.
    String filterHeaderConsensusHashIlike = "filterHeaderConsensusHashIlike_example"; // String | Filter the results where the [header.consensusHash] field is similar to the given case insensitive value.
    String filterHeaderAppHash = "filterHeaderAppHash_example"; // String | Filter the results where the [header.appHash] field is equal to the given value.
    String filterHeaderAppHashNeq = "filterHeaderAppHashNeq_example"; // String | Filter the results where the [header.appHash] field is not equal to the given value.
    String filterHeaderAppHashLike = "filterHeaderAppHashLike_example"; // String | Filter the results where the [header.appHash] field is similar to the given case sensitive value.
    String filterHeaderAppHashIlike = "filterHeaderAppHashIlike_example"; // String | Filter the results where the [header.appHash] field is similar to the given case insensitive value.
    String filterHeaderLastResultsHash = "filterHeaderLastResultsHash_example"; // String | Filter the results where the [header.lastResultsHash] field is equal to the given value.
    String filterHeaderLastResultsHashNeq = "filterHeaderLastResultsHashNeq_example"; // String | Filter the results where the [header.lastResultsHash] field is not equal to the given value.
    String filterHeaderLastResultsHashLike = "filterHeaderLastResultsHashLike_example"; // String | Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value.
    String filterHeaderLastResultsHashIlike = "filterHeaderLastResultsHashIlike_example"; // String | Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value.
    String filterHeaderEvidenceHash = "filterHeaderEvidenceHash_example"; // String | Filter the results where the [header.evidenceHash] field is equal to the given value.
    String filterHeaderEvidenceHashNeq = "filterHeaderEvidenceHashNeq_example"; // String | Filter the results where the [header.evidenceHash] field is not equal to the given value.
    String filterHeaderEvidenceHashLike = "filterHeaderEvidenceHashLike_example"; // String | Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value.
    String filterHeaderEvidenceHashIlike = "filterHeaderEvidenceHashIlike_example"; // String | Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value.
    String filterHeaderProposerAddress = "filterHeaderProposerAddress_example"; // String | Filter the results where the [header.proposerAddress] field is equal to the given value.
    String filterHeaderProposerAddressNeq = "filterHeaderProposerAddressNeq_example"; // String | Filter the results where the [header.proposerAddress] field is not equal to the given value.
    String filterHeaderProposerAddressLike = "filterHeaderProposerAddressLike_example"; // String | Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value.
    String filterHeaderProposerAddressIlike = "filterHeaderProposerAddressIlike_example"; // String | Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value.
    ApiBlocksGetIncludeParameter include = new ApiBlocksGetIncludeParameter(); // ApiBlocksGetIncludeParameter | Include the given relationships.
    ApiBlocksGetSortParameter sort = new ApiBlocksGetSortParameter(); // ApiBlocksGetSortParameter | Sort the results by the given field and direction.
    try {
      ApiBlocksGet200Response result = apiInstance.apiBlocksGet(fieldsBlocks, filterHash, filterHashNeq, filterHashLike, filterHashIlike, filterHeight, filterHeaderVersionBlock, filterHeaderChainId, filterHeaderChainIdNeq, filterHeaderChainIdLike, filterHeaderChainIdIlike, filterHeaderHeight, filterHeaderTime, filterHeaderTimeNeq, filterHeaderTimeLike, filterHeaderTimeIlike, filterHeaderLastBlockIdHash, filterHeaderLastBlockIdHashNeq, filterHeaderLastBlockIdHashLike, filterHeaderLastBlockIdHashIlike, filterHeaderLastBlockIdPartSetHeaderTotal, filterHeaderLastBlockIdPartSetHeaderHash, filterHeaderLastBlockIdPartSetHeaderHashNeq, filterHeaderLastBlockIdPartSetHeaderHashLike, filterHeaderLastBlockIdPartSetHeaderHashIlike, filterHeaderLastCommitHash, filterHeaderLastCommitHashNeq, filterHeaderLastCommitHashLike, filterHeaderLastCommitHashIlike, filterHeaderDataHash, filterHeaderDataHashNeq, filterHeaderDataHashLike, filterHeaderDataHashIlike, filterHeaderValidatorsHash, filterHeaderValidatorsHashNeq, filterHeaderValidatorsHashLike, filterHeaderValidatorsHashIlike, filterHeaderNextValidatorsHash, filterHeaderNextValidatorsHashNeq, filterHeaderNextValidatorsHashLike, filterHeaderNextValidatorsHashIlike, filterHeaderConsensusHash, filterHeaderConsensusHashNeq, filterHeaderConsensusHashLike, filterHeaderConsensusHashIlike, filterHeaderAppHash, filterHeaderAppHashNeq, filterHeaderAppHashLike, filterHeaderAppHashIlike, filterHeaderLastResultsHash, filterHeaderLastResultsHashNeq, filterHeaderLastResultsHashLike, filterHeaderLastResultsHashIlike, filterHeaderEvidenceHash, filterHeaderEvidenceHashNeq, filterHeaderEvidenceHashLike, filterHeaderEvidenceHashIlike, filterHeaderProposerAddress, filterHeaderProposerAddressNeq, filterHeaderProposerAddressLike, filterHeaderProposerAddressIlike, include, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#apiBlocksGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fieldsBlocks** | [**ApiBlocksGetFieldsBlocksParameter**](.md)| Include the given fields in the response. | [optional] |
| **filterHash** | **String**| Filter the results where the [hash] field is equal to the given value. | [optional] |
| **filterHashNeq** | **String**| Filter the results where the [hash] field is not equal to the given value. | [optional] |
| **filterHashLike** | **String**| Filter the results where the [hash] field is similar to the given case sensitive value. | [optional] |
| **filterHashIlike** | **String**| Filter the results where the [hash] field is similar to the given case insensitive value. | [optional] |
| **filterHeight** | **Integer**| Filter the results where the [height] field is equal to the given value. | [optional] |
| **filterHeaderVersionBlock** | **Integer**| Filter the results where the [header.version.block] field is equal to the given value. | [optional] |
| **filterHeaderChainId** | **String**| Filter the results where the [header.chainId] field is equal to the given value. | [optional] |
| **filterHeaderChainIdNeq** | **String**| Filter the results where the [header.chainId] field is not equal to the given value. | [optional] |
| **filterHeaderChainIdLike** | **String**| Filter the results where the [header.chainId] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderChainIdIlike** | **String**| Filter the results where the [header.chainId] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderHeight** | **Integer**| Filter the results where the [header.height] field is equal to the given value. | [optional] |
| **filterHeaderTime** | **String**| Filter the results where the [header.time] field is equal to the given value. | [optional] |
| **filterHeaderTimeNeq** | **String**| Filter the results where the [header.time] field is not equal to the given value. | [optional] |
| **filterHeaderTimeLike** | **String**| Filter the results where the [header.time] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderTimeIlike** | **String**| Filter the results where the [header.time] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderLastBlockIdHash** | **String**| Filter the results where the [header.lastBlockId.hash] field is equal to the given value. | [optional] |
| **filterHeaderLastBlockIdHashNeq** | **String**| Filter the results where the [header.lastBlockId.hash] field is not equal to the given value. | [optional] |
| **filterHeaderLastBlockIdHashLike** | **String**| Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderLastBlockIdHashIlike** | **String**| Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderLastBlockIdPartSetHeaderTotal** | **Integer**| Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value. | [optional] |
| **filterHeaderLastBlockIdPartSetHeaderHash** | **String**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value. | [optional] |
| **filterHeaderLastBlockIdPartSetHeaderHashNeq** | **String**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value. | [optional] |
| **filterHeaderLastBlockIdPartSetHeaderHashLike** | **String**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderLastBlockIdPartSetHeaderHashIlike** | **String**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderLastCommitHash** | **String**| Filter the results where the [header.lastCommitHash] field is equal to the given value. | [optional] |
| **filterHeaderLastCommitHashNeq** | **String**| Filter the results where the [header.lastCommitHash] field is not equal to the given value. | [optional] |
| **filterHeaderLastCommitHashLike** | **String**| Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderLastCommitHashIlike** | **String**| Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderDataHash** | **String**| Filter the results where the [header.dataHash] field is equal to the given value. | [optional] |
| **filterHeaderDataHashNeq** | **String**| Filter the results where the [header.dataHash] field is not equal to the given value. | [optional] |
| **filterHeaderDataHashLike** | **String**| Filter the results where the [header.dataHash] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderDataHashIlike** | **String**| Filter the results where the [header.dataHash] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderValidatorsHash** | **String**| Filter the results where the [header.validatorsHash] field is equal to the given value. | [optional] |
| **filterHeaderValidatorsHashNeq** | **String**| Filter the results where the [header.validatorsHash] field is not equal to the given value. | [optional] |
| **filterHeaderValidatorsHashLike** | **String**| Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderValidatorsHashIlike** | **String**| Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderNextValidatorsHash** | **String**| Filter the results where the [header.nextValidatorsHash] field is equal to the given value. | [optional] |
| **filterHeaderNextValidatorsHashNeq** | **String**| Filter the results where the [header.nextValidatorsHash] field is not equal to the given value. | [optional] |
| **filterHeaderNextValidatorsHashLike** | **String**| Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderNextValidatorsHashIlike** | **String**| Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderConsensusHash** | **String**| Filter the results where the [header.consensusHash] field is equal to the given value. | [optional] |
| **filterHeaderConsensusHashNeq** | **String**| Filter the results where the [header.consensusHash] field is not equal to the given value. | [optional] |
| **filterHeaderConsensusHashLike** | **String**| Filter the results where the [header.consensusHash] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderConsensusHashIlike** | **String**| Filter the results where the [header.consensusHash] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderAppHash** | **String**| Filter the results where the [header.appHash] field is equal to the given value. | [optional] |
| **filterHeaderAppHashNeq** | **String**| Filter the results where the [header.appHash] field is not equal to the given value. | [optional] |
| **filterHeaderAppHashLike** | **String**| Filter the results where the [header.appHash] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderAppHashIlike** | **String**| Filter the results where the [header.appHash] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderLastResultsHash** | **String**| Filter the results where the [header.lastResultsHash] field is equal to the given value. | [optional] |
| **filterHeaderLastResultsHashNeq** | **String**| Filter the results where the [header.lastResultsHash] field is not equal to the given value. | [optional] |
| **filterHeaderLastResultsHashLike** | **String**| Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderLastResultsHashIlike** | **String**| Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderEvidenceHash** | **String**| Filter the results where the [header.evidenceHash] field is equal to the given value. | [optional] |
| **filterHeaderEvidenceHashNeq** | **String**| Filter the results where the [header.evidenceHash] field is not equal to the given value. | [optional] |
| **filterHeaderEvidenceHashLike** | **String**| Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderEvidenceHashIlike** | **String**| Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value. | [optional] |
| **filterHeaderProposerAddress** | **String**| Filter the results where the [header.proposerAddress] field is equal to the given value. | [optional] |
| **filterHeaderProposerAddressNeq** | **String**| Filter the results where the [header.proposerAddress] field is not equal to the given value. | [optional] |
| **filterHeaderProposerAddressLike** | **String**| Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value. | [optional] |
| **filterHeaderProposerAddressIlike** | **String**| Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiBlocksGetIncludeParameter**](.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiBlocksGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiBlocksGet200Response**](ApiBlocksGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

<a name="apiEntitiesGet"></a>
# **apiEntitiesGet**
> ApiEntitiesGet200Response apiEntitiesGet(fieldsEntities, filterModule, filterModuleNeq, filterModuleLike, filterModuleIlike, filterType, filterTypeNeq, filterTypeLike, filterTypeIlike, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, sort)

List entities

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://railway.test");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    ApiEntitiesGetFieldsEntitiesParameter fieldsEntities = new ApiEntitiesGetFieldsEntitiesParameter(); // ApiEntitiesGetFieldsEntitiesParameter | Include the given fields in the response.
    String filterModule = "filterModule_example"; // String | Filter the results where the [module] field is equal to the given value.
    String filterModuleNeq = "filterModuleNeq_example"; // String | Filter the results where the [module] field is not equal to the given value.
    String filterModuleLike = "filterModuleLike_example"; // String | Filter the results where the [module] field is similar to the given case sensitive value.
    String filterModuleIlike = "filterModuleIlike_example"; // String | Filter the results where the [module] field is similar to the given case insensitive value.
    String filterType = "filterType_example"; // String | Filter the results where the [type] field is equal to the given value.
    String filterTypeNeq = "filterTypeNeq_example"; // String | Filter the results where the [type] field is not equal to the given value.
    String filterTypeLike = "filterTypeLike_example"; // String | Filter the results where the [type] field is similar to the given case sensitive value.
    String filterTypeIlike = "filterTypeIlike_example"; // String | Filter the results where the [type] field is similar to the given case insensitive value.
    String filterKey = "filterKey_example"; // String | Filter the results where the [key] field is equal to the given value.
    String filterKeyNeq = "filterKeyNeq_example"; // String | Filter the results where the [key] field is not equal to the given value.
    String filterKeyLike = "filterKeyLike_example"; // String | Filter the results where the [key] field is similar to the given case sensitive value.
    String filterKeyIlike = "filterKeyIlike_example"; // String | Filter the results where the [key] field is similar to the given case insensitive value.
    String filterValue = "filterValue_example"; // String | Filter the results where the [value] field is equal to the given value.
    String filterValueNeq = "filterValueNeq_example"; // String | Filter the results where the [value] field is not equal to the given value.
    String filterValueLike = "filterValueLike_example"; // String | Filter the results where the [value] field is similar to the given case sensitive value.
    String filterValueIlike = "filterValueIlike_example"; // String | Filter the results where the [value] field is similar to the given case insensitive value.
    ApiEntitiesGetSortParameter sort = new ApiEntitiesGetSortParameter(); // ApiEntitiesGetSortParameter | Sort the results by the given field and direction.
    try {
      ApiEntitiesGet200Response result = apiInstance.apiEntitiesGet(fieldsEntities, filterModule, filterModuleNeq, filterModuleLike, filterModuleIlike, filterType, filterTypeNeq, filterTypeLike, filterTypeIlike, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#apiEntitiesGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fieldsEntities** | [**ApiEntitiesGetFieldsEntitiesParameter**](.md)| Include the given fields in the response. | [optional] |
| **filterModule** | **String**| Filter the results where the [module] field is equal to the given value. | [optional] |
| **filterModuleNeq** | **String**| Filter the results where the [module] field is not equal to the given value. | [optional] |
| **filterModuleLike** | **String**| Filter the results where the [module] field is similar to the given case sensitive value. | [optional] |
| **filterModuleIlike** | **String**| Filter the results where the [module] field is similar to the given case insensitive value. | [optional] |
| **filterType** | **String**| Filter the results where the [type] field is equal to the given value. | [optional] |
| **filterTypeNeq** | **String**| Filter the results where the [type] field is not equal to the given value. | [optional] |
| **filterTypeLike** | **String**| Filter the results where the [type] field is similar to the given case sensitive value. | [optional] |
| **filterTypeIlike** | **String**| Filter the results where the [type] field is similar to the given case insensitive value. | [optional] |
| **filterKey** | **String**| Filter the results where the [key] field is equal to the given value. | [optional] |
| **filterKeyNeq** | **String**| Filter the results where the [key] field is not equal to the given value. | [optional] |
| **filterKeyLike** | **String**| Filter the results where the [key] field is similar to the given case sensitive value. | [optional] |
| **filterKeyIlike** | **String**| Filter the results where the [key] field is similar to the given case insensitive value. | [optional] |
| **filterValue** | **String**| Filter the results where the [value] field is equal to the given value. | [optional] |
| **filterValueNeq** | **String**| Filter the results where the [value] field is not equal to the given value. | [optional] |
| **filterValueLike** | **String**| Filter the results where the [value] field is similar to the given case sensitive value. | [optional] |
| **filterValueIlike** | **String**| Filter the results where the [value] field is similar to the given case insensitive value. | [optional] |
| **sort** | [**ApiEntitiesGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiEntitiesGet200Response**](ApiEntitiesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

<a name="apiTransactionsGet"></a>
# **apiTransactionsGet**
> ApiTransactionsGet200Response apiTransactionsGet(fieldsAccounts, filterHash, filterHashNeq, filterHashLike, filterHashIlike, filterSender, filterSenderNeq, filterSenderLike, filterSenderIlike, filterRecipient, filterRecipientNeq, filterRecipientLike, filterRecipientIlike, filterGas, filterNonce, filterSignature, filterSignatureNeq, filterSignatureLike, filterSignatureIlike, filterVersion, filterVersionNeq, filterVersionLike, filterVersionIlike, filterMessageHandler, filterMessageHandlerNeq, filterMessageHandlerLike, filterMessageHandlerIlike, filterMessageVersion, filterMessageVersionNeq, filterMessageVersionLike, filterMessageVersionIlike, filterMessageNetwork, filterMessageNetworkNeq, filterMessageNetworkLike, filterMessageNetworkIlike, filterMessageContent, filterMessageContentNeq, filterMessageContentLike, filterMessageContentIlike, include, sort)

List transactions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://railway.test");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    ApiTransactionsGetFieldsAccountsParameter fieldsAccounts = new ApiTransactionsGetFieldsAccountsParameter(); // ApiTransactionsGetFieldsAccountsParameter | Include the given fields in the response.
    String filterHash = "filterHash_example"; // String | Filter the results where the [hash] field is equal to the given value.
    String filterHashNeq = "filterHashNeq_example"; // String | Filter the results where the [hash] field is not equal to the given value.
    String filterHashLike = "filterHashLike_example"; // String | Filter the results where the [hash] field is similar to the given case sensitive value.
    String filterHashIlike = "filterHashIlike_example"; // String | Filter the results where the [hash] field is similar to the given case insensitive value.
    String filterSender = "filterSender_example"; // String | Filter the results where the [sender] field is equal to the given value.
    String filterSenderNeq = "filterSenderNeq_example"; // String | Filter the results where the [sender] field is not equal to the given value.
    String filterSenderLike = "filterSenderLike_example"; // String | Filter the results where the [sender] field is similar to the given case sensitive value.
    String filterSenderIlike = "filterSenderIlike_example"; // String | Filter the results where the [sender] field is similar to the given case insensitive value.
    String filterRecipient = "filterRecipient_example"; // String | Filter the results where the [recipient] field is equal to the given value.
    String filterRecipientNeq = "filterRecipientNeq_example"; // String | Filter the results where the [recipient] field is not equal to the given value.
    String filterRecipientLike = "filterRecipientLike_example"; // String | Filter the results where the [recipient] field is similar to the given case sensitive value.
    String filterRecipientIlike = "filterRecipientIlike_example"; // String | Filter the results where the [recipient] field is similar to the given case insensitive value.
    Integer filterGas = 56; // Integer | Filter the results where the [gas] field is equal to the given value.
    Integer filterNonce = 56; // Integer | Filter the results where the [nonce] field is equal to the given value.
    String filterSignature = "filterSignature_example"; // String | Filter the results where the [signature] field is equal to the given value.
    String filterSignatureNeq = "filterSignatureNeq_example"; // String | Filter the results where the [signature] field is not equal to the given value.
    String filterSignatureLike = "filterSignatureLike_example"; // String | Filter the results where the [signature] field is similar to the given case sensitive value.
    String filterSignatureIlike = "filterSignatureIlike_example"; // String | Filter the results where the [signature] field is similar to the given case insensitive value.
    String filterVersion = "filterVersion_example"; // String | Filter the results where the [version] field is equal to the given value.
    String filterVersionNeq = "filterVersionNeq_example"; // String | Filter the results where the [version] field is not equal to the given value.
    String filterVersionLike = "filterVersionLike_example"; // String | Filter the results where the [version] field is similar to the given case sensitive value.
    String filterVersionIlike = "filterVersionIlike_example"; // String | Filter the results where the [version] field is similar to the given case insensitive value.
    String filterMessageHandler = "filterMessageHandler_example"; // String | Filter the results where the [message.handler] field is equal to the given value.
    String filterMessageHandlerNeq = "filterMessageHandlerNeq_example"; // String | Filter the results where the [message.handler] field is not equal to the given value.
    String filterMessageHandlerLike = "filterMessageHandlerLike_example"; // String | Filter the results where the [message.handler] field is similar to the given case sensitive value.
    String filterMessageHandlerIlike = "filterMessageHandlerIlike_example"; // String | Filter the results where the [message.handler] field is similar to the given case insensitive value.
    String filterMessageVersion = "filterMessageVersion_example"; // String | Filter the results where the [message.version] field is equal to the given value.
    String filterMessageVersionNeq = "filterMessageVersionNeq_example"; // String | Filter the results where the [message.version] field is not equal to the given value.
    String filterMessageVersionLike = "filterMessageVersionLike_example"; // String | Filter the results where the [message.version] field is similar to the given case sensitive value.
    String filterMessageVersionIlike = "filterMessageVersionIlike_example"; // String | Filter the results where the [message.version] field is similar to the given case insensitive value.
    String filterMessageNetwork = "filterMessageNetwork_example"; // String | Filter the results where the [message.network] field is equal to the given value.
    String filterMessageNetworkNeq = "filterMessageNetworkNeq_example"; // String | Filter the results where the [message.network] field is not equal to the given value.
    String filterMessageNetworkLike = "filterMessageNetworkLike_example"; // String | Filter the results where the [message.network] field is similar to the given case sensitive value.
    String filterMessageNetworkIlike = "filterMessageNetworkIlike_example"; // String | Filter the results where the [message.network] field is similar to the given case insensitive value.
    String filterMessageContent = "filterMessageContent_example"; // String | Filter the results where the [message.content] field is equal to the given value.
    String filterMessageContentNeq = "filterMessageContentNeq_example"; // String | Filter the results where the [message.content] field is not equal to the given value.
    String filterMessageContentLike = "filterMessageContentLike_example"; // String | Filter the results where the [message.content] field is similar to the given case sensitive value.
    String filterMessageContentIlike = "filterMessageContentIlike_example"; // String | Filter the results where the [message.content] field is similar to the given case insensitive value.
    ApiTransactionsGetIncludeParameter include = new ApiTransactionsGetIncludeParameter(); // ApiTransactionsGetIncludeParameter | Include the given relationships.
    ApiTransactionsGetSortParameter sort = new ApiTransactionsGetSortParameter(); // ApiTransactionsGetSortParameter | Sort the results by the given field and direction.
    try {
      ApiTransactionsGet200Response result = apiInstance.apiTransactionsGet(fieldsAccounts, filterHash, filterHashNeq, filterHashLike, filterHashIlike, filterSender, filterSenderNeq, filterSenderLike, filterSenderIlike, filterRecipient, filterRecipientNeq, filterRecipientLike, filterRecipientIlike, filterGas, filterNonce, filterSignature, filterSignatureNeq, filterSignatureLike, filterSignatureIlike, filterVersion, filterVersionNeq, filterVersionLike, filterVersionIlike, filterMessageHandler, filterMessageHandlerNeq, filterMessageHandlerLike, filterMessageHandlerIlike, filterMessageVersion, filterMessageVersionNeq, filterMessageVersionLike, filterMessageVersionIlike, filterMessageNetwork, filterMessageNetworkNeq, filterMessageNetworkLike, filterMessageNetworkIlike, filterMessageContent, filterMessageContentNeq, filterMessageContentLike, filterMessageContentIlike, include, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#apiTransactionsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fieldsAccounts** | [**ApiTransactionsGetFieldsAccountsParameter**](.md)| Include the given fields in the response. | [optional] |
| **filterHash** | **String**| Filter the results where the [hash] field is equal to the given value. | [optional] |
| **filterHashNeq** | **String**| Filter the results where the [hash] field is not equal to the given value. | [optional] |
| **filterHashLike** | **String**| Filter the results where the [hash] field is similar to the given case sensitive value. | [optional] |
| **filterHashIlike** | **String**| Filter the results where the [hash] field is similar to the given case insensitive value. | [optional] |
| **filterSender** | **String**| Filter the results where the [sender] field is equal to the given value. | [optional] |
| **filterSenderNeq** | **String**| Filter the results where the [sender] field is not equal to the given value. | [optional] |
| **filterSenderLike** | **String**| Filter the results where the [sender] field is similar to the given case sensitive value. | [optional] |
| **filterSenderIlike** | **String**| Filter the results where the [sender] field is similar to the given case insensitive value. | [optional] |
| **filterRecipient** | **String**| Filter the results where the [recipient] field is equal to the given value. | [optional] |
| **filterRecipientNeq** | **String**| Filter the results where the [recipient] field is not equal to the given value. | [optional] |
| **filterRecipientLike** | **String**| Filter the results where the [recipient] field is similar to the given case sensitive value. | [optional] |
| **filterRecipientIlike** | **String**| Filter the results where the [recipient] field is similar to the given case insensitive value. | [optional] |
| **filterGas** | **Integer**| Filter the results where the [gas] field is equal to the given value. | [optional] |
| **filterNonce** | **Integer**| Filter the results where the [nonce] field is equal to the given value. | [optional] |
| **filterSignature** | **String**| Filter the results where the [signature] field is equal to the given value. | [optional] |
| **filterSignatureNeq** | **String**| Filter the results where the [signature] field is not equal to the given value. | [optional] |
| **filterSignatureLike** | **String**| Filter the results where the [signature] field is similar to the given case sensitive value. | [optional] |
| **filterSignatureIlike** | **String**| Filter the results where the [signature] field is similar to the given case insensitive value. | [optional] |
| **filterVersion** | **String**| Filter the results where the [version] field is equal to the given value. | [optional] |
| **filterVersionNeq** | **String**| Filter the results where the [version] field is not equal to the given value. | [optional] |
| **filterVersionLike** | **String**| Filter the results where the [version] field is similar to the given case sensitive value. | [optional] |
| **filterVersionIlike** | **String**| Filter the results where the [version] field is similar to the given case insensitive value. | [optional] |
| **filterMessageHandler** | **String**| Filter the results where the [message.handler] field is equal to the given value. | [optional] |
| **filterMessageHandlerNeq** | **String**| Filter the results where the [message.handler] field is not equal to the given value. | [optional] |
| **filterMessageHandlerLike** | **String**| Filter the results where the [message.handler] field is similar to the given case sensitive value. | [optional] |
| **filterMessageHandlerIlike** | **String**| Filter the results where the [message.handler] field is similar to the given case insensitive value. | [optional] |
| **filterMessageVersion** | **String**| Filter the results where the [message.version] field is equal to the given value. | [optional] |
| **filterMessageVersionNeq** | **String**| Filter the results where the [message.version] field is not equal to the given value. | [optional] |
| **filterMessageVersionLike** | **String**| Filter the results where the [message.version] field is similar to the given case sensitive value. | [optional] |
| **filterMessageVersionIlike** | **String**| Filter the results where the [message.version] field is similar to the given case insensitive value. | [optional] |
| **filterMessageNetwork** | **String**| Filter the results where the [message.network] field is equal to the given value. | [optional] |
| **filterMessageNetworkNeq** | **String**| Filter the results where the [message.network] field is not equal to the given value. | [optional] |
| **filterMessageNetworkLike** | **String**| Filter the results where the [message.network] field is similar to the given case sensitive value. | [optional] |
| **filterMessageNetworkIlike** | **String**| Filter the results where the [message.network] field is similar to the given case insensitive value. | [optional] |
| **filterMessageContent** | **String**| Filter the results where the [message.content] field is equal to the given value. | [optional] |
| **filterMessageContentNeq** | **String**| Filter the results where the [message.content] field is not equal to the given value. | [optional] |
| **filterMessageContentLike** | **String**| Filter the results where the [message.content] field is similar to the given case sensitive value. | [optional] |
| **filterMessageContentIlike** | **String**| Filter the results where the [message.content] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiTransactionsGetIncludeParameter**](.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiTransactionsGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiTransactionsGet200Response**](ApiTransactionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

<a name="apiTransactionsMetadataGet"></a>
# **apiTransactionsMetadataGet**
> ApiTransactionsMetadataGet200Response apiTransactionsMetadataGet(fieldsTransactionMetadata, filterTransactionId, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, include, sort)

List transaction metadata

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://railway.test");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    ApiTransactionsMetadataGetFieldsTransactionMetadataParameter fieldsTransactionMetadata = new ApiTransactionsMetadataGetFieldsTransactionMetadataParameter(); // ApiTransactionsMetadataGetFieldsTransactionMetadataParameter | Include the given fields in the response.
    Integer filterTransactionId = 56; // Integer | Filter the results where the [transaction_id] field is equal to the given value.
    String filterKey = "filterKey_example"; // String | Filter the results where the [key] field is equal to the given value.
    String filterKeyNeq = "filterKeyNeq_example"; // String | Filter the results where the [key] field is not equal to the given value.
    String filterKeyLike = "filterKeyLike_example"; // String | Filter the results where the [key] field is similar to the given case sensitive value.
    String filterKeyIlike = "filterKeyIlike_example"; // String | Filter the results where the [key] field is similar to the given case insensitive value.
    String filterValue = "filterValue_example"; // String | Filter the results where the [value] field is equal to the given value.
    String filterValueNeq = "filterValueNeq_example"; // String | Filter the results where the [value] field is not equal to the given value.
    String filterValueLike = "filterValueLike_example"; // String | Filter the results where the [value] field is similar to the given case sensitive value.
    String filterValueIlike = "filterValueIlike_example"; // String | Filter the results where the [value] field is similar to the given case insensitive value.
    ApiTransactionsMetadataGetIncludeParameter include = new ApiTransactionsMetadataGetIncludeParameter(); // ApiTransactionsMetadataGetIncludeParameter | Include the given relationships.
    ApiTransactionsMetadataGetSortParameter sort = new ApiTransactionsMetadataGetSortParameter(); // ApiTransactionsMetadataGetSortParameter | Sort the results by the given field and direction.
    try {
      ApiTransactionsMetadataGet200Response result = apiInstance.apiTransactionsMetadataGet(fieldsTransactionMetadata, filterTransactionId, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, include, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#apiTransactionsMetadataGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fieldsTransactionMetadata** | [**ApiTransactionsMetadataGetFieldsTransactionMetadataParameter**](.md)| Include the given fields in the response. | [optional] |
| **filterTransactionId** | **Integer**| Filter the results where the [transaction_id] field is equal to the given value. | [optional] |
| **filterKey** | **String**| Filter the results where the [key] field is equal to the given value. | [optional] |
| **filterKeyNeq** | **String**| Filter the results where the [key] field is not equal to the given value. | [optional] |
| **filterKeyLike** | **String**| Filter the results where the [key] field is similar to the given case sensitive value. | [optional] |
| **filterKeyIlike** | **String**| Filter the results where the [key] field is similar to the given case insensitive value. | [optional] |
| **filterValue** | **String**| Filter the results where the [value] field is equal to the given value. | [optional] |
| **filterValueNeq** | **String**| Filter the results where the [value] field is not equal to the given value. | [optional] |
| **filterValueLike** | **String**| Filter the results where the [value] field is similar to the given case sensitive value. | [optional] |
| **filterValueIlike** | **String**| Filter the results where the [value] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiTransactionsMetadataGetIncludeParameter**](.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiTransactionsMetadataGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiTransactionsMetadataGet200Response**](ApiTransactionsMetadataGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

<a name="apiTransactionsReceiptsGet"></a>
# **apiTransactionsReceiptsGet**
> ApiTransactionsReceiptsGet200Response apiTransactionsReceiptsGet(fieldsTransactionReceipts, filterTransactionId, filterBlockHash, filterBlockHashNeq, filterBlockHashLike, filterBlockHashIlike, filterBlockNumber, filterBlockNumberNeq, filterBlockNumberLike, filterBlockNumberIlike, include, sort)

List transaction receipts

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://railway.test");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter fieldsTransactionReceipts = new ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter(); // ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter | Include the given fields in the response.
    Integer filterTransactionId = 56; // Integer | Filter the results where the [transaction_id] field is equal to the given value.
    String filterBlockHash = "filterBlockHash_example"; // String | Filter the results where the [block_hash] field is equal to the given value.
    String filterBlockHashNeq = "filterBlockHashNeq_example"; // String | Filter the results where the [block_hash] field is not equal to the given value.
    String filterBlockHashLike = "filterBlockHashLike_example"; // String | Filter the results where the [block_hash] field is similar to the given case sensitive value.
    String filterBlockHashIlike = "filterBlockHashIlike_example"; // String | Filter the results where the [block_hash] field is similar to the given case insensitive value.
    String filterBlockNumber = "filterBlockNumber_example"; // String | Filter the results where the [block_number] field is equal to the given value.
    String filterBlockNumberNeq = "filterBlockNumberNeq_example"; // String | Filter the results where the [block_number] field is not equal to the given value.
    String filterBlockNumberLike = "filterBlockNumberLike_example"; // String | Filter the results where the [block_number] field is similar to the given case sensitive value.
    String filterBlockNumberIlike = "filterBlockNumberIlike_example"; // String | Filter the results where the [block_number] field is similar to the given case insensitive value.
    ApiTransactionsMetadataGetIncludeParameter include = new ApiTransactionsMetadataGetIncludeParameter(); // ApiTransactionsMetadataGetIncludeParameter | Include the given relationships.
    ApiTransactionsReceiptsGetSortParameter sort = new ApiTransactionsReceiptsGetSortParameter(); // ApiTransactionsReceiptsGetSortParameter | Sort the results by the given field and direction.
    try {
      ApiTransactionsReceiptsGet200Response result = apiInstance.apiTransactionsReceiptsGet(fieldsTransactionReceipts, filterTransactionId, filterBlockHash, filterBlockHashNeq, filterBlockHashLike, filterBlockHashIlike, filterBlockNumber, filterBlockNumberNeq, filterBlockNumberLike, filterBlockNumberIlike, include, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#apiTransactionsReceiptsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fieldsTransactionReceipts** | [**ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter**](.md)| Include the given fields in the response. | [optional] |
| **filterTransactionId** | **Integer**| Filter the results where the [transaction_id] field is equal to the given value. | [optional] |
| **filterBlockHash** | **String**| Filter the results where the [block_hash] field is equal to the given value. | [optional] |
| **filterBlockHashNeq** | **String**| Filter the results where the [block_hash] field is not equal to the given value. | [optional] |
| **filterBlockHashLike** | **String**| Filter the results where the [block_hash] field is similar to the given case sensitive value. | [optional] |
| **filterBlockHashIlike** | **String**| Filter the results where the [block_hash] field is similar to the given case insensitive value. | [optional] |
| **filterBlockNumber** | **String**| Filter the results where the [block_number] field is equal to the given value. | [optional] |
| **filterBlockNumberNeq** | **String**| Filter the results where the [block_number] field is not equal to the given value. | [optional] |
| **filterBlockNumberLike** | **String**| Filter the results where the [block_number] field is similar to the given case sensitive value. | [optional] |
| **filterBlockNumberIlike** | **String**| Filter the results where the [block_number] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiTransactionsMetadataGetIncludeParameter**](.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiTransactionsReceiptsGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiTransactionsReceiptsGet200Response**](ApiTransactionsReceiptsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

<a name="apiValidatorsUpdatesGet"></a>
# **apiValidatorsUpdatesGet**
> ApiValidatorsUpdatesGet200Response apiValidatorsUpdatesGet(fieldsBlockNumber, filterBlockNumber, include, sort)

List validator updates

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://railway.test");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    ApiValidatorsUpdatesGetFieldsBlockNumberParameter fieldsBlockNumber = new ApiValidatorsUpdatesGetFieldsBlockNumberParameter(); // ApiValidatorsUpdatesGetFieldsBlockNumberParameter | Include the given fields in the response.
    Integer filterBlockNumber = 56; // Integer | Filter the results where the [block_number] field is equal to the given value.
    ApiValidatorsUpdatesGetIncludeParameter include = new ApiValidatorsUpdatesGetIncludeParameter(); // ApiValidatorsUpdatesGetIncludeParameter | Include the given relationships.
    ApiValidatorsUpdatesGetSortParameter sort = new ApiValidatorsUpdatesGetSortParameter(); // ApiValidatorsUpdatesGetSortParameter | Sort the results by the given field and direction.
    try {
      ApiValidatorsUpdatesGet200Response result = apiInstance.apiValidatorsUpdatesGet(fieldsBlockNumber, filterBlockNumber, include, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#apiValidatorsUpdatesGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fieldsBlockNumber** | [**ApiValidatorsUpdatesGetFieldsBlockNumberParameter**](.md)| Include the given fields in the response. | [optional] |
| **filterBlockNumber** | **Integer**| Filter the results where the [block_number] field is equal to the given value. | [optional] |
| **include** | [**ApiValidatorsUpdatesGetIncludeParameter**](.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiValidatorsUpdatesGetSortParameter**](.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiValidatorsUpdatesGet200Response**](ApiValidatorsUpdatesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

