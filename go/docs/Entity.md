# Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | The id of the object. | [optional] 
**Module** | Pointer to **string** | The id of the object. | [optional] 
**Type** | Pointer to **string** | The id of the object. | [optional] 
**Key** | Pointer to **string** | The id of the object. | [optional] 
**Value** | Pointer to [**Array**](array.md) | The id of the object. | [optional] 
**CreatedAt** | Pointer to **time.Time** | The creation date of the object. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | The updating date of the object. | [optional] 

## Methods

### NewEntity

`func NewEntity() *Entity`

NewEntity instantiates a new Entity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityWithDefaults

`func NewEntityWithDefaults() *Entity`

NewEntityWithDefaults instantiates a new Entity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Entity) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Entity) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Entity) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *Entity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetModule

`func (o *Entity) GetModule() string`

GetModule returns the Module field if non-nil, zero value otherwise.

### GetModuleOk

`func (o *Entity) GetModuleOk() (*string, bool)`

GetModuleOk returns a tuple with the Module field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModule

`func (o *Entity) SetModule(v string)`

SetModule sets Module field to given value.

### HasModule

`func (o *Entity) HasModule() bool`

HasModule returns a boolean if a field has been set.

### GetType

`func (o *Entity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Entity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Entity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Entity) HasType() bool`

HasType returns a boolean if a field has been set.

### GetKey

`func (o *Entity) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Entity) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Entity) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Entity) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValue

`func (o *Entity) GetValue() Array`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Entity) GetValueOk() (*Array, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Entity) SetValue(v Array)`

SetValue sets Value field to given value.

### HasValue

`func (o *Entity) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Entity) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Entity) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Entity) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Entity) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Entity) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Entity) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Entity) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Entity) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


