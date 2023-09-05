package model

// TODO: 値の検証
type Transaction struct {
	UserId string
	Type   string
	Amount int
	Date   string
	Memo   string
}
