import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountMetadata } from '../models/AccountMetadata';
import { ApiAccountsGet200Response } from '../models/ApiAccountsGet200Response';
import { ApiAccountsGetFieldsAccountsParameter } from '../models/ApiAccountsGetFieldsAccountsParameter';
import { ApiAccountsGetIncludeParameter } from '../models/ApiAccountsGetIncludeParameter';
import { ApiAccountsGetSortParameter } from '../models/ApiAccountsGetSortParameter';
import { ApiAccountsMetadataGet200Response } from '../models/ApiAccountsMetadataGet200Response';
import { ApiAccountsMetadataGetFieldsAccountsMetadataParameter } from '../models/ApiAccountsMetadataGetFieldsAccountsMetadataParameter';
import { ApiAccountsMetadataGetIncludeParameter } from '../models/ApiAccountsMetadataGetIncludeParameter';
import { ApiAccountsMetadataGetSortParameter } from '../models/ApiAccountsMetadataGetSortParameter';
import { ApiBlocksGet200Response } from '../models/ApiBlocksGet200Response';
import { ApiBlocksGetFieldsBlocksParameter } from '../models/ApiBlocksGetFieldsBlocksParameter';
import { ApiBlocksGetIncludeParameter } from '../models/ApiBlocksGetIncludeParameter';
import { ApiBlocksGetSortParameter } from '../models/ApiBlocksGetSortParameter';
import { ApiEntitiesGet200Response } from '../models/ApiEntitiesGet200Response';
import { ApiEntitiesGetFieldsEntitiesParameter } from '../models/ApiEntitiesGetFieldsEntitiesParameter';
import { ApiEntitiesGetSortParameter } from '../models/ApiEntitiesGetSortParameter';
import { ApiTransactionsGet200Response } from '../models/ApiTransactionsGet200Response';
import { ApiTransactionsGetFieldsAccountsParameter } from '../models/ApiTransactionsGetFieldsAccountsParameter';
import { ApiTransactionsGetIncludeParameter } from '../models/ApiTransactionsGetIncludeParameter';
import { ApiTransactionsGetSortParameter } from '../models/ApiTransactionsGetSortParameter';
import { ApiTransactionsMetadataGet200Response } from '../models/ApiTransactionsMetadataGet200Response';
import { ApiTransactionsMetadataGetFieldsTransactionMetadataParameter } from '../models/ApiTransactionsMetadataGetFieldsTransactionMetadataParameter';
import { ApiTransactionsMetadataGetIncludeParameter } from '../models/ApiTransactionsMetadataGetIncludeParameter';
import { ApiTransactionsMetadataGetSortParameter } from '../models/ApiTransactionsMetadataGetSortParameter';
import { ApiTransactionsReceiptsGet200Response } from '../models/ApiTransactionsReceiptsGet200Response';
import { ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter } from '../models/ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter';
import { ApiTransactionsReceiptsGetSortParameter } from '../models/ApiTransactionsReceiptsGetSortParameter';
import { ApiValidatorsUpdatesGet200Response } from '../models/ApiValidatorsUpdatesGet200Response';
import { ApiValidatorsUpdatesGetFieldsBlockNumberParameter } from '../models/ApiValidatorsUpdatesGetFieldsBlockNumberParameter';
import { ApiValidatorsUpdatesGetIncludeParameter } from '../models/ApiValidatorsUpdatesGetIncludeParameter';
import { ApiValidatorsUpdatesGetSortParameter } from '../models/ApiValidatorsUpdatesGetSortParameter';
import { Block } from '../models/Block';
import { Entity } from '../models/Entity';
import { Transaction } from '../models/Transaction';
import { TransactionMetadata } from '../models/TransactionMetadata';
import { TransactionReceipt } from '../models/TransactionReceipt';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

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
    public apiAccountsGet(fieldsAccounts?: ApiAccountsGetFieldsAccountsParameter, filterAddress?: string, filterAddressNeq?: string, filterAddressLike?: string, filterAddressIlike?: string, filterPublicKey?: string, filterPublicKeyNeq?: string, filterPublicKeyLike?: string, filterPublicKeyIlike?: string, filterName?: string, filterNameNeq?: string, filterNameLike?: string, filterNameIlike?: string, filterNonce?: number, filterValidatorAddress?: string, filterValidatorAddressNeq?: string, filterValidatorAddressLike?: string, filterValidatorAddressIlike?: string, filterValidatorPublicKey?: string, filterValidatorPublicKeyNeq?: string, filterValidatorPublicKeyLike?: string, filterValidatorPublicKeyIlike?: string, filterValidatorPower?: string, filterValidatorPowerNeq?: string, filterValidatorPowerLike?: string, filterValidatorPowerIlike?: string, include?: ApiAccountsGetIncludeParameter, sort?: ApiAccountsGetSortParameter, _options?: Configuration): Promise<ApiAccountsGet200Response> {
        const result = this.api.apiAccountsGet(fieldsAccounts, filterAddress, filterAddressNeq, filterAddressLike, filterAddressIlike, filterPublicKey, filterPublicKeyNeq, filterPublicKeyLike, filterPublicKeyIlike, filterName, filterNameNeq, filterNameLike, filterNameIlike, filterNonce, filterValidatorAddress, filterValidatorAddressNeq, filterValidatorAddressLike, filterValidatorAddressIlike, filterValidatorPublicKey, filterValidatorPublicKeyNeq, filterValidatorPublicKeyLike, filterValidatorPublicKeyIlike, filterValidatorPower, filterValidatorPowerNeq, filterValidatorPowerLike, filterValidatorPowerIlike, include, sort, _options);
        return result.toPromise();
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
    public apiAccountsMetadataGet(fieldsAccountsMetadata?: ApiAccountsMetadataGetFieldsAccountsMetadataParameter, filterAccountId?: number, filterModule?: string, filterModuleNeq?: string, filterModuleLike?: string, filterModuleIlike?: string, filterKey?: string, filterKeyNeq?: string, filterKeyLike?: string, filterKeyIlike?: string, filterValue?: string, filterValueNeq?: string, filterValueLike?: string, filterValueIlike?: string, include?: ApiAccountsMetadataGetIncludeParameter, sort?: ApiAccountsMetadataGetSortParameter, _options?: Configuration): Promise<ApiAccountsMetadataGet200Response> {
        const result = this.api.apiAccountsMetadataGet(fieldsAccountsMetadata, filterAccountId, filterModule, filterModuleNeq, filterModuleLike, filterModuleIlike, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, include, sort, _options);
        return result.toPromise();
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
    public apiBlocksGet(fieldsBlocks?: ApiBlocksGetFieldsBlocksParameter, filterHash?: string, filterHashNeq?: string, filterHashLike?: string, filterHashIlike?: string, filterHeight?: number, filterHeaderVersionBlock?: number, filterHeaderChainId?: string, filterHeaderChainIdNeq?: string, filterHeaderChainIdLike?: string, filterHeaderChainIdIlike?: string, filterHeaderHeight?: number, filterHeaderTime?: string, filterHeaderTimeNeq?: string, filterHeaderTimeLike?: string, filterHeaderTimeIlike?: string, filterHeaderLastBlockIdHash?: string, filterHeaderLastBlockIdHashNeq?: string, filterHeaderLastBlockIdHashLike?: string, filterHeaderLastBlockIdHashIlike?: string, filterHeaderLastBlockIdPartSetHeaderTotal?: number, filterHeaderLastBlockIdPartSetHeaderHash?: string, filterHeaderLastBlockIdPartSetHeaderHashNeq?: string, filterHeaderLastBlockIdPartSetHeaderHashLike?: string, filterHeaderLastBlockIdPartSetHeaderHashIlike?: string, filterHeaderLastCommitHash?: string, filterHeaderLastCommitHashNeq?: string, filterHeaderLastCommitHashLike?: string, filterHeaderLastCommitHashIlike?: string, filterHeaderDataHash?: string, filterHeaderDataHashNeq?: string, filterHeaderDataHashLike?: string, filterHeaderDataHashIlike?: string, filterHeaderValidatorsHash?: string, filterHeaderValidatorsHashNeq?: string, filterHeaderValidatorsHashLike?: string, filterHeaderValidatorsHashIlike?: string, filterHeaderNextValidatorsHash?: string, filterHeaderNextValidatorsHashNeq?: string, filterHeaderNextValidatorsHashLike?: string, filterHeaderNextValidatorsHashIlike?: string, filterHeaderConsensusHash?: string, filterHeaderConsensusHashNeq?: string, filterHeaderConsensusHashLike?: string, filterHeaderConsensusHashIlike?: string, filterHeaderAppHash?: string, filterHeaderAppHashNeq?: string, filterHeaderAppHashLike?: string, filterHeaderAppHashIlike?: string, filterHeaderLastResultsHash?: string, filterHeaderLastResultsHashNeq?: string, filterHeaderLastResultsHashLike?: string, filterHeaderLastResultsHashIlike?: string, filterHeaderEvidenceHash?: string, filterHeaderEvidenceHashNeq?: string, filterHeaderEvidenceHashLike?: string, filterHeaderEvidenceHashIlike?: string, filterHeaderProposerAddress?: string, filterHeaderProposerAddressNeq?: string, filterHeaderProposerAddressLike?: string, filterHeaderProposerAddressIlike?: string, include?: ApiBlocksGetIncludeParameter, sort?: ApiBlocksGetSortParameter, _options?: Configuration): Promise<ApiBlocksGet200Response> {
        const result = this.api.apiBlocksGet(fieldsBlocks, filterHash, filterHashNeq, filterHashLike, filterHashIlike, filterHeight, filterHeaderVersionBlock, filterHeaderChainId, filterHeaderChainIdNeq, filterHeaderChainIdLike, filterHeaderChainIdIlike, filterHeaderHeight, filterHeaderTime, filterHeaderTimeNeq, filterHeaderTimeLike, filterHeaderTimeIlike, filterHeaderLastBlockIdHash, filterHeaderLastBlockIdHashNeq, filterHeaderLastBlockIdHashLike, filterHeaderLastBlockIdHashIlike, filterHeaderLastBlockIdPartSetHeaderTotal, filterHeaderLastBlockIdPartSetHeaderHash, filterHeaderLastBlockIdPartSetHeaderHashNeq, filterHeaderLastBlockIdPartSetHeaderHashLike, filterHeaderLastBlockIdPartSetHeaderHashIlike, filterHeaderLastCommitHash, filterHeaderLastCommitHashNeq, filterHeaderLastCommitHashLike, filterHeaderLastCommitHashIlike, filterHeaderDataHash, filterHeaderDataHashNeq, filterHeaderDataHashLike, filterHeaderDataHashIlike, filterHeaderValidatorsHash, filterHeaderValidatorsHashNeq, filterHeaderValidatorsHashLike, filterHeaderValidatorsHashIlike, filterHeaderNextValidatorsHash, filterHeaderNextValidatorsHashNeq, filterHeaderNextValidatorsHashLike, filterHeaderNextValidatorsHashIlike, filterHeaderConsensusHash, filterHeaderConsensusHashNeq, filterHeaderConsensusHashLike, filterHeaderConsensusHashIlike, filterHeaderAppHash, filterHeaderAppHashNeq, filterHeaderAppHashLike, filterHeaderAppHashIlike, filterHeaderLastResultsHash, filterHeaderLastResultsHashNeq, filterHeaderLastResultsHashLike, filterHeaderLastResultsHashIlike, filterHeaderEvidenceHash, filterHeaderEvidenceHashNeq, filterHeaderEvidenceHashLike, filterHeaderEvidenceHashIlike, filterHeaderProposerAddress, filterHeaderProposerAddressNeq, filterHeaderProposerAddressLike, filterHeaderProposerAddressIlike, include, sort, _options);
        return result.toPromise();
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
    public apiEntitiesGet(fieldsEntities?: ApiEntitiesGetFieldsEntitiesParameter, filterModule?: string, filterModuleNeq?: string, filterModuleLike?: string, filterModuleIlike?: string, filterType?: string, filterTypeNeq?: string, filterTypeLike?: string, filterTypeIlike?: string, filterKey?: string, filterKeyNeq?: string, filterKeyLike?: string, filterKeyIlike?: string, filterValue?: string, filterValueNeq?: string, filterValueLike?: string, filterValueIlike?: string, sort?: ApiEntitiesGetSortParameter, _options?: Configuration): Promise<ApiEntitiesGet200Response> {
        const result = this.api.apiEntitiesGet(fieldsEntities, filterModule, filterModuleNeq, filterModuleLike, filterModuleIlike, filterType, filterTypeNeq, filterTypeLike, filterTypeIlike, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, sort, _options);
        return result.toPromise();
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
    public apiTransactionsGet(fieldsAccounts?: ApiTransactionsGetFieldsAccountsParameter, filterHash?: string, filterHashNeq?: string, filterHashLike?: string, filterHashIlike?: string, filterSender?: string, filterSenderNeq?: string, filterSenderLike?: string, filterSenderIlike?: string, filterRecipient?: string, filterRecipientNeq?: string, filterRecipientLike?: string, filterRecipientIlike?: string, filterGas?: number, filterNonce?: number, filterSignature?: string, filterSignatureNeq?: string, filterSignatureLike?: string, filterSignatureIlike?: string, filterVersion?: string, filterVersionNeq?: string, filterVersionLike?: string, filterVersionIlike?: string, filterMessageHandler?: string, filterMessageHandlerNeq?: string, filterMessageHandlerLike?: string, filterMessageHandlerIlike?: string, filterMessageVersion?: string, filterMessageVersionNeq?: string, filterMessageVersionLike?: string, filterMessageVersionIlike?: string, filterMessageNetwork?: string, filterMessageNetworkNeq?: string, filterMessageNetworkLike?: string, filterMessageNetworkIlike?: string, filterMessageContent?: string, filterMessageContentNeq?: string, filterMessageContentLike?: string, filterMessageContentIlike?: string, include?: ApiTransactionsGetIncludeParameter, sort?: ApiTransactionsGetSortParameter, _options?: Configuration): Promise<ApiTransactionsGet200Response> {
        const result = this.api.apiTransactionsGet(fieldsAccounts, filterHash, filterHashNeq, filterHashLike, filterHashIlike, filterSender, filterSenderNeq, filterSenderLike, filterSenderIlike, filterRecipient, filterRecipientNeq, filterRecipientLike, filterRecipientIlike, filterGas, filterNonce, filterSignature, filterSignatureNeq, filterSignatureLike, filterSignatureIlike, filterVersion, filterVersionNeq, filterVersionLike, filterVersionIlike, filterMessageHandler, filterMessageHandlerNeq, filterMessageHandlerLike, filterMessageHandlerIlike, filterMessageVersion, filterMessageVersionNeq, filterMessageVersionLike, filterMessageVersionIlike, filterMessageNetwork, filterMessageNetworkNeq, filterMessageNetworkLike, filterMessageNetworkIlike, filterMessageContent, filterMessageContentNeq, filterMessageContentLike, filterMessageContentIlike, include, sort, _options);
        return result.toPromise();
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
    public apiTransactionsMetadataGet(fieldsTransactionMetadata?: ApiTransactionsMetadataGetFieldsTransactionMetadataParameter, filterTransactionId?: number, filterKey?: string, filterKeyNeq?: string, filterKeyLike?: string, filterKeyIlike?: string, filterValue?: string, filterValueNeq?: string, filterValueLike?: string, filterValueIlike?: string, include?: ApiTransactionsMetadataGetIncludeParameter, sort?: ApiTransactionsMetadataGetSortParameter, _options?: Configuration): Promise<ApiTransactionsMetadataGet200Response> {
        const result = this.api.apiTransactionsMetadataGet(fieldsTransactionMetadata, filterTransactionId, filterKey, filterKeyNeq, filterKeyLike, filterKeyIlike, filterValue, filterValueNeq, filterValueLike, filterValueIlike, include, sort, _options);
        return result.toPromise();
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
    public apiTransactionsReceiptsGet(fieldsTransactionReceipts?: ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter, filterTransactionId?: number, filterBlockHash?: string, filterBlockHashNeq?: string, filterBlockHashLike?: string, filterBlockHashIlike?: string, filterBlockNumber?: string, filterBlockNumberNeq?: string, filterBlockNumberLike?: string, filterBlockNumberIlike?: string, include?: ApiTransactionsMetadataGetIncludeParameter, sort?: ApiTransactionsReceiptsGetSortParameter, _options?: Configuration): Promise<ApiTransactionsReceiptsGet200Response> {
        const result = this.api.apiTransactionsReceiptsGet(fieldsTransactionReceipts, filterTransactionId, filterBlockHash, filterBlockHashNeq, filterBlockHashLike, filterBlockHashIlike, filterBlockNumber, filterBlockNumberNeq, filterBlockNumberLike, filterBlockNumberIlike, include, sort, _options);
        return result.toPromise();
    }

    /**
     * List validator updates
     * @param fieldsBlockNumber Include the given fields in the response.
     * @param filterBlockNumber Filter the results where the [block_number] field is equal to the given value.
     * @param include Include the given relationships.
     * @param sort Sort the results by the given field and direction.
     */
    public apiValidatorsUpdatesGet(fieldsBlockNumber?: ApiValidatorsUpdatesGetFieldsBlockNumberParameter, filterBlockNumber?: number, include?: ApiValidatorsUpdatesGetIncludeParameter, sort?: ApiValidatorsUpdatesGetSortParameter, _options?: Configuration): Promise<ApiValidatorsUpdatesGet200Response> {
        const result = this.api.apiValidatorsUpdatesGet(fieldsBlockNumber, filterBlockNumber, include, sort, _options);
        return result.toPromise();
    }


}



