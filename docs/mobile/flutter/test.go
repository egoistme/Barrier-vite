// https://github.com/go-sql-driver/mysql
package mysql

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"megaview-go/utils/core/config"
	"sync"
	"time"
)

type DBConfig struct {
	Username string `yaml:"username"`
	Password string `yaml:"password"`
	Host     string `yaml:"host"`
	Port     int    `yaml:"port"`
	Database string `yaml:"database"`
	Charset  string `yaml:"charset"`
}

type singleton struct {
	DB *sql.DB // 多请求复用直至进程销毁
}

var (
	instances map[string]*singleton // dbkey->instance
	mu        sync.Mutex  
	dbconfigs map[string]*DBConfig // dbkey->config
)

func init() {
	instances = make(map[string]*singleton)
} 

func GetInstance(dbkey string) (*singleton, error) {
	var err error

	if _, ok := instances[dbkey]; ok {
		return instances[dbkey], nil
	} else {
		mu.Lock()
		defer mu.Unlock() 

		if instance, ok := instances[dbkey]; !ok {
			config.Read("mysql", &dbconfigs)

			dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=%s&autocommit=true",
				dbconfigs[dbkey].Username,
				dbconfigs[dbkey].Password,
				dbconfigs[dbkey].Host,
				dbconfigs[dbkey].Port,
				dbconfigs[dbkey].Database,
				dbconfigs[dbkey].Charset)

			instance = &singleton{}
			instance.DB, err = sql.Open("mysql", dsn)
			if err != nil {
				return nil, err
			} else {
				instance.DB.SetConnMaxLifetime(time.Minute * 3)
				instance.DB.SetMaxOpenConns(100)
				instance.DB.SetMaxIdleConns(100)
				instances[dbkey] = instance
				return instances[dbkey], nil
			}
		} else {
			return instances[dbkey], nil
		}
	}
}

