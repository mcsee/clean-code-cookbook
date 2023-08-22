fn validate_size(value: i32) {
 	validate_type(value, Type::Integer);
	validate_min_integer(value, 0);
}
	
fn validate_years(value: i32) {
	validate_type(value, Type::Integer);
	validate_min_integer(value, 0);
}
	
// Duplication is accidental, therefore you should not abstract it	