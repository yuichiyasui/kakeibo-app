package main

import (
	"backend/controller"
	"backend/infrastructure"

	"github.com/gin-gonic/gin"
)

func main() {
	infrastructure.NewDB()

	router := gin.Default()
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	v1 := router.Group("/v1")
	controller.AddTransactionsRoutes(v1)

	router.Run(":8080")
}
