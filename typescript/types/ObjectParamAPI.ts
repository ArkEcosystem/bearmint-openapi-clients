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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiApiAccountsGetRequest {
    /**
     * Include the given fields in the response.
     * @type ApiAccountsGetFieldsAccountsParameter
     * @memberof DefaultApiapiAccountsGet
     */
    fieldsAccounts?: ApiAccountsGetFieldsAccountsParameter
    /**
     * Filter the results where the [address] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterAddress?: string
    /**
     * Filter the results where the [address] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterAddressNeq?: string
    /**
     * Filter the results where the [address] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterAddressLike?: string
    /**
     * Filter the results where the [address] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterAddressIlike?: string
    /**
     * Filter the results where the [public_key] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterPublicKey?: string
    /**
     * Filter the results where the [public_key] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterPublicKeyNeq?: string
    /**
     * Filter the results where the [public_key] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterPublicKeyLike?: string
    /**
     * Filter the results where the [public_key] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterPublicKeyIlike?: string
    /**
     * Filter the results where the [name] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterName?: string
    /**
     * Filter the results where the [name] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterNameNeq?: string
    /**
     * Filter the results where the [name] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterNameLike?: string
    /**
     * Filter the results where the [name] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterNameIlike?: string
    /**
     * Filter the results where the [nonce] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiAccountsGet
     */
    filterNonce?: number
    /**
     * Filter the results where the [validator.address] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorAddress?: string
    /**
     * Filter the results where the [validator.address] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorAddressNeq?: string
    /**
     * Filter the results where the [validator.address] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorAddressLike?: string
    /**
     * Filter the results where the [validator.address] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorAddressIlike?: string
    /**
     * Filter the results where the [validator.publicKey] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorPublicKey?: string
    /**
     * Filter the results where the [validator.publicKey] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorPublicKeyNeq?: string
    /**
     * Filter the results where the [validator.publicKey] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorPublicKeyLike?: string
    /**
     * Filter the results where the [validator.publicKey] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorPublicKeyIlike?: string
    /**
     * Filter the results where the [validator.power] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorPower?: string
    /**
     * Filter the results where the [validator.power] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorPowerNeq?: string
    /**
     * Filter the results where the [validator.power] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorPowerLike?: string
    /**
     * Filter the results where the [validator.power] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsGet
     */
    filterValidatorPowerIlike?: string
    /**
     * Include the given relationships.
     * @type ApiAccountsGetIncludeParameter
     * @memberof DefaultApiapiAccountsGet
     */
    include?: ApiAccountsGetIncludeParameter
    /**
     * Sort the results by the given field and direction.
     * @type ApiAccountsGetSortParameter
     * @memberof DefaultApiapiAccountsGet
     */
    sort?: ApiAccountsGetSortParameter
}

export interface DefaultApiApiAccountsMetadataGetRequest {
    /**
     * Include the given fields in the response.
     * @type ApiAccountsMetadataGetFieldsAccountsMetadataParameter
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    fieldsAccountsMetadata?: ApiAccountsMetadataGetFieldsAccountsMetadataParameter
    /**
     * Filter the results where the [account_id] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterAccountId?: number
    /**
     * Filter the results where the [module] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterModule?: string
    /**
     * Filter the results where the [module] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterModuleNeq?: string
    /**
     * Filter the results where the [module] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterModuleLike?: string
    /**
     * Filter the results where the [module] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterModuleIlike?: string
    /**
     * Filter the results where the [key] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterKey?: string
    /**
     * Filter the results where the [key] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterKeyNeq?: string
    /**
     * Filter the results where the [key] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterKeyLike?: string
    /**
     * Filter the results where the [key] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterKeyIlike?: string
    /**
     * Filter the results where the [value] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterValue?: string
    /**
     * Filter the results where the [value] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterValueNeq?: string
    /**
     * Filter the results where the [value] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterValueLike?: string
    /**
     * Filter the results where the [value] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    filterValueIlike?: string
    /**
     * Include the given relationships.
     * @type ApiAccountsMetadataGetIncludeParameter
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    include?: ApiAccountsMetadataGetIncludeParameter
    /**
     * Sort the results by the given field and direction.
     * @type ApiAccountsMetadataGetSortParameter
     * @memberof DefaultApiapiAccountsMetadataGet
     */
    sort?: ApiAccountsMetadataGetSortParameter
}

