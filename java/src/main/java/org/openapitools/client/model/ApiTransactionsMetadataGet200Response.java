/*
 * Railway
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * ApiTransactionsMetadataGet200Response
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-10-24T10:47:59.076628+03:00[Europe/Helsinki]")
public class ApiTransactionsMetadataGet200Response {
  public static final String SERIALIZED_NAME_DATA = "data";
  @SerializedName(SERIALIZED_NAME_DATA)
  private List data = null;

  public static final String SERIALIZED_NAME_LINKS = "links";
  @SerializedName(SERIALIZED_NAME_LINKS)
  private Object links;

  public static final String SERIALIZED_NAME_META = "meta";
  @SerializedName(SERIALIZED_NAME_META)
  private Object meta;

  public ApiTransactionsMetadataGet200Response() {
  }

  public ApiTransactionsMetadataGet200Response data(List data) {
    
    this.data = data;
    return this;
  }

   /**
   * Get data
   * @return data
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[{\"id\":1,\"transaction_id\":1,\"module\":\"@bearmint/bep-126\",\"key\":\"id\",\"value\":{\"id\":\"47be426fe6373cf104636a38e57f82624cb44b6389e2e954887c4a6be9921535\"},\"created_at\":\"2022-10-09T02:12:30.000000Z\",\"updated_at\":\"2022-10-09T02:12:30.000000Z\"},{\"id\":2,\"transaction_id\":1,\"module\":\"@bearmint/bep-126\",\"key\":\"collection\",\"value\":{\"id\":\"47be426fe6373cf104636a38e57f82624cb44b6389e2e954887c4a6be9921535\",\"name\":\"41848b4314b2-43bf-819d-41ae21a4b763\",\"symbol\":\"d6b96b8b9677-4669-a0aa-8b74b545d611\",\"uriPrefix\":\"https://bearmint.com/\",\"uriSuffix\":\".json\",\"initialOwner\":\"bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl\",\"currentOwner\":\"bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl\",\"accessControlList\":{\"bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl\":{\"permissions\":[0,1,2]}},\"policies\":[{\"name\":\"@bearmint/bep-145\"},{\"type\":1,\"name\":\"@bearmint/bep-145\"},{\"type\":2,\"name\":\"@bearmint/bep-145\"}]},\"created_at\":\"2022-10-09T02:12:30.000000Z\",\"updated_at\":\"2022-10-09T02:12:30.000000Z\"},{\"id\":3,\"transaction_id\":2,\"module\":\"@bearmint/bep-126\",\"key\":\"collection\",\"value\":{\"id\":\"47be426fe6373cf104636a38e57f82624cb44b6389e2e954887c4a6be9921535\",\"name\":\"41848b4314b2-43bf-819d-41ae21a4b763\",\"symbol\":\"d6b96b8b9677-4669-a0aa-8b74b545d611\",\"uriPrefix\":\"https://bearmint.com/\",\"uriSuffix\":\".json\",\"tokens\":[\"befaffab63b43b4689f2273b32c969abcb9b03af7902d523181e2be7b5b521f4\"],\"initialOwner\":\"bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl\",\"currentOwner\":\"bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl\",\"accessControlList\":{\"bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl\":{\"permissions\":[0,1,2]}},\"policies\":[{\"name\":\"@bearmint/bep-145\"},{\"type\":1,\"name\":\"@bearmint/bep-145\"},{\"type\":2,\"name\":\"@bearmint/bep-145\"}]},\"created_at\":\"2022-10-09T02:12:30.000000Z\",\"updated_at\":\"2022-10-09T02:12:30.000000Z\"},{\"id\":4,\"transaction_id\":2,\"module\":\"@bearmint/bep-131\",\"key\":\"id\",\"value\":{\"id\":1},\"created_at\":\"2022-10-09T02:12:30.000000Z\",\"updated_at\":\"2022-10-09T02:12:30.000000Z\"},{\"id\":5,\"transaction_id\":2,\"module\":\"@bearmint/bep-131\",\"key\":\"token\",\"value\":{\"id\":1,\"hash\":\"befaffab63b43b4689f2273b32c969abcb9b03af7902d523181e2be7b5b521f4\",\"collection\":\"47be426fe6373cf104636a38e57f82624cb44b6389e2e954887c4a6be9921535\",\"owner\":\"bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl\"},\"created_at\":\"2022-10-09T02:12:30.000000Z\",\"updated_at\":\"2022-10-09T02:12:30.000000Z\"},{\"id\":6,\"transaction_id\":2,\"module\":\"@bearmint/bep-131\",\"key\":\"hash\",\"value\":{\"hash\":\"befaffab63b43b4689f2273b32c969abcb9b03af7902d523181e2be7b5b521f4\"},\"created_at\":\"2022-10-09T02:12:30.000000Z\",\"updated_at\":\"2022-10-09T02:12:30.000000Z\"}]", value = "")

  public List getData() {
    return data;
  }


  public void setData(List data) {
    this.data = data;
  }


  public ApiTransactionsMetadataGet200Response links(Object links) {
    
    this.links = links;
    return this;
  }

   /**
   * Get links
   * @return links
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "{\"first\":\"/api/transactions/metadata?page%5Bcursor%5D=eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ\",\"last\":\"/api/transactions/metadata?page%5Bcursor%5D=eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9\",\"prev\":\"/api/transactions/metadata?page%5Bcursor%5D=eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ\",\"next\":\"/api/transactions/metadata?page%5Bcursor%5D=eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9\"}", value = "")

  public Object getLinks() {
    return links;
  }


  public void setLinks(Object links) {
    this.links = links;
  }


  public ApiTransactionsMetadataGet200Response meta(Object meta) {
    
    this.meta = meta;
    return this;
  }

   /**
   * Get meta
   * @return meta
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "{\"path\":\"/api/transactions/metadata\",\"per_page\":100,\"next_cursor\":\"eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9\",\"prev_cursor\":\"eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ\"}", value = "")

  public Object getMeta() {
    return meta;
  }


  public void setMeta(Object meta) {
    this.meta = meta;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApiTransactionsMetadataGet200Response apiTransactionsMetadataGet200Response = (ApiTransactionsMetadataGet200Response) o;
    return Objects.equals(this.data, apiTransactionsMetadataGet200Response.data) &&
        Objects.equals(this.links, apiTransactionsMetadataGet200Response.links) &&
        Objects.equals(this.meta, apiTransactionsMetadataGet200Response.meta);
  }

  @Override
  public int hashCode() {
    return Objects.hash(data, links, meta);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApiTransactionsMetadataGet200Response {\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("    links: ").append(toIndentedString(links)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("data");
    openapiFields.add("links");
    openapiFields.add("meta");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to ApiTransactionsMetadataGet200Response
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (ApiTransactionsMetadataGet200Response.openapiRequiredFields.isEmpty()) {
          return;
        } else { // has required fields
          throw new IllegalArgumentException(String.format("The required field(s) %s in ApiTransactionsMetadataGet200Response is not found in the empty JSON string", ApiTransactionsMetadataGet200Response.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!ApiTransactionsMetadataGet200Response.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `ApiTransactionsMetadataGet200Response` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!ApiTransactionsMetadataGet200Response.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'ApiTransactionsMetadataGet200Response' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<ApiTransactionsMetadataGet200Response> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(ApiTransactionsMetadataGet200Response.class));

       return (TypeAdapter<T>) new TypeAdapter<ApiTransactionsMetadataGet200Response>() {
           @Override
           public void write(JsonWriter out, ApiTransactionsMetadataGet200Response value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public ApiTransactionsMetadataGet200Response read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of ApiTransactionsMetadataGet200Response given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of ApiTransactionsMetadataGet200Response
  * @throws IOException if the JSON string is invalid with respect to ApiTransactionsMetadataGet200Response
  */
  public static ApiTransactionsMetadataGet200Response fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, ApiTransactionsMetadataGet200Response.class);
  }

 /**
  * Convert an instance of ApiTransactionsMetadataGet200Response to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

