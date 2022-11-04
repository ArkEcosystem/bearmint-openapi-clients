# Account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | The internal id of the object. | [optional] 
**Address** | Pointer to **string** | The id of the object. | [optional] 
**PublicKey** | Pointer to **string** | The id of the object. | [optional] 
**Name** | Pointer to **string** | The id of the object. | [optional] 
**Nonce** | Pointer to **int32** | The id of the object. | [optional] 
**Balances** | Pointer to **string** | The id of the object. | [optional] 
**LockedBalances** | Pointer to **string** | The id of the object. | [optional] 
**Stakes** | Pointer to **string** | The id of the object. | [optional] 
**Validator** | Pointer to **string** | The id of the object. | [optional] 
**Metadata** | Pointer to **string** | The id of the object. | [optional] 
**CreatedAt** | Pointer to **time.Time** | The creation date of the object. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | The updating date of the object. | [optional] 

## Methods

### NewAccount

`func NewAccount() *Account`

NewAccount instantiates a new Account object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountWithDefaults

`func NewAccountWithDefaults() *Account`

NewAccountWithDefaults instantiates a new Account object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Account) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Account) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Account) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *Account) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAddress

`func (o *Account) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *Account) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *Account) SetAddress(v string)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *Account) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetPublicKey

`func (o *Account) GetPublicKey() string`

GetPublicKey returns the PublicKey field if non-nil, zero value otherwise.

### GetPublicKeyOk

`func (o *Account) GetPublicKeyOk() (*string, bool)`

GetPublicKeyOk returns a tuple with the PublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKey

`func (o *Account) SetPublicKey(v string)`

SetPublicKey sets PublicKey field to given value.

### HasPublicKey

`func (o *Account) HasPublicKey() bool`

HasPublicKey returns a boolean if a field has been set.

### GetName

`func (o *Account) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Account) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Account) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Account) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNonce

`func (o *Account) GetNonce() int32`

GetNonce returns the Nonce field if non-nil, zero value otherwise.

### GetNonceOk

`func (o *Account) GetNonceOk() (*int32, bool)`

GetNonceOk returns a tuple with the Nonce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonce

`func (o *Account) SetNonce(v int32)`

SetNonce sets Nonce field to given value.

### HasNonce

`func (o *Account) HasNonce() bool`

HasNonce returns a boolean if a field has been set.

### GetBalances

`func (o *Account) GetBalances() string`

GetBalances returns the Balances field if non-nil, zero value otherwise.

### GetBalancesOk

`func (o *Account) GetBalancesOk() (*string, bool)`

GetBalancesOk returns a tuple with the Balances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalances

`func (o *Account) SetBalances(v string)`

SetBalances sets Balances field to given value.

### HasBalances

`func (o *Account) HasBalances() bool`

HasBalances returns a boolean if a field has been set.

### GetLockedBalances

`func (o *Account) GetLockedBalances() string`

GetLockedBalances returns the LockedBalances field if non-nil, zero value otherwise.

### GetLockedBalancesOk

`func (o *Account) GetLockedBalancesOk() (*string, bool)`

GetLockedBalancesOk returns a tuple with the LockedBalances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockedBalances

`func (o *Account) SetLockedBalances(v string)`

SetLockedBalances sets LockedBalances field to given value.

### HasLockedBalances

`func (o *Account) HasLockedBalances() bool`

HasLockedBalances returns a boolean if a field has been set.

### GetStakes

`func (o *Account) GetStakes() string`

GetStakes returns the Stakes field if non-nil, zero value otherwise.

### GetStakesOk

`func (o *Account) GetStakesOk() (*string, bool)`

GetStakesOk returns a tuple with the Stakes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStakes

`func (o *Account) SetStakes(v string)`

SetStakes sets Stakes field to given value.

### HasStakes

`func (o *Account) HasStakes() bool`

HasStakes returns a boolean if a field has been set.

### GetValidator

`func (o *Account) GetValidator() string`

GetValidator returns the Validator field if non-nil, zero value otherwise.

### GetValidatorOk

`func (o *Account) GetValidatorOk() (*string, bool)`

GetValidatorOk returns a tuple with the Validator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidator

`func (o *Account) SetValidator(v string)`

SetValidator sets Validator field to given value.

### HasValidator

`func (o *Account) HasValidator() bool`

HasValidator returns a boolean if a field has been set.

### GetMetadata

`func (o *Account) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Account) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Account) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Account) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Account) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Account) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Account) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Account) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Account) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Account) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Account) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Account) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


