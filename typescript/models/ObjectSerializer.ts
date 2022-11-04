export * from '../models/Account';
export * from '../models/AccountMetadata';
export * from '../models/ApiAccountsGet200Response';
export * from '../models/ApiAccountsGetFieldsAccountsParameter';
export * from '../models/ApiAccountsGetIncludeParameter';
export * from '../models/ApiAccountsGetSortParameter';
export * from '../models/ApiAccountsMetadataGet200Response';
export * from '../models/ApiAccountsMetadataGetFieldsAccountsMetadataParameter';
export * from '../models/ApiAccountsMetadataGetIncludeParameter';
export * from '../models/ApiAccountsMetadataGetSortParameter';
export * from '../models/ApiBlocksGet200Response';
export * from '../models/ApiBlocksGetFieldsBlocksParameter';
export * from '../models/ApiBlocksGetIncludeParameter';
export * from '../models/ApiBlocksGetSortParameter';
export * from '../models/ApiEntitiesGet200Response';
export * from '../models/ApiEntitiesGetFieldsEntitiesParameter';
export * from '../models/ApiEntitiesGetSortParameter';
export * from '../models/ApiTransactionsGet200Response';
export * from '../models/ApiTransactionsGetFieldsAccountsParameter';
export * from '../models/ApiTransactionsGetIncludeParameter';
export * from '../models/ApiTransactionsGetSortParameter';
export * from '../models/ApiTransactionsMetadataGet200Response';
export * from '../models/ApiTransactionsMetadataGetFieldsTransactionMetadataParameter';
export * from '../models/ApiTransactionsMetadataGetIncludeParameter';
export * from '../models/ApiTransactionsMetadataGetSortParameter';
export * from '../models/ApiTransactionsReceiptsGet200Response';
export * from '../models/ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter';
export * from '../models/ApiTransactionsReceiptsGetSortParameter';
export * from '../models/ApiValidatorsUpdatesGet200Response';
export * from '../models/ApiValidatorsUpdatesGetFieldsBlockNumberParameter';
export * from '../models/ApiValidatorsUpdatesGetIncludeParameter';
export * from '../models/ApiValidatorsUpdatesGetSortParameter';
export * from '../models/Block';
export * from '../models/Entity';
export * from '../models/Transaction';
export * from '../models/TransactionMetadata';
export * from '../models/TransactionReceipt';

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

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
]);

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountMetadata": AccountMetadata,
    "ApiAccountsGet200Response": ApiAccountsGet200Response,
    "ApiAccountsGetFieldsAccountsParameter": ApiAccountsGetFieldsAccountsParameter,
    "ApiAccountsGetIncludeParameter": ApiAccountsGetIncludeParameter,
    "ApiAccountsGetSortParameter": ApiAccountsGetSortParameter,
    "ApiAccountsMetadataGet200Response": ApiAccountsMetadataGet200Response,
    "ApiAccountsMetadataGetFieldsAccountsMetadataParameter": ApiAccountsMetadataGetFieldsAccountsMetadataParameter,
    "ApiAccountsMetadataGetIncludeParameter": ApiAccountsMetadataGetIncludeParameter,
    "ApiAccountsMetadataGetSortParameter": ApiAccountsMetadataGetSortParameter,
    "ApiBlocksGet200Response": ApiBlocksGet200Response,
    "ApiBlocksGetFieldsBlocksParameter": ApiBlocksGetFieldsBlocksParameter,
    "ApiBlocksGetIncludeParameter": ApiBlocksGetIncludeParameter,
    "ApiBlocksGetSortParameter": ApiBlocksGetSortParameter,
    "ApiEntitiesGet200Response": ApiEntitiesGet200Response,
    "ApiEntitiesGetFieldsEntitiesParameter": ApiEntitiesGetFieldsEntitiesParameter,
    "ApiEntitiesGetSortParameter": ApiEntitiesGetSortParameter,
    "ApiTransactionsGet200Response": ApiTransactionsGet200Response,
    "ApiTransactionsGetFieldsAccountsParameter": ApiTransactionsGetFieldsAccountsParameter,
    "ApiTransactionsGetIncludeParameter": ApiTransactionsGetIncludeParameter,
    "ApiTransactionsGetSortParameter": ApiTransactionsGetSortParameter,
    "ApiTransactionsMetadataGet200Response": ApiTransactionsMetadataGet200Response,
    "ApiTransactionsMetadataGetFieldsTransactionMetadataParameter": ApiTransactionsMetadataGetFieldsTransactionMetadataParameter,
    "ApiTransactionsMetadataGetIncludeParameter": ApiTransactionsMetadataGetIncludeParameter,
    "ApiTransactionsMetadataGetSortParameter": ApiTransactionsMetadataGetSortParameter,
    "ApiTransactionsReceiptsGet200Response": ApiTransactionsReceiptsGet200Response,
    "ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter": ApiTransactionsReceiptsGetFieldsTransactionReceiptsParameter,
    "ApiTransactionsReceiptsGetSortParameter": ApiTransactionsReceiptsGetSortParameter,
    "ApiValidatorsUpdatesGet200Response": ApiValidatorsUpdatesGet200Response,
    "ApiValidatorsUpdatesGetFieldsBlockNumberParameter": ApiValidatorsUpdatesGetFieldsBlockNumberParameter,
    "ApiValidatorsUpdatesGetIncludeParameter": ApiValidatorsUpdatesGetIncludeParameter,
    "ApiValidatorsUpdatesGetSortParameter": ApiValidatorsUpdatesGetSortParameter,
    "Block": Block,
    "Entity": Entity,
    "Transaction": Transaction,
    "TransactionMetadata": TransactionMetadata,
    "TransactionReceipt": TransactionReceipt,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
