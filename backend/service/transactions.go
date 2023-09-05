package service

import (
	"backend/infrastructure"
	"backend/infrastructure/entity"
	"backend/model"
	"time"

	"github.com/google/uuid"
)

func AddTransaction(params *model.Transaction) error {
	uuidObj, _ := uuid.NewUUID()
	dto := &entity.Transaction{Id: uuidObj.String(), UserId: params.UserId, Type: params.Type, Amount: params.Amount, TransactionDate: params.Date, Memo: params.Memo, CreatedAt: time.Now(), UpdatedAt: time.Now()}
	table := infrastructure.Db.Table("Transactions")
	err := table.Put(dto).Run()
	return err
}
