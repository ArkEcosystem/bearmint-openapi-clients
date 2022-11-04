# OpenAPI\Client\DefaultApi

All URIs are relative to http://railway.test, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**apiAccountsGet()**](DefaultApi.md#apiAccountsGet) | **GET** /api/accounts | List accounts |
| [**apiAccountsMetadataGet()**](DefaultApi.md#apiAccountsMetadataGet) | **GET** /api/accounts/metadata | List account metadata |
| [**apiBlocksGet()**](DefaultApi.md#apiBlocksGet) | **GET** /api/blocks | List blocks |
| [**apiEntitiesGet()**](DefaultApi.md#apiEntitiesGet) | **GET** /api/entities | List entities |
| [**apiTransactionsGet()**](DefaultApi.md#apiTransactionsGet) | **GET** /api/transactions | List transactions |
| [**apiTransactionsMetadataGet()**](DefaultApi.md#apiTransactionsMetadataGet) | **GET** /api/transactions/metadata | List transaction metadata |
| [**apiTransactionsReceiptsGet()**](DefaultApi.md#apiTransactionsReceiptsGet) | **GET** /api/transactions/receipts | List transaction receipts |
| [**apiValidatorsUpdatesGet()**](DefaultApi.md#apiValidatorsUpdatesGet) | **GET** /api/validators/updates | List validator updates |


## `apiAccountsGet()`

```php
apiAccountsGet($fields_accounts, $filter_address, $filter_address_neq, $filter_address_like, $filter_address_ilike, $filter_public_key, $filter_public_key_neq, $filter_public_key_like, $filter_public_key_ilike, $filter_name, $filter_name_neq, $filter_name_like, $filter_name_ilike, $filter_nonce, $filter_validator_address, $filter_validator_address_neq, $filter_validator_address_like, $filter_validator_address_ilike, $filter_validator_public_key, $filter_validator_public_key_neq, $filter_validator_public_key_like, $filter_validator_public_key_ilike, $filter_validator_power, $filter_validator_power_neq, $filter_validator_power_like, $filter_validator_power_ilike, $include, $sort): \OpenAPI\Client\Model\ApiAccountsGet200Response
```

List accounts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$fields_accounts = new \OpenAPI\Client\Model\ApiAccountsGetFieldsAccountsParameter(); // ApiAccountsGetFieldsAccountsParameter | Include the given fields in the response.
$filter_address = 'filter_address_example'; // string | Filter the results where the [address] field is equal to the given value.
$filter_address_neq = 'filter_address_neq_example'; // string | Filter the results where the [address] field is not equal to the given value.
$filter_address_like = 'filter_address_like_example'; // string | Filter the results where the [address] field is similar to the given case sensitive value.
$filter_address_ilike = 'filter_address_ilike_example'; // string | Filter the results where the [address] field is similar to the given case insensitive value.
$filter_public_key = 'filter_public_key_example'; // string | Filter the results where the [public_key] field is equal to the given value.
$filter_public_key_neq = 'filter_public_key_neq_example'; // string | Filter the results where the [public_key] field is not equal to the given value.
$filter_public_key_like = 'filter_public_key_like_example'; // string | Filter the results where the [public_key] field is similar to the given case sensitive value.
$filter_public_key_ilike = 'filter_public_key_ilike_example'; // string | Filter the results where the [public_key] field is similar to the given case insensitive value.
$filter_name = 'filter_name_example'; // string | Filter the results where the [name] field is equal to the given value.
$filter_name_neq = 'filter_name_neq_example'; // string | Filter the results where the [name] field is not equal to the given value.
$filter_name_like = 'filter_name_like_example'; // string | Filter the results where the [name] field is similar to the given case sensitive value.
$filter_name_ilike = 'filter_name_ilike_example'; // string | Filter the results where the [name] field is similar to the given case insensitive value.
$filter_nonce = 56; // int | Filter the results where the [nonce] field is equal to the given value.
$filter_validator_address = 'filter_validator_address_example'; // string | Filter the results where the [validator.address] field is equal to the given value.
$filter_validator_address_neq = 'filter_validator_address_neq_example'; // string | Filter the results where the [validator.address] field is not equal to the given value.
$filter_validator_address_like = 'filter_validator_address_like_example'; // string | Filter the results where the [validator.address] field is similar to the given case sensitive value.
$filter_validator_address_ilike = 'filter_validator_address_ilike_example'; // string | Filter the results where the [validator.address] field is similar to the given case insensitive value.
$filter_validator_public_key = 'filter_validator_public_key_example'; // string | Filter the results where the [validator.publicKey] field is equal to the given value.
$filter_validator_public_key_neq = 'filter_validator_public_key_neq_example'; // string | Filter the results where the [validator.publicKey] field is not equal to the given value.
$filter_validator_public_key_like = 'filter_validator_public_key_like_example'; // string | Filter the results where the [validator.publicKey] field is similar to the given case sensitive value.
$filter_validator_public_key_ilike = 'filter_validator_public_key_ilike_example'; // string | Filter the results where the [validator.publicKey] field is similar to the given case insensitive value.
$filter_validator_power = 'filter_validator_power_example'; // string | Filter the results where the [validator.power] field is equal to the given value.
$filter_validator_power_neq = 'filter_validator_power_neq_example'; // string | Filter the results where the [validator.power] field is not equal to the given value.
$filter_validator_power_like = 'filter_validator_power_like_example'; // string | Filter the results where the [validator.power] field is similar to the given case sensitive value.
$filter_validator_power_ilike = 'filter_validator_power_ilike_example'; // string | Filter the results where the [validator.power] field is similar to the given case insensitive value.
$include = new \OpenAPI\Client\Model\ApiAccountsGetIncludeParameter(); // ApiAccountsGetIncludeParameter | Include the given relationships.
$sort = new \OpenAPI\Client\Model\ApiAccountsGetSortParameter(); // ApiAccountsGetSortParameter | Sort the results by the given field and direction.

try {
    $result = $apiInstance->apiAccountsGet($fields_accounts, $filter_address, $filter_address_neq, $filter_address_like, $filter_address_ilike, $filter_public_key, $filter_public_key_neq, $filter_public_key_like, $filter_public_key_ilike, $filter_name, $filter_name_neq, $filter_name_like, $filter_name_ilike, $filter_nonce, $filter_validator_address, $filter_validator_address_neq, $filter_validator_address_like, $filter_validator_address_ilike, $filter_validator_public_key, $filter_validator_public_key_neq, $filter_validator_public_key_like, $filter_validator_public_key_ilike, $filter_validator_power, $filter_validator_power_neq, $filter_validator_power_like, $filter_validator_power_ilike, $include, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->apiAccountsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fields_accounts** | [**ApiAccountsGetFieldsAccountsParameter**](../Model/.md)| Include the given fields in the response. | [optional] |
| **filter_address** | **string**| Filter the results where the [address] field is equal to the given value. | [optional] |
| **filter_address_neq** | **string**| Filter the results where the [address] field is not equal to the given value. | [optional] |
| **filter_address_like** | **string**| Filter the results where the [address] field is similar to the given case sensitive value. | [optional] |
| **filter_address_ilike** | **string**| Filter the results where the [address] field is similar to the given case insensitive value. | [optional] |
| **filter_public_key** | **string**| Filter the results where the [public_key] field is equal to the given value. | [optional] |
| **filter_public_key_neq** | **string**| Filter the results where the [public_key] field is not equal to the given value. | [optional] |
| **filter_public_key_like** | **string**| Filter the results where the [public_key] field is similar to the given case sensitive value. | [optional] |
| **filter_public_key_ilike** | **string**| Filter the results where the [public_key] field is similar to the given case insensitive value. | [optional] |
| **filter_name** | **string**| Filter the results where the [name] field is equal to the given value. | [optional] |
| **filter_name_neq** | **string**| Filter the results where the [name] field is not equal to the given value. | [optional] |
| **filter_name_like** | **string**| Filter the results where the [name] field is similar to the given case sensitive value. | [optional] |
| **filter_name_ilike** | **string**| Filter the results where the [name] field is similar to the given case insensitive value. | [optional] |
| **filter_nonce** | **int**| Filter the results where the [nonce] field is equal to the given value. | [optional] |
| **filter_validator_address** | **string**| Filter the results where the [validator.address] field is equal to the given value. | [optional] |
| **filter_validator_address_neq** | **string**| Filter the results where the [validator.address] field is not equal to the given value. | [optional] |
| **filter_validator_address_like** | **string**| Filter the results where the [validator.address] field is similar to the given case sensitive value. | [optional] |
| **filter_validator_address_ilike** | **string**| Filter the results where the [validator.address] field is similar to the given case insensitive value. | [optional] |
| **filter_validator_public_key** | **string**| Filter the results where the [validator.publicKey] field is equal to the given value. | [optional] |
| **filter_validator_public_key_neq** | **string**| Filter the results where the [validator.publicKey] field is not equal to the given value. | [optional] |
| **filter_validator_public_key_like** | **string**| Filter the results where the [validator.publicKey] field is similar to the given case sensitive value. | [optional] |
| **filter_validator_public_key_ilike** | **string**| Filter the results where the [validator.publicKey] field is similar to the given case insensitive value. | [optional] |
| **filter_validator_power** | **string**| Filter the results where the [validator.power] field is equal to the given value. | [optional] |
| **filter_validator_power_neq** | **string**| Filter the results where the [validator.power] field is not equal to the given value. | [optional] |
| **filter_validator_power_like** | **string**| Filter the results where the [validator.power] field is similar to the given case sensitive value. | [optional] |
| **filter_validator_power_ilike** | **string**| Filter the results where the [validator.power] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiAccountsGetIncludeParameter**](../Model/.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiAccountsGetSortParameter**](../Model/.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**\OpenAPI\Client\Model\ApiAccountsGet200Response**](../Model/ApiAccountsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAccountsMetadataGet()`

```php
apiAccountsMetadataGet($fields_accounts_metadata, $filter_account_id, $filter_module, $filter_module_neq, $filter_module_like, $filter_module_ilike, $filter_key, $filter_key_neq, $filter_key_like, $filter_key_ilike, $filter_value, $filter_value_neq, $filter_value_like, $filter_value_ilike, $include, $sort): \OpenAPI\Client\Model\ApiAccountsMetadataGet200Response
```

List account metadata

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$fields_accounts_metadata = new \OpenAPI\Client\Model\ApiAccountsMetadataGetFieldsAccountsMetadataParameter(); // ApiAccountsMetadataGetFieldsAccountsMetadataParameter | Include the given fields in the response.
$filter_account_id = 56; // int | Filter the results where the [account_id] field is equal to the given value.
$filter_module = 'filter_module_example'; // string | Filter the results where the [module] field is equal to the given value.
$filter_module_neq = 'filter_module_neq_example'; // string | Filter the results where the [module] field is not equal to the given value.
$filter_module_like = 'filter_module_like_example'; // string | Filter the results where the [module] field is similar to the given case sensitive value.
$filter_module_ilike = 'filter_module_ilike_example'; // string | Filter the results where the [module] field is similar to the given case insensitive value.
$filter_key = 'filter_key_example'; // string | Filter the results where the [key] field is equal to the given value.
$filter_key_neq = 'filter_key_neq_example'; // string | Filter the results where the [key] field is not equal to the given value.
$filter_key_like = 'filter_key_like_example'; // string | Filter the results where the [key] field is similar to the given case sensitive value.
$filter_key_ilike = 'filter_key_ilike_example'; // string | Filter the results where the [key] field is similar to the given case insensitive value.
$filter_value = 'filter_value_example'; // string | Filter the results where the [value] field is equal to the given value.
$filter_value_neq = 'filter_value_neq_example'; // string | Filter the results where the [value] field is not equal to the given value.
$filter_value_like = 'filter_value_like_example'; // string | Filter the results where the [value] field is similar to the given case sensitive value.
$filter_value_ilike = 'filter_value_ilike_example'; // string | Filter the results where the [value] field is similar to the given case insensitive value.
$include = new \OpenAPI\Client\Model\ApiAccountsMetadataGetIncludeParameter(); // ApiAccountsMetadataGetIncludeParameter | Include the given relationships.
$sort = new \OpenAPI\Client\Model\ApiAccountsMetadataGetSortParameter(); // ApiAccountsMetadataGetSortParameter | Sort the results by the given field and direction.

try {
    $result = $apiInstance->apiAccountsMetadataGet($fields_accounts_metadata, $filter_account_id, $filter_module, $filter_module_neq, $filter_module_like, $filter_module_ilike, $filter_key, $filter_key_neq, $filter_key_like, $filter_key_ilike, $filter_value, $filter_value_neq, $filter_value_like, $filter_value_ilike, $include, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->apiAccountsMetadataGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fields_accounts_metadata** | [**ApiAccountsMetadataGetFieldsAccountsMetadataParameter**](../Model/.md)| Include the given fields in the response. | [optional] |
| **filter_account_id** | **int**| Filter the results where the [account_id] field is equal to the given value. | [optional] |
| **filter_module** | **string**| Filter the results where the [module] field is equal to the given value. | [optional] |
| **filter_module_neq** | **string**| Filter the results where the [module] field is not equal to the given value. | [optional] |
| **filter_module_like** | **string**| Filter the results where the [module] field is similar to the given case sensitive value. | [optional] |
| **filter_module_ilike** | **string**| Filter the results where the [module] field is similar to the given case insensitive value. | [optional] |
| **filter_key** | **string**| Filter the results where the [key] field is equal to the given value. | [optional] |
| **filter_key_neq** | **string**| Filter the results where the [key] field is not equal to the given value. | [optional] |
| **filter_key_like** | **string**| Filter the results where the [key] field is similar to the given case sensitive value. | [optional] |
| **filter_key_ilike** | **string**| Filter the results where the [key] field is similar to the given case insensitive value. | [optional] |
| **filter_value** | **string**| Filter the results where the [value] field is equal to the given value. | [optional] |
| **filter_value_neq** | **string**| Filter the results where the [value] field is not equal to the given value. | [optional] |
| **filter_value_like** | **string**| Filter the results where the [value] field is similar to the given case sensitive value. | [optional] |
| **filter_value_ilike** | **string**| Filter the results where the [value] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiAccountsMetadataGetIncludeParameter**](../Model/.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiAccountsMetadataGetSortParameter**](../Model/.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**\OpenAPI\Client\Model\ApiAccountsMetadataGet200Response**](../Model/ApiAccountsMetadataGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiBlocksGet()`

```php
apiBlocksGet($fields_blocks, $filter_hash, $filter_hash_neq, $filter_hash_like, $filter_hash_ilike, $filter_height, $filter_header_version_block, $filter_header_chain_id, $filter_header_chain_id_neq, $filter_header_chain_id_like, $filter_header_chain_id_ilike, $filter_header_height, $filter_header_time, $filter_header_time_neq, $filter_header_time_like, $filter_header_time_ilike, $filter_header_last_block_id_hash, $filter_header_last_block_id_hash_neq, $filter_header_last_block_id_hash_like, $filter_header_last_block_id_hash_ilike, $filter_header_last_block_id_part_set_header_total, $filter_header_last_block_id_part_set_header_hash, $filter_header_last_block_id_part_set_header_hash_neq, $filter_header_last_block_id_part_set_header_hash_like, $filter_header_last_block_id_part_set_header_hash_ilike, $filter_header_last_commit_hash, $filter_header_last_commit_hash_neq, $filter_header_last_commit_hash_like, $filter_header_last_commit_hash_ilike, $filter_header_data_hash, $filter_header_data_hash_neq, $filter_header_data_hash_like, $filter_header_data_hash_ilike, $filter_header_validators_hash, $filter_header_validators_hash_neq, $filter_header_validators_hash_like, $filter_header_validators_hash_ilike, $filter_header_next_validators_hash, $filter_header_next_validators_hash_neq, $filter_header_next_validators_hash_like, $filter_header_next_validators_hash_ilike, $filter_header_consensus_hash, $filter_header_consensus_hash_neq, $filter_header_consensus_hash_like, $filter_header_consensus_hash_ilike, $filter_header_app_hash, $filter_header_app_hash_neq, $filter_header_app_hash_like, $filter_header_app_hash_ilike, $filter_header_last_results_hash, $filter_header_last_results_hash_neq, $filter_header_last_results_hash_like, $filter_header_last_results_hash_ilike, $filter_header_evidence_hash, $filter_header_evidence_hash_neq, $filter_header_evidence_hash_like, $filter_header_evidence_hash_ilike, $filter_header_proposer_address, $filter_header_proposer_address_neq, $filter_header_proposer_address_like, $filter_header_proposer_address_ilike, $include, $sort): \OpenAPI\Client\Model\ApiBlocksGet200Response
```

List blocks

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$fields_blocks = new \OpenAPI\Client\Model\ApiBlocksGetFieldsBlocksParameter(); // ApiBlocksGetFieldsBlocksParameter | Include the given fields in the response.
$filter_hash = 'filter_hash_example'; // string | Filter the results where the [hash] field is equal to the given value.
$filter_hash_neq = 'filter_hash_neq_example'; // string | Filter the results where the [hash] field is not equal to the given value.
$filter_hash_like = 'filter_hash_like_example'; // string | Filter the results where the [hash] field is similar to the given case sensitive value.
$filter_hash_ilike = 'filter_hash_ilike_example'; // string | Filter the results where the [hash] field is similar to the given case insensitive value.
$filter_height = 56; // int | Filter the results where the [height] field is equal to the given value.
$filter_header_version_block = 56; // int | Filter the results where the [header.version.block] field is equal to the given value.
$filter_header_chain_id = 'filter_header_chain_id_example'; // string | Filter the results where the [header.chainId] field is equal to the given value.
$filter_header_chain_id_neq = 'filter_header_chain_id_neq_example'; // string | Filter the results where the [header.chainId] field is not equal to the given value.
$filter_header_chain_id_like = 'filter_header_chain_id_like_example'; // string | Filter the results where the [header.chainId] field is similar to the given case sensitive value.
$filter_header_chain_id_ilike = 'filter_header_chain_id_ilike_example'; // string | Filter the results where the [header.chainId] field is similar to the given case insensitive value.
$filter_header_height = 56; // int | Filter the results where the [header.height] field is equal to the given value.
$filter_header_time = 'filter_header_time_example'; // string | Filter the results where the [header.time] field is equal to the given value.
$filter_header_time_neq = 'filter_header_time_neq_example'; // string | Filter the results where the [header.time] field is not equal to the given value.
$filter_header_time_like = 'filter_header_time_like_example'; // string | Filter the results where the [header.time] field is similar to the given case sensitive value.
$filter_header_time_ilike = 'filter_header_time_ilike_example'; // string | Filter the results where the [header.time] field is similar to the given case insensitive value.
$filter_header_last_block_id_hash = 'filter_header_last_block_id_hash_example'; // string | Filter the results where the [header.lastBlockId.hash] field is equal to the given value.
$filter_header_last_block_id_hash_neq = 'filter_header_last_block_id_hash_neq_example'; // string | Filter the results where the [header.lastBlockId.hash] field is not equal to the given value.
$filter_header_last_block_id_hash_like = 'filter_header_last_block_id_hash_like_example'; // string | Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value.
$filter_header_last_block_id_hash_ilike = 'filter_header_last_block_id_hash_ilike_example'; // string | Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value.
$filter_header_last_block_id_part_set_header_total = 56; // int | Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value.
$filter_header_last_block_id_part_set_header_hash = 'filter_header_last_block_id_part_set_header_hash_example'; // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value.
$filter_header_last_block_id_part_set_header_hash_neq = 'filter_header_last_block_id_part_set_header_hash_neq_example'; // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value.
$filter_header_last_block_id_part_set_header_hash_like = 'filter_header_last_block_id_part_set_header_hash_like_example'; // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value.
$filter_header_last_block_id_part_set_header_hash_ilike = 'filter_header_last_block_id_part_set_header_hash_ilike_example'; // string | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value.
$filter_header_last_commit_hash = 'filter_header_last_commit_hash_example'; // string | Filter the results where the [header.lastCommitHash] field is equal to the given value.
$filter_header_last_commit_hash_neq = 'filter_header_last_commit_hash_neq_example'; // string | Filter the results where the [header.lastCommitHash] field is not equal to the given value.
$filter_header_last_commit_hash_like = 'filter_header_last_commit_hash_like_example'; // string | Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value.
$filter_header_last_commit_hash_ilike = 'filter_header_last_commit_hash_ilike_example'; // string | Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value.
$filter_header_data_hash = 'filter_header_data_hash_example'; // string | Filter the results where the [header.dataHash] field is equal to the given value.
$filter_header_data_hash_neq = 'filter_header_data_hash_neq_example'; // string | Filter the results where the [header.dataHash] field is not equal to the given value.
$filter_header_data_hash_like = 'filter_header_data_hash_like_example'; // string | Filter the results where the [header.dataHash] field is similar to the given case sensitive value.
$filter_header_data_hash_ilike = 'filter_header_data_hash_ilike_example'; // string | Filter the results where the [header.dataHash] field is similar to the given case insensitive value.
$filter_header_validators_hash = 'filter_header_validators_hash_example'; // string | Filter the results where the [header.validatorsHash] field is equal to the given value.
$filter_header_validators_hash_neq = 'filter_header_validators_hash_neq_example'; // string | Filter the results where the [header.validatorsHash] field is not equal to the given value.
$filter_header_validators_hash_like = 'filter_header_validators_hash_like_example'; // string | Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value.
$filter_header_validators_hash_ilike = 'filter_header_validators_hash_ilike_example'; // string | Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value.
$filter_header_next_validators_hash = 'filter_header_next_validators_hash_example'; // string | Filter the results where the [header.nextValidatorsHash] field is equal to the given value.
$filter_header_next_validators_hash_neq = 'filter_header_next_validators_hash_neq_example'; // string | Filter the results where the [header.nextValidatorsHash] field is not equal to the given value.
$filter_header_next_validators_hash_like = 'filter_header_next_validators_hash_like_example'; // string | Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value.
$filter_header_next_validators_hash_ilike = 'filter_header_next_validators_hash_ilike_example'; // string | Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value.
$filter_header_consensus_hash = 'filter_header_consensus_hash_example'; // string | Filter the results where the [header.consensusHash] field is equal to the given value.
$filter_header_consensus_hash_neq = 'filter_header_consensus_hash_neq_example'; // string | Filter the results where the [header.consensusHash] field is not equal to the given value.
$filter_header_consensus_hash_like = 'filter_header_consensus_hash_like_example'; // string | Filter the results where the [header.consensusHash] field is similar to the given case sensitive value.
$filter_header_consensus_hash_ilike = 'filter_header_consensus_hash_ilike_example'; // string | Filter the results where the [header.consensusHash] field is similar to the given case insensitive value.
$filter_header_app_hash = 'filter_header_app_hash_example'; // string | Filter the results where the [header.appHash] field is equal to the given value.
$filter_header_app_hash_neq = 'filter_header_app_hash_neq_example'; // string | Filter the results where the [header.appHash] field is not equal to the given value.
$filter_header_app_hash_like = 'filter_header_app_hash_like_example'; // string | Filter the results where the [header.appHash] field is similar to the given case sensitive value.
$filter_header_app_hash_ilike = 'filter_header_app_hash_ilike_example'; // string | Filter the results where the [header.appHash] field is similar to the given case insensitive value.
$filter_header_last_results_hash = 'filter_header_last_results_hash_example'; // string | Filter the results where the [header.lastResultsHash] field is equal to the given value.
$filter_header_last_results_hash_neq = 'filter_header_last_results_hash_neq_example'; // string | Filter the results where the [header.lastResultsHash] field is not equal to the given value.
$filter_header_last_results_hash_like = 'filter_header_last_results_hash_like_example'; // string | Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value.
$filter_header_last_results_hash_ilike = 'filter_header_last_results_hash_ilike_example'; // string | Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value.
$filter_header_evidence_hash = 'filter_header_evidence_hash_example'; // string | Filter the results where the [header.evidenceHash] field is equal to the given value.
$filter_header_evidence_hash_neq = 'filter_header_evidence_hash_neq_example'; // string | Filter the results where the [header.evidenceHash] field is not equal to the given value.
$filter_header_evidence_hash_like = 'filter_header_evidence_hash_like_example'; // string | Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value.
$filter_header_evidence_hash_ilike = 'filter_header_evidence_hash_ilike_example'; // string | Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value.
$filter_header_proposer_address = 'filter_header_proposer_address_example'; // string | Filter the results where the [header.proposerAddress] field is equal to the given value.
$filter_header_proposer_address_neq = 'filter_header_proposer_address_neq_example'; // string | Filter the results where the [header.proposerAddress] field is not equal to the given value.
$filter_header_proposer_address_like = 'filter_header_proposer_address_like_example'; // string | Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value.
$filter_header_proposer_address_ilike = 'filter_header_proposer_address_ilike_example'; // string | Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value.
$include = new \OpenAPI\Client\Model\ApiBlocksGetIncludeParameter(); // ApiBlocksGetIncludeParameter | Include the given relationships.
$sort = new \OpenAPI\Client\Model\ApiBlocksGetSortParameter(); // ApiBlocksGetSortParameter | Sort the results by the given field and direction.

try {
    $result = $apiInstance->apiBlocksGet($fields_blocks, $filter_hash, $filter_hash_neq, $filter_hash_like, $filter_hash_ilike, $filter_height, $filter_header_version_block, $filter_header_chain_id, $filter_header_chain_id_neq, $filter_header_chain_id_like, $filter_header_chain_id_ilike, $filter_header_height, $filter_header_time, $filter_header_time_neq, $filter_header_time_like, $filter_header_time_ilike, $filter_header_last_block_id_hash, $filter_header_last_block_id_hash_neq, $filter_header_last_block_id_hash_like, $filter_header_last_block_id_hash_ilike, $filter_header_last_block_id_part_set_header_total, $filter_header_last_block_id_part_set_header_hash, $filter_header_last_block_id_part_set_header_hash_neq, $filter_header_last_block_id_part_set_header_hash_like, $filter_header_last_block_id_part_set_header_hash_ilike, $filter_header_last_commit_hash, $filter_header_last_commit_hash_neq, $filter_header_last_commit_hash_like, $filter_header_last_commit_hash_ilike, $filter_header_data_hash, $filter_header_data_hash_neq, $filter_header_data_hash_like, $filter_header_data_hash_ilike, $filter_header_validators_hash, $filter_header_validators_hash_neq, $filter_header_validators_hash_like, $filter_header_validators_hash_ilike, $filter_header_next_validators_hash, $filter_header_next_validators_hash_neq, $filter_header_next_validators_hash_like, $filter_header_next_validators_hash_ilike, $filter_header_consensus_hash, $filter_header_consensus_hash_neq, $filter_header_consensus_hash_like, $filter_header_consensus_hash_ilike, $filter_header_app_hash, $filter_header_app_hash_neq, $filter_header_app_hash_like, $filter_header_app_hash_ilike, $filter_header_last_results_hash, $filter_header_last_results_hash_neq, $filter_header_last_results_hash_like, $filter_header_last_results_hash_ilike, $filter_header_evidence_hash, $filter_header_evidence_hash_neq, $filter_header_evidence_hash_like, $filter_header_evidence_hash_ilike, $filter_header_proposer_address, $filter_header_proposer_address_neq, $filter_header_proposer_address_like, $filter_header_proposer_address_ilike, $include, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->apiBlocksGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fields_blocks** | [**ApiBlocksGetFieldsBlocksParameter**](../Model/.md)| Include the given fields in the response. | [optional] |
| **filter_hash** | **string**| Filter the results where the [hash] field is equal to the given value. | [optional] |
| **filter_hash_neq** | **string**| Filter the results where the [hash] field is not equal to the given value. | [optional] |
| **filter_hash_like** | **string**| Filter the results where the [hash] field is similar to the given case sensitive value. | [optional] |
| **filter_hash_ilike** | **string**| Filter the results where the [hash] field is similar to the given case insensitive value. | [optional] |
| **filter_height** | **int**| Filter the results where the [height] field is equal to the given value. | [optional] |
| **filter_header_version_block** | **int**| Filter the results where the [header.version.block] field is equal to the given value. | [optional] |
| **filter_header_chain_id** | **string**| Filter the results where the [header.chainId] field is equal to the given value. | [optional] |
| **filter_header_chain_id_neq** | **string**| Filter the results where the [header.chainId] field is not equal to the given value. | [optional] |
| **filter_header_chain_id_like** | **string**| Filter the results where the [header.chainId] field is similar to the given case sensitive value. | [optional] |
| **filter_header_chain_id_ilike** | **string**| Filter the results where the [header.chainId] field is similar to the given case insensitive value. | [optional] |
| **filter_header_height** | **int**| Filter the results where the [header.height] field is equal to the given value. | [optional] |
| **filter_header_time** | **string**| Filter the results where the [header.time] field is equal to the given value. | [optional] |
| **filter_header_time_neq** | **string**| Filter the results where the [header.time] field is not equal to the given value. | [optional] |
| **filter_header_time_like** | **string**| Filter the results where the [header.time] field is similar to the given case sensitive value. | [optional] |
| **filter_header_time_ilike** | **string**| Filter the results where the [header.time] field is similar to the given case insensitive value. | [optional] |
| **filter_header_last_block_id_hash** | **string**| Filter the results where the [header.lastBlockId.hash] field is equal to the given value. | [optional] |
| **filter_header_last_block_id_hash_neq** | **string**| Filter the results where the [header.lastBlockId.hash] field is not equal to the given value. | [optional] |
| **filter_header_last_block_id_hash_like** | **string**| Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_last_block_id_hash_ilike** | **string**| Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_last_block_id_part_set_header_total** | **int**| Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value. | [optional] |
| **filter_header_last_block_id_part_set_header_hash** | **string**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value. | [optional] |
| **filter_header_last_block_id_part_set_header_hash_neq** | **string**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value. | [optional] |
| **filter_header_last_block_id_part_set_header_hash_like** | **string**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_last_block_id_part_set_header_hash_ilike** | **string**| Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_last_commit_hash** | **string**| Filter the results where the [header.lastCommitHash] field is equal to the given value. | [optional] |
| **filter_header_last_commit_hash_neq** | **string**| Filter the results where the [header.lastCommitHash] field is not equal to the given value. | [optional] |
| **filter_header_last_commit_hash_like** | **string**| Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_last_commit_hash_ilike** | **string**| Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_data_hash** | **string**| Filter the results where the [header.dataHash] field is equal to the given value. | [optional] |
| **filter_header_data_hash_neq** | **string**| Filter the results where the [header.dataHash] field is not equal to the given value. | [optional] |
| **filter_header_data_hash_like** | **string**| Filter the results where the [header.dataHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_data_hash_ilike** | **string**| Filter the results where the [header.dataHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_validators_hash** | **string**| Filter the results where the [header.validatorsHash] field is equal to the given value. | [optional] |
| **filter_header_validators_hash_neq** | **string**| Filter the results where the [header.validatorsHash] field is not equal to the given value. | [optional] |
| **filter_header_validators_hash_like** | **string**| Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_validators_hash_ilike** | **string**| Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_next_validators_hash** | **string**| Filter the results where the [header.nextValidatorsHash] field is equal to the given value. | [optional] |
| **filter_header_next_validators_hash_neq** | **string**| Filter the results where the [header.nextValidatorsHash] field is not equal to the given value. | [optional] |
| **filter_header_next_validators_hash_like** | **string**| Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_next_validators_hash_ilike** | **string**| Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_consensus_hash** | **string**| Filter the results where the [header.consensusHash] field is equal to the given value. | [optional] |
| **filter_header_consensus_hash_neq** | **string**| Filter the results where the [header.consensusHash] field is not equal to the given value. | [optional] |
| **filter_header_consensus_hash_like** | **string**| Filter the results where the [header.consensusHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_consensus_hash_ilike** | **string**| Filter the results where the [header.consensusHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_app_hash** | **string**| Filter the results where the [header.appHash] field is equal to the given value. | [optional] |
| **filter_header_app_hash_neq** | **string**| Filter the results where the [header.appHash] field is not equal to the given value. | [optional] |
| **filter_header_app_hash_like** | **string**| Filter the results where the [header.appHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_app_hash_ilike** | **string**| Filter the results where the [header.appHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_last_results_hash** | **string**| Filter the results where the [header.lastResultsHash] field is equal to the given value. | [optional] |
| **filter_header_last_results_hash_neq** | **string**| Filter the results where the [header.lastResultsHash] field is not equal to the given value. | [optional] |
| **filter_header_last_results_hash_like** | **string**| Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_last_results_hash_ilike** | **string**| Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_evidence_hash** | **string**| Filter the results where the [header.evidenceHash] field is equal to the given value. | [optional] |
| **filter_header_evidence_hash_neq** | **string**| Filter the results where the [header.evidenceHash] field is not equal to the given value. | [optional] |
| **filter_header_evidence_hash_like** | **string**| Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_evidence_hash_ilike** | **string**| Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_proposer_address** | **string**| Filter the results where the [header.proposerAddress] field is equal to the given value. | [optional] |
| **filter_header_proposer_address_neq** | **string**| Filter the results where the [header.proposerAddress] field is not equal to the given value. | [optional] |
| **filter_header_proposer_address_like** | **string**| Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value. | [optional] |
| **filter_header_proposer_address_ilike** | **string**| Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiBlocksGetIncludeParameter**](../Model/.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiBlocksGetSortParameter**](../Model/.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**\OpenAPI\Client\Model\ApiBlocksGet200Response**](../Model/ApiBlocksGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiEntitiesGet()`

```php
apiEntitiesGet($fields_entities, $filter_module, $filter_module_neq, $filter_module_like, $filter_module_ilike, $filter_type, $filter_type_neq, $filter_type_like, $filter_type_ilike, $filter_key, $filter_key_neq, $filter_key_like, $filter_key_ilike, $filter_value, $filter_value_neq, $filter_value_like, $filter_value_ilike, $sort): \OpenAPI\Client\Model\ApiEntitiesGet200Response
```

List entities

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$fields_entities = new \OpenAPI\Client\Model\ApiEntitiesGetFieldsEntitiesParameter(); // ApiEntitiesGetFieldsEntitiesParameter | Include the given fields in the response.
$filter_module = 'filter_module_example'; // string | Filter the results where the [module] field is equal to the given value.
$filter_module_neq = 'filter_module_neq_example'; // string | Filter the results where the [module] field is not equal to the given value.
$filter_module_like = 'filter_module_like_example'; // string | Filter the results where the [module] field is similar to the given case sensitive value.
$filter_module_ilike = 'filter_module_ilike_example'; // string | Filter the results where the [module] field is similar to the given case insensitive value.
$filter_type = 'filter_type_example'; // string | Filter the results where the [type] field is equal to the given value.
$filter_type_neq = 'filter_type_neq_example'; // string | Filter the results where the [type] field is not equal to the given value.
$filter_type_like = 'filter_type_like_example'; // string | Filter the results where the [type] field is similar to the given case sensitive value.
$filter_type_ilike = 'filter_type_ilike_example'; // string | Filter the results where the [type] field is similar to the given case insensitive value.
$filter_key = 'filter_key_example'; // string | Filter the results where the [key] field is equal to the given value.
$filter_key_neq = 'filter_key_neq_example'; // string | Filter the results where the [key] field is not equal to the given value.
$filter_key_like = 'filter_key_like_example'; // string | Filter the results where the [key] field is similar to the given case sensitive value.
$filter_key_ilike = 'filter_key_ilike_example'; // string | Filter the results where the [key] field is similar to the given case insensitive value.
$filter_value = 'filter_value_example'; // string | Filter the results where the [value] field is equal to the given value.
$filter_value_neq = 'filter_value_neq_example'; // string | Filter the results where the [value] field is not equal to the given value.
$filter_value_like = 'filter_value_like_example'; // string | Filter the results where the [value] field is similar to the given case sensitive value.
$filter_value_ilike = 'filter_value_ilike_example'; // string | Filter the results where the [value] field is similar to the given case insensitive value.
$sort = new \OpenAPI\Client\Model\ApiEntitiesGetSortParameter(); // ApiEntitiesGetSortParameter | Sort the results by the given field and direction.

try {
    $result = $apiInstance->apiEntitiesGet($fields_entities, $filter_module, $filter_module_neq, $filter_module_like, $filter_module_ilike, $filter_type, $filter_type_neq, $filter_type_like, $filter_type_ilike, $filter_key, $filter_key_neq, $filter_key_like, $filter_key_ilike, $filter_value, $filter_value_neq, $filter_value_like, $filter_value_ilike, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->apiEntitiesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fields_entities** | [**ApiEntitiesGetFieldsEntitiesParameter**](../Model/.md)| Include the given fields in the response. | [optional] |
| **filter_module** | **string**| Filter the results where the [module] field is equal to the given value. | [optional] |
| **filter_module_neq** | **string**| Filter the results where the [module] field is not equal to the given value. | [optional] |
| **filter_module_like** | **string**| Filter the results where the [module] field is similar to the given case sensitive value. | [optional] |
| **filter_module_ilike** | **string**| Filter the results where the [module] field is similar to the given case insensitive value. | [optional] |
| **filter_type** | **string**| Filter the results where the [type] field is equal to the given value. | [optional] |
| **filter_type_neq** | **string**| Filter the results where the [type] field is not equal to the given value. | [optional] |
| **filter_type_like** | **string**| Filter the results where the [type] field is similar to the given case sensitive value. | [optional] |
| **filter_type_ilike** | **string**| Filter the results where the [type] field is similar to the given case insensitive value. | [optional] |
| **filter_key** | **string**| Filter the results where the [key] field is equal to the given value. | [optional] |
| **filter_key_neq** | **string**| Filter the results where the [key] field is not equal to the given value. | [optional] |
| **filter_key_like** | **string**| Filter the results where the [key] field is similar to the given case sensitive value. | [optional] |
| **filter_key_ilike** | **string**| Filter the results where the [key] field is similar to the given case insensitive value. | [optional] |
| **filter_value** | **string**| Filter the results where the [value] field is equal to the given value. | [optional] |
| **filter_value_neq** | **string**| Filter the results where the [value] field is not equal to the given value. | [optional] |
| **filter_value_like** | **string**| Filter the results where the [value] field is similar to the given case sensitive value. | [optional] |
| **filter_value_ilike** | **string**| Filter the results where the [value] field is similar to the given case insensitive value. | [optional] |
| **sort** | [**ApiEntitiesGetSortParameter**](../Model/.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**\OpenAPI\Client\Model\ApiEntitiesGet200Response**](../Model/ApiEntitiesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiTransactionsGet()`

```php
apiTransactionsGet($fields_accounts, $filter_hash, $filter_hash_neq, $filter_hash_like, $filter_hash_ilike, $filter_sender, $filter_sender_neq, $filter_sender_like, $filter_sender_ilike, $filter_recipient, $filter_recipient_neq, $filter_recipient_like, $filter_recipient_ilike, $filter_gas, $filter_nonce, $filter_signature, $filter_signature_neq, $filter_signature_like, $filter_signature_ilike, $filter_version, $filter_version_neq, $filter_version_like, $filter_version_ilike, $filter_message_handler, $filter_message_handler_neq, $filter_message_handler_like, $filter_message_handler_ilike, $filter_message_version, $filter_message_version_neq, $filter_message_version_like, $filter_message_version_ilike, $filter_message_network, $filter_message_network_neq, $filter_message_network_like, $filter_message_network_ilike, $filter_message_content, $filter_message_content_neq, $filter_message_content_like, $filter_message_content_ilike, $include, $sort): \OpenAPI\Client\Model\ApiTransactionsGet200Response
```

List transactions

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$fields_accounts = new \OpenAPI\Client\Model\ApiTransactionsGetFieldsAccountsParameter(); // ApiTransactionsGetFieldsAccountsParameter | Include the given fields in the response.
$filter_hash = 'filter_hash_example'; // string | Filter the results where the [hash] field is equal to the given value.
$filter_hash_neq = 'filter_hash_neq_example'; // string | Filter the results where the [hash] field is not equal to the given value.
$filter_hash_like = 'filter_hash_like_example'; // string | Filter the results where the [hash] field is similar to the given case sensitive value.
$filter_hash_ilike = 'filter_hash_ilike_example'; // string | Filter the results where the [hash] field is similar to the given case insensitive value.
$filter_sender = 'filter_sender_example'; // string | Filter the results where the [sender] field is equal to the given value.
$filter_sender_neq = 'filter_sender_neq_example'; // string | Filter the results where the [sender] field is not equal to the given value.
$filter_sender_like = 'filter_sender_like_example'; // string | Filter the results where the [sender] field is similar to the given case sensitive value.
$filter_sender_ilike = 'filter_sender_ilike_example'; // string | Filter the results where the [sender] field is similar to the given case insensitive value.
$filter_recipient = 'filter_recipient_example'; // string | Filter the results where the [recipient] field is equal to the given value.
$filter_recipient_neq = 'filter_recipient_neq_example'; // string | Filter the results where the [recipient] field is not equal to the given value.
$filter_recipient_like = 'filter_recipient_like_example'; // string | Filter the results where the [recipient] field is similar to the given case sensitive value.
$filter_recipient_ilike = 'filter_recipient_ilike_example'; // string | Filter the results where the [recipient] field is similar to the given case insensitive value.
$filter_gas = 56; // int | Filter the results where the [gas] field is equal to the given value.
$filter_nonce = 56; // int | Filter the results where the [nonce] field is equal to the given value.
$filter_signature = 'filter_signature_example'; // string | Filter the results where the [signature] field is equal to the given value.
$filter_signature_neq = 'filter_signature_neq_example'; // string | Filter the results where the [signature] field is not equal to the given value.
$filter_signature_like = 'filter_signature_like_example'; // string | Filter the results where the [signature] field is similar to the given case sensitive value.
$filter_signature_ilike = 'filter_signature_ilike_example'; // string | Filter the results where the [signature] field is similar to the given case insensitive value.
$filter_version = 'filter_version_example'; // string | Filter the results where the [version] field is equal to the given value.
$filter_version_neq = 'filter_version_neq_example'; // string | Filter the results where the [version] field is not equal to the given value.
$filter_version_like = 'filter_version_like_example'; // string | Filter the results where the [version] field is similar to the given case sensitive value.
$filter_version_ilike = 'filter_version_ilike_example'; // string | Filter the results where the [version] field is similar to the given case insensitive value.
$filter_message_handler = 'filter_message_handler_example'; // string | Filter the results where the [message.handler] field is equal to the given value.
$filter_message_handler_neq = 'filter_message_handler_neq_example'; // string | Filter the results where the [message.handler] field is not equal to the given value.
$filter_message_handler_like = 'filter_message_handler_like_example'; // string | Filter the results where the [message.handler] field is similar to the given case sensitive value.
$filter_message_handler_ilike = 'filter_message_handler_ilike_example'; // string | Filter the results where the [message.handler] field is similar to the given case insensitive value.
$filter_message_version = 'filter_message_version_example'; // string | Filter the results where the [message.version] field is equal to the given value.
$filter_message_version_neq = 'filter_message_version_neq_example'; // string | Filter the results where the [message.version] field is not equal to the given value.
$filter_message_version_like = 'filter_message_version_like_example'; // string | Filter the results where the [message.version] field is similar to the given case sensitive value.
$filter_message_version_ilike = 'filter_message_version_ilike_example'; // string | Filter the results where the [message.version] field is similar to the given case insensitive value.
$filter_message_network = 'filter_message_network_example'; // string | Filter the results where the [message.network] field is equal to the given value.
$filter_message_network_neq = 'filter_message_network_neq_example'; // string | Filter the results where the [message.network] field is not equal to the given value.
$filter_message_network_like = 'filter_message_network_like_example'; // string | Filter the results where the [message.network] field is similar to the given case sensitive value.
$filter_message_network_ilike = 'filter_message_network_ilike_example'; // string | Filter the results where the [message.network] field is similar to the given case insensitive value.
$filter_message_content = 'filter_message_content_example'; // string | Filter the results where the [message.content] field is equal to the given value.
$filter_message_content_neq = 'filter_message_content_neq_example'; // string | Filter the results where the [message.content] field is not equal to the given value.
$filter_message_content_like = 'filter_message_content_like_example'; // string | Filter the results where the [message.content] field is similar to the given case sensitive value.
$filter_message_content_ilike = 'filter_message_content_ilike_example'; // string | Filter the results where the [message.content] field is similar to the given case insensitive value.
$include = new \OpenAPI\Client\Model\ApiTransactionsGetIncludeParameter(); // ApiTransactionsGetIncludeParameter | Include the given relationships.
$sort = new \OpenAPI\Client\Model\ApiTransactionsGetSortParameter(); // ApiTransactionsGetSortParameter | Sort the results by the given field and direction.

try {
    $result = $apiInstance->apiTransactionsGet($fields_accounts, $filter_hash, $filter_hash_neq, $filter_hash_like, $filter_hash_ilike, $filter_sender, $filter_sender_neq, $filter_sender_like, $filter_sender_ilike, $filter_recipient, $filter_recipient_neq, $filter_recipient_like, $filter_recipient_ilike, $filter_gas, $filter_nonce, $filter_signature, $filter_signature_neq, $filter_signature_like, $filter_signature_ilike, $filter_version, $filter_version_neq, $filter_version_like, $filter_version_ilike, $filter_message_handler, $filter_message_handler_neq, $filter_message_handler_like, $filter_message_handler_ilike, $filter_message_version, $filter_message_version_neq, $filter_message_version_like, $filter_message_version_ilike, $filter_message_network, $filter_message_network_neq, $filter_message_network_like, $filter_message_network_ilike, $filter_message_content, $filter_message_content_neq, $filter_message_content_like, $filter_message_content_ilike, $include, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->apiTransactionsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fields_accounts** | [**ApiTransactionsGetFieldsAccountsParameter**](../Model/.md)| Include the given fields in the response. | [optional] |
| **filter_hash** | **string**| Filter the results where the [hash] field is equal to the given value. | [optional] |
| **filter_hash_neq** | **string**| Filter the results where the [hash] field is not equal to the given value. | [optional] |
| **filter_hash_like** | **string**| Filter the results where the [hash] field is similar to the given case sensitive value. | [optional] |
| **filter_hash_ilike** | **string**| Filter the results where the [hash] field is similar to the given case insensitive value. | [optional] |
| **filter_sender** | **string**| Filter the results where the [sender] field is equal to the given value. | [optional] |
| **filter_sender_neq** | **string**| Filter the results where the [sender] field is not equal to the given value. | [optional] |
| **filter_sender_like** | **string**| Filter the results where the [sender] field is similar to the given case sensitive value. | [optional] |
| **filter_sender_ilike** | **string**| Filter the results where the [sender] field is similar to the given case insensitive value. | [optional] |
| **filter_recipient** | **string**| Filter the results where the [recipient] field is equal to the given value. | [optional] |
| **filter_recipient_neq** | **string**| Filter the results where the [recipient] field is not equal to the given value. | [optional] |
| **filter_recipient_like** | **string**| Filter the results where the [recipient] field is similar to the given case sensitive value. | [optional] |
| **filter_recipient_ilike** | **string**| Filter the results where the [recipient] field is similar to the given case insensitive value. | [optional] |
| **filter_gas** | **int**| Filter the results where the [gas] field is equal to the given value. | [optional] |
| **filter_nonce** | **int**| Filter the results where the [nonce] field is equal to the given value. | [optional] |
| **filter_signature** | **string**| Filter the results where the [signature] field is equal to the given value. | [optional] |
| **filter_signature_neq** | **string**| Filter the results where the [signature] field is not equal to the given value. | [optional] |
| **filter_signature_like** | **string**| Filter the results where the [signature] field is similar to the given case sensitive value. | [optional] |
| **filter_signature_ilike** | **string**| Filter the results where the [signature] field is similar to the given case insensitive value. | [optional] |
| **filter_version** | **string**| Filter the results where the [version] field is equal to the given value. | [optional] |
| **filter_version_neq** | **string**| Filter the results where the [version] field is not equal to the given value. | [optional] |
| **filter_version_like** | **string**| Filter the results where the [version] field is similar to the given case sensitive value. | [optional] |
| **filter_version_ilike** | **string**| Filter the results where the [version] field is similar to the given case insensitive value. | [optional] |
| **filter_message_handler** | **string**| Filter the results where the [message.handler] field is equal to the given value. | [optional] |
| **filter_message_handler_neq** | **string**| Filter the results where the [message.handler] field is not equal to the given value. | [optional] |
| **filter_message_handler_like** | **string**| Filter the results where the [message.handler] field is similar to the given case sensitive value. | [optional] |
| **filter_message_handler_ilike** | **string**| Filter the results where the [message.handler] field is similar to the given case insensitive value. | [optional] |
| **filter_message_version** | **string**| Filter the results where the [message.version] field is equal to the given value. | [optional] |
| **filter_message_version_neq** | **string**| Filter the results where the [message.version] field is not equal to the given value. | [optional] |
| **filter_message_version_like** | **string**| Filter the results where the [message.version] field is similar to the given case sensitive value. | [optional] |
| **filter_message_version_ilike** | **string**| Filter the results where the [message.version] field is similar to the given case insensitive value. | [optional] |
| **filter_message_network** | **string**| Filter the results where the [message.network] field is equal to the given value. | [optional] |
| **filter_message_network_neq** | **string**| Filter the results where the [message.network] field is not equal to the given value. | [optional] |
| **filter_message_network_like** | **string**| Filter the results where the [message.network] field is similar to the given case sensitive value. | [optional] |
| **filter_message_network_ilike** | **string**| Filter the results where the [message.network] field is similar to the given case insensitive value. | [optional] |
| **filter_message_content** | **string**| Filter the results where the [message.content] field is equal to the given value. | [optional] |
| **filter_message_content_neq** | **string**| Filter the results where the [message.content] field is not equal to the given value. | [optional] |
| **filter_message_content_like** | **string**| Filter the results where the [message.content] field is similar to the given case sensitive value. | [optional] |
| **filter_message_content_ilike** | **string**| Filter the results where the [message.content] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiTransactionsGetIncludeParameter**](../Model/.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiTransactionsGetSortParameter**](../Model/.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**\OpenAPI\Client\Model\ApiTransactionsGet200Response**](../Model/ApiTransactionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiTransactionsMetadataGet()`

```php
apiTransactionsMetadataGet($fields_transaction_metadata, $filter_transaction_id, $filter_key, $filter_key_neq, $filter_key_like, $filter_key_ilike, $filter_value, $filter_value_neq, $filter_value_like, $filter_value_ilike, $include, $sort): \OpenAPI\Client\Model\ApiTransactionsMetadataGet200Response
```

List transaction metadata

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$fields_transaction_metadata = new \OpenAPI\Client\Model\ApiTransactionsMetadataGetFieldsTransactionMetadataParameter(); // ApiTransactionsMetadataGetFieldsTransactionMetadataParameter | Include the given fields in the response.
$filter_transaction_id = 56; // int | Filter the results where the [transaction_id] field is equal to the given value.
$filter_key = 'filter_key_example'; // string | Filter the results where the [key] field is equal to the given value.
$filter_key_neq = 'filter_key_neq_example'; // string | Filter the results where the [key] field is not equal to the given value.
$filter_key_like = 'filter_key_like_example'; // string | Filter the results where the [key] field is similar to the given case sensitive value.
$filter_key_ilike = 'filter_key_ilike_example'; // string | Filter the results where the [key] field is similar to the given case insensitive value.
$filter_value = 'filter_value_example'; // string | Filter the results where the [value] field is equal to the given value.
$filter_value_neq = 'filter_value_neq_example'; // string | Filter the results where the [value] field is not equal to the given value.
$filter_value_like = 'filter_value_like_example'; // string | Filter the results where the [value] field is similar to the given case sensitive value.
$filter_value_ilike = 'filter_value_ilike_example'; // string | Filter the results where the [value] field is similar to the given case insensitive value.
$include = new \OpenAPI\Client\Model\ApiTransactionsMetadataGetIncludeParameter(); // ApiTransactionsMetadataGetIncludeParameter | Include the given relationships.
$sort = new \OpenAPI\Client\Model\ApiTransactionsMetadataGetSortParameter(); // ApiTransactionsMetadataGetSortParameter | Sort the results by the given field and direction.

try {
    $result = $apiInstance->apiTransactionsMetadataGet($fields_transaction_metadata, $filter_transaction_id, $filter_key, $filter_key_neq, $filter_key_like, $filter_key_ilike, $filter_value, $filter_value_neq, $filter_value_like, $filter_value_ilike, $include, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->apiTransactionsMetadataGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fields_transaction_metadata** | [**ApiTransactionsMetadataGetFieldsTransactionMetadataParameter**](../Model/.md)| Include the given fields in the response. | [optional] |
| **filter_transaction_id** | **int**| Filter the results where the [transaction_id] field is equal to the given value. | [optional] |
| **filter_key** | **string**| Filter the results where the [key] field is equal to the given value. | [optional] |
| **filter_key_neq** | **string**| Filter the results where the [key] field is not equal to the given value. | [optional] |
| **filter_key_like** | **string**| Filter the results where the [key] field is similar to the given case sensitive value. | [optional] |
| **filter_key_ilike** | **string**| Filter the results where the [key] field is similar to the given case insensitive value. | [optional] |
| **filter_value** | **string**| Filter the results where the [value] field is equal to the given value. | [optional] |
| **filter_value_neq** | **string**| Filter the results where the [value] field is not equal to the given value. | [optional] |
| **filter_value_like** | **string**| Filter the results where the [value] field is similar to the given case sensitive value. | [optional] |
| **filter_value_ilike** | **string**| Filter the results where the [value] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiTransactionsMetadataGetIncludeParameter**](../Model/.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiTransactionsMetadataGetSortParameter**](../Model/.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**\OpenAPI\Client\Model\ApiTransactionsMetadataGet200Response**](../Model/ApiTransactionsMetadataGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiTransactionsReceiptsGet()`

```php
apiTransactionsReceiptsGet($fields_transaction_receipts, $filter_transaction_id, $filter_block_hash, $filter_block_hash_neq, $filter_block_hash_like, $filter_block_hash_ilike, $filter_block_number, $filter_block_number_neq, $filter_block_number_like, $filter_block_number_ilike, $include, $sort): \OpenAPI\Client\Model\ApiTransactionsReceiptsGet200Response
```

List transaction receipts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$fields_transaction_receipts = new \OpenAPI\Client\Model\ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter(); // ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter | Include the given fields in the response.
$filter_transaction_id = 56; // int | Filter the results where the [transaction_id] field is equal to the given value.
$filter_block_hash = 'filter_block_hash_example'; // string | Filter the results where the [block_hash] field is equal to the given value.
$filter_block_hash_neq = 'filter_block_hash_neq_example'; // string | Filter the results where the [block_hash] field is not equal to the given value.
$filter_block_hash_like = 'filter_block_hash_like_example'; // string | Filter the results where the [block_hash] field is similar to the given case sensitive value.
$filter_block_hash_ilike = 'filter_block_hash_ilike_example'; // string | Filter the results where the [block_hash] field is similar to the given case insensitive value.
$filter_block_number = 'filter_block_number_example'; // string | Filter the results where the [block_number] field is equal to the given value.
$filter_block_number_neq = 'filter_block_number_neq_example'; // string | Filter the results where the [block_number] field is not equal to the given value.
$filter_block_number_like = 'filter_block_number_like_example'; // string | Filter the results where the [block_number] field is similar to the given case sensitive value.
$filter_block_number_ilike = 'filter_block_number_ilike_example'; // string | Filter the results where the [block_number] field is similar to the given case insensitive value.
$include = new \OpenAPI\Client\Model\ApiTransactionsMetadataGetIncludeParameter(); // ApiTransactionsMetadataGetIncludeParameter | Include the given relationships.
$sort = new \OpenAPI\Client\Model\ApiTransactionsReceiptsGetSortParameter(); // ApiTransactionsReceiptsGetSortParameter | Sort the results by the given field and direction.

try {
    $result = $apiInstance->apiTransactionsReceiptsGet($fields_transaction_receipts, $filter_transaction_id, $filter_block_hash, $filter_block_hash_neq, $filter_block_hash_like, $filter_block_hash_ilike, $filter_block_number, $filter_block_number_neq, $filter_block_number_like, $filter_block_number_ilike, $include, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->apiTransactionsReceiptsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fields_transaction_receipts** | [**ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter**](../Model/.md)| Include the given fields in the response. | [optional] |
| **filter_transaction_id** | **int**| Filter the results where the [transaction_id] field is equal to the given value. | [optional] |
| **filter_block_hash** | **string**| Filter the results where the [block_hash] field is equal to the given value. | [optional] |
| **filter_block_hash_neq** | **string**| Filter the results where the [block_hash] field is not equal to the given value. | [optional] |
| **filter_block_hash_like** | **string**| Filter the results where the [block_hash] field is similar to the given case sensitive value. | [optional] |
| **filter_block_hash_ilike** | **string**| Filter the results where the [block_hash] field is similar to the given case insensitive value. | [optional] |
| **filter_block_number** | **string**| Filter the results where the [block_number] field is equal to the given value. | [optional] |
| **filter_block_number_neq** | **string**| Filter the results where the [block_number] field is not equal to the given value. | [optional] |
| **filter_block_number_like** | **string**| Filter the results where the [block_number] field is similar to the given case sensitive value. | [optional] |
| **filter_block_number_ilike** | **string**| Filter the results where the [block_number] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiTransactionsMetadataGetIncludeParameter**](../Model/.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiTransactionsReceiptsGetSortParameter**](../Model/.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**\OpenAPI\Client\Model\ApiTransactionsReceiptsGet200Response**](../Model/ApiTransactionsReceiptsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiValidatorsUpdatesGet()`

```php
apiValidatorsUpdatesGet($fields_block_number, $filter_block_number, $include, $sort): \OpenAPI\Client\Model\ApiValidatorsUpdatesGet200Response
```

List validator updates

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$fields_block_number = new \OpenAPI\Client\Model\ApiValidatorsUpdatesGetFieldsBlockNumberParameter(); // ApiValidatorsUpdatesGetFieldsBlockNumberParameter | Include the given fields in the response.
$filter_block_number = 56; // int | Filter the results where the [block_number] field is equal to the given value.
$include = new \OpenAPI\Client\Model\ApiValidatorsUpdatesGetIncludeParameter(); // ApiValidatorsUpdatesGetIncludeParameter | Include the given relationships.
$sort = new \OpenAPI\Client\Model\ApiValidatorsUpdatesGetSortParameter(); // ApiValidatorsUpdatesGetSortParameter | Sort the results by the given field and direction.

try {
    $result = $apiInstance->apiValidatorsUpdatesGet($fields_block_number, $filter_block_number, $include, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->apiValidatorsUpdatesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fields_block_number** | [**ApiValidatorsUpdatesGetFieldsBlockNumberParameter**](../Model/.md)| Include the given fields in the response. | [optional] |
| **filter_block_number** | **int**| Filter the results where the [block_number] field is equal to the given value. | [optional] |
| **include** | [**ApiValidatorsUpdatesGetIncludeParameter**](../Model/.md)| Include the given relationships. | [optional] |
| **sort** | [**ApiValidatorsUpdatesGetSortParameter**](../Model/.md)| Sort the results by the given field and direction. | [optional] |

### Return type

[**\OpenAPI\Client\Model\ApiValidatorsUpdatesGet200Response**](../Model/ApiValidatorsUpdatesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
