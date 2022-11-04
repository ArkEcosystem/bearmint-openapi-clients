# TransactionMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | The id of the object. | [optional] 
**TransactionId** | Pointer to **int32** | The id of the object. | [optional] 
**Module** | Pointer to **string** | The id of the object. | [optional] 
**Key** | Pointer to **string** | The id of the object. | [optional] 
**Value** | Pointer to **string** | The id of the object. | [optional] 
**CreatedAt** | Pointer to **time.Time** | The creation date of the object. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | The updating date of the object. | [optional] 

## Methods

### NewTransactionMetadata

`func NewTransactionMetadata() *TransactionMetadata`

NewTransactionMetadata instantiates a new TransactionMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionMetadataWithDefaults

`func NewTransactionMetadataWithDefaults() *TransactionMetadata`

NewTransactionMetadataWithDefaults instantiates a new TransactionMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TransactionMetadata) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransactionMetadata) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransactionMetadata) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *TransactionMetadata) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTransactionId

`func (o *TransactionMetadata) GetTransactionId() int32`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *TransactionMetadata) GetTransactionIdOk() (*int32, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *TransactionMetadata) SetTransactionId(v int32)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *TransactionMetadata) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetModule

`func (o *TransactionMetadata) GetModule() string`

GetModule returns the Module field if non-nil, zero value otherwise.

### GetModuleOk

`func (o *TransactionMetadata) GetModuleOk() (*string, bool)`

GetModuleOk returns a tuple with the Module field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModule

`func (o *TransactionMetadata) SetModule(v string)`

SetModule sets Module field to given value.

### HasModule

`func (o *TransactionMetadata) HasModule() bool`

HasModule returns a boolean if a field has been set.

### GetKey

`func (o *TransactionMetadata) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TransactionMetadata) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TransactionMetadata) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TransactionMetadata) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValue

`func (o *TransactionMetadata) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *TransactionMetadata) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *TransactionMetadata) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *TransactionMetadata) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetCreatedAt

`func (o *TransactionMetadata) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransactionMetadata) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransactionMetadata) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *TransactionMetadata) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *TransactionMetadata) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransactionMetadata) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransactionMetadata) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *TransactionMetadata) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