export interface DefaultApiApiBlocksGetRequest {
    /**
     * Include the given fields in the response.
     * @type ApiBlocksGetFieldsBlocksParameter
     * @memberof DefaultApiapiBlocksGet
     */
    fieldsBlocks?: ApiBlocksGetFieldsBlocksParameter
    /**
     * Filter the results where the [hash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHash?: string
    /**
     * Filter the results where the [hash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHashNeq?: string
    /**
     * Filter the results where the [hash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHashLike?: string
    /**
     * Filter the results where the [hash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHashIlike?: string
    /**
     * Filter the results where the [height] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeight?: number
    /**
     * Filter the results where the [header.version.block] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderVersionBlock?: number
    /**
     * Filter the results where the [header.chainId] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderChainId?: string
    /**
     * Filter the results where the [header.chainId] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderChainIdNeq?: string
    /**
     * Filter the results where the [header.chainId] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderChainIdLike?: string
    /**
     * Filter the results where the [header.chainId] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderChainIdIlike?: string
    /**
     * Filter the results where the [header.height] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderHeight?: number
    /**
     * Filter the results where the [header.time] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderTime?: string
    /**
     * Filter the results where the [header.time] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderTimeNeq?: string
    /**
     * Filter the results where the [header.time] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderTimeLike?: string
    /**
     * Filter the results where the [header.time] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderTimeIlike?: string
    /**
     * Filter the results where the [header.lastBlockId.hash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastBlockIdHash?: string
    /**
     * Filter the results where the [header.lastBlockId.hash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastBlockIdHashNeq?: string
    /**
     * Filter the results where the [header.lastBlockId.hash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastBlockIdHashLike?: string
    /**
     * Filter the results where the [header.lastBlockId.hash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastBlockIdHashIlike?: string
    /**
     * Filter the results where the [header.lastBlockId.partSetHeader.total] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastBlockIdPartSetHeaderTotal?: number
    /**
     * Filter the results where the [header.lastBlockId.partSetHeader.hash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastBlockIdPartSetHeaderHash?: string
    /**
     * Filter the results where the [header.lastBlockId.partSetHeader.hash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastBlockIdPartSetHeaderHashNeq?: string
    /**
     * Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastBlockIdPartSetHeaderHashLike?: string
    /**
     * Filter the results where the [header.lastBlockId.partSetHeader.hash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastBlockIdPartSetHeaderHashIlike?: string
    /**
     * Filter the results where the [header.lastCommitHash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastCommitHash?: string
    /**
     * Filter the results where the [header.lastCommitHash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastCommitHashNeq?: string
    /**
     * Filter the results where the [header.lastCommitHash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastCommitHashLike?: string
    /**
     * Filter the results where the [header.lastCommitHash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastCommitHashIlike?: string
    /**
     * Filter the results where the [header.dataHash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderDataHash?: string
    /**
     * Filter the results where the [header.dataHash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderDataHashNeq?: string
    /**
     * Filter the results where the [header.dataHash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderDataHashLike?: string
    /**
     * Filter the results where the [header.dataHash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderDataHashIlike?: string
    /**
     * Filter the results where the [header.validatorsHash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderValidatorsHash?: string
    /**
     * Filter the results where the [header.validatorsHash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderValidatorsHashNeq?: string
    /**
     * Filter the results where the [header.validatorsHash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderValidatorsHashLike?: string
    /**
     * Filter the results where the [header.validatorsHash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderValidatorsHashIlike?: string
    /**
     * Filter the results where the [header.nextValidatorsHash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderNextValidatorsHash?: string
    /**
     * Filter the results where the [header.nextValidatorsHash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderNextValidatorsHashNeq?: string
    /**
     * Filter the results where the [header.nextValidatorsHash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderNextValidatorsHashLike?: string
    /**
     * Filter the results where the [header.nextValidatorsHash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderNextValidatorsHashIlike?: string
    /**
     * Filter the results where the [header.consensusHash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderConsensusHash?: string
    /**
     * Filter the results where the [header.consensusHash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderConsensusHashNeq?: string
    /**
     * Filter the results where the [header.consensusHash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderConsensusHashLike?: string
    /**
     * Filter the results where the [header.consensusHash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderConsensusHashIlike?: string
    /**
     * Filter the results where the [header.appHash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderAppHash?: string
    /**
     * Filter the results where the [header.appHash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderAppHashNeq?: string
    /**
     * Filter the results where the [header.appHash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderAppHashLike?: string
    /**
     * Filter the results where the [header.appHash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderAppHashIlike?: string
    /**
     * Filter the results where the [header.lastResultsHash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastResultsHash?: string
    /**
     * Filter the results where the [header.lastResultsHash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastResultsHashNeq?: string
    /**
     * Filter the results where the [header.lastResultsHash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastResultsHashLike?: string
    /**
     * Filter the results where the [header.lastResultsHash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderLastResultsHashIlike?: string
    /**
     * Filter the results where the [header.evidenceHash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderEvidenceHash?: string
    /**
     * Filter the results where the [header.evidenceHash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderEvidenceHashNeq?: string
    /**
     * Filter the results where the [header.evidenceHash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderEvidenceHashLike?: string
    /**
     * Filter the results where the [header.evidenceHash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderEvidenceHashIlike?: string
    /**
     * Filter the results where the [header.proposerAddress] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderProposerAddress?: string
    /**
     * Filter the results where the [header.proposerAddress] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderProposerAddressNeq?: string
    /**
     * Filter the results where the [header.proposerAddress] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderProposerAddressLike?: string
    /**
     * Filter the results where the [header.proposerAddress] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiBlocksGet
     */
    filterHeaderProposerAddressIlike?: string
    /**
     * Include the given relationships.
     * @type ApiBlocksGetIncludeParameter
     * @memberof DefaultApiapiBlocksGet
     */
    include?: ApiBlocksGetIncludeParameter
    /**
     * Sort the results by the given field and direction.
     * @type ApiBlocksGetSortParameter
     * @memberof DefaultApiapiBlocksGet
     */
    sort?: ApiBlocksGetSortParameter
}

