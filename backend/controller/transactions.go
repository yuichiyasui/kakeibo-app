package controller

import (
	"backend/model"
	"backend/service"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func addTransaction(c *gin.Context) {
	t := model.Transaction{}
	err := c.Bind(&t)
	if err != nil {
		c.String(http.StatusBadRequest, "Bad Request")
	}
	err = service.AddTransaction(&t)
	if err != nil {
		fmt.Println(err)
		c.String(http.StatusInternalServerError, "Server Error")
	}
	c.String(http.StatusOK, "OK")
}

func AddTransactionsRoutes(rg *gin.RouterGroup) {
	transactions := rg.Group("/transactions")

	transactions.POST("", addTransaction)
}
