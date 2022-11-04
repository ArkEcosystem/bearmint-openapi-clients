# OpenapiClient::DefaultApi

All URIs are relative to *http://railway.test*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**api_accounts_get**](DefaultApi.md#api_accounts_get) | **GET** /api/accounts | List accounts |
| [**api_accounts_metadata_get**](DefaultApi.md#api_accounts_metadata_get) | **GET** /api/accounts/metadata | List account metadata |
| [**api_blocks_get**](DefaultApi.md#api_blocks_get) | **GET** /api/blocks | List blocks |
| [**api_entities_get**](DefaultApi.md#api_entities_get) | **GET** /api/entities | List entities |
| [**api_transactions_get**](DefaultApi.md#api_transactions_get) | **GET** /api/transactions | List transactions |
| [**api_transactions_metadata_get**](DefaultApi.md#api_transactions_metadata_get) | **GET** /api/transactions/metadata | List transaction metadata |
| [**api_transactions_receipts_get**](DefaultApi.md#api_transactions_receipts_get) | **GET** /api/transactions/receipts | List transaction receipts |
| [**api_validators_updates_get**](DefaultApi.md#api_validators_updates_get) | **GET** /api/validators/updates | List validator updates |


## api_accounts_get

> <ApiAccountsGet200Response> api_accounts_get(opts)

List accounts

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
opts = {
  fields_accounts: OpenapiClient::ApiAccountsGetFieldsAccountsParameter.new, # ApiAccountsGetFieldsAccountsParameter | Include the given fields in the response.
  filter_address: 'filter_address_example', # String | Filter the results where the [address] field is equal to the given value.
  filter_address_neq: 'filter_address_neq_example', # String | Filter the results where the [address] field is not equal to the given value.
  filter_address_like: 'filter_address_like_example', # String | Filter the results where the [address] field is similar to the given case sensitive value.
  filter_address_ilike: 'filter_address_ilike_example', # String | Filter the results where the [address] field is similar to the given case insensitive value.
  filter_public_key: 'filter_public_key_example', # String | Filter the results where the [public_key] field is equal to the given value.
  filter_public_key_neq: 'filter_public_key_neq_example', # String | Filter the results where the [public_key] field is not equal to the given value.
  filter_public_key_like: 'filter_public_key_like_example', # String | Filter the results where the [public_key] field is similar to the given case sensitive value.
  filter_public_key_ilike: 'filter_public_key_ilike_example', # String | Filter the results where the [public_key] field is similar to the given case insensitive value.
  filter_name: 'filter_name_example', # String | Filter the results where the [name] field is equal to the given value.
  filter_name_neq: 'filter_name_neq_example', # String | Filter the results where the [name] field is not equal to the given value.
  filter_name_like: 'filter_name_like_example', # String | Filter the results where the [name] field is similar to the given case sensitive value.
  filter_name_ilike: 'filter_name_ilike_example', # String | Filter the results where the [name] field is similar to the given case insensitive value.
  filter_nonce: 56, # Integer | Filter the results where the [nonce] field is equal to the given value.
  filter_validator_address: 'filter_validator_address_example', # String | Filter the results where the [validator.address] field is equal to the given value.
  filter_validator_address_neq: 'filter_validator_address_neq_example', # String | Filter the results where the [validator.address] field is not equal to the given value.
  filter_validator_address_like: 'filter_validator_address_like_example', # String | Filter the results where the [validator.address] field is similar to the given case sensitive value.
  filter_validator_address_ilike: 'filter_validator_address_ilike_example', # String | Filter the results where the [validator.address] field is similar to the given case insensitive value.
  filter_validator_public_key: 'filter_validator_public_key_example', # String | Filter the results where the [validator.publicKey] field is equal to the given value.
  filter_validator_public_key_neq: 'filter_validator_public_key_neq_example', # String | Filter the results where the [validator.publicKey] field is not equal to the given value.
  filter_validator_public_key_like: 'filter_validator_public_key_like_example', # String | Filter the results where the [validator.publicKey] field is similar to the given case sensitive value.
  filter_validator_public_key_ilike: 'filter_validator_public_key_ilike_example', # String | Filter the results where the [validator.publicKey] field is similar to the given case insensitive value.
  filter_validator_power: 'filter_validator_power_example', # String | Filter the results where the [validator.power] field is equal to the given value.
  filter_validator_power_neq: 'filter_validator_power_neq_example', # String | Filter the results where the [validator.power] field is not equal to the given value.
  filter_validator_power_like: 'filter_validator_power_like_example', # String | Filter the results where the [validator.power] field is similar to the given case sensitive value.
  filter_validator_power_ilike: 'filter_validator_power_ilike_example', # String | Filter the results where the [validator.power] field is similar to the given case insensitive value.
  include: OpenapiClient::ApiAccountsGetIncludeParameter.new, # ApiAccountsGetIncludeParameter | Include the given relationships.
  sort: OpenapiClient::ApiAccountsGetSortParameter.new # ApiAccountsGetSortParameter | Sort the results by the given field and direction.
}

begin
  # List accounts
  result = api_instance.api_accounts_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_accounts_get: #{e}"
end
```

#### Using the api_accounts_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ApiAccountsGet200Response>, Integer, Hash)> api_accounts_get_with_http_info(opts)

```ruby
begin
  # List accounts
  data, status_code, headers = api_instance.api_accounts_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ApiAccountsGet200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_accounts_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fields_accounts** | [**ApiAccountsGetFieldsAccountsParameter**](.md) | Include the given fields in the response. | [optional] |
| **filter_address** | **String** | Filter the results where the [address] field is equal to the given value. | [optional] |
| **filter_address_neq** | **String** | Filter the results where the [address] field is not equal to the given value. | [optional] |
| **filter_address_like** | **String** | Filter the results where the [address] field is similar to the given case sensitive value. | [optional] |
| **filter_address_ilike** | **String** | Filter the results where the [address] field is similar to the given case insensitive value. | [optional] |
| **filter_public_key** | **String** | Filter the results where the [public_key] field is equal to the given value. | [optional] |
| **filter_public_key_neq** | **String** | Filter the results where the [public_key] field is not equal to the given value. | [optional] |
| **filter_public_key_like** | **String** | Filter the results where the [public_key] field is similar to the given case sensitive value. | [optional] |
| **filter_public_key_ilike** | **String** | Filter the results where the [public_key] field is similar to the given case insensitive value. | [optional] |
| **filter_name** | **String** | Filter the results where the [name] field is equal to the given value. | [optional] |
| **filter_name_neq** | **String** | Filter the results where the [name] field is not equal to the given value. | [optional] |
| **filter_name_like** | **String** | Filter the results where the [name] field is similar to the given case sensitive value. | [optional] |
| **filter_name_ilike** | **String** | Filter the results where the [name] field is similar to the given case insensitive value. | [optional] |
| **filter_nonce** | **Integer** | Filter the results where the [nonce] field is equal to the given value. | [optional] |
| **filter_validator_address** | **String** | Filter the results where the [validator.address] field is equal to the given value. | [optional] |
| **filter_validator_address_neq** | **String** | Filter the results where the [validator.address] field is not equal to the given value. | [optional] |
| **filter_validator_address_like** | **String** | Filter the results where the [validator.address] field is similar to the given case sensitive value. | [optional] |
| **filter_validator_address_ilike** | **String** | Filter the results where the [validator.address] field is similar to the given case insensitive value. | [optional] |
| **filter_validator_public_key** | **String** | Filter the results where the [validator.publicKey] field is equal to the given value. | [optional] |
| **filter_validator_public_key_neq** | **String** | Filter the results where the [validator.publicKey] field is not equal to the given value. | [optional] |
| **filter_validator_public_key_like** | **String** | Filter the results where the [validator.publicKey] field is similar to the given case sensitive value. | [optional] |
| **filter_validator_public_key_ilike** | **String** | Filter the results where the [validator.publicKey] field is similar to the given case insensitive value. | [optional] |
| **filter_validator_power** | **String** | Filter the results where the [validator.power] field is equal to the given value. | [optional] |
| **filter_validator_power_neq** | **String** | Filter the results where the [validator.power] field is not equal to the given value. | [optional] |
| **filter_validator_power_like** | **String** | Filter the results where the [validator.power] field is similar to the given case sensitive value. | [optional] |
| **filter_validator_power_ilike** | **String** | Filter the results where the [validator.power] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiAccountsGetIncludeParameter**](.md) | Include the given relationships. | [optional] |
| **sort** | [**ApiAccountsGetSortParameter**](.md) | Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiAccountsGet200Response**](ApiAccountsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_accounts_metadata_get

> <ApiAccountsMetadataGet200Response> api_accounts_metadata_get(opts)

List account metadata

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
opts = {
  fields_accounts_metadata: OpenapiClient::ApiAccountsMetadataGetFieldsAccountsMetadataParameter.new, # ApiAccountsMetadataGetFieldsAccountsMetadataParameter | Include the given fields in the response.
  filter_account_id: 56, # Integer | Filter the results where the [account_id] field is equal to the given value.
  filter_module: 'filter_module_example', # String | Filter the results where the [module] field is equal to the given value.
  filter_module_neq: 'filter_module_neq_example', # String | Filter the results where the [module] field is not equal to the given value.
  filter_module_like: 'filter_module_like_example', # String | Filter the results where the [module] field is similar to the given case sensitive value.
  filter_module_ilike: 'filter_module_ilike_example', # String | Filter the results where the [module] field is similar to the given case insensitive value.
  filter_key: 'filter_key_example', # String | Filter the results where the [key] field is equal to the given value.
  filter_key_neq: 'filter_key_neq_example', # String | Filter the results where the [key] field is not equal to the given value.
  filter_key_like: 'filter_key_like_example', # String | Filter the results where the [key] field is similar to the given case sensitive value.
  filter_key_ilike: 'filter_key_ilike_example', # String | Filter the results where the [key] field is similar to the given case insensitive value.
  filter_value: 'filter_value_example', # String | Filter the results where the [value] field is equal to the given value.
  filter_value_neq: 'filter_value_neq_example', # String | Filter the results where the [value] field is not equal to the given value.
  filter_value_like: 'filter_value_like_example', # String | Filter the results where the [value] field is similar to the given case sensitive value.
  filter_value_ilike: 'filter_value_ilike_example', # String | Filter the results where the [value] field is similar to the given case insensitive value.
  include: OpenapiClient::ApiAccountsMetadataGetIncludeParameter.new, # ApiAccountsMetadataGetIncludeParameter | Include the given relationships.
  sort: OpenapiClient::ApiAccountsMetadataGetSortParameter.new # ApiAccountsMetadataGetSortParameter | Sort the results by the given field and direction.
}

begin
  # List account metadata
  result = api_instance.api_accounts_metadata_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_accounts_metadata_get: #{e}"
end
```

#### Using the api_accounts_metadata_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ApiAccountsMetadataGet200Response>, Integer, Hash)> api_accounts_metadata_get_with_http_info(opts)

```ruby
begin
  # List account metadata
  data, status_code, headers = api_instance.api_accounts_metadata_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ApiAccountsMetadataGet200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_accounts_metadata_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fields_accounts_metadata** | [**ApiAccountsMetadataGetFieldsAccountsMetadataParameter**](.md) | Include the given fields in the response. | [optional] |
| **filter_account_id** | **Integer** | Filter the results where the [account_id] field is equal to the given value. | [optional] |
| **filter_module** | **String** | Filter the results where the [module] field is equal to the given value. | [optional] |
| **filter_module_neq** | **String** | Filter the results where the [module] field is not equal to the given value. | [optional] |
| **filter_module_like** | **String** | Filter the results where the [module] field is similar to the given case sensitive value. | [optional] |
| **filter_module_ilike** | **String** | Filter the results where the [module] field is similar to the given case insensitive value. | [optional] |
| **filter_key** | **String** | Filter the results where the [key] field is equal to the given value. | [optional] |
| **filter_key_neq** | **String** | Filter the results where the [key] field is not equal to the given value. | [optional] |
| **filter_key_like** | **String** | Filter the results where the [key] field is similar to the given case sensitive value. | [optional] |
| **filter_key_ilike** | **String** | Filter the results where the [key] field is similar to the given case insensitive value. | [optional] |
| **filter_value** | **String** | Filter the results where the [value] field is equal to the given value. | [optional] |
| **filter_value_neq** | **String** | Filter the results where the [value] field is not equal to the given value. | [optional] |
| **filter_value_like** | **String** | Filter the results where the [value] field is similar to the given case sensitive value. | [optional] |
| **filter_value_ilike** | **String** | Filter the results where the [value] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiAccountsMetadataGetIncludeParameter**](.md) | Include the given relationships. | [optional] |
| **sort** | [**ApiAccountsMetadataGetSortParameter**](.md) | Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiAccountsMetadataGet200Response**](ApiAccountsMetadataGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_blocks_get

> <ApiBlocksGet200Response> api_blocks_get(opts)

List blocks

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
opts = {
  fields_blocks: OpenapiClient::ApiBlocksGetFieldsBlocksParameter.new, # ApiBlocksGetFieldsBlocksParameter | Include the given fields in the response.
  filter_hash: 'filter_hash_example', # String | Filter the results where the [hash] field is equal to the given value.
  filter_hash_neq: 'filter_hash_neq_example', # String | Filter the results where the [hash] field is not equal to the given value.
  filter_hash_like: 'filter_hash_like_example', # String | Filter the results where the [hash] field is similar to the given case sensitive value.
  filter_hash_ilike: 'filter_hash_ilike_example', # String | Filter the results where the [hash] field is similar to the given case insensitive value.
  filter_height: 56, # Integer | Filter the results where the [height] field is equal to the given value.
  filter_header_version_block: 56, # Integer | Filter the results where the [header.version.block] field is equal to the given value.
  filter_header_chain_id: 'filter_header_chain_id_example', # String | Filter the results where the [header.chainId] field is equal to the given value.
  filter_header_chain_id_neq: 'filter_header_chain_id_neq_example', # String | Filter the results where the [header.chainId] field is not equal to the given value.
  filter_header_chain_id_like: 'filter_header_chain_id_like_example', # String | Filter the results where the [header.chainId] field is similar to the given case sensitive value.
  filter_header_chain_id_ilike: 'filter_header_chain_id_ilike_example', # String | Filter the results where the [header.chainId] field is similar to the given case insensitive value.
  filter_header_height: 56, # Integer | Filter the results where the [header.height] field is equal to the given value.
  filter_header_time: 'filter_header_time_example', # String | Filter the results where the [header.time] field is equal to the given value.
  filter_header_time_neq: 'filter_header_time_neq_example', # String | Filter the results where the [header.time] field is not equal to the given value.
  filter_header_time_like: 'filter_header_time_like_example', # String | Filter the results where the [header.time] field is similar to the given case sensitive value.
  filter_header_time_ilike: 'filter_header_time_ilike_example', # String | Filter the results where the [header.time] field is similar to the given case insensitive value.
  filter_header_last_block_id_hash: 'filter_header_last_block_id_hash_example', # String | Filter the results where the [header.lastBlockId.hash] field is equal to the given value.
  filter_header_last_block_id_hash_neq: 'filter_header_last_block_id_hash_neq_example', # String | Filter the results where the [header.lastBlockId.hash] field is not equal to the given value.
  filter_header_last_block_id_hash_like: 'filter_header_last_block_id_hash_like_example', # String | Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value.
  filter_header_last_block_id_hash_ilike: 'filter_header_last_block_id_hash_ilike_example', # String | Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value.
  filter_header_last_block_id_part_set_header_total: 56, # Integer | Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value.
  filter_header_last_block_id_part_set_header_hash: 'filter_header_last_block_id_part_set_header_hash_example', # String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value.
  filter_header_last_block_id_part_set_header_hash_neq: 'filter_header_last_block_id_part_set_header_hash_neq_example', # String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value.
  filter_header_last_block_id_part_set_header_hash_like: 'filter_header_last_block_id_part_set_header_hash_like_example', # String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value.
  filter_header_last_block_id_part_set_header_hash_ilike: 'filter_header_last_block_id_part_set_header_hash_ilike_example', # String | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value.
  filter_header_last_commit_hash: 'filter_header_last_commit_hash_example', # String | Filter the results where the [header.lastCommitHash] field is equal to the given value.
  filter_header_last_commit_hash_neq: 'filter_header_last_commit_hash_neq_example', # String | Filter the results where the [header.lastCommitHash] field is not equal to the given value.
  filter_header_last_commit_hash_like: 'filter_header_last_commit_hash_like_example', # String | Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value.
  filter_header_last_commit_hash_ilike: 'filter_header_last_commit_hash_ilike_example', # String | Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value.
  filter_header_data_hash: 'filter_header_data_hash_example', # String | Filter the results where the [header.dataHash] field is equal to the given value.
  filter_header_data_hash_neq: 'filter_header_data_hash_neq_example', # String | Filter the results where the [header.dataHash] field is not equal to the given value.
  filter_header_data_hash_like: 'filter_header_data_hash_like_example', # String | Filter the results where the [header.dataHash] field is similar to the given case sensitive value.
  filter_header_data_hash_ilike: 'filter_header_data_hash_ilike_example', # String | Filter the results where the [header.dataHash] field is similar to the given case insensitive value.
  filter_header_validators_hash: 'filter_header_validators_hash_example', # String | Filter the results where the [header.validatorsHash] field is equal to the given value.
  filter_header_validators_hash_neq: 'filter_header_validators_hash_neq_example', # String | Filter the results where the [header.validatorsHash] field is not equal to the given value.
  filter_header_validators_hash_like: 'filter_header_validators_hash_like_example', # String | Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value.
  filter_header_validators_hash_ilike: 'filter_header_validators_hash_ilike_example', # String | Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value.
  filter_header_next_validators_hash: 'filter_header_next_validators_hash_example', # String | Filter the results where the [header.nextValidatorsHash] field is equal to the given value.
  filter_header_next_validators_hash_neq: 'filter_header_next_validators_hash_neq_example', # String | Filter the results where the [header.nextValidatorsHash] field is not equal to the given value.
  filter_header_next_validators_hash_like: 'filter_header_next_validators_hash_like_example', # String | Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value.
  filter_header_next_validators_hash_ilike: 'filter_header_next_validators_hash_ilike_example', # String | Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value.
  filter_header_consensus_hash: 'filter_header_consensus_hash_example', # String | Filter the results where the [header.consensusHash] field is equal to the given value.
  filter_header_consensus_hash_neq: 'filter_header_consensus_hash_neq_example', # String | Filter the results where the [header.consensusHash] field is not equal to the given value.
  filter_header_consensus_hash_like: 'filter_header_consensus_hash_like_example', # String | Filter the results where the [header.consensusHash] field is similar to the given case sensitive value.
  filter_header_consensus_hash_ilike: 'filter_header_consensus_hash_ilike_example', # String | Filter the results where the [header.consensusHash] field is similar to the given case insensitive value.
  filter_header_app_hash: 'filter_header_app_hash_example', # String | Filter the results where the [header.appHash] field is equal to the given value.
  filter_header_app_hash_neq: 'filter_header_app_hash_neq_example', # String | Filter the results where the [header.appHash] field is not equal to the given value.
  filter_header_app_hash_like: 'filter_header_app_hash_like_example', # String | Filter the results where the [header.appHash] field is similar to the given case sensitive value.
  filter_header_app_hash_ilike: 'filter_header_app_hash_ilike_example', # String | Filter the results where the [header.appHash] field is similar to the given case insensitive value.
  filter_header_last_results_hash: 'filter_header_last_results_hash_example', # String | Filter the results where the [header.lastResultsHash] field is equal to the given value.
  filter_header_last_results_hash_neq: 'filter_header_last_results_hash_neq_example', # String | Filter the results where the [header.lastResultsHash] field is not equal to the given value.
  filter_header_last_results_hash_like: 'filter_header_last_results_hash_like_example', # String | Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value.
  filter_header_last_results_hash_ilike: 'filter_header_last_results_hash_ilike_example', # String | Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value.
  filter_header_evidence_hash: 'filter_header_evidence_hash_example', # String | Filter the results where the [header.evidenceHash] field is equal to the given value.
  filter_header_evidence_hash_neq: 'filter_header_evidence_hash_neq_example', # String | Filter the results where the [header.evidenceHash] field is not equal to the given value.
  filter_header_evidence_hash_like: 'filter_header_evidence_hash_like_example', # String | Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value.
  filter_header_evidence_hash_ilike: 'filter_header_evidence_hash_ilike_example', # String | Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value.
  filter_header_proposer_address: 'filter_header_proposer_address_example', # String | Filter the results where the [header.proposerAddress] field is equal to the given value.
  filter_header_proposer_address_neq: 'filter_header_proposer_address_neq_example', # String | Filter the results where the [header.proposerAddress] field is not equal to the given value.
  filter_header_proposer_address_like: 'filter_header_proposer_address_like_example', # String | Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value.
  filter_header_proposer_address_ilike: 'filter_header_proposer_address_ilike_example', # String | Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value.
  include: OpenapiClient::ApiBlocksGetIncludeParameter.new, # ApiBlocksGetIncludeParameter | Include the given relationships.
  sort: OpenapiClient::ApiBlocksGetSortParameter.new # ApiBlocksGetSortParameter | Sort the results by the given field and direction.
}

begin
  # List blocks
  result = api_instance.api_blocks_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_blocks_get: #{e}"
end
```

#### Using the api_blocks_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ApiBlocksGet200Response>, Integer, Hash)> api_blocks_get_with_http_info(opts)

```ruby
begin
  # List blocks
  data, status_code, headers = api_instance.api_blocks_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ApiBlocksGet200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_blocks_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fields_blocks** | [**ApiBlocksGetFieldsBlocksParameter**](.md) | Include the given fields in the response. | [optional] |
| **filter_hash** | **String** | Filter the results where the [hash] field is equal to the given value. | [optional] |
| **filter_hash_neq** | **String** | Filter the results where the [hash] field is not equal to the given value. | [optional] |
| **filter_hash_like** | **String** | Filter the results where the [hash] field is similar to the given case sensitive value. | [optional] |
| **filter_hash_ilike** | **String** | Filter the results where the [hash] field is similar to the given case insensitive value. | [optional] |
| **filter_height** | **Integer** | Filter the results where the [height] field is equal to the given value. | [optional] |
| **filter_header_version_block** | **Integer** | Filter the results where the [header.version.block] field is equal to the given value. | [optional] |
| **filter_header_chain_id** | **String** | Filter the results where the [header.chainId] field is equal to the given value. | [optional] |
| **filter_header_chain_id_neq** | **String** | Filter the results where the [header.chainId] field is not equal to the given value. | [optional] |
| **filter_header_chain_id_like** | **String** | Filter the results where the [header.chainId] field is similar to the given case sensitive value. | [optional] |
| **filter_header_chain_id_ilike** | **String** | Filter the results where the [header.chainId] field is similar to the given case insensitive value. | [optional] |
| **filter_header_height** | **Integer** | Filter the results where the [header.height] field is equal to the given value. | [optional] |
| **filter_header_time** | **String** | Filter the results where the [header.time] field is equal to the given value. | [optional] |
| **filter_header_time_neq** | **String** | Filter the results where the [header.time] field is not equal to the given value. | [optional] |
| **filter_header_time_like** | **String** | Filter the results where the [header.time] field is similar to the given case sensitive value. | [optional] |
| **filter_header_time_ilike** | **String** | Filter the results where the [header.time] field is similar to the given case insensitive value. | [optional] |
| **filter_header_last_block_id_hash** | **String** | Filter the results where the [header.lastBlockId.hash] field is equal to the given value. | [optional] |
| **filter_header_last_block_id_hash_neq** | **String** | Filter the results where the [header.lastBlockId.hash] field is not equal to the given value. | [optional] |
| **filter_header_last_block_id_hash_like** | **String** | Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_last_block_id_hash_ilike** | **String** | Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_last_block_id_part_set_header_total** | **Integer** | Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value. | [optional] |
| **filter_header_last_block_id_part_set_header_hash** | **String** | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value. | [optional] |
| **filter_header_last_block_id_part_set_header_hash_neq** | **String** | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value. | [optional] |
| **filter_header_last_block_id_part_set_header_hash_like** | **String** | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_last_block_id_part_set_header_hash_ilike** | **String** | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_last_commit_hash** | **String** | Filter the results where the [header.lastCommitHash] field is equal to the given value. | [optional] |
| **filter_header_last_commit_hash_neq** | **String** | Filter the results where the [header.lastCommitHash] field is not equal to the given value. | [optional] |
| **filter_header_last_commit_hash_like** | **String** | Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_last_commit_hash_ilike** | **String** | Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_data_hash** | **String** | Filter the results where the [header.dataHash] field is equal to the given value. | [optional] |
| **filter_header_data_hash_neq** | **String** | Filter the results where the [header.dataHash] field is not equal to the given value. | [optional] |
| **filter_header_data_hash_like** | **String** | Filter the results where the [header.dataHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_data_hash_ilike** | **String** | Filter the results where the [header.dataHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_validators_hash** | **String** | Filter the results where the [header.validatorsHash] field is equal to the given value. | [optional] |
| **filter_header_validators_hash_neq** | **String** | Filter the results where the [header.validatorsHash] field is not equal to the given value. | [optional] |
| **filter_header_validators_hash_like** | **String** | Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_validators_hash_ilike** | **String** | Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_next_validators_hash** | **String** | Filter the results where the [header.nextValidatorsHash] field is equal to the given value. | [optional] |
| **filter_header_next_validators_hash_neq** | **String** | Filter the results where the [header.nextValidatorsHash] field is not equal to the given value. | [optional] |
| **filter_header_next_validators_hash_like** | **String** | Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_next_validators_hash_ilike** | **String** | Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_consensus_hash** | **String** | Filter the results where the [header.consensusHash] field is equal to the given value. | [optional] |
| **filter_header_consensus_hash_neq** | **String** | Filter the results where the [header.consensusHash] field is not equal to the given value. | [optional] |
| **filter_header_consensus_hash_like** | **String** | Filter the results where the [header.consensusHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_consensus_hash_ilike** | **String** | Filter the results where the [header.consensusHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_app_hash** | **String** | Filter the results where the [header.appHash] field is equal to the given value. | [optional] |
| **filter_header_app_hash_neq** | **String** | Filter the results where the [header.appHash] field is not equal to the given value. | [optional] |
| **filter_header_app_hash_like** | **String** | Filter the results where the [header.appHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_app_hash_ilike** | **String** | Filter the results where the [header.appHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_last_results_hash** | **String** | Filter the results where the [header.lastResultsHash] field is equal to the given value. | [optional] |
| **filter_header_last_results_hash_neq** | **String** | Filter the results where the [header.lastResultsHash] field is not equal to the given value. | [optional] |
| **filter_header_last_results_hash_like** | **String** | Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_last_results_hash_ilike** | **String** | Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_evidence_hash** | **String** | Filter the results where the [header.evidenceHash] field is equal to the given value. | [optional] |
| **filter_header_evidence_hash_neq** | **String** | Filter the results where the [header.evidenceHash] field is not equal to the given value. | [optional] |
| **filter_header_evidence_hash_like** | **String** | Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value. | [optional] |
| **filter_header_evidence_hash_ilike** | **String** | Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value. | [optional] |
| **filter_header_proposer_address** | **String** | Filter the results where the [header.proposerAddress] field is equal to the given value. | [optional] |
| **filter_header_proposer_address_neq** | **String** | Filter the results where the [header.proposerAddress] field is not equal to the given value. | [optional] |
| **filter_header_proposer_address_like** | **String** | Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value. | [optional] |
| **filter_header_proposer_address_ilike** | **String** | Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiBlocksGetIncludeParameter**](.md) | Include the given relationships. | [optional] |
| **sort** | [**ApiBlocksGetSortParameter**](.md) | Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiBlocksGet200Response**](ApiBlocksGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_entities_get

> <ApiEntitiesGet200Response> api_entities_get(opts)

List entities

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
opts = {
  fields_entities: OpenapiClient::ApiEntitiesGetFieldsEntitiesParameter.new, # ApiEntitiesGetFieldsEntitiesParameter | Include the given fields in the response.
  filter_module: 'filter_module_example', # String | Filter the results where the [module] field is equal to the given value.
  filter_module_neq: 'filter_module_neq_example', # String | Filter the results where the [module] field is not equal to the given value.
  filter_module_like: 'filter_module_like_example', # String | Filter the results where the [module] field is similar to the given case sensitive value.
  filter_module_ilike: 'filter_module_ilike_example', # String | Filter the results where the [module] field is similar to the given case insensitive value.
  filter_type: 'filter_type_example', # String | Filter the results where the [type] field is equal to the given value.
  filter_type_neq: 'filter_type_neq_example', # String | Filter the results where the [type] field is not equal to the given value.
  filter_type_like: 'filter_type_like_example', # String | Filter the results where the [type] field is similar to the given case sensitive value.
  filter_type_ilike: 'filter_type_ilike_example', # String | Filter the results where the [type] field is similar to the given case insensitive value.
  filter_key: 'filter_key_example', # String | Filter the results where the [key] field is equal to the given value.
  filter_key_neq: 'filter_key_neq_example', # String | Filter the results where the [key] field is not equal to the given value.
  filter_key_like: 'filter_key_like_example', # String | Filter the results where the [key] field is similar to the given case sensitive value.
  filter_key_ilike: 'filter_key_ilike_example', # String | Filter the results where the [key] field is similar to the given case insensitive value.
  filter_value: 'filter_value_example', # String | Filter the results where the [value] field is equal to the given value.
  filter_value_neq: 'filter_value_neq_example', # String | Filter the results where the [value] field is not equal to the given value.
  filter_value_like: 'filter_value_like_example', # String | Filter the results where the [value] field is similar to the given case sensitive value.
  filter_value_ilike: 'filter_value_ilike_example', # String | Filter the results where the [value] field is similar to the given case insensitive value.
  sort: OpenapiClient::ApiEntitiesGetSortParameter.new # ApiEntitiesGetSortParameter | Sort the results by the given field and direction.
}

begin
  # List entities
  result = api_instance.api_entities_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_entities_get: #{e}"
end
```

#### Using the api_entities_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ApiEntitiesGet200Response>, Integer, Hash)> api_entities_get_with_http_info(opts)

```ruby
begin
  # List entities
  data, status_code, headers = api_instance.api_entities_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ApiEntitiesGet200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_entities_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fields_entities** | [**ApiEntitiesGetFieldsEntitiesParameter**](.md) | Include the given fields in the response. | [optional] |
| **filter_module** | **String** | Filter the results where the [module] field is equal to the given value. | [optional] |
| **filter_module_neq** | **String** | Filter the results where the [module] field is not equal to the given value. | [optional] |
| **filter_module_like** | **String** | Filter the results where the [module] field is similar to the given case sensitive value. | [optional] |
| **filter_module_ilike** | **String** | Filter the results where the [module] field is similar to the given case insensitive value. | [optional] |
| **filter_type** | **String** | Filter the results where the [type] field is equal to the given value. | [optional] |
| **filter_type_neq** | **String** | Filter the results where the [type] field is not equal to the given value. | [optional] |
| **filter_type_like** | **String** | Filter the results where the [type] field is similar to the given case sensitive value. | [optional] |
| **filter_type_ilike** | **String** | Filter the results where the [type] field is similar to the given case insensitive value. | [optional] |
| **filter_key** | **String** | Filter the results where the [key] field is equal to the given value. | [optional] |
| **filter_key_neq** | **String** | Filter the results where the [key] field is not equal to the given value. | [optional] |
| **filter_key_like** | **String** | Filter the results where the [key] field is similar to the given case sensitive value. | [optional] |
| **filter_key_ilike** | **String** | Filter the results where the [key] field is similar to the given case insensitive value. | [optional] |
| **filter_value** | **String** | Filter the results where the [value] field is equal to the given value. | [optional] |
| **filter_value_neq** | **String** | Filter the results where the [value] field is not equal to the given value. | [optional] |
| **filter_value_like** | **String** | Filter the results where the [value] field is similar to the given case sensitive value. | [optional] |
| **filter_value_ilike** | **String** | Filter the results where the [value] field is similar to the given case insensitive value. | [optional] |
| **sort** | [**ApiEntitiesGetSortParameter**](.md) | Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiEntitiesGet200Response**](ApiEntitiesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_transactions_get

> <ApiTransactionsGet200Response> api_transactions_get(opts)

List transactions

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
opts = {
  fields_accounts: OpenapiClient::ApiTransactionsGetFieldsAccountsParameter.new, # ApiTransactionsGetFieldsAccountsParameter | Include the given fields in the response.
  filter_hash: 'filter_hash_example', # String | Filter the results where the [hash] field is equal to the given value.
  filter_hash_neq: 'filter_hash_neq_example', # String | Filter the results where the [hash] field is not equal to the given value.
  filter_hash_like: 'filter_hash_like_example', # String | Filter the results where the [hash] field is similar to the given case sensitive value.
  filter_hash_ilike: 'filter_hash_ilike_example', # String | Filter the results where the [hash] field is similar to the given case insensitive value.
  filter_sender: 'filter_sender_example', # String | Filter the results where the [sender] field is equal to the given value.
  filter_sender_neq: 'filter_sender_neq_example', # String | Filter the results where the [sender] field is not equal to the given value.
  filter_sender_like: 'filter_sender_like_example', # String | Filter the results where the [sender] field is similar to the given case sensitive value.
  filter_sender_ilike: 'filter_sender_ilike_example', # String | Filter the results where the [sender] field is similar to the given case insensitive value.
  filter_recipient: 'filter_recipient_example', # String | Filter the results where the [recipient] field is equal to the given value.
  filter_recipient_neq: 'filter_recipient_neq_example', # String | Filter the results where the [recipient] field is not equal to the given value.
  filter_recipient_like: 'filter_recipient_like_example', # String | Filter the results where the [recipient] field is similar to the given case sensitive value.
  filter_recipient_ilike: 'filter_recipient_ilike_example', # String | Filter the results where the [recipient] field is similar to the given case insensitive value.
  filter_gas: 56, # Integer | Filter the results where the [gas] field is equal to the given value.
  filter_nonce: 56, # Integer | Filter the results where the [nonce] field is equal to the given value.
  filter_signature: 'filter_signature_example', # String | Filter the results where the [signature] field is equal to the given value.
  filter_signature_neq: 'filter_signature_neq_example', # String | Filter the results where the [signature] field is not equal to the given value.
  filter_signature_like: 'filter_signature_like_example', # String | Filter the results where the [signature] field is similar to the given case sensitive value.
  filter_signature_ilike: 'filter_signature_ilike_example', # String | Filter the results where the [signature] field is similar to the given case insensitive value.
  filter_version: 'filter_version_example', # String | Filter the results where the [version] field is equal to the given value.
  filter_version_neq: 'filter_version_neq_example', # String | Filter the results where the [version] field is not equal to the given value.
  filter_version_like: 'filter_version_like_example', # String | Filter the results where the [version] field is similar to the given case sensitive value.
  filter_version_ilike: 'filter_version_ilike_example', # String | Filter the results where the [version] field is similar to the given case insensitive value.
  filter_message_handler: 'filter_message_handler_example', # String | Filter the results where the [message.handler] field is equal to the given value.
  filter_message_handler_neq: 'filter_message_handler_neq_example', # String | Filter the results where the [message.handler] field is not equal to the given value.
  filter_message_handler_like: 'filter_message_handler_like_example', # String | Filter the results where the [message.handler] field is similar to the given case sensitive value.
  filter_message_handler_ilike: 'filter_message_handler_ilike_example', # String | Filter the results where the [message.handler] field is similar to the given case insensitive value.
  filter_message_version: 'filter_message_version_example', # String | Filter the results where the [message.version] field is equal to the given value.
  filter_message_version_neq: 'filter_message_version_neq_example', # String | Filter the results where the [message.version] field is not equal to the given value.
  filter_message_version_like: 'filter_message_version_like_example', # String | Filter the results where the [message.version] field is similar to the given case sensitive value.
  filter_message_version_ilike: 'filter_message_version_ilike_example', # String | Filter the results where the [message.version] field is similar to the given case insensitive value.
  filter_message_network: 'filter_message_network_example', # String | Filter the results where the [message.network] field is equal to the given value.
  filter_message_network_neq: 'filter_message_network_neq_example', # String | Filter the results where the [message.network] field is not equal to the given value.
  filter_message_network_like: 'filter_message_network_like_example', # String | Filter the results where the [message.network] field is similar to the given case sensitive value.
  filter_message_network_ilike: 'filter_message_network_ilike_example', # String | Filter the results where the [message.network] field is similar to the given case insensitive value.
  filter_message_content: 'filter_message_content_example', # String | Filter the results where the [message.content] field is equal to the given value.
  filter_message_content_neq: 'filter_message_content_neq_example', # String | Filter the results where the [message.content] field is not equal to the given value.
  filter_message_content_like: 'filter_message_content_like_example', # String | Filter the results where the [message.content] field is similar to the given case sensitive value.
  filter_message_content_ilike: 'filter_message_content_ilike_example', # String | Filter the results where the [message.content] field is similar to the given case insensitive value.
  include: OpenapiClient::ApiTransactionsGetIncludeParameter.new, # ApiTransactionsGetIncludeParameter | Include the given relationships.
  sort: OpenapiClient::ApiTransactionsGetSortParameter.new # ApiTransactionsGetSortParameter | Sort the results by the given field and direction.
}

begin
  # List transactions
  result = api_instance.api_transactions_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_transactions_get: #{e}"
end
```

#### Using the api_transactions_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ApiTransactionsGet200Response>, Integer, Hash)> api_transactions_get_with_http_info(opts)

```ruby
begin
  # List transactions
  data, status_code, headers = api_instance.api_transactions_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ApiTransactionsGet200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_transactions_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fields_accounts** | [**ApiTransactionsGetFieldsAccountsParameter**](.md) | Include the given fields in the response. | [optional] |
| **filter_hash** | **String** | Filter the results where the [hash] field is equal to the given value. | [optional] |
| **filter_hash_neq** | **String** | Filter the results where the [hash] field is not equal to the given value. | [optional] |
| **filter_hash_like** | **String** | Filter the results where the [hash] field is similar to the given case sensitive value. | [optional] |
| **filter_hash_ilike** | **String** | Filter the results where the [hash] field is similar to the given case insensitive value. | [optional] |
| **filter_sender** | **String** | Filter the results where the [sender] field is equal to the given value. | [optional] |
| **filter_sender_neq** | **String** | Filter the results where the [sender] field is not equal to the given value. | [optional] |
| **filter_sender_like** | **String** | Filter the results where the [sender] field is similar to the given case sensitive value. | [optional] |
| **filter_sender_ilike** | **String** | Filter the results where the [sender] field is similar to the given case insensitive value. | [optional] |
| **filter_recipient** | **String** | Filter the results where the [recipient] field is equal to the given value. | [optional] |
| **filter_recipient_neq** | **String** | Filter the results where the [recipient] field is not equal to the given value. | [optional] |
| **filter_recipient_like** | **String** | Filter the results where the [recipient] field is similar to the given case sensitive value. | [optional] |
| **filter_recipient_ilike** | **String** | Filter the results where the [recipient] field is similar to the given case insensitive value. | [optional] |
| **filter_gas** | **Integer** | Filter the results where the [gas] field is equal to the given value. | [optional] |
| **filter_nonce** | **Integer** | Filter the results where the [nonce] field is equal to the given value. | [optional] |
| **filter_signature** | **String** | Filter the results where the [signature] field is equal to the given value. | [optional] |
| **filter_signature_neq** | **String** | Filter the results where the [signature] field is not equal to the given value. | [optional] |
| **filter_signature_like** | **String** | Filter the results where the [signature] field is similar to the given case sensitive value. | [optional] |
| **filter_signature_ilike** | **String** | Filter the results where the [signature] field is similar to the given case insensitive value. | [optional] |
| **filter_version** | **String** | Filter the results where the [version] field is equal to the given value. | [optional] |
| **filter_version_neq** | **String** | Filter the results where the [version] field is not equal to the given value. | [optional] |
| **filter_version_like** | **String** | Filter the results where the [version] field is similar to the given case sensitive value. | [optional] |
| **filter_version_ilike** | **String** | Filter the results where the [version] field is similar to the given case insensitive value. | [optional] |
| **filter_message_handler** | **String** | Filter the results where the [message.handler] field is equal to the given value. | [optional] |
| **filter_message_handler_neq** | **String** | Filter the results where the [message.handler] field is not equal to the given value. | [optional] |
| **filter_message_handler_like** | **String** | Filter the results where the [message.handler] field is similar to the given case sensitive value. | [optional] |
| **filter_message_handler_ilike** | **String** | Filter the results where the [message.handler] field is similar to the given case insensitive value. | [optional] |
| **filter_message_version** | **String** | Filter the results where the [message.version] field is equal to the given value. | [optional] |
| **filter_message_version_neq** | **String** | Filter the results where the [message.version] field is not equal to the given value. | [optional] |
| **filter_message_version_like** | **String** | Filter the results where the [message.version] field is similar to the given case sensitive value. | [optional] |
| **filter_message_version_ilike** | **String** | Filter the results where the [message.version] field is similar to the given case insensitive value. | [optional] |
| **filter_message_network** | **String** | Filter the results where the [message.network] field is equal to the given value. | [optional] |
| **filter_message_network_neq** | **String** | Filter the results where the [message.network] field is not equal to the given value. | [optional] |
| **filter_message_network_like** | **String** | Filter the results where the [message.network] field is similar to the given case sensitive value. | [optional] |
| **filter_message_network_ilike** | **String** | Filter the results where the [message.network] field is similar to the given case insensitive value. | [optional] |
| **filter_message_content** | **String** | Filter the results where the [message.content] field is equal to the given value. | [optional] |
| **filter_message_content_neq** | **String** | Filter the results where the [message.content] field is not equal to the given value. | [optional] |
| **filter_message_content_like** | **String** | Filter the results where the [message.content] field is similar to the given case sensitive value. | [optional] |
| **filter_message_content_ilike** | **String** | Filter the results where the [message.content] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiTransactionsGetIncludeParameter**](.md) | Include the given relationships. | [optional] |
| **sort** | [**ApiTransactionsGetSortParameter**](.md) | Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiTransactionsGet200Response**](ApiTransactionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_transactions_metadata_get

> <ApiTransactionsMetadataGet200Response> api_transactions_metadata_get(opts)

List transaction metadata

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
opts = {
  fields_transaction_metadata: OpenapiClient::ApiTransactionsMetadataGetFieldsTransactionMetadataParameter.new, # ApiTransactionsMetadataGetFieldsTransactionMetadataParameter | Include the given fields in the response.
  filter_transaction_id: 56, # Integer | Filter the results where the [transaction_id] field is equal to the given value.
  filter_key: 'filter_key_example', # String | Filter the results where the [key] field is equal to the given value.
  filter_key_neq: 'filter_key_neq_example', # String | Filter the results where the [key] field is not equal to the given value.
  filter_key_like: 'filter_key_like_example', # String | Filter the results where the [key] field is similar to the given case sensitive value.
  filter_key_ilike: 'filter_key_ilike_example', # String | Filter the results where the [key] field is similar to the given case insensitive value.
  filter_value: 'filter_value_example', # String | Filter the results where the [value] field is equal to the given value.
  filter_value_neq: 'filter_value_neq_example', # String | Filter the results where the [value] field is not equal to the given value.
  filter_value_like: 'filter_value_like_example', # String | Filter the results where the [value] field is similar to the given case sensitive value.
  filter_value_ilike: 'filter_value_ilike_example', # String | Filter the results where the [value] field is similar to the given case insensitive value.
  include: OpenapiClient::ApiTransactionsMetadataGetIncludeParameter.new, # ApiTransactionsMetadataGetIncludeParameter | Include the given relationships.
  sort: OpenapiClient::ApiTransactionsMetadataGetSortParameter.new # ApiTransactionsMetadataGetSortParameter | Sort the results by the given field and direction.
}

begin
  # List transaction metadata
  result = api_instance.api_transactions_metadata_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_transactions_metadata_get: #{e}"
end
```

#### Using the api_transactions_metadata_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ApiTransactionsMetadataGet200Response>, Integer, Hash)> api_transactions_metadata_get_with_http_info(opts)

```ruby
begin
  # List transaction metadata
  data, status_code, headers = api_instance.api_transactions_metadata_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ApiTransactionsMetadataGet200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_transactions_metadata_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fields_transaction_metadata** | [**ApiTransactionsMetadataGetFieldsTransactionMetadataParameter**](.md) | Include the given fields in the response. | [optional] |
| **filter_transaction_id** | **Integer** | Filter the results where the [transaction_id] field is equal to the given value. | [optional] |
| **filter_key** | **String** | Filter the results where the [key] field is equal to the given value. | [optional] |
| **filter_key_neq** | **String** | Filter the results where the [key] field is not equal to the given value. | [optional] |
| **filter_key_like** | **String** | Filter the results where the [key] field is similar to the given case sensitive value. | [optional] |
| **filter_key_ilike** | **String** | Filter the results where the [key] field is similar to the given case insensitive value. | [optional] |
| **filter_value** | **String** | Filter the results where the [value] field is equal to the given value. | [optional] |
| **filter_value_neq** | **String** | Filter the results where the [value] field is not equal to the given value. | [optional] |
| **filter_value_like** | **String** | Filter the results where the [value] field is similar to the given case sensitive value. | [optional] |
| **filter_value_ilike** | **String** | Filter the results where the [value] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiTransactionsMetadataGetIncludeParameter**](.md) | Include the given relationships. | [optional] |
| **sort** | [**ApiTransactionsMetadataGetSortParameter**](.md) | Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiTransactionsMetadataGet200Response**](ApiTransactionsMetadataGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_transactions_receipts_get

> <ApiTransactionsReceiptsGet200Response> api_transactions_receipts_get(opts)

List transaction receipts

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
opts = {
  fields_transaction_receipts: OpenapiClient::ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter.new, # ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter | Include the given fields in the response.
  filter_transaction_id: 56, # Integer | Filter the results where the [transaction_id] field is equal to the given value.
  filter_block_hash: 'filter_block_hash_example', # String | Filter the results where the [block_hash] field is equal to the given value.
  filter_block_hash_neq: 'filter_block_hash_neq_example', # String | Filter the results where the [block_hash] field is not equal to the given value.
  filter_block_hash_like: 'filter_block_hash_like_example', # String | Filter the results where the [block_hash] field is similar to the given case sensitive value.
  filter_block_hash_ilike: 'filter_block_hash_ilike_example', # String | Filter the results where the [block_hash] field is similar to the given case insensitive value.
  filter_block_number: 'filter_block_number_example', # String | Filter the results where the [block_number] field is equal to the given value.
  filter_block_number_neq: 'filter_block_number_neq_example', # String | Filter the results where the [block_number] field is not equal to the given value.
  filter_block_number_like: 'filter_block_number_like_example', # String | Filter the results where the [block_number] field is similar to the given case sensitive value.
  filter_block_number_ilike: 'filter_block_number_ilike_example', # String | Filter the results where the [block_number] field is similar to the given case insensitive value.
  include: OpenapiClient::ApiTransactionsMetadataGetIncludeParameter.new, # ApiTransactionsMetadataGetIncludeParameter | Include the given relationships.
  sort: OpenapiClient::ApiTransactionsReceiptsGetSortParameter.new # ApiTransactionsReceiptsGetSortParameter | Sort the results by the given field and direction.
}

begin
  # List transaction receipts
  result = api_instance.api_transactions_receipts_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_transactions_receipts_get: #{e}"
end
```

#### Using the api_transactions_receipts_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ApiTransactionsReceiptsGet200Response>, Integer, Hash)> api_transactions_receipts_get_with_http_info(opts)

```ruby
begin
  # List transaction receipts
  data, status_code, headers = api_instance.api_transactions_receipts_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ApiTransactionsReceiptsGet200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_transactions_receipts_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fields_transaction_receipts** | [**ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter**](.md) | Include the given fields in the response. | [optional] |
| **filter_transaction_id** | **Integer** | Filter the results where the [transaction_id] field is equal to the given value. | [optional] |
| **filter_block_hash** | **String** | Filter the results where the [block_hash] field is equal to the given value. | [optional] |
| **filter_block_hash_neq** | **String** | Filter the results where the [block_hash] field is not equal to the given value. | [optional] |
| **filter_block_hash_like** | **String** | Filter the results where the [block_hash] field is similar to the given case sensitive value. | [optional] |
| **filter_block_hash_ilike** | **String** | Filter the results where the [block_hash] field is similar to the given case insensitive value. | [optional] |
| **filter_block_number** | **String** | Filter the results where the [block_number] field is equal to the given value. | [optional] |
| **filter_block_number_neq** | **String** | Filter the results where the [block_number] field is not equal to the given value. | [optional] |
| **filter_block_number_like** | **String** | Filter the results where the [block_number] field is similar to the given case sensitive value. | [optional] |
| **filter_block_number_ilike** | **String** | Filter the results where the [block_number] field is similar to the given case insensitive value. | [optional] |
| **include** | [**ApiTransactionsMetadataGetIncludeParameter**](.md) | Include the given relationships. | [optional] |
| **sort** | [**ApiTransactionsReceiptsGetSortParameter**](.md) | Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiTransactionsReceiptsGet200Response**](ApiTransactionsReceiptsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_validators_updates_get

> <ApiValidatorsUpdatesGet200Response> api_validators_updates_get(opts)

List validator updates

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
opts = {
  fields_block_number: OpenapiClient::ApiValidatorsUpdatesGetFieldsBlockNumberParameter.new, # ApiValidatorsUpdatesGetFieldsBlockNumberParameter | Include the given fields in the response.
  filter_block_number: 56, # Integer | Filter the results where the [block_number] field is equal to the given value.
  include: OpenapiClient::ApiValidatorsUpdatesGetIncludeParameter.new, # ApiValidatorsUpdatesGetIncludeParameter | Include the given relationships.
  sort: OpenapiClient::ApiValidatorsUpdatesGetSortParameter.new # ApiValidatorsUpdatesGetSortParameter | Sort the results by the given field and direction.
}

begin
  # List validator updates
  result = api_instance.api_validators_updates_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_validators_updates_get: #{e}"
end
```

#### Using the api_validators_updates_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ApiValidatorsUpdatesGet200Response>, Integer, Hash)> api_validators_updates_get_with_http_info(opts)

```ruby
begin
  # List validator updates
  data, status_code, headers = api_instance.api_validators_updates_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ApiValidatorsUpdatesGet200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_validators_updates_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fields_block_number** | [**ApiValidatorsUpdatesGetFieldsBlockNumberParameter**](.md) | Include the given fields in the response. | [optional] |
| **filter_block_number** | **Integer** | Filter the results where the [block_number] field is equal to the given value. | [optional] |
| **include** | [**ApiValidatorsUpdatesGetIncludeParameter**](.md) | Include the given relationships. | [optional] |
| **sort** | [**ApiValidatorsUpdatesGetSortParameter**](.md) | Sort the results by the given field and direction. | [optional] |

### Return type

[**ApiValidatorsUpdatesGet200Response**](ApiValidatorsUpdatesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

