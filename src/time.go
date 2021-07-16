// return the current time in seconds
func Now() int64 {
	return time.Now().Unix()
}
print(Now())