export interface DefaultApiApiEntitiesGetRequest {
    /**
     * Include the given fields in the response.
     * @type ApiEntitiesGetFieldsEntitiesParameter
     * @memberof DefaultApiapiEntitiesGet
     */
    fieldsEntities?: ApiEntitiesGetFieldsEntitiesParameter
    /**
     * Filter the results where the [module] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterModule?: string
    /**
     * Filter the results where the [module] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterModuleNeq?: string
    /**
     * Filter the results where the [module] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterModuleLike?: string
    /**
     * Filter the results where the [module] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterModuleIlike?: string
    /**
     * Filter the results where the [type] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterType?: string
    /**
     * Filter the results where the [type] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterTypeNeq?: string
    /**
     * Filter the results where the [type] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterTypeLike?: string
    /**
     * Filter the results where the [type] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterTypeIlike?: string
    /**
     * Filter the results where the [key] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterKey?: string
    /**
     * Filter the results where the [key] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterKeyNeq?: string
    /**
     * Filter the results where the [key] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterKeyLike?: string
    /**
     * Filter the results where the [key] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterKeyIlike?: string
    /**
     * Filter the results where the [value] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterValue?: string
    /**
     * Filter the results where the [value] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterValueNeq?: string
    /**
     * Filter the results where the [value] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterValueLike?: string
    /**
     * Filter the results where the [value] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiEntitiesGet
     */
    filterValueIlike?: string
    /**
     * Sort the results by the given field and direction.
     * @type ApiEntitiesGetSortParameter
     * @memberof DefaultApiapiEntitiesGet
     */
    sort?: ApiEntitiesGetSortParameter
}

