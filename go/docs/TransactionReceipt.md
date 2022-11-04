# TransactionReceipt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | The id of the object. | [optional] 
**TransactionId** | Pointer to **int32** | The id of the object. | [optional] 
**BlockHash** | Pointer to **string** | The id of the object. | [optional] 
**BlockNumber** | Pointer to **int32** | The id of the object. | [optional] 
**Logs** | Pointer to [**Array**](array.md) | The id of the object. | [optional] 
**CreatedAt** | Pointer to **time.Time** | The creation date of the object. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | The updating date of the object. | [optional] 

## Methods

### NewTransactionReceipt

`func NewTransactionReceipt() *TransactionReceipt`

NewTransactionReceipt instantiates a new TransactionReceipt object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionReceiptWithDefaults

`func NewTransactionReceiptWithDefaults() *TransactionReceipt`

NewTransactionReceiptWithDefaults instantiates a new TransactionReceipt object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TransactionReceipt) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransactionReceipt) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransactionReceipt) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *TransactionReceipt) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTransactionId

`func (o *TransactionReceipt) GetTransactionId() int32`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *TransactionReceipt) GetTransactionIdOk() (*int32, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *TransactionReceipt) SetTransactionId(v int32)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *TransactionReceipt) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetBlockHash

`func (o *TransactionReceipt) GetBlockHash() string`

GetBlockHash returns the BlockHash field if non-nil, zero value otherwise.

### GetBlockHashOk

`func (o *TransactionReceipt) GetBlockHashOk() (*string, bool)`

GetBlockHashOk returns a tuple with the BlockHash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockHash

`func (o *TransactionReceipt) SetBlockHash(v string)`

SetBlockHash sets BlockHash field to given value.

### HasBlockHash

`func (o *TransactionReceipt) HasBlockHash() bool`

HasBlockHash returns a boolean if a field has been set.

### GetBlockNumber

`func (o *TransactionReceipt) GetBlockNumber() int32`

GetBlockNumber returns the BlockNumber field if non-nil, zero value otherwise.

### GetBlockNumberOk

`func (o *TransactionReceipt) GetBlockNumberOk() (*int32, bool)`

GetBlockNumberOk returns a tuple with the BlockNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockNumber

`func (o *TransactionReceipt) SetBlockNumber(v int32)`

SetBlockNumber sets BlockNumber field to given value.

### HasBlockNumber

`func (o *TransactionReceipt) HasBlockNumber() bool`

HasBlockNumber returns a boolean if a field has been set.

### GetLogs

`func (o *TransactionReceipt) GetLogs() Array`

GetLogs returns the Logs field if non-nil, zero value otherwise.

### GetLogsOk

`func (o *TransactionReceipt) GetLogsOk() (*Array, bool)`

GetLogsOk returns a tuple with the Logs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogs

`func (o *TransactionReceipt) SetLogs(v Array)`

SetLogs sets Logs field to given value.

### HasLogs

`func (o *TransactionReceipt) HasLogs() bool`

HasLogs returns a boolean if a field has been set.

### GetCreatedAt

`func (o *TransactionReceipt) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransactionReceipt) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransactionReceipt) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *TransactionReceipt) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *TransactionReceipt) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransactionReceipt) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransactionReceipt) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *TransactionReceipt) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


