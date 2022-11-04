=begin
#Railway

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.2.0

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::DefaultApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'DefaultApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::DefaultApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of DefaultApi' do
    it 'should create an instance of DefaultApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::DefaultApi)
    end
  end

  # unit tests for api_accounts_get
  # List accounts
  # @param [Hash] opts the optional parameters
  # @option opts [ApiAccountsGetFieldsAccountsParameter] :fields_accounts Include the given fields in the response.
  # @option opts [String] :filter_address Filter the results where the [address] field is equal to the given value.
  # @option opts [String] :filter_address_neq Filter the results where the [address] field is not equal to the given value.
  # @option opts [String] :filter_address_like Filter the results where the [address] field is similar to the given case sensitive value.
  # @option opts [String] :filter_address_ilike Filter the results where the [address] field is similar to the given case insensitive value.
  # @option opts [String] :filter_public_key Filter the results where the [public_key] field is equal to the given value.
  # @option opts [String] :filter_public_key_neq Filter the results where the [public_key] field is not equal to the given value.
  # @option opts [String] :filter_public_key_like Filter the results where the [public_key] field is similar to the given case sensitive value.
  # @option opts [String] :filter_public_key_ilike Filter the results where the [public_key] field is similar to the given case insensitive value.
  # @option opts [String] :filter_name Filter the results where the [name] field is equal to the given value.
  # @option opts [String] :filter_name_neq Filter the results where the [name] field is not equal to the given value.
  # @option opts [String] :filter_name_like Filter the results where the [name] field is similar to the given case sensitive value.
  # @option opts [String] :filter_name_ilike Filter the results where the [name] field is similar to the given case insensitive value.
  # @option opts [Integer] :filter_nonce Filter the results where the [nonce] field is equal to the given value.
  # @option opts [String] :filter_validator_address Filter the results where the [validator.address] field is equal to the given value.
  # @option opts [String] :filter_validator_address_neq Filter the results where the [validator.address] field is not equal to the given value.
  # @option opts [String] :filter_validator_address_like Filter the results where the [validator.address] field is similar to the given case sensitive value.
  # @option opts [String] :filter_validator_address_ilike Filter the results where the [validator.address] field is similar to the given case insensitive value.
  # @option opts [String] :filter_validator_public_key Filter the results where the [validator.publicKey] field is equal to the given value.
  # @option opts [String] :filter_validator_public_key_neq Filter the results where the [validator.publicKey] field is not equal to the given value.
  # @option opts [String] :filter_validator_public_key_like Filter the results where the [validator.publicKey] field is similar to the given case sensitive value.
  # @option opts [String] :filter_validator_public_key_ilike Filter the results where the [validator.publicKey] field is similar to the given case insensitive value.
  # @option opts [String] :filter_validator_power Filter the results where the [validator.power] field is equal to the given value.
  # @option opts [String] :filter_validator_power_neq Filter the results where the [validator.power] field is not equal to the given value.
  # @option opts [String] :filter_validator_power_like Filter the results where the [validator.power] field is similar to the given case sensitive value.
  # @option opts [String] :filter_validator_power_ilike Filter the results where the [validator.power] field is similar to the given case insensitive value.
  # @option opts [ApiAccountsGetIncludeParameter] :include Include the given relationships.
  # @option opts [ApiAccountsGetSortParameter] :sort Sort the results by the given field and direction.
  # @return [ApiAccountsGet200Response]
  describe 'api_accounts_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for api_accounts_metadata_get
  # List account metadata
  # @param [Hash] opts the optional parameters
  # @option opts [ApiAccountsMetadataGetFieldsAccountsMetadataParameter] :fields_accounts_metadata Include the given fields in the response.
  # @option opts [Integer] :filter_account_id Filter the results where the [account_id] field is equal to the given value.
  # @option opts [String] :filter_module Filter the results where the [module] field is equal to the given value.
  # @option opts [String] :filter_module_neq Filter the results where the [module] field is not equal to the given value.
  # @option opts [String] :filter_module_like Filter the results where the [module] field is similar to the given case sensitive value.
  # @option opts [String] :filter_module_ilike Filter the results where the [module] field is similar to the given case insensitive value.
  # @option opts [String] :filter_key Filter the results where the [key] field is equal to the given value.
  # @option opts [String] :filter_key_neq Filter the results where the [key] field is not equal to the given value.
  # @option opts [String] :filter_key_like Filter the results where the [key] field is similar to the given case sensitive value.
  # @option opts [String] :filter_key_ilike Filter the results where the [key] field is similar to the given case insensitive value.
  # @option opts [String] :filter_value Filter the results where the [value] field is equal to the given value.
  # @option opts [String] :filter_value_neq Filter the results where the [value] field is not equal to the given value.
  # @option opts [String] :filter_value_like Filter the results where the [value] field is similar to the given case sensitive value.
  # @option opts [String] :filter_value_ilike Filter the results where the [value] field is similar to the given case insensitive value.
  # @option opts [ApiAccountsMetadataGetIncludeParameter] :include Include the given relationships.
  # @option opts [ApiAccountsMetadataGetSortParameter] :sort Sort the results by the given field and direction.
  # @return [ApiAccountsMetadataGet200Response]
  describe 'api_accounts_metadata_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for api_blocks_get
  # List blocks
  # @param [Hash] opts the optional parameters
  # @option opts [ApiBlocksGetFieldsBlocksParameter] :fields_blocks Include the given fields in the response.
  # @option opts [String] :filter_hash Filter the results where the [hash] field is equal to the given value.
  # @option opts [String] :filter_hash_neq Filter the results where the [hash] field is not equal to the given value.
  # @option opts [String] :filter_hash_like Filter the results where the [hash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_hash_ilike Filter the results where the [hash] field is similar to the given case insensitive value.
  # @option opts [Integer] :filter_height Filter the results where the [height] field is equal to the given value.
  # @option opts [Integer] :filter_header_version_block Filter the results where the [header.version.block] field is equal to the given value.
  # @option opts [String] :filter_header_chain_id Filter the results where the [header.chainId] field is equal to the given value.
  # @option opts [String] :filter_header_chain_id_neq Filter the results where the [header.chainId] field is not equal to the given value.
  # @option opts [String] :filter_header_chain_id_like Filter the results where the [header.chainId] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_chain_id_ilike Filter the results where the [header.chainId] field is similar to the given case insensitive value.
  # @option opts [Integer] :filter_header_height Filter the results where the [header.height] field is equal to the given value.
  # @option opts [String] :filter_header_time Filter the results where the [header.time] field is equal to the given value.
  # @option opts [String] :filter_header_time_neq Filter the results where the [header.time] field is not equal to the given value.
  # @option opts [String] :filter_header_time_like Filter the results where the [header.time] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_time_ilike Filter the results where the [header.time] field is similar to the given case insensitive value.
  # @option opts [String] :filter_header_last_block_id_hash Filter the results where the [header.lastBlockId.hash] field is equal to the given value.
  # @option opts [String] :filter_header_last_block_id_hash_neq Filter the results where the [header.lastBlockId.hash] field is not equal to the given value.
  # @option opts [String] :filter_header_last_block_id_hash_like Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_last_block_id_hash_ilike Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value.
  # @option opts [Integer] :filter_header_last_block_id_part_set_header_total Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value.
  # @option opts [String] :filter_header_last_block_id_part_set_header_hash Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value.
  # @option opts [String] :filter_header_last_block_id_part_set_header_hash_neq Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value.
  # @option opts [String] :filter_header_last_block_id_part_set_header_hash_like Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_last_block_id_part_set_header_hash_ilike Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_header_last_commit_hash Filter the results where the [header.lastCommitHash] field is equal to the given value.
  # @option opts [String] :filter_header_last_commit_hash_neq Filter the results where the [header.lastCommitHash] field is not equal to the given value.
  # @option opts [String] :filter_header_last_commit_hash_like Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_last_commit_hash_ilike Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_header_data_hash Filter the results where the [header.dataHash] field is equal to the given value.
  # @option opts [String] :filter_header_data_hash_neq Filter the results where the [header.dataHash] field is not equal to the given value.
  # @option opts [String] :filter_header_data_hash_like Filter the results where the [header.dataHash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_data_hash_ilike Filter the results where the [header.dataHash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_header_validators_hash Filter the results where the [header.validatorsHash] field is equal to the given value.
  # @option opts [String] :filter_header_validators_hash_neq Filter the results where the [header.validatorsHash] field is not equal to the given value.
  # @option opts [String] :filter_header_validators_hash_like Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_validators_hash_ilike Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_header_next_validators_hash Filter the results where the [header.nextValidatorsHash] field is equal to the given value.
  # @option opts [String] :filter_header_next_validators_hash_neq Filter the results where the [header.nextValidatorsHash] field is not equal to the given value.
  # @option opts [String] :filter_header_next_validators_hash_like Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_next_validators_hash_ilike Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_header_consensus_hash Filter the results where the [header.consensusHash] field is equal to the given value.
  # @option opts [String] :filter_header_consensus_hash_neq Filter the results where the [header.consensusHash] field is not equal to the given value.
  # @option opts [String] :filter_header_consensus_hash_like Filter the results where the [header.consensusHash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_consensus_hash_ilike Filter the results where the [header.consensusHash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_header_app_hash Filter the results where the [header.appHash] field is equal to the given value.
  # @option opts [String] :filter_header_app_hash_neq Filter the results where the [header.appHash] field is not equal to the given value.
  # @option opts [String] :filter_header_app_hash_like Filter the results where the [header.appHash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_app_hash_ilike Filter the results where the [header.appHash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_header_last_results_hash Filter the results where the [header.lastResultsHash] field is equal to the given value.
  # @option opts [String] :filter_header_last_results_hash_neq Filter the results where the [header.lastResultsHash] field is not equal to the given value.
  # @option opts [String] :filter_header_last_results_hash_like Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_last_results_hash_ilike Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_header_evidence_hash Filter the results where the [header.evidenceHash] field is equal to the given value.
  # @option opts [String] :filter_header_evidence_hash_neq Filter the results where the [header.evidenceHash] field is not equal to the given value.
  # @option opts [String] :filter_header_evidence_hash_like Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_evidence_hash_ilike Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_header_proposer_address Filter the results where the [header.proposerAddress] field is equal to the given value.
  # @option opts [String] :filter_header_proposer_address_neq Filter the results where the [header.proposerAddress] field is not equal to the given value.
  # @option opts [String] :filter_header_proposer_address_like Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value.
  # @option opts [String] :filter_header_proposer_address_ilike Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value.
  # @option opts [ApiBlocksGetIncludeParameter] :include Include the given relationships.
  # @option opts [ApiBlocksGetSortParameter] :sort Sort the results by the given field and direction.
  # @return [ApiBlocksGet200Response]
  describe 'api_blocks_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for api_entities_get
  # List entities
  # @param [Hash] opts the optional parameters
  # @option opts [ApiEntitiesGetFieldsEntitiesParameter] :fields_entities Include the given fields in the response.
  # @option opts [String] :filter_module Filter the results where the [module] field is equal to the given value.
  # @option opts [String] :filter_module_neq Filter the results where the [module] field is not equal to the given value.
  # @option opts [String] :filter_module_like Filter the results where the [module] field is similar to the given case sensitive value.
  # @option opts [String] :filter_module_ilike Filter the results where the [module] field is similar to the given case insensitive value.
  # @option opts [String] :filter_type Filter the results where the [type] field is equal to the given value.
  # @option opts [String] :filter_type_neq Filter the results where the [type] field is not equal to the given value.
  # @option opts [String] :filter_type_like Filter the results where the [type] field is similar to the given case sensitive value.
  # @option opts [String] :filter_type_ilike Filter the results where the [type] field is similar to the given case insensitive value.
  # @option opts [String] :filter_key Filter the results where the [key] field is equal to the given value.
  # @option opts [String] :filter_key_neq Filter the results where the [key] field is not equal to the given value.
  # @option opts [String] :filter_key_like Filter the results where the [key] field is similar to the given case sensitive value.
  # @option opts [String] :filter_key_ilike Filter the results where the [key] field is similar to the given case insensitive value.
  # @option opts [String] :filter_value Filter the results where the [value] field is equal to the given value.
  # @option opts [String] :filter_value_neq Filter the results where the [value] field is not equal to the given value.
  # @option opts [String] :filter_value_like Filter the results where the [value] field is similar to the given case sensitive value.
  # @option opts [String] :filter_value_ilike Filter the results where the [value] field is similar to the given case insensitive value.
  # @option opts [ApiEntitiesGetSortParameter] :sort Sort the results by the given field and direction.
  # @return [ApiEntitiesGet200Response]
  describe 'api_entities_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for api_transactions_get
  # List transactions
  # @param [Hash] opts the optional parameters
  # @option opts [ApiTransactionsGetFieldsAccountsParameter] :fields_accounts Include the given fields in the response.
  # @option opts [String] :filter_hash Filter the results where the [hash] field is equal to the given value.
  # @option opts [String] :filter_hash_neq Filter the results where the [hash] field is not equal to the given value.
  # @option opts [String] :filter_hash_like Filter the results where the [hash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_hash_ilike Filter the results where the [hash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_sender Filter the results where the [sender] field is equal to the given value.
  # @option opts [String] :filter_sender_neq Filter the results where the [sender] field is not equal to the given value.
  # @option opts [String] :filter_sender_like Filter the results where the [sender] field is similar to the given case sensitive value.
  # @option opts [String] :filter_sender_ilike Filter the results where the [sender] field is similar to the given case insensitive value.
  # @option opts [String] :filter_recipient Filter the results where the [recipient] field is equal to the given value.
  # @option opts [String] :filter_recipient_neq Filter the results where the [recipient] field is not equal to the given value.
  # @option opts [String] :filter_recipient_like Filter the results where the [recipient] field is similar to the given case sensitive value.
  # @option opts [String] :filter_recipient_ilike Filter the results where the [recipient] field is similar to the given case insensitive value.
  # @option opts [Integer] :filter_gas Filter the results where the [gas] field is equal to the given value.
  # @option opts [Integer] :filter_nonce Filter the results where the [nonce] field is equal to the given value.
  # @option opts [String] :filter_signature Filter the results where the [signature] field is equal to the given value.
  # @option opts [String] :filter_signature_neq Filter the results where the [signature] field is not equal to the given value.
  # @option opts [String] :filter_signature_like Filter the results where the [signature] field is similar to the given case sensitive value.
  # @option opts [String] :filter_signature_ilike Filter the results where the [signature] field is similar to the given case insensitive value.
  # @option opts [String] :filter_version Filter the results where the [version] field is equal to the given value.
  # @option opts [String] :filter_version_neq Filter the results where the [version] field is not equal to the given value.
  # @option opts [String] :filter_version_like Filter the results where the [version] field is similar to the given case sensitive value.
  # @option opts [String] :filter_version_ilike Filter the results where the [version] field is similar to the given case insensitive value.
  # @option opts [String] :filter_message_handler Filter the results where the [message.handler] field is equal to the given value.
  # @option opts [String] :filter_message_handler_neq Filter the results where the [message.handler] field is not equal to the given value.
  # @option opts [String] :filter_message_handler_like Filter the results where the [message.handler] field is similar to the given case sensitive value.
  # @option opts [String] :filter_message_handler_ilike Filter the results where the [message.handler] field is similar to the given case insensitive value.
  # @option opts [String] :filter_message_version Filter the results where the [message.version] field is equal to the given value.
  # @option opts [String] :filter_message_version_neq Filter the results where the [message.version] field is not equal to the given value.
  # @option opts [String] :filter_message_version_like Filter the results where the [message.version] field is similar to the given case sensitive value.
  # @option opts [String] :filter_message_version_ilike Filter the results where the [message.version] field is similar to the given case insensitive value.
  # @option opts [String] :filter_message_network Filter the results where the [message.network] field is equal to the given value.
  # @option opts [String] :filter_message_network_neq Filter the results where the [message.network] field is not equal to the given value.
  # @option opts [String] :filter_message_network_like Filter the results where the [message.network] field is similar to the given case sensitive value.
  # @option opts [String] :filter_message_network_ilike Filter the results where the [message.network] field is similar to the given case insensitive value.
  # @option opts [String] :filter_message_content Filter the results where the [message.content] field is equal to the given value.
  # @option opts [String] :filter_message_content_neq Filter the results where the [message.content] field is not equal to the given value.
  # @option opts [String] :filter_message_content_like Filter the results where the [message.content] field is similar to the given case sensitive value.
  # @option opts [String] :filter_message_content_ilike Filter the results where the [message.content] field is similar to the given case insensitive value.
  # @option opts [ApiTransactionsGetIncludeParameter] :include Include the given relationships.
  # @option opts [ApiTransactionsGetSortParameter] :sort Sort the results by the given field and direction.
  # @return [ApiTransactionsGet200Response]
  describe 'api_transactions_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for api_transactions_metadata_get
  # List transaction metadata
  # @param [Hash] opts the optional parameters
  # @option opts [ApiTransactionsMetadataGetFieldsTransactionMetadataParameter] :fields_transaction_metadata Include the given fields in the response.
  # @option opts [Integer] :filter_transaction_id Filter the results where the [transaction_id] field is equal to the given value.
  # @option opts [String] :filter_key Filter the results where the [key] field is equal to the given value.
  # @option opts [String] :filter_key_neq Filter the results where the [key] field is not equal to the given value.
  # @option opts [String] :filter_key_like Filter the results where the [key] field is similar to the given case sensitive value.
  # @option opts [String] :filter_key_ilike Filter the results where the [key] field is similar to the given case insensitive value.
  # @option opts [String] :filter_value Filter the results where the [value] field is equal to the given value.
  # @option opts [String] :filter_value_neq Filter the results where the [value] field is not equal to the given value.
  # @option opts [String] :filter_value_like Filter the results where the [value] field is similar to the given case sensitive value.
  # @option opts [String] :filter_value_ilike Filter the results where the [value] field is similar to the given case insensitive value.
  # @option opts [ApiTransactionsMetadataGetIncludeParameter] :include Include the given relationships.
  # @option opts [ApiTransactionsMetadataGetSortParameter] :sort Sort the results by the given field and direction.
  # @return [ApiTransactionsMetadataGet200Response]
  describe 'api_transactions_metadata_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for api_transactions_receipts_get
  # List transaction receipts
  # @param [Hash] opts the optional parameters
  # @option opts [ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter] :fields_transaction_receipts Include the given fields in the response.
  # @option opts [Integer] :filter_transaction_id Filter the results where the [transaction_id] field is equal to the given value.
  # @option opts [String] :filter_block_hash Filter the results where the [block_hash] field is equal to the given value.
  # @option opts [String] :filter_block_hash_neq Filter the results where the [block_hash] field is not equal to the given value.
  # @option opts [String] :filter_block_hash_like Filter the results where the [block_hash] field is similar to the given case sensitive value.
  # @option opts [String] :filter_block_hash_ilike Filter the results where the [block_hash] field is similar to the given case insensitive value.
  # @option opts [String] :filter_block_number Filter the results where the [block_number] field is equal to the given value.
  # @option opts [String] :filter_block_number_neq Filter the results where the [block_number] field is not equal to the given value.
  # @option opts [String] :filter_block_number_like Filter the results where the [block_number] field is similar to the given case sensitive value.
  # @option opts [String] :filter_block_number_ilike Filter the results where the [block_number] field is similar to the given case insensitive value.
  # @option opts [ApiTransactionsMetadataGetIncludeParameter] :include Include the given relationships.
  # @option opts [ApiTransactionsReceiptsGetSortParameter] :sort Sort the results by the given field and direction.
  # @return [ApiTransactionsReceiptsGet200Response]
  describe 'api_transactions_receipts_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for api_validators_updates_get
  # List validator updates
  # @param [Hash] opts the optional parameters
  # @option opts [ApiValidatorsUpdatesGetFieldsBlockNumberParameter] :fields_block_number Include the given fields in the response.
  # @option opts [Integer] :filter_block_number Filter the results where the [block_number] field is equal to the given value.
  # @option opts [ApiValidatorsUpdatesGetIncludeParameter] :include Include the given relationships.
  # @option opts [ApiValidatorsUpdatesGetSortParameter] :sort Sort the results by the given field and direction.
  # @return [ApiValidatorsUpdatesGet200Response]
  describe 'api_validators_updates_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end