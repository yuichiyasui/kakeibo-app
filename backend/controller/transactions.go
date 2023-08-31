package controller

import (
	"backend/model"
	"backend/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

func addTransaction(c *gin.Context) {
	t := model.Transaction{}
	err := c.Bind(&t)
	if err != nil {
		c.String(http.StatusBadRequest, "Bad Request")
	}
	service.AddTransaction(&t)
	c.JSON(http.StatusOK, t)
}

func AddTransactionsRoutes(rg *gin.RouterGroup) {
	transactions := rg.Group("/transactions")

	transactions.POST("", addTransaction)
}
