package entity

import "time"

type Transaction struct {
	Id              string    `dynamo:"Id,hash"`
	UserId          string    `dynamo:"UserId,range"`
	Type            string    `dynamo:"Type"`
	Amount          int       `dynamo:"Amount"`
	TransactionDate string    `dynamo:"TransactionDate"`
	Memo            string    `dynamo:"Memo"`
	CreatedAt       time.Time `dynamo:"CreatedAt"`
	UpdatedAt       time.Time `dynamo:"UpdatedAt"`
}
