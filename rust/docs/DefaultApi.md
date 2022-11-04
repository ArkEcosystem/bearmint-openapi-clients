# \DefaultApi

All URIs are relative to *http://railway.test*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_accounts_get**](DefaultApi.md#api_accounts_get) | **GET** /api/accounts | List accounts
[**api_accounts_metadata_get**](DefaultApi.md#api_accounts_metadata_get) | **GET** /api/accounts/metadata | List account metadata
[**api_blocks_get**](DefaultApi.md#api_blocks_get) | **GET** /api/blocks | List blocks
[**api_entities_get**](DefaultApi.md#api_entities_get) | **GET** /api/entities | List entities
[**api_transactions_get**](DefaultApi.md#api_transactions_get) | **GET** /api/transactions | List transactions
[**api_transactions_metadata_get**](DefaultApi.md#api_transactions_metadata_get) | **GET** /api/transactions/metadata | List transaction metadata
[**api_transactions_receipts_get**](DefaultApi.md#api_transactions_receipts_get) | **GET** /api/transactions/receipts | List transaction receipts
[**api_validators_updates_get**](DefaultApi.md#api_validators_updates_get) | **GET** /api/validators/updates | List validator updates



## api_accounts_get

> crate::models::ApiAccountsGet200Response api_accounts_get(fields_left_square_bracket_accounts_right_square_bracket, filter_left_square_bracket_address_right_square_bracket, filter_left_square_bracket_address_period_neq_right_square_bracket, filter_left_square_bracket_address_period_like_right_square_bracket, filter_left_square_bracket_address_period_ilike_right_square_bracket, filter_left_square_bracket_public_key_right_square_bracket, filter_left_square_bracket_public_key_period_neq_right_square_bracket, filter_left_square_bracket_public_key_period_like_right_square_bracket, filter_left_square_bracket_public_key_period_ilike_right_square_bracket, filter_left_square_bracket_name_right_square_bracket, filter_left_square_bracket_name_period_neq_right_square_bracket, filter_left_square_bracket_name_period_like_right_square_bracket, filter_left_square_bracket_name_period_ilike_right_square_bracket, filter_left_square_bracket_nonce_right_square_bracket, filter_left_square_bracket_validator_period_address_right_square_bracket, filter_left_square_bracket_validator_period_address_period_neq_right_square_bracket, filter_left_square_bracket_validator_period_address_period_like_right_square_bracket, filter_left_square_bracket_validator_period_address_period_ilike_right_square_bracket, filter_left_square_bracket_validator_period_public_key_right_square_bracket, filter_left_square_bracket_validator_period_public_key_period_neq_right_square_bracket, filter_left_square_bracket_validator_period_public_key_period_like_right_square_bracket, filter_left_square_bracket_validator_period_public_key_period_ilike_right_square_bracket, filter_left_square_bracket_validator_period_power_right_square_bracket, filter_left_square_bracket_validator_period_power_period_neq_right_square_bracket, filter_left_square_bracket_validator_period_power_period_like_right_square_bracket, filter_left_square_bracket_validator_period_power_period_ilike_right_square_bracket, include, sort)
List accounts

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**fields_left_square_bracket_accounts_right_square_bracket** | Option<[**ApiAccountsGetFieldsAccountsParameter**](.md)> | Include the given fields in the response. |  |
**filter_left_square_bracket_address_right_square_bracket** | Option<**String**> | Filter the results where the [address] field is equal to the given value. |  |
**filter_left_square_bracket_address_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [address] field is not equal to the given value. |  |
**filter_left_square_bracket_address_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [address] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_address_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [address] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_public_key_right_square_bracket** | Option<**String**> | Filter the results where the [public_key] field is equal to the given value. |  |
**filter_left_square_bracket_public_key_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [public_key] field is not equal to the given value. |  |
**filter_left_square_bracket_public_key_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [public_key] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_public_key_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [public_key] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_name_right_square_bracket** | Option<**String**> | Filter the results where the [name] field is equal to the given value. |  |
**filter_left_square_bracket_name_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [name] field is not equal to the given value. |  |
**filter_left_square_bracket_name_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [name] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_name_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [name] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_nonce_right_square_bracket** | Option<**i32**> | Filter the results where the [nonce] field is equal to the given value. |  |
**filter_left_square_bracket_validator_period_address_right_square_bracket** | Option<**String**> | Filter the results where the [validator.address] field is equal to the given value. |  |
**filter_left_square_bracket_validator_period_address_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [validator.address] field is not equal to the given value. |  |
**filter_left_square_bracket_validator_period_address_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [validator.address] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_validator_period_address_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [validator.address] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_validator_period_public_key_right_square_bracket** | Option<**String**> | Filter the results where the [validator.publicKey] field is equal to the given value. |  |
**filter_left_square_bracket_validator_period_public_key_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [validator.publicKey] field is not equal to the given value. |  |
**filter_left_square_bracket_validator_period_public_key_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [validator.publicKey] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_validator_period_public_key_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [validator.publicKey] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_validator_period_power_right_square_bracket** | Option<**String**> | Filter the results where the [validator.power] field is equal to the given value. |  |
**filter_left_square_bracket_validator_period_power_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [validator.power] field is not equal to the given value. |  |
**filter_left_square_bracket_validator_period_power_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [validator.power] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_validator_period_power_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [validator.power] field is similar to the given case insensitive value. |  |
**include** | Option<[**ApiAccountsGetIncludeParameter**](.md)> | Include the given relationships. |  |
**sort** | Option<[**ApiAccountsGetSortParameter**](.md)> | Sort the results by the given field and direction. |  |

### Return type

[**crate::models::ApiAccountsGet200Response**](_api_accounts_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_accounts_metadata_get

> crate::models::ApiAccountsMetadataGet200Response api_accounts_metadata_get(fields_left_square_bracket_accounts_metadata_right_square_bracket, filter_left_square_bracket_account_id_right_square_bracket, filter_left_square_bracket_module_right_square_bracket, filter_left_square_bracket_module_period_neq_right_square_bracket, filter_left_square_bracket_module_period_like_right_square_bracket, filter_left_square_bracket_module_period_ilike_right_square_bracket, filter_left_square_bracket_key_right_square_bracket, filter_left_square_bracket_key_period_neq_right_square_bracket, filter_left_square_bracket_key_period_like_right_square_bracket, filter_left_square_bracket_key_period_ilike_right_square_bracket, filter_left_square_bracket_value_right_square_bracket, filter_left_square_bracket_value_period_neq_right_square_bracket, filter_left_square_bracket_value_period_like_right_square_bracket, filter_left_square_bracket_value_period_ilike_right_square_bracket, include, sort)
List account metadata

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**fields_left_square_bracket_accounts_metadata_right_square_bracket** | Option<[**ApiAccountsMetadataGetFieldsAccountsMetadataParameter**](.md)> | Include the given fields in the response. |  |
**filter_left_square_bracket_account_id_right_square_bracket** | Option<**i32**> | Filter the results where the [account_id] field is equal to the given value. |  |
**filter_left_square_bracket_module_right_square_bracket** | Option<**String**> | Filter the results where the [module] field is equal to the given value. |  |
**filter_left_square_bracket_module_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [module] field is not equal to the given value. |  |
**filter_left_square_bracket_module_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [module] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_module_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [module] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_key_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is equal to the given value. |  |
**filter_left_square_bracket_key_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is not equal to the given value. |  |
**filter_left_square_bracket_key_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_key_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_value_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is equal to the given value. |  |
**filter_left_square_bracket_value_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is not equal to the given value. |  |
**filter_left_square_bracket_value_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_value_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is similar to the given case insensitive value. |  |
**include** | Option<[**ApiAccountsMetadataGetIncludeParameter**](.md)> | Include the given relationships. |  |
**sort** | Option<[**ApiAccountsMetadataGetSortParameter**](.md)> | Sort the results by the given field and direction. |  |

### Return type

[**crate::models::ApiAccountsMetadataGet200Response**](_api_accounts_metadata_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_blocks_get

> crate::models::ApiBlocksGet200Response api_blocks_get(fields_left_square_bracket_blocks_right_square_bracket, filter_left_square_bracket_hash_right_square_bracket, filter_left_square_bracket_hash_period_neq_right_square_bracket, filter_left_square_bracket_hash_period_like_right_square_bracket, filter_left_square_bracket_hash_period_ilike_right_square_bracket, filter_left_square_bracket_height_right_square_bracket, filter_left_square_bracket_header_period_version_period_block_right_square_bracket, filter_left_square_bracket_header_period_chain_id_right_square_bracket, filter_left_square_bracket_header_period_chain_id_period_neq_right_square_bracket, filter_left_square_bracket_header_period_chain_id_period_like_right_square_bracket, filter_left_square_bracket_header_period_chain_id_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_height_right_square_bracket, filter_left_square_bracket_header_period_time_right_square_bracket, filter_left_square_bracket_header_period_time_period_neq_right_square_bracket, filter_left_square_bracket_header_period_time_period_like_right_square_bracket, filter_left_square_bracket_header_period_time_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_last_block_id_period_hash_right_square_bracket, filter_left_square_bracket_header_period_last_block_id_period_hash_period_neq_right_square_bracket, filter_left_square_bracket_header_period_last_block_id_period_hash_period_like_right_square_bracket, filter_left_square_bracket_header_period_last_block_id_period_hash_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_last_block_id_period_part_set_header_period_total_right_square_bracket, filter_left_square_bracket_header_period_last_block_id_period_part_set_header_period_hash_right_square_bracket, filter_left_square_bracket_header_period_last_block_id_period_part_set_header_period_hash_period_neq_right_square_bracket, filter_left_square_bracket_header_period_last_block_id_period_part_set_header_period_hash_period_like_right_square_bracket, filter_left_square_bracket_header_period_last_block_id_period_part_set_header_period_hash_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_last_commit_hash_right_square_bracket, filter_left_square_bracket_header_period_last_commit_hash_period_neq_right_square_bracket, filter_left_square_bracket_header_period_last_commit_hash_period_like_right_square_bracket, filter_left_square_bracket_header_period_last_commit_hash_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_data_hash_right_square_bracket, filter_left_square_bracket_header_period_data_hash_period_neq_right_square_bracket, filter_left_square_bracket_header_period_data_hash_period_like_right_square_bracket, filter_left_square_bracket_header_period_data_hash_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_validators_hash_right_square_bracket, filter_left_square_bracket_header_period_validators_hash_period_neq_right_square_bracket, filter_left_square_bracket_header_period_validators_hash_period_like_right_square_bracket, filter_left_square_bracket_header_period_validators_hash_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_next_validators_hash_right_square_bracket, filter_left_square_bracket_header_period_next_validators_hash_period_neq_right_square_bracket, filter_left_square_bracket_header_period_next_validators_hash_period_like_right_square_bracket, filter_left_square_bracket_header_period_next_validators_hash_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_consensus_hash_right_square_bracket, filter_left_square_bracket_header_period_consensus_hash_period_neq_right_square_bracket, filter_left_square_bracket_header_period_consensus_hash_period_like_right_square_bracket, filter_left_square_bracket_header_period_consensus_hash_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_app_hash_right_square_bracket, filter_left_square_bracket_header_period_app_hash_period_neq_right_square_bracket, filter_left_square_bracket_header_period_app_hash_period_like_right_square_bracket, filter_left_square_bracket_header_period_app_hash_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_last_results_hash_right_square_bracket, filter_left_square_bracket_header_period_last_results_hash_period_neq_right_square_bracket, filter_left_square_bracket_header_period_last_results_hash_period_like_right_square_bracket, filter_left_square_bracket_header_period_last_results_hash_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_evidence_hash_right_square_bracket, filter_left_square_bracket_header_period_evidence_hash_period_neq_right_square_bracket, filter_left_square_bracket_header_period_evidence_hash_period_like_right_square_bracket, filter_left_square_bracket_header_period_evidence_hash_period_ilike_right_square_bracket, filter_left_square_bracket_header_period_proposer_address_right_square_bracket, filter_left_square_bracket_header_period_proposer_address_period_neq_right_square_bracket, filter_left_square_bracket_header_period_proposer_address_period_like_right_square_bracket, filter_left_square_bracket_header_period_proposer_address_period_ilike_right_square_bracket, include, sort)
List blocks

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**fields_left_square_bracket_blocks_right_square_bracket** | Option<[**ApiBlocksGetFieldsBlocksParameter**](.md)> | Include the given fields in the response. |  |
**filter_left_square_bracket_hash_right_square_bracket** | Option<**String**> | Filter the results where the [hash] field is equal to the given value. |  |
**filter_left_square_bracket_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [hash] field is not equal to the given value. |  |
**filter_left_square_bracket_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [hash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [hash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_height_right_square_bracket** | Option<**i32**> | Filter the results where the [height] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_version_period_block_right_square_bracket** | Option<**i32**> | Filter the results where the [header.version.block] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_chain_id_right_square_bracket** | Option<**String**> | Filter the results where the [header.chainId] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_chain_id_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.chainId] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_chain_id_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.chainId] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_chain_id_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.chainId] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_height_right_square_bracket** | Option<**i32**> | Filter the results where the [header.height] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_time_right_square_bracket** | Option<**String**> | Filter the results where the [header.time] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_time_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.time] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_time_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.time] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_time_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.time] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_last_block_id_period_hash_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastBlockId.hash] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_last_block_id_period_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastBlockId.hash] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_last_block_id_period_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_last_block_id_period_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_last_block_id_period_part_set_header_period_total_right_square_bracket** | Option<**i32**> | Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_last_block_id_period_part_set_header_period_hash_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_last_block_id_period_part_set_header_period_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_last_block_id_period_part_set_header_period_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_last_block_id_period_part_set_header_period_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_last_commit_hash_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastCommitHash] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_last_commit_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastCommitHash] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_last_commit_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_last_commit_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_data_hash_right_square_bracket** | Option<**String**> | Filter the results where the [header.dataHash] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_data_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.dataHash] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_data_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.dataHash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_data_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.dataHash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_validators_hash_right_square_bracket** | Option<**String**> | Filter the results where the [header.validatorsHash] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_validators_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.validatorsHash] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_validators_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_validators_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_next_validators_hash_right_square_bracket** | Option<**String**> | Filter the results where the [header.nextValidatorsHash] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_next_validators_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.nextValidatorsHash] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_next_validators_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_next_validators_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_consensus_hash_right_square_bracket** | Option<**String**> | Filter the results where the [header.consensusHash] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_consensus_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.consensusHash] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_consensus_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.consensusHash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_consensus_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.consensusHash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_app_hash_right_square_bracket** | Option<**String**> | Filter the results where the [header.appHash] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_app_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.appHash] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_app_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.appHash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_app_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.appHash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_last_results_hash_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastResultsHash] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_last_results_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastResultsHash] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_last_results_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_last_results_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_evidence_hash_right_square_bracket** | Option<**String**> | Filter the results where the [header.evidenceHash] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_evidence_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.evidenceHash] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_evidence_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_evidence_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_header_period_proposer_address_right_square_bracket** | Option<**String**> | Filter the results where the [header.proposerAddress] field is equal to the given value. |  |
**filter_left_square_bracket_header_period_proposer_address_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [header.proposerAddress] field is not equal to the given value. |  |
**filter_left_square_bracket_header_period_proposer_address_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_header_period_proposer_address_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value. |  |
**include** | Option<[**ApiBlocksGetIncludeParameter**](.md)> | Include the given relationships. |  |
**sort** | Option<[**ApiBlocksGetSortParameter**](.md)> | Sort the results by the given field and direction. |  |

