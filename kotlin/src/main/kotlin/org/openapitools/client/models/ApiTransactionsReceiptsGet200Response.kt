/**
 * Railway
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models


import com.squareup.moshi.Json

/**
 * 
 *
 * @param `data` 
 * @param links 
 * @param meta 
 */

data class ApiTransactionsReceiptsGet200Response (

    @Json(name = "data")
    val `data`: kotlin.collections.List? = null,

    @Json(name = "links")
    val links: kotlin.Any? = null,

    @Json(name = "meta")
    val meta: kotlin.Any? = null

)