export interface DefaultApiApiTransactionsGetRequest {
    /**
     * Include the given fields in the response.
     * @type ApiTransactionsGetFieldsAccountsParameter
     * @memberof DefaultApiapiTransactionsGet
     */
    fieldsAccounts?: ApiTransactionsGetFieldsAccountsParameter
    /**
     * Filter the results where the [hash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterHash?: string
    /**
     * Filter the results where the [hash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterHashNeq?: string
    /**
     * Filter the results where the [hash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterHashLike?: string
    /**
     * Filter the results where the [hash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterHashIlike?: string
    /**
     * Filter the results where the [sender] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterSender?: string
    /**
     * Filter the results where the [sender] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterSenderNeq?: string
    /**
     * Filter the results where the [sender] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterSenderLike?: string
    /**
     * Filter the results where the [sender] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterSenderIlike?: string
    /**
     * Filter the results where the [recipient] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterRecipient?: string
    /**
     * Filter the results where the [recipient] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterRecipientNeq?: string
    /**
     * Filter the results where the [recipient] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterRecipientLike?: string
    /**
     * Filter the results where the [recipient] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterRecipientIlike?: string
    /**
     * Filter the results where the [gas] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiTransactionsGet
     */
    filterGas?: number
    /**
     * Filter the results where the [nonce] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiTransactionsGet
     */
    filterNonce?: number
    /**
     * Filter the results where the [signature] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterSignature?: string
    /**
     * Filter the results where the [signature] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterSignatureNeq?: string
    /**
     * Filter the results where the [signature] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterSignatureLike?: string
    /**
     * Filter the results where the [signature] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterSignatureIlike?: string
    /**
     * Filter the results where the [version] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterVersion?: string
    /**
     * Filter the results where the [version] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterVersionNeq?: string
    /**
     * Filter the results where the [version] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterVersionLike?: string
    /**
     * Filter the results where the [version] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterVersionIlike?: string
    /**
     * Filter the results where the [message.handler] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageHandler?: string
    /**
     * Filter the results where the [message.handler] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageHandlerNeq?: string
    /**
     * Filter the results where the [message.handler] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageHandlerLike?: string
    /**
     * Filter the results where the [message.handler] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageHandlerIlike?: string
    /**
     * Filter the results where the [message.version] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageVersion?: string
    /**
     * Filter the results where the [message.version] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageVersionNeq?: string
    /**
     * Filter the results where the [message.version] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageVersionLike?: string
    /**
     * Filter the results where the [message.version] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageVersionIlike?: string
    /**
     * Filter the results where the [message.network] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageNetwork?: string
    /**
     * Filter the results where the [message.network] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageNetworkNeq?: string
    /**
     * Filter the results where the [message.network] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageNetworkLike?: string
    /**
     * Filter the results where the [message.network] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageNetworkIlike?: string
    /**
     * Filter the results where the [message.content] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageContent?: string
    /**
     * Filter the results where the [message.content] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageContentNeq?: string
    /**
     * Filter the results where the [message.content] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageContentLike?: string
    /**
     * Filter the results where the [message.content] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsGet
     */
    filterMessageContentIlike?: string
    /**
     * Include the given relationships.
     * @type ApiTransactionsGetIncludeParameter
     * @memberof DefaultApiapiTransactionsGet
     */
    include?: ApiTransactionsGetIncludeParameter
    /**
     * Sort the results by the given field and direction.
     * @type ApiTransactionsGetSortParameter
     * @memberof DefaultApiapiTransactionsGet
     */
    sort?: ApiTransactionsGetSortParameter
}

