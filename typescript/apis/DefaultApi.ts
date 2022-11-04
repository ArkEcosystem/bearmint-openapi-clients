// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiAccountsGet200Response } from '../models/ApiAccountsGet200Response';
import { ApiAccountsMetadataGet200Response } from '../models/ApiAccountsMetadataGet200Response';
import { ApiBlocksGet200Response } from '../models/ApiBlocksGet200Response';
import { ApiEntitiesGet200Response } from '../models/ApiEntitiesGet200Response';
import { ApiTransactionsGet200Response } from '../models/ApiTransactionsGet200Response';
import { ApiTransactionsMetadataGet200Response } from '../models/ApiTransactionsMetadataGet200Response';
import { ApiTransactionsReceiptsGet200Response } from '../models/ApiTransactionsReceiptsGet200Response';
import { ApiValidatorsUpdatesGet200Response } from '../models/ApiValidatorsUpdatesGet200Response';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List accounts
     * @param fieldsAccounts Include the given fields in the response.
     * @param filterAddress Filter the results where the [address] field is equal to the given value.
     * @param filterAddressNeq Filter the results where the [address] field is not equal to the given value.
     * @param filterAddressLike Filter the results where the [address] field is similar to the given case sensitive value.
     * @param filterAddressIlike Filter the results where the [address] field is similar to the given case insensitive value.
     * @param filterPublicKey Filter the results where the [public_key] field is equal to the given value.
     * @param filterPublicKeyNeq Filter the results where the [public_key] field is not equal to the given value.
     * @param filterPublicKeyLike Filter the results where the [public_key] field is similar to the given case sensitive value.
     * @param filterPublicKeyIlike Filter the results where the [public_key] field is similar to the given case insensitive value.
     * @param filterName Filter the results where the [name] field is equal to the given value.
     * @param filterNameNeq Filter the results where the [name] field is not equal to the given value.
     * @param filterNameLike Filter the results where the [name] field is similar to the given case sensitive value.
     * @param filterNameIlike Filter the results where the [name] field is similar to the given case insensitive value.
     * @param filterNonce Filter the results where the [nonce] field is equal to the given value.
     * @param filterValidatorAddress Filter the results where the [validator.address] field is equal to the given value.
     * @param filterValidatorAddressNeq Filter the results where the [validator.address] field is not equal to the given value.
     * @param filterValidatorAddressLike Filter the results where the [validator.address] field is similar to the given case sensitive value.
     * @param filterValidatorAddressIlike Filter the results where the [validator.address] field is similar to the given case insensitive value.
     * @param filterValidatorPublicKey Filter the results where the [validator.publicKey] field is equal to the given value.
     * @param filterValidatorPublicKeyNeq Filter the results where the [validator.publicKey] field is not equal to the given value.
     * @param filterValidatorPublicKeyLike Filter the results where the [validator.publicKey] field is similar to the given case sensitive value.
     * @param filterValidatorPublicKeyIlike Filter the results where the [validator.publicKey] field is similar to the given case insensitive value.
     * @param filterValidatorPower Filter the results where the [validator.power] field is equal to the given value.
     * @param filterValidatorPowerNeq Filter the results where the [validator.power] field is not equal to the given value.
     * @param filterValidatorPowerLike Filter the results where the [validator.power] field is similar to the given case sensitive value.
     * @param filterValidatorPowerIlike Filter the results where the [validator.power] field is similar to the given case insensitive value.
     * @param include Include the given relationships.
     * @param sort Sort the results by the given field and direction.
     */
    public async apiAccountsGet(fieldsAccounts?: ApiAccountsGetFieldsAccountsParameter, filterAddress?: string, filterAddressNeq?: string, filterAddressLike?: string, filterAddressIlike?: string, filterPublicKey?: string, filterPublicKeyNeq?: string, filterPublicKeyLike?: string, filterPublicKeyIlike?: string, filterName?: string, filterNameNeq?: string, filterNameLike?: string, filterNameIlike?: string, filterNonce?: number, filterValidatorAddress?: string, filterValidatorAddressNeq?: string, filterValidatorAddressLike?: string, filterValidatorAddressIlike?: string, filterValidatorPublicKey?: string, filterValidatorPublicKeyNeq?: string, filterValidatorPublicKeyLike?: string, filterValidatorPublicKeyIlike?: string, filterValidatorPower?: string, filterValidatorPowerNeq?: string, filterValidatorPowerLike?: string, filterValidatorPowerIlike?: string, include?: ApiAccountsGetIncludeParameter, sort?: ApiAccountsGetSortParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





























        // Path Params
        const localVarPath = '/api/accounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAccounts !== undefined) {
            requestContext.setQueryParam("fields[accounts]", ObjectSerializer.serialize(fieldsAccounts, "ApiAccountsGetFieldsAccountsParameter", ""));
        }

        // Query Params
        if (filterAddress !== undefined) {
            requestContext.setQueryParam("filter[address]", ObjectSerializer.serialize(filterAddress, "string", ""));
        }

        // Query Params
        if (filterAddressNeq !== undefined) {
            requestContext.setQueryParam("filter[address.neq]", ObjectSerializer.serialize(filterAddressNeq, "string", ""));
        }

        // Query Params
        if (filterAddressLike !== undefined) {
            requestContext.setQueryParam("filter[address.like]", ObjectSerializer.serialize(filterAddressLike, "string", ""));
        }

        // Query Params
        if (filterAddressIlike !== undefined) {
            requestContext.setQueryParam("filter[address.ilike]", ObjectSerializer.serialize(filterAddressIlike, "string", ""));
        }

        // Query Params
        if (filterPublicKey !== undefined) {
            requestContext.setQueryParam("filter[public_key]", ObjectSerializer.serialize(filterPublicKey, "string", ""));
        }

        // Query Params
        if (filterPublicKeyNeq !== undefined) {
            requestContext.setQueryParam("filter[public_key.neq]", ObjectSerializer.serialize(filterPublicKeyNeq, "string", ""));
        }

        // Query Params
        if (filterPublicKeyLike !== undefined) {
            requestContext.setQueryParam("filter[public_key.like]", ObjectSerializer.serialize(filterPublicKeyLike, "string", ""));
        }

        // Query Params
        if (filterPublicKeyIlike !== undefined) {
            requestContext.setQueryParam("filter[public_key.ilike]", ObjectSerializer.serialize(filterPublicKeyIlike, "string", ""));
        }

        // Query Params
        if (filterName !== undefined) {
            requestContext.setQueryParam("filter[name]", ObjectSerializer.serialize(filterName, "string", ""));
        }

        // Query Params
        if (filterNameNeq !== undefined) {
            requestContext.setQueryParam("filter[name.neq]", ObjectSerializer.serialize(filterNameNeq, "string", ""));
        }

        // Query Params
        if (filterNameLike !== undefined) {
            requestContext.setQueryParam("filter[name.like]", ObjectSerializer.serialize(filterNameLike, "string", ""));
        }

        // Query Params
        if (filterNameIlike !== undefined) {
            requestContext.setQueryParam("filter[name.ilike]", ObjectSerializer.serialize(filterNameIlike, "string", ""));
        }

        // Query Params
        if (filterNonce !== undefined) {
            requestContext.setQueryParam("filter[nonce]", ObjectSerializer.serialize(filterNonce, "number", ""));
        }

        // Query Params
        if (filterValidatorAddress !== undefined) {
            requestContext.setQueryParam("filter[validator.address]", ObjectSerializer.serialize(filterValidatorAddress, "string", ""));
        }

        // Query Params
        if (filterValidatorAddressNeq !== undefined) {
            requestContext.setQueryParam("filter[validator.address.neq]", ObjectSerializer.serialize(filterValidatorAddressNeq, "string", ""));
        }

        // Query Params
        if (filterValidatorAddressLike !== undefined) {
            requestContext.setQueryParam("filter[validator.address.like]", ObjectSerializer.serialize(filterValidatorAddressLike, "string", ""));
        }

        // Query Params
        if (filterValidatorAddressIlike !== undefined) {
            requestContext.setQueryParam("filter[validator.address.ilike]", ObjectSerializer.serialize(filterValidatorAddressIlike, "string", ""));
        }

        // Query Params
        if (filterValidatorPublicKey !== undefined) {
            requestContext.setQueryParam("filter[validator.publicKey]", ObjectSerializer.serialize(filterValidatorPublicKey, "string", ""));
        }

        // Query Params
        if (filterValidatorPublicKeyNeq !== undefined) {
            requestContext.setQueryParam("filter[validator.publicKey.neq]", ObjectSerializer.serialize(filterValidatorPublicKeyNeq, "string", ""));
        }

        // Query Params
        if (filterValidatorPublicKeyLike !== undefined) {
            requestContext.setQueryParam("filter[validator.publicKey.like]", ObjectSerializer.serialize(filterValidatorPublicKeyLike, "string", ""));
        }

        // Query Params
        if (filterValidatorPublicKeyIlike !== undefined) {
            requestContext.setQueryParam("filter[validator.publicKey.ilike]", ObjectSerializer.serialize(filterValidatorPublicKeyIlike, "string", ""));
        }

        // Query Params
        if (filterValidatorPower !== undefined) {
            requestContext.setQueryParam("filter[validator.power]", ObjectSerializer.serialize(filterValidatorPower, "string", ""));
        }

        // Query Params
        if (filterValidatorPowerNeq !== undefined) {
            requestContext.setQueryParam("filter[validator.power.neq]", ObjectSerializer.serialize(filterValidatorPowerNeq, "string", ""));
        }

        // Query Params
        if (filterValidatorPowerLike !== undefined) {
            requestContext.setQueryParam("filter[validator.power.like]", ObjectSerializer.serialize(filterValidatorPowerLike, "string", ""));
        }

        // Query Params
        if (filterValidatorPowerIlike !== undefined) {
            requestContext.setQueryParam("filter[validator.power.ilike]", ObjectSerializer.serialize(filterValidatorPowerIlike, "string", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "ApiAccountsGetIncludeParameter", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "ApiAccountsGetSortParameter", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List account metadata
     * @param fieldsAccountsMetadata Include the given fields in the response.
     * @param filterAccountId Filter the results where the [account_id] field is equal to the given value.
     * @param filterModule Filter the results where the [module] field is equal to the given value.
     * @param filterModuleNeq Filter the results where the [module] field is not equal to the given value.
     * @param filterModuleLike Filter the results where the [module] field is similar to the given case sensitive value.
     * @param filterModuleIlike Filter the results where the [module] field is similar to the given case insensitive value.
     * @param filterKey Filter the results where the [key] field is equal to the given value.
     * @param filterKeyNeq Filter the results where the [key] field is not equal to the given value.
     * @param filterKeyLike Filter the results where the [key] field is similar to the given case sensitive value.
     * @param filterKeyIlike Filter the results where the [key] field is similar to the given case insensitive value.
     * @param filterValue Filter the results where the [value] field is equal to the given value.
     * @param filterValueNeq Filter the results where the [value] field is not equal to the given value.
     * @param filterValueLike Filter the results where the [value] field is similar to the given case sensitive value.
     * @param filterValueIlike Filter the results where the [value] field is similar to the given case insensitive value.
     * @param include Include the given relationships.
     * @param sort Sort the results by the given field and direction.
     */
    public async apiAccountsMetadataGet(fieldsAccountsMetadata?: ApiAccountsMetadataGetFieldsAccountsMetadataParameter, filterAccountId?: number, filterModule?: string, filterModuleNeq?: string, filterModuleLike?: string, filterModuleIlike?: string, filterKey?: string, filterKeyNeq?: string, filterKeyLike?: string, filterKeyIlike?: string, filterValue?: string, filterValueNeq?: string, filterValueLike?: string, filterValueIlike?: string, include?: ApiAccountsMetadataGetIncludeParameter, sort?: ApiAccountsMetadataGetSortParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

















        // Path Params
        const localVarPath = '/api/accounts/metadata';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAccountsMetadata !== undefined) {
            requestContext.setQueryParam("fields[accounts_metadata]", ObjectSerializer.serialize(fieldsAccountsMetadata, "ApiAccountsMetadataGetFieldsAccountsMetadataParameter", ""));
        }

        // Query Params
        if (filterAccountId !== undefined) {
            requestContext.setQueryParam("filter[account_id]", ObjectSerializer.serialize(filterAccountId, "number", ""));
        }

        // Query Params
        if (filterModule !== undefined) {
            requestContext.setQueryParam("filter[module]", ObjectSerializer.serialize(filterModule, "string", ""));
        }

        // Query Params
        if (filterModuleNeq !== undefined) {
            requestContext.setQueryParam("filter[module.neq]", ObjectSerializer.serialize(filterModuleNeq, "string", ""));
        }

        // Query Params
        if (filterModuleLike !== undefined) {
            requestContext.setQueryParam("filter[module.like]", ObjectSerializer.serialize(filterModuleLike, "string", ""));
        }

        // Query Params
        if (filterModuleIlike !== undefined) {
            requestContext.setQueryParam("filter[module.ilike]", ObjectSerializer.serialize(filterModuleIlike, "string", ""));
        }

        // Query Params
        if (filterKey !== undefined) {
            requestContext.setQueryParam("filter[key]", ObjectSerializer.serialize(filterKey, "string", ""));
        }

        // Query Params
        if (filterKeyNeq !== undefined) {
            requestContext.setQueryParam("filter[key.neq]", ObjectSerializer.serialize(filterKeyNeq, "string", ""));
        }

        // Query Params
        if (filterKeyLike !== undefined) {
            requestContext.setQueryParam("filter[key.like]", ObjectSerializer.serialize(filterKeyLike, "string", ""));
        }

        // Query Params
        if (filterKeyIlike !== undefined) {
            requestContext.setQueryParam("filter[key.ilike]", ObjectSerializer.serialize(filterKeyIlike, "string", ""));
        }

        // Query Params
        if (filterValue !== undefined) {
            requestContext.setQueryParam("filter[value]", ObjectSerializer.serialize(filterValue, "string", ""));
        }

        // Query Params
        if (filterValueNeq !== undefined) {
            requestContext.setQueryParam("filter[value.neq]", ObjectSerializer.serialize(filterValueNeq, "string", ""));
        }

        // Query Params
        if (filterValueLike !== undefined) {
            requestContext.setQueryParam("filter[value.like]", ObjectSerializer.serialize(filterValueLike, "string", ""));
        }

        // Query Params
        if (filterValueIlike !== undefined) {
            requestContext.setQueryParam("filter[value.ilike]", ObjectSerializer.serialize(filterValueIlike, "string", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "ApiAccountsMetadataGetIncludeParameter", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "ApiAccountsMetadataGetSortParameter", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List blocks
     * @param fieldsBlocks Include the given fields in the response.
     * @param filterHash Filter the results where the [hash] field is equal to the given value.
     * @param filterHashNeq Filter the results where the [hash] field is not equal to the given value.
     * @param filterHashLike Filter the results where the [hash] field is similar to the given case sensitive value.
     * @param filterHashIlike Filter the results where the [hash] field is similar to the given case insensitive value.
     * @param filterHeight Filter the results where the [height] field is equal to the given value.
     * @param filterHeaderVersionBlock Filter the results where the [header.version.block] field is equal to the given value.
     * @param filterHeaderChainId Filter the results where the [header.chainId] field is equal to the given value.
     * @param filterHeaderChainIdNeq Filter the results where the [header.chainId] field is not equal to the given value.
     * @param filterHeaderChainIdLike Filter the results where the [header.chainId] field is similar to the given case sensitive value.
     * @param filterHeaderChainIdIlike Filter the results where the [header.chainId] field is similar to the given case insensitive value.
     * @param filterHeaderHeight Filter the results where the [header.height] field is equal to the given value.
     * @param filterHeaderTime Filter the results where the [header.time] field is equal to the given value.
     * @param filterHeaderTimeNeq Filter the results where the [header.time] field is not equal to the given value.
     * @param filterHeaderTimeLike Filter the results where the [header.time] field is similar to the given case sensitive value.
     * @param filterHeaderTimeIlike Filter the results where the [header.time] field is similar to the given case insensitive value.
     * @param filterHeaderLastBlockIdHash Filter the results where the [header.lastBlockId.hash] field is equal to the given value.
     * @param filterHeaderLastBlockIdHashNeq Filter the results where the [header.lastBlockId.hash] field is not equal to the given value.
     * @param filterHeaderLastBlockIdHashLike Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value.
     * @param filterHeaderLastBlockIdHashIlike Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value.
     * @param filterHeaderLastBlockIdPartSetHeaderTotal Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value.
     * @param filterHeaderLastBlockIdPartSetHeaderHash Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value.
     * @param filterHeaderLastBlockIdPartSetHeaderHashNeq Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value.
     * @param filterHeaderLastBlockIdPartSetHeaderHashLike Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value.
     * @param filterHeaderLastBlockIdPartSetHeaderHashIlike Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value.
     * @param filterHeaderLastCommitHash Filter the results where the [header.lastCommitHash] field is equal to the given value.
     * @param filterHeaderLastCommitHashNeq Filter the results where the [header.lastCommitHash] field is not equal to the given value.
     * @param filterHeaderLastCommitHashLike Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value.
     * @param filterHeaderLastCommitHashIlike Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value.
     * @param filterHeaderDataHash Filter the results where the [header.dataHash] field is equal to the given value.
     * @param filterHeaderDataHashNeq Filter the results where the [header.dataHash] field is not equal to the given value.
     * @param filterHeaderDataHashLike Filter the results where the [header.dataHash] field is similar to the given case sensitive value.
     * @param filterHeaderDataHashIlike Filter the results where the [header.dataHash] field is similar to the given case insensitive value.
     * @param filterHeaderValidatorsHash Filter the results where the [header.validatorsHash] field is equal to the given value.
     * @param filterHeaderValidatorsHashNeq Filter the results where the [header.validatorsHash] field is not equal to the given value.
     * @param filterHeaderValidatorsHashLike Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value.
     * @param filterHeaderValidatorsHashIlike Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value.
     * @param filterHeaderNextValidatorsHash Filter the results where the [header.nextValidatorsHash] field is equal to the given value.
     * @param filterHeaderNextValidatorsHashNeq Filter the results where the [header.nextValidatorsHash] field is not equal to the given value.
     * @param filterHeaderNextValidatorsHashLike Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value.
     * @param filterHeaderNextValidatorsHashIlike Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value.
     * @param filterHeaderConsensusHash Filter the results where the [header.consensusHash] field is equal to the given value.
     * @param filterHeaderConsensusHashNeq Filter the results where the [header.consensusHash] field is not equal to the given value.
     * @param filterHeaderConsensusHashLike Filter the results where the [header.consensusHash] field is similar to the given case sensitive value.
     * @param filterHeaderConsensusHashIlike Filter the results where the [header.consensusHash] field is similar to the given case insensitive value.
     * @param filterHeaderAppHash Filter the results where the [header.appHash] field is equal to the given value.
     * @param filterHeaderAppHashNeq Filter the results where the [header.appHash] field is not equal to the given value.
     * @param filterHeaderAppHashLike Filter the results where the [header.appHash] field is similar to the given case sensitive value.
     * @param filterHeaderAppHashIlike Filter the results where the [header.appHash] field is similar to the given case insensitive value.
     * @param filterHeaderLastResultsHash Filter the results where the [header.lastResultsHash] field is equal to the given value.
     * @param filterHeaderLastResultsHashNeq Filter the results where the [header.lastResultsHash] field is not equal to the given value.
     * @param filterHeaderLastResultsHashLike Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value.
     * @param filterHeaderLastResultsHashIlike Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value.
     * @param filterHeaderEvidenceHash Filter the results where the [header.evidenceHash] field is equal to the given value.
     * @param filterHeaderEvidenceHashNeq Filter the results where the [header.evidenceHash] field is not equal to the given value.
     * @param filterHeaderEvidenceHashLike Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value.
     * @param filterHeaderEvidenceHashIlike Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value.
     * @param filterHeaderProposerAddress Filter the results where the [header.proposerAddress] field is equal to the given value.
     * @param filterHeaderProposerAddressNeq Filter the results where the [header.proposerAddress] field is not equal to the given value.
     * @param filterHeaderProposerAddressLike Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value.
     * @param filterHeaderProposerAddressIlike Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value.
     * @param include Include the given relationships.
     * @param sort Sort the results by the given field and direction.
     */
    public async apiBlocksGet(fieldsBlocks?: ApiBlocksGetFieldsBlocksParameter, filterHash?: string, filterHashNeq?: string, filterHashLike?: string, filterHashIlike?: string, filterHeight?: number, filterHeaderVersionBlock?: number, filterHeaderChainId?: string, filterHeaderChainIdNeq?: string, filterHeaderChainIdLike?: string, filterHeaderChainIdIlike?: string, filterHeaderHeight?: number, filterHeaderTime?: string, filterHeaderTimeNeq?: string, filterHeaderTimeLike?: string, filterHeaderTimeIlike?: string, filterHeaderLastBlockIdHash?: string, filterHeaderLastBlockIdHashNeq?: string, filterHeaderLastBlockIdHashLike?: string, filterHeaderLastBlockIdHashIlike?: string, filterHeaderLastBlockIdPartSetHeaderTotal?: number, filterHeaderLastBlockIdPartSetHeaderHash?: string, filterHeaderLastBlockIdPartSetHeaderHashNeq?: string, filterHeaderLastBlockIdPartSetHeaderHashLike?: string, filterHeaderLastBlockIdPartSetHeaderHashIlike?: string, filterHeaderLastCommitHash?: string, filterHeaderLastCommitHashNeq?: string, filterHeaderLastCommitHashLike?: string, filterHeaderLastCommitHashIlike?: string, filterHeaderDataHash?: string, filterHeaderDataHashNeq?: string, filterHeaderDataHashLike?: string, filterHeaderDataHashIlike?: string, filterHeaderValidatorsHash?: string, filterHeaderValidatorsHashNeq?: string, filterHeaderValidatorsHashLike?: string, filterHeaderValidatorsHashIlike?: string, filterHeaderNextValidatorsHash?: string, filterHeaderNextValidatorsHashNeq?: string, filterHeaderNextValidatorsHashLike?: string, filterHeaderNextValidatorsHashIlike?: string, filterHeaderConsensusHash?: string, filterHeaderConsensusHashNeq?: string, filterHeaderConsensusHashLike?: string, filterHeaderConsensusHashIlike?: string, filterHeaderAppHash?: string, filterHeaderAppHashNeq?: string, filterHeaderAppHashLike?: string, filterHeaderAppHashIlike?: string, filterHeaderLastResultsHash?: string, filterHeaderLastResultsHashNeq?: string, filterHeaderLastResultsHashLike?: string, filterHeaderLastResultsHashIlike?: string, filterHeaderEvidenceHash?: string, filterHeaderEvidenceHashNeq?: string, filterHeaderEvidenceHashLike?: string, filterHeaderEvidenceHashIlike?: string, filterHeaderProposerAddress?: string, filterHeaderProposerAddressNeq?: string, filterHeaderProposerAddressLike?: string, filterHeaderProposerAddressIlike?: string, include?: ApiBlocksGetIncludeParameter, sort?: ApiBlocksGetSortParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;
































































        // Path Params
        const localVarPath = '/api/blocks';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsBlocks !== undefined) {
            requestContext.setQueryParam("fields[blocks]", ObjectSerializer.serialize(fieldsBlocks, "ApiBlocksGetFieldsBlocksParameter", ""));
        }

        // Query Params
        if (filterHash !== undefined) {
            requestContext.setQueryParam("filter[hash]", ObjectSerializer.serialize(filterHash, "string", ""));
        }

        // Query Params
        if (filterHashNeq !== undefined) {
            requestContext.setQueryParam("filter[hash.neq]", ObjectSerializer.serialize(filterHashNeq, "string", ""));
        }

        // Query Params
        if (filterHashLike !== undefined) {
            requestContext.setQueryParam("filter[hash.like]", ObjectSerializer.serialize(filterHashLike, "string", ""));
        }

        // Query Params
        if (filterHashIlike !== undefined) {
            requestContext.setQueryParam("filter[hash.ilike]", ObjectSerializer.serialize(filterHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeight !== undefined) {
            requestContext.setQueryParam("filter[height]", ObjectSerializer.serialize(filterHeight, "number", ""));
        }

        // Query Params
        if (filterHeaderVersionBlock !== undefined) {
            requestContext.setQueryParam("filter[header.version.block]", ObjectSerializer.serialize(filterHeaderVersionBlock, "number", ""));
        }

        // Query Params
        if (filterHeaderChainId !== undefined) {
            requestContext.setQueryParam("filter[header.chainId]", ObjectSerializer.serialize(filterHeaderChainId, "string", ""));
        }

        // Query Params
        if (filterHeaderChainIdNeq !== undefined) {
            requestContext.setQueryParam("filter[header.chainId.neq]", ObjectSerializer.serialize(filterHeaderChainIdNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderChainIdLike !== undefined) {
            requestContext.setQueryParam("filter[header.chainId.like]", ObjectSerializer.serialize(filterHeaderChainIdLike, "string", ""));
        }

        // Query Params
        if (filterHeaderChainIdIlike !== undefined) {
            requestContext.setQueryParam("filter[header.chainId.ilike]", ObjectSerializer.serialize(filterHeaderChainIdIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderHeight !== undefined) {
            requestContext.setQueryParam("filter[header.height]", ObjectSerializer.serialize(filterHeaderHeight, "number", ""));
        }

        // Query Params
        if (filterHeaderTime !== undefined) {
            requestContext.setQueryParam("filter[header.time]", ObjectSerializer.serialize(filterHeaderTime, "string", ""));
        }

        // Query Params
        if (filterHeaderTimeNeq !== undefined) {
            requestContext.setQueryParam("filter[header.time.neq]", ObjectSerializer.serialize(filterHeaderTimeNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderTimeLike !== undefined) {
            requestContext.setQueryParam("filter[header.time.like]", ObjectSerializer.serialize(filterHeaderTimeLike, "string", ""));
        }

        // Query Params
        if (filterHeaderTimeIlike !== undefined) {
            requestContext.setQueryParam("filter[header.time.ilike]", ObjectSerializer.serialize(filterHeaderTimeIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderLastBlockIdHash !== undefined) {
            requestContext.setQueryParam("filter[header.lastBlockId.hash]", ObjectSerializer.serialize(filterHeaderLastBlockIdHash, "string", ""));
        }

        // Query Params
        if (filterHeaderLastBlockIdHashNeq !== undefined) {
            requestContext.setQueryParam("filter[header.lastBlockId.hash.neq]", ObjectSerializer.serialize(filterHeaderLastBlockIdHashNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderLastBlockIdHashLike !== undefined) {
            requestContext.setQueryParam("filter[header.lastBlockId.hash.like]", ObjectSerializer.serialize(filterHeaderLastBlockIdHashLike, "string", ""));
        }

        // Query Params
        if (filterHeaderLastBlockIdHashIlike !== undefined) {
            requestContext.setQueryParam("filter[header.lastBlockId.hash.ilike]", ObjectSerializer.serialize(filterHeaderLastBlockIdHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderLastBlockIdPartSetHeaderTotal !== undefined) {
            requestContext.setQueryParam("filter[header.lastBlockId.partSetHeader.total]", ObjectSerializer.serialize(filterHeaderLastBlockIdPartSetHeaderTotal, "number", ""));
        }

        // Query Params
        if (filterHeaderLastBlockIdPartSetHeaderHash !== undefined) {
            requestContext.setQueryParam("filter[header.lastBlockId.partSetHeader.hash]", ObjectSerializer.serialize(filterHeaderLastBlockIdPartSetHeaderHash, "string", ""));
        }

        // Query Params
        if (filterHeaderLastBlockIdPartSetHeaderHashNeq !== undefined) {
            requestContext.setQueryParam("filter[header.lastBlockId.partSetHeader.hash.neq]", ObjectSerializer.serialize(filterHeaderLastBlockIdPartSetHeaderHashNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderLastBlockIdPartSetHeaderHashLike !== undefined) {
            requestContext.setQueryParam("filter[header.lastBlockId.partSetHeader.hash.like]", ObjectSerializer.serialize(filterHeaderLastBlockIdPartSetHeaderHashLike, "string", ""));
        }

        // Query Params
        if (filterHeaderLastBlockIdPartSetHeaderHashIlike !== undefined) {
            requestContext.setQueryParam("filter[header.lastBlockId.partSetHeader.hash.ilike]", ObjectSerializer.serialize(filterHeaderLastBlockIdPartSetHeaderHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderLastCommitHash !== undefined) {
            requestContext.setQueryParam("filter[header.lastCommitHash]", ObjectSerializer.serialize(filterHeaderLastCommitHash, "string", ""));
        }

        // Query Params
        if (filterHeaderLastCommitHashNeq !== undefined) {
            requestContext.setQueryParam("filter[header.lastCommitHash.neq]", ObjectSerializer.serialize(filterHeaderLastCommitHashNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderLastCommitHashLike !== undefined) {
            requestContext.setQueryParam("filter[header.lastCommitHash.like]", ObjectSerializer.serialize(filterHeaderLastCommitHashLike, "string", ""));
        }

        // Query Params
        if (filterHeaderLastCommitHashIlike !== undefined) {
            requestContext.setQueryParam("filter[header.lastCommitHash.ilike]", ObjectSerializer.serialize(filterHeaderLastCommitHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderDataHash !== undefined) {
            requestContext.setQueryParam("filter[header.dataHash]", ObjectSerializer.serialize(filterHeaderDataHash, "string", ""));
        }

        // Query Params
        if (filterHeaderDataHashNeq !== undefined) {
            requestContext.setQueryParam("filter[header.dataHash.neq]", ObjectSerializer.serialize(filterHeaderDataHashNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderDataHashLike !== undefined) {
            requestContext.setQueryParam("filter[header.dataHash.like]", ObjectSerializer.serialize(filterHeaderDataHashLike, "string", ""));
        }

        // Query Params
        if (filterHeaderDataHashIlike !== undefined) {
            requestContext.setQueryParam("filter[header.dataHash.ilike]", ObjectSerializer.serialize(filterHeaderDataHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderValidatorsHash !== undefined) {
            requestContext.setQueryParam("filter[header.validatorsHash]", ObjectSerializer.serialize(filterHeaderValidatorsHash, "string", ""));
        }

        // Query Params
        if (filterHeaderValidatorsHashNeq !== undefined) {
            requestContext.setQueryParam("filter[header.validatorsHash.neq]", ObjectSerializer.serialize(filterHeaderValidatorsHashNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderValidatorsHashLike !== undefined) {
            requestContext.setQueryParam("filter[header.validatorsHash.like]", ObjectSerializer.serialize(filterHeaderValidatorsHashLike, "string", ""));
        }

        // Query Params
        if (filterHeaderValidatorsHashIlike !== undefined) {
            requestContext.setQueryParam("filter[header.validatorsHash.ilike]", ObjectSerializer.serialize(filterHeaderValidatorsHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderNextValidatorsHash !== undefined) {
            requestContext.setQueryParam("filter[header.nextValidatorsHash]", ObjectSerializer.serialize(filterHeaderNextValidatorsHash, "string", ""));
        }

        // Query Params
        if (filterHeaderNextValidatorsHashNeq !== undefined) {
            requestContext.setQueryParam("filter[header.nextValidatorsHash.neq]", ObjectSerializer.serialize(filterHeaderNextValidatorsHashNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderNextValidatorsHashLike !== undefined) {
            requestContext.setQueryParam("filter[header.nextValidatorsHash.like]", ObjectSerializer.serialize(filterHeaderNextValidatorsHashLike, "string", ""));
        }

        // Query Params
        if (filterHeaderNextValidatorsHashIlike !== undefined) {
            requestContext.setQueryParam("filter[header.nextValidatorsHash.ilike]", ObjectSerializer.serialize(filterHeaderNextValidatorsHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderConsensusHash !== undefined) {
            requestContext.setQueryParam("filter[header.consensusHash]", ObjectSerializer.serialize(filterHeaderConsensusHash, "string", ""));
        }

        // Query Params
        if (filterHeaderConsensusHashNeq !== undefined) {
            requestContext.setQueryParam("filter[header.consensusHash.neq]", ObjectSerializer.serialize(filterHeaderConsensusHashNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderConsensusHashLike !== undefined) {
            requestContext.setQueryParam("filter[header.consensusHash.like]", ObjectSerializer.serialize(filterHeaderConsensusHashLike, "string", ""));
        }

        // Query Params
        if (filterHeaderConsensusHashIlike !== undefined) {
            requestContext.setQueryParam("filter[header.consensusHash.ilike]", ObjectSerializer.serialize(filterHeaderConsensusHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderAppHash !== undefined) {
            requestContext.setQueryParam("filter[header.appHash]", ObjectSerializer.serialize(filterHeaderAppHash, "string", ""));
        }

        // Query Params
        if (filterHeaderAppHashNeq !== undefined) {
            requestContext.setQueryParam("filter[header.appHash.neq]", ObjectSerializer.serialize(filterHeaderAppHashNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderAppHashLike !== undefined) {
            requestContext.setQueryParam("filter[header.appHash.like]", ObjectSerializer.serialize(filterHeaderAppHashLike, "string", ""));
        }

        // Query Params
        if (filterHeaderAppHashIlike !== undefined) {
            requestContext.setQueryParam("filter[header.appHash.ilike]", ObjectSerializer.serialize(filterHeaderAppHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderLastResultsHash !== undefined) {
            requestContext.setQueryParam("filter[header.lastResultsHash]", ObjectSerializer.serialize(filterHeaderLastResultsHash, "string", ""));
        }

        // Query Params
        if (filterHeaderLastResultsHashNeq !== undefined) {
            requestContext.setQueryParam("filter[header.lastResultsHash.neq]", ObjectSerializer.serialize(filterHeaderLastResultsHashNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderLastResultsHashLike !== undefined) {
            requestContext.setQueryParam("filter[header.lastResultsHash.like]", ObjectSerializer.serialize(filterHeaderLastResultsHashLike, "string", ""));
        }

        // Query Params
        if (filterHeaderLastResultsHashIlike !== undefined) {
            requestContext.setQueryParam("filter[header.lastResultsHash.ilike]", ObjectSerializer.serialize(filterHeaderLastResultsHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderEvidenceHash !== undefined) {
            requestContext.setQueryParam("filter[header.evidenceHash]", ObjectSerializer.serialize(filterHeaderEvidenceHash, "string", ""));
        }

        // Query Params
        if (filterHeaderEvidenceHashNeq !== undefined) {
            requestContext.setQueryParam("filter[header.evidenceHash.neq]", ObjectSerializer.serialize(filterHeaderEvidenceHashNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderEvidenceHashLike !== undefined) {
            requestContext.setQueryParam("filter[header.evidenceHash.like]", ObjectSerializer.serialize(filterHeaderEvidenceHashLike, "string", ""));
        }

        // Query Params
        if (filterHeaderEvidenceHashIlike !== undefined) {
            requestContext.setQueryParam("filter[header.evidenceHash.ilike]", ObjectSerializer.serialize(filterHeaderEvidenceHashIlike, "string", ""));
        }

        // Query Params
        if (filterHeaderProposerAddress !== undefined) {
            requestContext.setQueryParam("filter[header.proposerAddress]", ObjectSerializer.serialize(filterHeaderProposerAddress, "string", ""));
        }

        // Query Params
        if (filterHeaderProposerAddressNeq !== undefined) {
            requestContext.setQueryParam("filter[header.proposerAddress.neq]", ObjectSerializer.serialize(filterHeaderProposerAddressNeq, "string", ""));
        }

        // Query Params
        if (filterHeaderProposerAddressLike !== undefined) {
            requestContext.setQueryParam("filter[header.proposerAddress.like]", ObjectSerializer.serialize(filterHeaderProposerAddressLike, "string", ""));
        }

        // Query Params
        if (filterHeaderProposerAddressIlike !== undefined) {
            requestContext.setQueryParam("filter[header.proposerAddress.ilike]", ObjectSerializer.serialize(filterHeaderProposerAddressIlike, "string", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "ApiBlocksGetIncludeParameter", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "ApiBlocksGetSortParameter", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List entities
     * @param fieldsEntities Include the given fields in the response.
     * @param filterModule Filter the results where the [module] field is equal to the given value.
     * @param filterModuleNeq Filter the results where the [module] field is not equal to the given value.
     * @param filterModuleLike Filter the results where the [module] field is similar to the given case sensitive value.
     * @param filterModuleIlike Filter the results where the [module] field is similar to the given case insensitive value.
     * @param filterType Filter the results where the [type] field is equal to the given value.
     * @param filterTypeNeq Filter the results where the [type] field is not equal to the given value.
     * @param filterTypeLike Filter the results where the [type] field is similar to the given case sensitive value.
     * @param filterTypeIlike Filter the results where the [type] field is similar to the given case insensitive value.
     * @param filterKey Filter the results where the [key] field is equal to the given value.
     * @param filterKeyNeq Filter the results where the [key] field is not equal to the given value.
     * @param filterKeyLike Filter the results where the [key] field is similar to the given case sensitive value.
     * @param filterKeyIlike Filter the results where the [key] field is similar to the given case insensitive value.
     * @param filterValue Filter the results where the [value] field is equal to the given value.
     * @param filterValueNeq Filter the results where the [value] field is not equal to the given value.
     * @param filterValueLike Filter the results where the [value] field is similar to the given case sensitive value.
     * @param filterValueIlike Filter the results where the [value] field is similar to the given case insensitive value.
     * @param sort Sort the results by the given field and direction.
     */
    public async apiEntitiesGet(fieldsEntities?: ApiEntitiesGetFieldsEntitiesParameter, filterModule?: string, filterModuleNeq?: string, filterModuleLike?: string, filterModuleIlike?: string, filterType?: string, filterTypeNeq?: string, filterTypeLike?: string, filterTypeIlike?: string, filterKey?: string, filterKeyNeq?: string, filterKeyLike?: string, filterKeyIlike?: string, filterValue?: string, filterValueNeq?: string, filterValueLike?: string, filterValueIlike?: string, sort?: ApiEntitiesGetSortParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



















        // Path Params
        const localVarPath = '/api/entities';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsEntities !== undefined) {
            requestContext.setQueryParam("fields[entities]", ObjectSerializer.serialize(fieldsEntities, "ApiEntitiesGetFieldsEntitiesParameter", ""));
        }

        // Query Params
        if (filterModule !== undefined) {
            requestContext.setQueryParam("filter[module]", ObjectSerializer.serialize(filterModule, "string", ""));
        }

        // Query Params
        if (filterModuleNeq !== undefined) {
            requestContext.setQueryParam("filter[module.neq]", ObjectSerializer.serialize(filterModuleNeq, "string", ""));
        }

        // Query Params
        if (filterModuleLike !== undefined) {
            requestContext.setQueryParam("filter[module.like]", ObjectSerializer.serialize(filterModuleLike, "string", ""));
        }

        // Query Params
        if (filterModuleIlike !== undefined) {
            requestContext.setQueryParam("filter[module.ilike]", ObjectSerializer.serialize(filterModuleIlike, "string", ""));
        }

        // Query Params
        if (filterType !== undefined) {
            requestContext.setQueryParam("filter[type]", ObjectSerializer.serialize(filterType, "string", ""));
        }

        // Query Params
        if (filterTypeNeq !== undefined) {
            requestContext.setQueryParam("filter[type.neq]", ObjectSerializer.serialize(filterTypeNeq, "string", ""));
        }

        // Query Params
        if (filterTypeLike !== undefined) {
            requestContext.setQueryParam("filter[type.like]", ObjectSerializer.serialize(filterTypeLike, "string", ""));
        }

        // Query Params
        if (filterTypeIlike !== undefined) {
            requestContext.setQueryParam("filter[type.ilike]", ObjectSerializer.serialize(filterTypeIlike, "string", ""));
        }

        // Query Params
        if (filterKey !== undefined) {
            requestContext.setQueryParam("filter[key]", ObjectSerializer.serialize(filterKey, "string", ""));
        }

        // Query Params
        if (filterKeyNeq !== undefined) {
            requestContext.setQueryParam("filter[key.neq]", ObjectSerializer.serialize(filterKeyNeq, "string", ""));
        }

        // Query Params
        if (filterKeyLike !== undefined) {
            requestContext.setQueryParam("filter[key.like]", ObjectSerializer.serialize(filterKeyLike, "string", ""));
        }

        // Query Params
        if (filterKeyIlike !== undefined) {
            requestContext.setQueryParam("filter[key.ilike]", ObjectSerializer.serialize(filterKeyIlike, "string", ""));
        }

        // Query Params
        if (filterValue !== undefined) {
            requestContext.setQueryParam("filter[value]", ObjectSerializer.serialize(filterValue, "string", ""));
        }

        // Query Params
        if (filterValueNeq !== undefined) {
            requestContext.setQueryParam("filter[value.neq]", ObjectSerializer.serialize(filterValueNeq, "string", ""));
        }

        // Query Params
        if (filterValueLike !== undefined) {
            requestContext.setQueryParam("filter[value.like]", ObjectSerializer.serialize(filterValueLike, "string", ""));
        }

        // Query Params
        if (filterValueIlike !== undefined) {
            requestContext.setQueryParam("filter[value.ilike]", ObjectSerializer.serialize(filterValueIlike, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "ApiEntitiesGetSortParameter", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List transactions
     * @param fieldsAccounts Include the given fields in the response.
     * @param filterHash Filter the results where the [hash] field is equal to the given value.
     * @param filterHashNeq Filter the results where the [hash] field is not equal to the given value.
     * @param filterHashLike Filter the results where the [hash] field is similar to the given case sensitive value.
     * @param filterHashIlike Filter the results where the [hash] field is similar to the given case insensitive value.
     * @param filterSender Filter the results where the [sender] field is equal to the given value.
     * @param filterSenderNeq Filter the results where the [sender] field is not equal to the given value.
     * @param filterSenderLike Filter the results where the [sender] field is similar to the given case sensitive value.
     * @param filterSenderIlike Filter the results where the [sender] field is similar to the given case insensitive value.
     * @param filterRecipient Filter the results where the [recipient] field is equal to the given value.
     * @param filterRecipientNeq Filter the results where the [recipient] field is not equal to the given value.
     * @param filterRecipientLike Filter the results where the [recipient] field is similar to the given case sensitive value.
     * @param filterRecipientIlike Filter the results where the [recipient] field is similar to the given case insensitive value.
     * @param filterGas Filter the results where the [gas] field is equal to the given value.
     * @param filterNonce Filter the results where the [nonce] field is equal to the given value.
     * @param filterSignature Filter the results where the [signature] field is equal to the given value.
     * @param filterSignatureNeq Filter the results where the [signature] field is not equal to the given value.
     * @param filterSignatureLike Filter the results where the [signature] field is similar to the given case sensitive value.
     * @param filterSignatureIlike Filter the results where the [signature] field is similar to the given case insensitive value.
     * @param filterVersion Filter the results where the [version] field is equal to the given value.
     * @param filterVersionNeq Filter the results where the [version] field is not equal to the given value.
     * @param filterVersionLike Filter the results where the [version] field is similar to the given case sensitive value.
     * @param filterVersionIlike Filter the results where the [version] field is similar to the given case insensitive value.
     * @param filterMessageHandler Filter the results where the [message.handler] field is equal to the given value.
     * @param filterMessageHandlerNeq Filter the results where the [message.handler] field is not equal to the given value.
     * @param filterMessageHandlerLike Filter the results where the [message.handler] field is similar to the given case sensitive value.
     * @param filterMessageHandlerIlike Filter the results where the [message.handler] field is similar to the given case insensitive value.
     * @param filterMessageVersion Filter the results where the [message.version] field is equal to the given value.
     * @param filterMessageVersionNeq Filter the results where the [message.version] field is not equal to the given value.
     * @param filterMessageVersionLike Filter the results where the [message.version] field is similar to the given case sensitive value.
     * @param filterMessageVersionIlike Filter the results where the [message.version] field is similar to the given case insensitive value.
     * @param filterMessageNetwork Filter the results where the [message.network] field is equal to the given value.
     * @param filterMessageNetworkNeq Filter the results where the [message.network] field is not equal to the given value.
     * @param filterMessageNetworkLike Filter the results where the [message.network] field is similar to the given case sensitive value.
     * @param filterMessageNetworkIlike Filter the results where the [message.network] field is similar to the given case insensitive value.
     * @param filterMessageContent Filter the results where the [message.content] field is equal to the given value.
     * @param filterMessageContentNeq Filter the results where the [message.content] field is not equal to the given value.
     * @param filterMessageContentLike Filter the results where the [message.content] field is similar to the given case sensitive value.
     * @param filterMessageContentIlike Filter the results where the [message.content] field is similar to the given case insensitive value.
     * @param include Include the given relationships.
     * @param sort Sort the results by the given field and direction.
     */
    public async apiTransactionsGet(fieldsAccounts?: ApiTransactionsGetFieldsAccountsParameter, filterHash?: string, filterHashNeq?: string, filterHashLike?: string, filterHashIlike?: string, filterSender?: string, filterSenderNeq?: string, filterSenderLike?: string, filterSenderIlike?: string, filterRecipient?: string, filterRecipientNeq?: string, filterRecipientLike?: string, filterRecipientIlike?: string, filterGas?: number, filterNonce?: number, filterSignature?: string, filterSignatureNeq?: string, filterSignatureLike?: string, filterSignatureIlike?: string, filterVersion?: string, filterVersionNeq?: string, filterVersionLike?: string, filterVersionIlike?: string, filterMessageHandler?: string, filterMessageHandlerNeq?: string, filterMessageHandlerLike?: string, filterMessageHandlerIlike?: string, filterMessageVersion?: string, filterMessageVersionNeq?: string, filterMessageVersionLike?: string, filterMessageVersionIlike?: string, filterMessageNetwork?: string, filterMessageNetworkNeq?: string, filterMessageNetworkLike?: string, filterMessageNetworkIlike?: string, filterMessageContent?: string, filterMessageContentNeq?: string, filterMessageContentLike?: string, filterMessageContentIlike?: string, include?: ApiTransactionsGetIncludeParameter, sort?: ApiTransactionsGetSortParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










































        // Path Params
        const localVarPath = '/api/transactions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAccounts !== undefined) {
            requestContext.setQueryParam("fields[accounts]", ObjectSerializer.serialize(fieldsAccounts, "ApiTransactionsGetFieldsAccountsParameter", ""));
        }

        // Query Params
        if (filterHash !== undefined) {
            requestContext.setQueryParam("filter[hash]", ObjectSerializer.serialize(filterHash, "string", ""));
        }

        // Query Params
        if (filterHashNeq !== undefined) {
            requestContext.setQueryParam("filter[hash.neq]", ObjectSerializer.serialize(filterHashNeq, "string", ""));
        }

        // Query Params
        if (filterHashLike !== undefined) {
            requestContext.setQueryParam("filter[hash.like]", ObjectSerializer.serialize(filterHashLike, "string", ""));
        }

        // Query Params
        if (filterHashIlike !== undefined) {
            requestContext.setQueryParam("filter[hash.ilike]", ObjectSerializer.serialize(filterHashIlike, "string", ""));
        }

        // Query Params
        if (filterSender !== undefined) {
            requestContext.setQueryParam("filter[sender]", ObjectSerializer.serialize(filterSender, "string", ""));
        }

        // Query Params
        if (filterSenderNeq !== undefined) {
            requestContext.setQueryParam("filter[sender.neq]", ObjectSerializer.serialize(filterSenderNeq, "string", ""));
        }

        // Query Params
        if (filterSenderLike !== undefined) {
            requestContext.setQueryParam("filter[sender.like]", ObjectSerializer.serialize(filterSenderLike, "string", ""));
        }

        // Query Params
        if (filterSenderIlike !== undefined) {
            requestContext.setQueryParam("filter[sender.ilike]", ObjectSerializer.serialize(filterSenderIlike, "string", ""));
        }

        // Query Params
        if (filterRecipient !== undefined) {
            requestContext.setQueryParam("filter[recipient]", ObjectSerializer.serialize(filterRecipient, "string", ""));
        }

        // Query Params
        if (filterRecipientNeq !== undefined) {
            requestContext.setQueryParam("filter[recipient.neq]", ObjectSerializer.serialize(filterRecipientNeq, "string", ""));
        }

        // Query Params
        if (filterRecipientLike !== undefined) {
            requestContext.setQueryParam("filter[recipient.like]", ObjectSerializer.serialize(filterRecipientLike, "string", ""));
        }

        // Query Params
        if (filterRecipientIlike !== undefined) {
            requestContext.setQueryParam("filter[recipient.ilike]", ObjectSerializer.serialize(filterRecipientIlike, "string", ""));
        }

        // Query Params
        if (filterGas !== undefined) {
            requestContext.setQueryParam("filter[gas]", ObjectSerializer.serialize(filterGas, "number", ""));
        }

        // Query Params
        if (filterNonce !== undefined) {
            requestContext.setQueryParam("filter[nonce]", ObjectSerializer.serialize(filterNonce, "number", ""));
        }

        // Query Params
        if (filterSignature !== undefined) {
            requestContext.setQueryParam("filter[signature]", ObjectSerializer.serialize(filterSignature, "string", ""));
        }

        // Query Params
        if (filterSignatureNeq !== undefined) {
            requestContext.setQueryParam("filter[signature.neq]", ObjectSerializer.serialize(filterSignatureNeq, "string", ""));
        }

        // Query Params
        if (filterSignatureLike !== undefined) {
            requestContext.setQueryParam("filter[signature.like]", ObjectSerializer.serialize(filterSignatureLike, "string", ""));
        }

        // Query Params
        if (filterSignatureIlike !== undefined) {
            requestContext.setQueryParam("filter[signature.ilike]", ObjectSerializer.serialize(filterSignatureIlike, "string", ""));
        }

        // Query Params
        if (filterVersion !== undefined) {
            requestContext.setQueryParam("filter[version]", ObjectSerializer.serialize(filterVersion, "string", ""));
        }

        // Query Params
        if (filterVersionNeq !== undefined) {
            requestContext.setQueryParam("filter[version.neq]", ObjectSerializer.serialize(filterVersionNeq, "string", ""));
        }

        // Query Params
        if (filterVersionLike !== undefined) {
            requestContext.setQueryParam("filter[version.like]", ObjectSerializer.serialize(filterVersionLike, "string", ""));
        }

        // Query Params
        if (filterVersionIlike !== undefined) {
            requestContext.setQueryParam("filter[version.ilike]", ObjectSerializer.serialize(filterVersionIlike, "string", ""));
        }

        // Query Params
        if (filterMessageHandler !== undefined) {
            requestContext.setQueryParam("filter[message.handler]", ObjectSerializer.serialize(filterMessageHandler, "string", ""));
        }

        // Query Params
        if (filterMessageHandlerNeq !== undefined) {
            requestContext.setQueryParam("filter[message.handler.neq]", ObjectSerializer.serialize(filterMessageHandlerNeq, "string", ""));
        }

        // Query Params
        if (filterMessageHandlerLike !== undefined) {
            requestContext.setQueryParam("filter[message.handler.like]", ObjectSerializer.serialize(filterMessageHandlerLike, "string", ""));
        }

        // Query Params
        if (filterMessageHandlerIlike !== undefined) {
            requestContext.setQueryParam("filter[message.handler.ilike]", ObjectSerializer.serialize(filterMessageHandlerIlike, "string", ""));
        }

        // Query Params
        if (filterMessageVersion !== undefined) {
            requestContext.setQueryParam("filter[message.version]", ObjectSerializer.serialize(filterMessageVersion, "string", ""));
        }

        // Query Params
        if (filterMessageVersionNeq !== undefined) {
            requestContext.setQueryParam("filter[message.version.neq]", ObjectSerializer.serialize(filterMessageVersionNeq, "string", ""));
        }

        // Query Params
        if (filterMessageVersionLike !== undefined) {
            requestContext.setQueryParam("filter[message.version.like]", ObjectSerializer.serialize(filterMessageVersionLike, "string", ""));
        }

        // Query Params
        if (filterMessageVersionIlike !== undefined) {
            requestContext.setQueryParam("filter[message.version.ilike]", ObjectSerializer.serialize(filterMessageVersionIlike, "string", ""));
        }

        // Query Params
        if (filterMessageNetwork !== undefined) {
            requestContext.setQueryParam("filter[message.network]", ObjectSerializer.serialize(filterMessageNetwork, "string", ""));
        }

        // Query Params
        if (filterMessageNetworkNeq !== undefined) {
            requestContext.setQueryParam("filter[message.network.neq]", ObjectSerializer.serialize(filterMessageNetworkNeq, "string", ""));
        }

        // Query Params
        if (filterMessageNetworkLike !== undefined) {
            requestContext.setQueryParam("filter[message.network.like]", ObjectSerializer.serialize(filterMessageNetworkLike, "string", ""));
        }

        // Query Params
        if (filterMessageNetworkIlike !== undefined) {
            requestContext.setQueryParam("filter[message.network.ilike]", ObjectSerializer.serialize(filterMessageNetworkIlike, "string", ""));
        }

        // Query Params
        if (filterMessageContent !== undefined) {
            requestContext.setQueryParam("filter[message.content]", ObjectSerializer.serialize(filterMessageContent, "string", ""));
        }

        // Query Params
        if (filterMessageContentNeq !== undefined) {
            requestContext.setQueryParam("filter[message.content.neq]", ObjectSerializer.serialize(filterMessageContentNeq, "string", ""));
        }

        // Query Params
        if (filterMessageContentLike !== undefined) {
            requestContext.setQueryParam("filter[message.content.like]", ObjectSerializer.serialize(filterMessageContentLike, "string", ""));
        }

        // Query Params
        if (filterMessageContentIlike !== undefined) {
            requestContext.setQueryParam("filter[message.content.ilike]", ObjectSerializer.serialize(filterMessageContentIlike, "string", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "ApiTransactionsGetIncludeParameter", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "ApiTransactionsGetSortParameter", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List transaction metadata
     * @param fieldsTransactionMetadata Include the given fields in the response.
     * @param filterTransactionId Filter the results where the [transaction_id] field is equal to the given value.
     * @param filterKey Filter the results where the [key] field is equal to the given value.
     * @param filterKeyNeq Filter the results where the [key] field is not equal to the given value.
     * @param filterKeyLike Filter the results where the [key] field is similar to the given case sensitive value.
     * @param filterKeyIlike Filter the results where the [key] field is similar to the given case insensitive value.
     * @param filterValue Filter the results where the [value] field is equal to the given value.
     * @param filterValueNeq Filter the results where the [value] field is not equal to the given value.
     * @param filterValueLike Filter the results where the [value] field is similar to the given case sensitive value.
     * @param filterValueIlike Filter the results where the [value] field is similar to the given case insensitive value.
     * @param include Include the given relationships.
     * @param sort Sort the results by the given field and direction.
     */
    public async apiTransactionsMetadataGet(fieldsTransactionMetadata?: ApiTransactionsMetadataGetFieldsTransactionMetadataParameter, filterTransactionId?: number, filterKey?: string, filterKeyNeq?: string, filterKeyLike?: string, filterKeyIlike?: string, filterValue?: string, filterValueNeq?: string, filterValueLike?: string, filterValueIlike?: string, include?: ApiTransactionsMetadataGetIncludeParameter, sort?: ApiTransactionsMetadataGetSortParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/api/transactions/metadata';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsTransactionMetadata !== undefined) {
            requestContext.setQueryParam("fields[transaction_metadata]", ObjectSerializer.serialize(fieldsTransactionMetadata, "ApiTransactionsMetadataGetFieldsTransactionMetadataParameter", ""));
        }

        // Query Params
        if (filterTransactionId !== undefined) {
            requestContext.setQueryParam("filter[transaction_id]", ObjectSerializer.serialize(filterTransactionId, "number", ""));
        }

        // Query Params
        if (filterKey !== undefined) {
            requestContext.setQueryParam("filter[key]", ObjectSerializer.serialize(filterKey, "string", ""));
        }

        // Query Params
        if (filterKeyNeq !== undefined) {
            requestContext.setQueryParam("filter[key.neq]", ObjectSerializer.serialize(filterKeyNeq, "string", ""));
        }

        // Query Params
        if (filterKeyLike !== undefined) {
            requestContext.setQueryParam("filter[key.like]", ObjectSerializer.serialize(filterKeyLike, "string", ""));
        }

        // Query Params
        if (filterKeyIlike !== undefined) {
            requestContext.setQueryParam("filter[key.ilike]", ObjectSerializer.serialize(filterKeyIlike, "string", ""));
        }

        // Query Params
        if (filterValue !== undefined) {
            requestContext.setQueryParam("filter[value]", ObjectSerializer.serialize(filterValue, "string", ""));
        }

        // Query Params
        if (filterValueNeq !== undefined) {
            requestContext.setQueryParam("filter[value.neq]", ObjectSerializer.serialize(filterValueNeq, "string", ""));
        }

        // Query Params
        if (filterValueLike !== undefined) {
            requestContext.setQueryParam("filter[value.like]", ObjectSerializer.serialize(filterValueLike, "string", ""));
        }

        // Query Params
        if (filterValueIlike !== undefined) {
            requestContext.setQueryParam("filter[value.ilike]", ObjectSerializer.serialize(filterValueIlike, "string", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "ApiTransactionsMetadataGetIncludeParameter", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "ApiTransactionsMetadataGetSortParameter", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List transaction receipts
     * @param fieldsTransactionReceipts Include the given fields in the response.
     * @param filterTransactionId Filter the results where the [transaction_id] field is equal to the given value.
     * @param filterBlockHash Filter the results where the [block_hash] field is equal to the given value.
     * @param filterBlockHashNeq Filter the results where the [block_hash] field is not equal to the given value.
     * @param filterBlockHashLike Filter the results where the [block_hash] field is similar to the given case sensitive value.
     * @param filterBlockHashIlike Filter the results where the [block_hash] field is similar to the given case insensitive value.
     * @param filterBlockNumber Filter the results where the [block_number] field is equal to the given value.
     * @param filterBlockNumberNeq Filter the results where the [block_number] field is not equal to the given value.
     * @param filterBlockNumberLike Filter the results where the [block_number] field is similar to the given case sensitive value.
     * @param filterBlockNumberIlike Filter the results where the [block_number] field is similar to the given case insensitive value.
     * @param include Include the given relationships.
     * @param sort Sort the results by the given field and direction.
     */
    public async apiTransactionsReceiptsGet(fieldsTransactionReceipts?: ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter, filterTransactionId?: number, filterBlockHash?: string, filterBlockHashNeq?: string, filterBlockHashLike?: string, filterBlockHashIlike?: string, filterBlockNumber?: string, filterBlockNumberNeq?: string, filterBlockNumberLike?: string, filterBlockNumberIlike?: string, include?: ApiTransactionsMetadataGetIncludeParameter, sort?: ApiTransactionsReceiptsGetSortParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/api/transactions/receipts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsTransactionReceipts !== undefined) {
            requestContext.setQueryParam("fields[transaction_receipts]", ObjectSerializer.serialize(fieldsTransactionReceipts, "ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter", ""));
        }

        // Query Params
        if (filterTransactionId !== undefined) {
            requestContext.setQueryParam("filter[transaction_id]", ObjectSerializer.serialize(filterTransactionId, "number", ""));
        }

        // Query Params
        if (filterBlockHash !== undefined) {
            requestContext.setQueryParam("filter[block_hash]", ObjectSerializer.serialize(filterBlockHash, "string", ""));
        }

        // Query Params
        if (filterBlockHashNeq !== undefined) {
            requestContext.setQueryParam("filter[block_hash.neq]", ObjectSerializer.serialize(filterBlockHashNeq, "string", ""));
        }

        // Query Params
        if (filterBlockHashLike !== undefined) {
            requestContext.setQueryParam("filter[block_hash.like]", ObjectSerializer.serialize(filterBlockHashLike, "string", ""));
        }

        // Query Params
        if (filterBlockHashIlike !== undefined) {
            requestContext.setQueryParam("filter[block_hash.ilike]", ObjectSerializer.serialize(filterBlockHashIlike, "string", ""));
        }

        // Query Params
        if (filterBlockNumber !== undefined) {
            requestContext.setQueryParam("filter[block_number]", ObjectSerializer.serialize(filterBlockNumber, "string", ""));
        }

        // Query Params
        if (filterBlockNumberNeq !== undefined) {
            requestContext.setQueryParam("filter[block_number.neq]", ObjectSerializer.serialize(filterBlockNumberNeq, "string", ""));
        }

        // Query Params
        if (filterBlockNumberLike !== undefined) {
            requestContext.setQueryParam("filter[block_number.like]", ObjectSerializer.serialize(filterBlockNumberLike, "string", ""));
        }

        // Query Params
        if (filterBlockNumberIlike !== undefined) {
            requestContext.setQueryParam("filter[block_number.ilike]", ObjectSerializer.serialize(filterBlockNumberIlike, "string", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "ApiTransactionsMetadataGetIncludeParameter", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "ApiTransactionsReceiptsGetSortParameter", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List validator updates
     * @param fieldsBlockNumber Include the given fields in the response.
     * @param filterBlockNumber Filter the results where the [block_number] field is equal to the given value.
     * @param include Include the given relationships.
     * @param sort Sort the results by the given field and direction.
     */
    public async apiValidatorsUpdatesGet(fieldsBlockNumber?: ApiValidatorsUpdatesGetFieldsBlockNumberParameter, filterBlockNumber?: number, include?: ApiValidatorsUpdatesGetIncludeParameter, sort?: ApiValidatorsUpdatesGetSortParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/api/validators/updates';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsBlockNumber !== undefined) {
            requestContext.setQueryParam("fields[block_number]", ObjectSerializer.serialize(fieldsBlockNumber, "ApiValidatorsUpdatesGetFieldsBlockNumberParameter", ""));
        }

        // Query Params
        if (filterBlockNumber !== undefined) {
            requestContext.setQueryParam("filter[block_number]", ObjectSerializer.serialize(filterBlockNumber, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "ApiValidatorsUpdatesGetIncludeParameter", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "ApiValidatorsUpdatesGetSortParameter", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiAccountsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiAccountsGet(response: ResponseContext): Promise<ApiAccountsGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiAccountsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiAccountsGet200Response", ""
            ) as ApiAccountsGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiAccountsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiAccountsGet200Response", ""
            ) as ApiAccountsGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiAccountsMetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiAccountsMetadataGet(response: ResponseContext): Promise<ApiAccountsMetadataGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiAccountsMetadataGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiAccountsMetadataGet200Response", ""
            ) as ApiAccountsMetadataGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiAccountsMetadataGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiAccountsMetadataGet200Response", ""
            ) as ApiAccountsMetadataGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiBlocksGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiBlocksGet(response: ResponseContext): Promise<ApiBlocksGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiBlocksGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiBlocksGet200Response", ""
            ) as ApiBlocksGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiBlocksGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiBlocksGet200Response", ""
            ) as ApiBlocksGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiEntitiesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiEntitiesGet(response: ResponseContext): Promise<ApiEntitiesGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiEntitiesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiEntitiesGet200Response", ""
            ) as ApiEntitiesGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiEntitiesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiEntitiesGet200Response", ""
            ) as ApiEntitiesGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiTransactionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiTransactionsGet(response: ResponseContext): Promise<ApiTransactionsGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiTransactionsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiTransactionsGet200Response", ""
            ) as ApiTransactionsGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiTransactionsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiTransactionsGet200Response", ""
            ) as ApiTransactionsGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiTransactionsMetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiTransactionsMetadataGet(response: ResponseContext): Promise<ApiTransactionsMetadataGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiTransactionsMetadataGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiTransactionsMetadataGet200Response", ""
            ) as ApiTransactionsMetadataGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiTransactionsMetadataGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiTransactionsMetadataGet200Response", ""
            ) as ApiTransactionsMetadataGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiTransactionsReceiptsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiTransactionsReceiptsGet(response: ResponseContext): Promise<ApiTransactionsReceiptsGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiTransactionsReceiptsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiTransactionsReceiptsGet200Response", ""
            ) as ApiTransactionsReceiptsGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiTransactionsReceiptsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiTransactionsReceiptsGet200Response", ""
            ) as ApiTransactionsReceiptsGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiValidatorsUpdatesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiValidatorsUpdatesGet(response: ResponseContext): Promise<ApiValidatorsUpdatesGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiValidatorsUpdatesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiValidatorsUpdatesGet200Response", ""
            ) as ApiValidatorsUpdatesGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiValidatorsUpdatesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiValidatorsUpdatesGet200Response", ""
            ) as ApiValidatorsUpdatesGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
