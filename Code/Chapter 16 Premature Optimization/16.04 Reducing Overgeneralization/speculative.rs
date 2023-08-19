fn validate_size(value: i32) {
    validate_integer(value);
}

fn validate_years(value: i32) {
    validate_integer(value);
}

fn validate_integer(value: i32) {
    validate_type(value, :integer);
    validate_min_integer(value, 0);
}