export interface DefaultApiApiTransactionsMetadataGetRequest {
    /**
     * Include the given fields in the response.
     * @type ApiTransactionsMetadataGetFieldsTransactionMetadataParameter
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    fieldsTransactionMetadata?: ApiTransactionsMetadataGetFieldsTransactionMetadataParameter
    /**
     * Filter the results where the [transaction_id] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    filterTransactionId?: number
    /**
     * Filter the results where the [key] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    filterKey?: string
    /**
     * Filter the results where the [key] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    filterKeyNeq?: string
    /**
     * Filter the results where the [key] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    filterKeyLike?: string
    /**
     * Filter the results where the [key] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    filterKeyIlike?: string
    /**
     * Filter the results where the [value] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    filterValue?: string
    /**
     * Filter the results where the [value] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    filterValueNeq?: string
    /**
     * Filter the results where the [value] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    filterValueLike?: string
    /**
     * Filter the results where the [value] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    filterValueIlike?: string
    /**
     * Include the given relationships.
     * @type ApiTransactionsMetadataGetIncludeParameter
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    include?: ApiTransactionsMetadataGetIncludeParameter
    /**
     * Sort the results by the given field and direction.
     * @type ApiTransactionsMetadataGetSortParameter
     * @memberof DefaultApiapiTransactionsMetadataGet
     */
    sort?: ApiTransactionsMetadataGetSortParameter
}

export interface DefaultApiApiTransactionsReceiptsGetRequest {
    /**
     * Include the given fields in the response.
     * @type ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    fieldsTransactionReceipts?: ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter
    /**
     * Filter the results where the [transaction_id] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    filterTransactionId?: number
    /**
     * Filter the results where the [block_hash] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    filterBlockHash?: string
    /**
     * Filter the results where the [block_hash] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    filterBlockHashNeq?: string
    /**
     * Filter the results where the [block_hash] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    filterBlockHashLike?: string
    /**
     * Filter the results where the [block_hash] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    filterBlockHashIlike?: string
    /**
     * Filter the results where the [block_number] field is equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    filterBlockNumber?: string
    /**
     * Filter the results where the [block_number] field is not equal to the given value.
     * @type string
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    filterBlockNumberNeq?: string
    /**
     * Filter the results where the [block_number] field is similar to the given case sensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    filterBlockNumberLike?: string
    /**
     * Filter the results where the [block_number] field is similar to the given case insensitive value.
     * @type string
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    filterBlockNumberIlike?: string
    /**
     * Include the given relationships.
     * @type ApiTransactionsMetadataGetIncludeParameter
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    include?: ApiTransactionsMetadataGetIncludeParameter
    /**
     * Sort the results by the given field and direction.
     * @type ApiTransactionsReceiptsGetSortParameter
     * @memberof DefaultApiapiTransactionsReceiptsGet
     */
    sort?: ApiTransactionsReceiptsGetSortParameter
}

export interface DefaultApiApiValidatorsUpdatesGetRequest {
    /**
     * Include the given fields in the response.
     * @type ApiValidatorsUpdatesGetFieldsBlockNumberParameter
     * @memberof DefaultApiapiValidatorsUpdatesGet
     */
    fieldsBlockNumber?: ApiValidatorsUpdatesGetFieldsBlockNumberParameter
    /**
     * Filter the results where the [block_number] field is equal to the given value.
     * @type number
     * @memberof DefaultApiapiValidatorsUpdatesGet
     */
    filterBlockNumber?: number
    /**
     * Include the given relationships.
     * @type ApiValidatorsUpdatesGetIncludeParameter
     * @memberof DefaultApiapiValidatorsUpdatesGet
     */
    include?: ApiValidatorsUpdatesGetIncludeParameter
    /**
     * Sort the results by the given field and direction.
     * @type ApiValidatorsUpdatesGetSortParameter
     * @memberof DefaultApiapiValidatorsUpdatesGet
     */
    sort?: ApiValidatorsUpdatesGetSortParameter
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List accounts
     * @param param the request object
     */
    public apiAccountsGet(param: DefaultApiApiAccountsGetRequest = {}, options?: Configuration): Promise<ApiAccountsGet200Response> {
        return this.api.apiAccountsGet(param.fieldsAccounts, param.filterAddress, param.filterAddressNeq, param.filterAddressLike, param.filterAddressIlike, param.filterPublicKey, param.filterPublicKeyNeq, param.filterPublicKeyLike, param.filterPublicKeyIlike, param.filterName, param.filterNameNeq, param.filterNameLike, param.filterNameIlike, param.filterNonce, param.filterValidatorAddress, param.filterValidatorAddressNeq, param.filterValidatorAddressLike, param.filterValidatorAddressIlike, param.filterValidatorPublicKey, param.filterValidatorPublicKeyNeq, param.filterValidatorPublicKeyLike, param.filterValidatorPublicKeyIlike, param.filterValidatorPower, param.filterValidatorPowerNeq, param.filterValidatorPowerLike, param.filterValidatorPowerIlike, param.include, param.sort,  options).toPromise();
    }

