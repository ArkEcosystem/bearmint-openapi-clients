/*
Railway

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 1.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"time"
)

// TransactionReceipt struct for TransactionReceipt
type TransactionReceipt struct {
	// The id of the object.
	Id *int32 `json:"id,omitempty"`
	// The id of the object.
	TransactionId *int32 `json:"transaction_id,omitempty"`
	// The id of the object.
	BlockHash *string `json:"block_hash,omitempty"`
	// The id of the object.
	BlockNumber *int32 `json:"block_number,omitempty"`
	// The id of the object.
	Logs *Array `json:"logs,omitempty"`
	// The creation date of the object.
	CreatedAt *time.Time `json:"created_at,omitempty"`
	// The updating date of the object.
	UpdatedAt *time.Time `json:"updated_at,omitempty"`
}

// NewTransactionReceipt instantiates a new TransactionReceipt object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransactionReceipt() *TransactionReceipt {
	this := TransactionReceipt{}
	return &this
}

// NewTransactionReceiptWithDefaults instantiates a new TransactionReceipt object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransactionReceiptWithDefaults() *TransactionReceipt {
	this := TransactionReceipt{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *TransactionReceipt) GetId() int32 {
	if o == nil || o.Id == nil {
		var ret int32
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionReceipt) GetIdOk() (*int32, bool) {
	if o == nil || o.Id == nil {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *TransactionReceipt) HasId() bool {
	if o != nil && o.Id != nil {
		return true
	}

	return false
}

// SetId gets a reference to the given int32 and assigns it to the Id field.
func (o *TransactionReceipt) SetId(v int32) {
	o.Id = &v
}

// GetTransactionId returns the TransactionId field value if set, zero value otherwise.
func (o *TransactionReceipt) GetTransactionId() int32 {
	if o == nil || o.TransactionId == nil {
		var ret int32
		return ret
	}
	return *o.TransactionId
}

// GetTransactionIdOk returns a tuple with the TransactionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionReceipt) GetTransactionIdOk() (*int32, bool) {
	if o == nil || o.TransactionId == nil {
		return nil, false
	}
	return o.TransactionId, true
}

// HasTransactionId returns a boolean if a field has been set.
func (o *TransactionReceipt) HasTransactionId() bool {
	if o != nil && o.TransactionId != nil {
		return true
	}

	return false
}

// SetTransactionId gets a reference to the given int32 and assigns it to the TransactionId field.
func (o *TransactionReceipt) SetTransactionId(v int32) {
	o.TransactionId = &v
}

// GetBlockHash returns the BlockHash field value if set, zero value otherwise.
func (o *TransactionReceipt) GetBlockHash() string {
	if o == nil || o.BlockHash == nil {
		var ret string
		return ret
	}
	return *o.BlockHash
}

// GetBlockHashOk returns a tuple with the BlockHash field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionReceipt) GetBlockHashOk() (*string, bool) {
	if o == nil || o.BlockHash == nil {
		return nil, false
	}
	return o.BlockHash, true
}

// HasBlockHash returns a boolean if a field has been set.
func (o *TransactionReceipt) HasBlockHash() bool {
	if o != nil && o.BlockHash != nil {
		return true
	}

	return false
}

// SetBlockHash gets a reference to the given string and assigns it to the BlockHash field.
func (o *TransactionReceipt) SetBlockHash(v string) {
	o.BlockHash = &v
}

// GetBlockNumber returns the BlockNumber field value if set, zero value otherwise.
func (o *TransactionReceipt) GetBlockNumber() int32 {
	if o == nil || o.BlockNumber == nil {
		var ret int32
		return ret
	}
	return *o.BlockNumber
}

// GetBlockNumberOk returns a tuple with the BlockNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionReceipt) GetBlockNumberOk() (*int32, bool) {
	if o == nil || o.BlockNumber == nil {
		return nil, false
	}
	return o.BlockNumber, true
}

// HasBlockNumber returns a boolean if a field has been set.
func (o *TransactionReceipt) HasBlockNumber() bool {
	if o != nil && o.BlockNumber != nil {
		return true
	}

	return false
}

// SetBlockNumber gets a reference to the given int32 and assigns it to the BlockNumber field.
func (o *TransactionReceipt) SetBlockNumber(v int32) {
	o.BlockNumber = &v
}

// GetLogs returns the Logs field value if set, zero value otherwise.
func (o *TransactionReceipt) GetLogs() Array {
	if o == nil || o.Logs == nil {
		var ret Array
		return ret
	}
	return *o.Logs
}

// GetLogsOk returns a tuple with the Logs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionReceipt) GetLogsOk() (*Array, bool) {
	if o == nil || o.Logs == nil {
		return nil, false
	}
	return o.Logs, true
}

// HasLogs returns a boolean if a field has been set.
func (o *TransactionReceipt) HasLogs() bool {
	if o != nil && o.Logs != nil {
		return true
	}

	return false
}

// SetLogs gets a reference to the given Array and assigns it to the Logs field.
func (o *TransactionReceipt) SetLogs(v Array) {
	o.Logs = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *TransactionReceipt) GetCreatedAt() time.Time {
	if o == nil || o.CreatedAt == nil {
		var ret time.Time
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionReceipt) GetCreatedAtOk() (*time.Time, bool) {
	if o == nil || o.CreatedAt == nil {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *TransactionReceipt) HasCreatedAt() bool {
	if o != nil && o.CreatedAt != nil {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given time.Time and assigns it to the CreatedAt field.
func (o *TransactionReceipt) SetCreatedAt(v time.Time) {
	o.CreatedAt = &v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *TransactionReceipt) GetUpdatedAt() time.Time {
	if o == nil || o.UpdatedAt == nil {
		var ret time.Time
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionReceipt) GetUpdatedAtOk() (*time.Time, bool) {
	if o == nil || o.UpdatedAt == nil {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *TransactionReceipt) HasUpdatedAt() bool {
	if o != nil && o.UpdatedAt != nil {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given time.Time and assigns it to the UpdatedAt field.
func (o *TransactionReceipt) SetUpdatedAt(v time.Time) {
	o.UpdatedAt = &v
}

func (o TransactionReceipt) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Id != nil {
		toSerialize["id"] = o.Id
	}
	if o.TransactionId != nil {
		toSerialize["transaction_id"] = o.TransactionId
	}
	if o.BlockHash != nil {
		toSerialize["block_hash"] = o.BlockHash
	}
	if o.BlockNumber != nil {
		toSerialize["block_number"] = o.BlockNumber
	}
	if o.Logs != nil {
		toSerialize["logs"] = o.Logs
	}
	if o.CreatedAt != nil {
		toSerialize["created_at"] = o.CreatedAt
	}
	if o.UpdatedAt != nil {
		toSerialize["updated_at"] = o.UpdatedAt
	}
	return json.Marshal(toSerialize)
}

type NullableTransactionReceipt struct {
	value *TransactionReceipt
	isSet bool
}

func (v NullableTransactionReceipt) Get() *TransactionReceipt {
	return v.value
}

func (v *NullableTransactionReceipt) Set(val *TransactionReceipt) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactionReceipt) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactionReceipt) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactionReceipt(val *TransactionReceipt) *NullableTransactionReceipt {
	return &NullableTransactionReceipt{value: val, isSet: true}
}

func (v NullableTransactionReceipt) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactionReceipt) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


