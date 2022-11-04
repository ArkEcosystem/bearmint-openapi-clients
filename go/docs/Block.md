# Block

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | The id of the object. | [optional] 
**Hash** | Pointer to **string** | The hash of the object. | [optional] 
**Height** | Pointer to **int32** | The height of the object. | [optional] 
**Header** | Pointer to [**Array**](array.md) | The id of the object. | [optional] 
**ByzantineValidators** | Pointer to [**Array**](array.md) | The id of the object. | [optional] 
**LastCommitInfo** | Pointer to [**Array**](array.md) | The id of the object. | [optional] 
**CreatedAt** | Pointer to **time.Time** | The creation date of the object. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | The updating date of the object. | [optional] 

## Methods

### NewBlock

`func NewBlock() *Block`

NewBlock instantiates a new Block object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockWithDefaults

`func NewBlockWithDefaults() *Block`

NewBlockWithDefaults instantiates a new Block object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Block) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Block) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Block) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *Block) HasId() bool`

HasId returns a boolean if a field has been set.

### GetHash

`func (o *Block) GetHash() string`

GetHash returns the Hash field if non-nil, zero value otherwise.

### GetHashOk

`func (o *Block) GetHashOk() (*string, bool)`

GetHashOk returns a tuple with the Hash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHash

`func (o *Block) SetHash(v string)`

SetHash sets Hash field to given value.

### HasHash

`func (o *Block) HasHash() bool`

HasHash returns a boolean if a field has been set.

### GetHeight

`func (o *Block) GetHeight() int32`

GetHeight returns the Height field if non-nil, zero value otherwise.

### GetHeightOk

`func (o *Block) GetHeightOk() (*int32, bool)`

GetHeightOk returns a tuple with the Height field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeight

`func (o *Block) SetHeight(v int32)`

SetHeight sets Height field to given value.

### HasHeight

`func (o *Block) HasHeight() bool`

HasHeight returns a boolean if a field has been set.

### GetHeader

`func (o *Block) GetHeader() Array`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *Block) GetHeaderOk() (*Array, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *Block) SetHeader(v Array)`

SetHeader sets Header field to given value.

### HasHeader

`func (o *Block) HasHeader() bool`

HasHeader returns a boolean if a field has been set.

### GetByzantineValidators

`func (o *Block) GetByzantineValidators() Array`

GetByzantineValidators returns the ByzantineValidators field if non-nil, zero value otherwise.

### GetByzantineValidatorsOk

`func (o *Block) GetByzantineValidatorsOk() (*Array, bool)`

GetByzantineValidatorsOk returns a tuple with the ByzantineValidators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetByzantineValidators

`func (o *Block) SetByzantineValidators(v Array)`

SetByzantineValidators sets ByzantineValidators field to given value.

### HasByzantineValidators

`func (o *Block) HasByzantineValidators() bool`

HasByzantineValidators returns a boolean if a field has been set.

### GetLastCommitInfo

`func (o *Block) GetLastCommitInfo() Array`

GetLastCommitInfo returns the LastCommitInfo field if non-nil, zero value otherwise.

### GetLastCommitInfoOk

`func (o *Block) GetLastCommitInfoOk() (*Array, bool)`

GetLastCommitInfoOk returns a tuple with the LastCommitInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastCommitInfo

`func (o *Block) SetLastCommitInfo(v Array)`

SetLastCommitInfo sets LastCommitInfo field to given value.

### HasLastCommitInfo

`func (o *Block) HasLastCommitInfo() bool`

HasLastCommitInfo returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Block) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Block) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Block) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Block) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Block) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Block) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Block) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Block) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