    /**
     * List account metadata
     * @param param the request object
     */
    public apiAccountsMetadataGet(param: DefaultApiApiAccountsMetadataGetRequest = {}, options?: Configuration): Promise<ApiAccountsMetadataGet200Response> {
        return this.api.apiAccountsMetadataGet(param.fieldsAccountsMetadata, param.filterAccountId, param.filterModule, param.filterModuleNeq, param.filterModuleLike, param.filterModuleIlike, param.filterKey, param.filterKeyNeq, param.filterKeyLike, param.filterKeyIlike, param.filterValue, param.filterValueNeq, param.filterValueLike, param.filterValueIlike, param.include, param.sort,  options).toPromise();
    }

    /**
     * List blocks
     * @param param the request object
     */
    public apiBlocksGet(param: DefaultApiApiBlocksGetRequest = {}, options?: Configuration): Promise<ApiBlocksGet200Response> {
        return this.api.apiBlocksGet(param.fieldsBlocks, param.filterHash, param.filterHashNeq, param.filterHashLike, param.filterHashIlike, param.filterHeight, param.filterHeaderVersionBlock, param.filterHeaderChainId, param.filterHeaderChainIdNeq, param.filterHeaderChainIdLike, param.filterHeaderChainIdIlike, param.filterHeaderHeight, param.filterHeaderTime, param.filterHeaderTimeNeq, param.filterHeaderTimeLike, param.filterHeaderTimeIlike, param.filterHeaderLastBlockIdHash, param.filterHeaderLastBlockIdHashNeq, param.filterHeaderLastBlockIdHashLike, param.filterHeaderLastBlockIdHashIlike, param.filterHeaderLastBlockIdPartSetHeaderTotal, param.filterHeaderLastBlockIdPartSetHeaderHash, param.filterHeaderLastBlockIdPartSetHeaderHashNeq, param.filterHeaderLastBlockIdPartSetHeaderHashLike, param.filterHeaderLastBlockIdPartSetHeaderHashIlike, param.filterHeaderLastCommitHash, param.filterHeaderLastCommitHashNeq, param.filterHeaderLastCommitHashLike, param.filterHeaderLastCommitHashIlike, param.filterHeaderDataHash, param.filterHeaderDataHashNeq, param.filterHeaderDataHashLike, param.filterHeaderDataHashIlike, param.filterHeaderValidatorsHash, param.filterHeaderValidatorsHashNeq, param.filterHeaderValidatorsHashLike, param.filterHeaderValidatorsHashIlike, param.filterHeaderNextValidatorsHash, param.filterHeaderNextValidatorsHashNeq, param.filterHeaderNextValidatorsHashLike, param.filterHeaderNextValidatorsHashIlike, param.filterHeaderConsensusHash, param.filterHeaderConsensusHashNeq, param.filterHeaderConsensusHashLike, param.filterHeaderConsensusHashIlike, param.filterHeaderAppHash, param.filterHeaderAppHashNeq, param.filterHeaderAppHashLike, param.filterHeaderAppHashIlike, param.filterHeaderLastResultsHash, param.filterHeaderLastResultsHashNeq, param.filterHeaderLastResultsHashLike, param.filterHeaderLastResultsHashIlike, param.filterHeaderEvidenceHash, param.filterHeaderEvidenceHashNeq, param.filterHeaderEvidenceHashLike, param.filterHeaderEvidenceHashIlike, param.filterHeaderProposerAddress, param.filterHeaderProposerAddressNeq, param.filterHeaderProposerAddressLike, param.filterHeaderProposerAddressIlike, param.include, param.sort,  options).toPromise();
    }

