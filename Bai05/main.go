package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	port := "8080"

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Xin chao tu ung dung Go trong Docker")
	})

	fmt.Printf("Server dang chay tai cong %s\n", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
