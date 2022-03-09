function func(a){
  console.log(a)
  return func(a)
}
func(1)(1)