    /**
     * List entities
     * @param param the request object
     */
    public apiEntitiesGet(param: DefaultApiApiEntitiesGetRequest = {}, options?: Configuration): Promise<ApiEntitiesGet200Response> {
        return this.api.apiEntitiesGet(param.fieldsEntities, param.filterModule, param.filterModuleNeq, param.filterModuleLike, param.filterModuleIlike, param.filterType, param.filterTypeNeq, param.filterTypeLike, param.filterTypeIlike, param.filterKey, param.filterKeyNeq, param.filterKeyLike, param.filterKeyIlike, param.filterValue, param.filterValueNeq, param.filterValueLike, param.filterValueIlike, param.sort,  options).toPromise();
    }

    /**
     * List transactions
     * @param param the request object
     */
    public apiTransactionsGet(param: DefaultApiApiTransactionsGetRequest = {}, options?: Configuration): Promise<ApiTransactionsGet200Response> {
        return this.api.apiTransactionsGet(param.fieldsAccounts, param.filterHash, param.filterHashNeq, param.filterHashLike, param.filterHashIlike, param.filterSender, param.filterSenderNeq, param.filterSenderLike, param.filterSenderIlike, param.filterRecipient, param.filterRecipientNeq, param.filterRecipientLike, param.filterRecipientIlike, param.filterGas, param.filterNonce, param.filterSignature, param.filterSignatureNeq, param.filterSignatureLike, param.filterSignatureIlike, param.filterVersion, param.filterVersionNeq, param.filterVersionLike, param.filterVersionIlike, param.filterMessageHandler, param.filterMessageHandlerNeq, param.filterMessageHandlerLike, param.filterMessageHandlerIlike, param.filterMessageVersion, param.filterMessageVersionNeq, param.filterMessageVersionLike, param.filterMessageVersionIlike, param.filterMessageNetwork, param.filterMessageNetworkNeq, param.filterMessageNetworkLike, param.filterMessageNetworkIlike, param.filterMessageContent, param.filterMessageContentNeq, param.filterMessageContentLike, param.filterMessageContentIlike, param.include, param.sort,  options).toPromise();
    }

    /**
     * List transaction metadata
     * @param param the request object
     */
    public apiTransactionsMetadataGet(param: DefaultApiApiTransactionsMetadataGetRequest = {}, options?: Configuration): Promise<ApiTransactionsMetadataGet200Response> {
        return this.api.apiTransactionsMetadataGet(param.fieldsTransactionMetadata, param.filterTransactionId, param.filterKey, param.filterKeyNeq, param.filterKeyLike, param.filterKeyIlike, param.filterValue, param.filterValueNeq, param.filterValueLike, param.filterValueIlike, param.include, param.sort,  options).toPromise();
    }

    /**
     * List transaction receipts
     * @param param the request object
     */
    public apiTransactionsReceiptsGet(param: DefaultApiApiTransactionsReceiptsGetRequest = {}, options?: Configuration): Promise<ApiTransactionsReceiptsGet200Response> {
        return this.api.apiTransactionsReceiptsGet(param.fieldsTransactionReceipts, param.filterTransactionId, param.filterBlockHash, param.filterBlockHashNeq, param.filterBlockHashLike, param.filterBlockHashIlike, param.filterBlockNumber, param.filterBlockNumberNeq, param.filterBlockNumberLike, param.filterBlockNumberIlike, param.include, param.sort,  options).toPromise();
    }

    /**
     * List validator updates
     * @param param the request object
     */
    public apiValidatorsUpdatesGet(param: DefaultApiApiValidatorsUpdatesGetRequest = {}, options?: Configuration): Promise<ApiValidatorsUpdatesGet200Response> {
        return this.api.apiValidatorsUpdatesGet(param.fieldsBlockNumber, param.filterBlockNumber, param.include, param.sort,  options).toPromise();
    }

}