### Return type

[**crate::models::ApiBlocksGet200Response**](_api_blocks_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_entities_get

> crate::models::ApiEntitiesGet200Response api_entities_get(fields_left_square_bracket_entities_right_square_bracket, filter_left_square_bracket_module_right_square_bracket, filter_left_square_bracket_module_period_neq_right_square_bracket, filter_left_square_bracket_module_period_like_right_square_bracket, filter_left_square_bracket_module_period_ilike_right_square_bracket, filter_left_square_bracket_type_right_square_bracket, filter_left_square_bracket_type_period_neq_right_square_bracket, filter_left_square_bracket_type_period_like_right_square_bracket, filter_left_square_bracket_type_period_ilike_right_square_bracket, filter_left_square_bracket_key_right_square_bracket, filter_left_square_bracket_key_period_neq_right_square_bracket, filter_left_square_bracket_key_period_like_right_square_bracket, filter_left_square_bracket_key_period_ilike_right_square_bracket, filter_left_square_bracket_value_right_square_bracket, filter_left_square_bracket_value_period_neq_right_square_bracket, filter_left_square_bracket_value_period_like_right_square_bracket, filter_left_square_bracket_value_period_ilike_right_square_bracket, sort)
List entities

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**fields_left_square_bracket_entities_right_square_bracket** | Option<[**ApiEntitiesGetFieldsEntitiesParameter**](.md)> | Include the given fields in the response. |  |
**filter_left_square_bracket_module_right_square_bracket** | Option<**String**> | Filter the results where the [module] field is equal to the given value. |  |
**filter_left_square_bracket_module_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [module] field is not equal to the given value. |  |
**filter_left_square_bracket_module_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [module] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_module_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [module] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_type_right_square_bracket** | Option<**String**> | Filter the results where the [type] field is equal to the given value. |  |
**filter_left_square_bracket_type_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [type] field is not equal to the given value. |  |
**filter_left_square_bracket_type_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [type] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_type_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [type] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_key_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is equal to the given value. |  |
**filter_left_square_bracket_key_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is not equal to the given value. |  |
**filter_left_square_bracket_key_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_key_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_value_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is equal to the given value. |  |
**filter_left_square_bracket_value_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is not equal to the given value. |  |
**filter_left_square_bracket_value_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_value_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is similar to the given case insensitive value. |  |
**sort** | Option<[**ApiEntitiesGetSortParameter**](.md)> | Sort the results by the given field and direction. |  |

### Return type

[**crate::models::ApiEntitiesGet200Response**](_api_entities_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_transactions_get

> crate::models::ApiTransactionsGet200Response api_transactions_get(fields_left_square_bracket_accounts_right_square_bracket, filter_left_square_bracket_hash_right_square_bracket, filter_left_square_bracket_hash_period_neq_right_square_bracket, filter_left_square_bracket_hash_period_like_right_square_bracket, filter_left_square_bracket_hash_period_ilike_right_square_bracket, filter_left_square_bracket_sender_right_square_bracket, filter_left_square_bracket_sender_period_neq_right_square_bracket, filter_left_square_bracket_sender_period_like_right_square_bracket, filter_left_square_bracket_sender_period_ilike_right_square_bracket, filter_left_square_bracket_recipient_right_square_bracket, filter_left_square_bracket_recipient_period_neq_right_square_bracket, filter_left_square_bracket_recipient_period_like_right_square_bracket, filter_left_square_bracket_recipient_period_ilike_right_square_bracket, filter_left_square_bracket_gas_right_square_bracket, filter_left_square_bracket_nonce_right_square_bracket, filter_left_square_bracket_signature_right_square_bracket, filter_left_square_bracket_signature_period_neq_right_square_bracket, filter_left_square_bracket_signature_period_like_right_square_bracket, filter_left_square_bracket_signature_period_ilike_right_square_bracket, filter_left_square_bracket_version_right_square_bracket, filter_left_square_bracket_version_period_neq_right_square_bracket, filter_left_square_bracket_version_period_like_right_square_bracket, filter_left_square_bracket_version_period_ilike_right_square_bracket, filter_left_square_bracket_message_period_handler_right_square_bracket, filter_left_square_bracket_message_period_handler_period_neq_right_square_bracket, filter_left_square_bracket_message_period_handler_period_like_right_square_bracket, filter_left_square_bracket_message_period_handler_period_ilike_right_square_bracket, filter_left_square_bracket_message_period_version_right_square_bracket, filter_left_square_bracket_message_period_version_period_neq_right_square_bracket, filter_left_square_bracket_message_period_version_period_like_right_square_bracket, filter_left_square_bracket_message_period_version_period_ilike_right_square_bracket, filter_left_square_bracket_message_period_network_right_square_bracket, filter_left_square_bracket_message_period_network_period_neq_right_square_bracket, filter_left_square_bracket_message_period_network_period_like_right_square_bracket, filter_left_square_bracket_message_period_network_period_ilike_right_square_bracket, filter_left_square_bracket_message_period_content_right_square_bracket, filter_left_square_bracket_message_period_content_period_neq_right_square_bracket, filter_left_square_bracket_message_period_content_period_like_right_square_bracket, filter_left_square_bracket_message_period_content_period_ilike_right_square_bracket, include, sort)
List transactions

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**fields_left_square_bracket_accounts_right_square_bracket** | Option<[**ApiTransactionsGetFieldsAccountsParameter**](.md)> | Include the given fields in the response. |  |
**filter_left_square_bracket_hash_right_square_bracket** | Option<**String**> | Filter the results where the [hash] field is equal to the given value. |  |
**filter_left_square_bracket_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [hash] field is not equal to the given value. |  |
**filter_left_square_bracket_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [hash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [hash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_sender_right_square_bracket** | Option<**String**> | Filter the results where the [sender] field is equal to the given value. |  |
**filter_left_square_bracket_sender_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [sender] field is not equal to the given value. |  |
**filter_left_square_bracket_sender_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [sender] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_sender_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [sender] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_recipient_right_square_bracket** | Option<**String**> | Filter the results where the [recipient] field is equal to the given value. |  |
**filter_left_square_bracket_recipient_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [recipient] field is not equal to the given value. |  |
**filter_left_square_bracket_recipient_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [recipient] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_recipient_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [recipient] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_gas_right_square_bracket** | Option<**i32**> | Filter the results where the [gas] field is equal to the given value. |  |
**filter_left_square_bracket_nonce_right_square_bracket** | Option<**i32**> | Filter the results where the [nonce] field is equal to the given value. |  |
**filter_left_square_bracket_signature_right_square_bracket** | Option<**String**> | Filter the results where the [signature] field is equal to the given value. |  |
**filter_left_square_bracket_signature_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [signature] field is not equal to the given value. |  |
**filter_left_square_bracket_signature_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [signature] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_signature_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [signature] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_version_right_square_bracket** | Option<**String**> | Filter the results where the [version] field is equal to the given value. |  |
**filter_left_square_bracket_version_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [version] field is not equal to the given value. |  |
**filter_left_square_bracket_version_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [version] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_version_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [version] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_message_period_handler_right_square_bracket** | Option<**String**> | Filter the results where the [message.handler] field is equal to the given value. |  |
**filter_left_square_bracket_message_period_handler_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [message.handler] field is not equal to the given value. |  |
**filter_left_square_bracket_message_period_handler_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [message.handler] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_message_period_handler_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [message.handler] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_message_period_version_right_square_bracket** | Option<**String**> | Filter the results where the [message.version] field is equal to the given value. |  |
**filter_left_square_bracket_message_period_version_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [message.version] field is not equal to the given value. |  |
**filter_left_square_bracket_message_period_version_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [message.version] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_message_period_version_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [message.version] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_message_period_network_right_square_bracket** | Option<**String**> | Filter the results where the [message.network] field is equal to the given value. |  |
**filter_left_square_bracket_message_period_network_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [message.network] field is not equal to the given value. |  |
**filter_left_square_bracket_message_period_network_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [message.network] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_message_period_network_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [message.network] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_message_period_content_right_square_bracket** | Option<**String**> | Filter the results where the [message.content] field is equal to the given value. |  |
**filter_left_square_bracket_message_period_content_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [message.content] field is not equal to the given value. |  |
**filter_left_square_bracket_message_period_content_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [message.content] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_message_period_content_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [message.content] field is similar to the given case insensitive value. |  |
**include** | Option<[**ApiTransactionsGetIncludeParameter**](.md)> | Include the given relationships. |  |
**sort** | Option<[**ApiTransactionsGetSortParameter**](.md)> | Sort the results by the given field and direction. |  |

### Return type

[**crate::models::ApiTransactionsGet200Response**](_api_transactions_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_transactions_metadata_get

> crate::models::ApiTransactionsMetadataGet200Response api_transactions_metadata_get(fields_left_square_bracket_transaction_metadata_right_square_bracket, filter_left_square_bracket_transaction_id_right_square_bracket, filter_left_square_bracket_key_right_square_bracket, filter_left_square_bracket_key_period_neq_right_square_bracket, filter_left_square_bracket_key_period_like_right_square_bracket, filter_left_square_bracket_key_period_ilike_right_square_bracket, filter_left_square_bracket_value_right_square_bracket, filter_left_square_bracket_value_period_neq_right_square_bracket, filter_left_square_bracket_value_period_like_right_square_bracket, filter_left_square_bracket_value_period_ilike_right_square_bracket, include, sort)
List transaction metadata

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**fields_left_square_bracket_transaction_metadata_right_square_bracket** | Option<[**ApiTransactionsMetadataGetFieldsTransactionMetadataParameter**](.md)> | Include the given fields in the response. |  |
**filter_left_square_bracket_transaction_id_right_square_bracket** | Option<**i32**> | Filter the results where the [transaction_id] field is equal to the given value. |  |
**filter_left_square_bracket_key_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is equal to the given value. |  |
**filter_left_square_bracket_key_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is not equal to the given value. |  |
**filter_left_square_bracket_key_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_key_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [key] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_value_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is equal to the given value. |  |
**filter_left_square_bracket_value_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is not equal to the given value. |  |
**filter_left_square_bracket_value_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_value_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [value] field is similar to the given case insensitive value. |  |
**include** | Option<[**ApiTransactionsMetadataGetIncludeParameter**](.md)> | Include the given relationships. |  |
**sort** | Option<[**ApiTransactionsMetadataGetSortParameter**](.md)> | Sort the results by the given field and direction. |  |

### Return type

[**crate::models::ApiTransactionsMetadataGet200Response**](_api_transactions_metadata_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_transactions_receipts_get

> crate::models::ApiTransactionsReceiptsGet200Response api_transactions_receipts_get(fields_left_square_bracket_transaction_receipts_right_square_bracket, filter_left_square_bracket_transaction_id_right_square_bracket, filter_left_square_bracket_block_hash_right_square_bracket, filter_left_square_bracket_block_hash_period_neq_right_square_bracket, filter_left_square_bracket_block_hash_period_like_right_square_bracket, filter_left_square_bracket_block_hash_period_ilike_right_square_bracket, filter_left_square_bracket_block_number_right_square_bracket, filter_left_square_bracket_block_number_period_neq_right_square_bracket, filter_left_square_bracket_block_number_period_like_right_square_bracket, filter_left_square_bracket_block_number_period_ilike_right_square_bracket, include, sort)
List transaction receipts

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**fields_left_square_bracket_transaction_receipts_right_square_bracket** | Option<[**ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter**](.md)> | Include the given fields in the response. |  |
**filter_left_square_bracket_transaction_id_right_square_bracket** | Option<**i32**> | Filter the results where the [transaction_id] field is equal to the given value. |  |
**filter_left_square_bracket_block_hash_right_square_bracket** | Option<**String**> | Filter the results where the [block_hash] field is equal to the given value. |  |
**filter_left_square_bracket_block_hash_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [block_hash] field is not equal to the given value. |  |
**filter_left_square_bracket_block_hash_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [block_hash] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_block_hash_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [block_hash] field is similar to the given case insensitive value. |  |
**filter_left_square_bracket_block_number_right_square_bracket** | Option<**String**> | Filter the results where the [block_number] field is equal to the given value. |  |
**filter_left_square_bracket_block_number_period_neq_right_square_bracket** | Option<**String**> | Filter the results where the [block_number] field is not equal to the given value. |  |
**filter_left_square_bracket_block_number_period_like_right_square_bracket** | Option<**String**> | Filter the results where the [block_number] field is similar to the given case sensitive value. |  |
**filter_left_square_bracket_block_number_period_ilike_right_square_bracket** | Option<**String**> | Filter the results where the [block_number] field is similar to the given case insensitive value. |  |
**include** | Option<[**ApiTransactionsMetadataGetIncludeParameter**](.md)> | Include the given relationships. |  |
**sort** | Option<[**ApiTransactionsReceiptsGetSortParameter**](.md)> | Sort the results by the given field and direction. |  |

### Return type

[**crate::models::ApiTransactionsReceiptsGet200Response**](_api_transactions_receipts_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_validators_updates_get

> crate::models::ApiValidatorsUpdatesGet200Response api_validators_updates_get(fields_left_square_bracket_block_number_right_square_bracket, filter_left_square_bracket_block_number_right_square_bracket, include, sort)
List validator updates

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**fields_left_square_bracket_block_number_right_square_bracket** | Option<[**ApiValidatorsUpdatesGetFieldsBlockNumberParameter**](.md)> | Include the given fields in the response. |  |
**filter_left_square_bracket_block_number_right_square_bracket** | Option<**i32**> | Filter the results where the [block_number] field is equal to the given value. |  |
**include** | Option<[**ApiValidatorsUpdatesGetIncludeParameter**](.md)> | Include the given relationships. |  |
**sort** | Option<[**ApiValidatorsUpdatesGetSortParameter**](.md)> | Sort the results by the given field and direction. |  |

### Return type

[**crate::models::ApiValidatorsUpdatesGet200Response**](_api_validators_updates_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

