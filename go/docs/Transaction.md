# Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | The internal id of the object. | [optional] 
**BlockId** | Pointer to **int32** | The id of the block associated with the object. | [optional] 
**Hash** | Pointer to **string** | The unique hash of the object. | [optional] 
**Sender** | Pointer to **string** | The public key of the recipient associated with the object. | [optional] 
**Recipient** | Pointer to **string** | The address of the recipient associated with the object. | [optional] 
**Gas** | Pointer to **int32** | The amount of gas of the object. | [optional] 
**Nonce** | Pointer to **int32** | The nonce of the account associated with the object. | [optional] 
**Signature** | Pointer to **string** | The signature of the object. | [optional] 
**Version** | Pointer to **string** | The version of the object. | [optional] 
**Message** | Pointer to [**Array**](array.md) | The message of the object. | [optional] 
**MessageDeserialized** | Pointer to [**Array**](array.md) | The deserialized message of the object. | [optional] 
**CreatedAt** | Pointer to **time.Time** | The creation date of the object. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | The updating date of the object. | [optional] 

## Methods

### NewTransaction

`func NewTransaction() *Transaction`

NewTransaction instantiates a new Transaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionWithDefaults

`func NewTransactionWithDefaults() *Transaction`

NewTransactionWithDefaults instantiates a new Transaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Transaction) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Transaction) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Transaction) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *Transaction) HasId() bool`

HasId returns a boolean if a field has been set.

### GetBlockId

`func (o *Transaction) GetBlockId() int32`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *Transaction) GetBlockIdOk() (*int32, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *Transaction) SetBlockId(v int32)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *Transaction) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetHash

`func (o *Transaction) GetHash() string`

GetHash returns the Hash field if non-nil, zero value otherwise.

### GetHashOk

`func (o *Transaction) GetHashOk() (*string, bool)`

GetHashOk returns a tuple with the Hash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHash

`func (o *Transaction) SetHash(v string)`

SetHash sets Hash field to given value.

### HasHash

`func (o *Transaction) HasHash() bool`

HasHash returns a boolean if a field has been set.

### GetSender

`func (o *Transaction) GetSender() string`

GetSender returns the Sender field if non-nil, zero value otherwise.

### GetSenderOk

`func (o *Transaction) GetSenderOk() (*string, bool)`

GetSenderOk returns a tuple with the Sender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSender

`func (o *Transaction) SetSender(v string)`

SetSender sets Sender field to given value.

### HasSender

`func (o *Transaction) HasSender() bool`

HasSender returns a boolean if a field has been set.

### GetRecipient

`func (o *Transaction) GetRecipient() string`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *Transaction) GetRecipientOk() (*string, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *Transaction) SetRecipient(v string)`

SetRecipient sets Recipient field to given value.

### HasRecipient

`func (o *Transaction) HasRecipient() bool`

HasRecipient returns a boolean if a field has been set.

### GetGas

`func (o *Transaction) GetGas() int32`

GetGas returns the Gas field if non-nil, zero value otherwise.

### GetGasOk

`func (o *Transaction) GetGasOk() (*int32, bool)`

GetGasOk returns a tuple with the Gas field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGas

`func (o *Transaction) SetGas(v int32)`

SetGas sets Gas field to given value.

### HasGas

`func (o *Transaction) HasGas() bool`

HasGas returns a boolean if a field has been set.

### GetNonce

`func (o *Transaction) GetNonce() int32`

GetNonce returns the Nonce field if non-nil, zero value otherwise.

### GetNonceOk

`func (o *Transaction) GetNonceOk() (*int32, bool)`

GetNonceOk returns a tuple with the Nonce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonce

`func (o *Transaction) SetNonce(v int32)`

SetNonce sets Nonce field to given value.

### HasNonce

`func (o *Transaction) HasNonce() bool`

HasNonce returns a boolean if a field has been set.

### GetSignature

`func (o *Transaction) GetSignature() string`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *Transaction) GetSignatureOk() (*string, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *Transaction) SetSignature(v string)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *Transaction) HasSignature() bool`

HasSignature returns a boolean if a field has been set.

### GetVersion

`func (o *Transaction) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Transaction) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Transaction) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *Transaction) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetMessage

`func (o *Transaction) GetMessage() Array`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Transaction) GetMessageOk() (*Array, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Transaction) SetMessage(v Array)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Transaction) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMessageDeserialized

`func (o *Transaction) GetMessageDeserialized() Array`

GetMessageDeserialized returns the MessageDeserialized field if non-nil, zero value otherwise.

### GetMessageDeserializedOk

`func (o *Transaction) GetMessageDeserializedOk() (*Array, bool)`

GetMessageDeserializedOk returns a tuple with the MessageDeserialized field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageDeserialized

`func (o *Transaction) SetMessageDeserialized(v Array)`

SetMessageDeserialized sets MessageDeserialized field to given value.

### HasMessageDeserialized

`func (o *Transaction) HasMessageDeserialized() bool`

HasMessageDeserialized returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Transaction) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Transaction) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Transaction) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Transaction) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Transaction) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Transaction) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Transaction) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Transaction) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


