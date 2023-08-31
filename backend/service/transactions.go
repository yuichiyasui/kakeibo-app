package service

import (
	"backend/model"
	"fmt"
	"strconv"
)

func AddTransaction(params *model.Transaction) {
	fmt.Println("ユーザーID:" + params.UserId)
	fmt.Println("種類:" + params.Type)
	fmt.Println("金額:" + strconv.Itoa(params.Amount))
	fmt.Println("利用日:" + params.Date)
	fmt.Println("メモ:" + params.Memo)
}
