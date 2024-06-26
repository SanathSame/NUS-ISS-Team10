CREATE OR REPLACE FUNCTION generate_object_id() RETURNS varchar AS $$
    DECLARE
        time_component bigint;
        machine_id bigint := FLOOR(random() * 16777215);
        process_id bigint;
        seq_id bigint := FLOOR(random() * 16777215);
        result varchar:= '';
    BEGIN
        SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp())) INTO time_component;
        SELECT pg_backend_pid() INTO process_id;

        result := result || lpad(to_hex(time_component), 8, '0');
        result := result || lpad(to_hex(machine_id), 6, '0');
        result := result || lpad(to_hex(process_id), 4, '0');
        result := result || lpad(to_hex(seq_id), 6, '0');
        RETURN result;
    END;
$$ LANGUAGE PLPGSQL;

create table users (
	_id varchar(24) NOT NULL DEFAULT generate_object_id(),
	username VARCHAR(50) PRIMARY KEY,
	password VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL
);

create table entities (
	_id varchar(24) NOT NULL DEFAULT generate_object_id(),
	username VARCHAR(50) PRIMARY KEY,
	password VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL
);

create table products (
    _id varchar(24) NOT NULL DEFAULT generate_object_id(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table attractions (
    _id varchar(24) NOT NULL DEFAULT generate_object_id() UNIQUE,
    name VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	country VARCHAR(50) NOT NULL,
    description TEXT,
	price DECIMAL(6,2) NOT NULL,
	ratings DECIMAL(3,1) NOT NULL,
	opening_hours VARCHAR(50) NOT NULL,
	type_of_attraction VARCHAR(30) NOT NULL
);

create table flights (
    _id varchar(24) NOT NULL DEFAULT generate_object_id() UNIQUE,
	departure_city VARCHAR(50) NOT NULL,
    departure_country VARCHAR(50) NOT NULL,
	arrival_city VARCHAR(50) NOT NULL,
    arrival_country VARCHAR(50) NOT NULL,
    departure_date VARCHAR(50) NOT NULL,
    departure_time VARCHAR(50) NOT NULL,
    flight_duration INT NOT NULL,
	ticket_price DECIMAL(10,2) NOT NULL
);

create table hotels (
    _id varchar(24) NOT NULL DEFAULT generate_object_id() UNIQUE,
    name VARCHAR(30) NOT NULL,
	city VARCHAR(50) NOT NULL,
	country VARCHAR(50) NOT NULL,
    description TEXT,
	price DECIMAL(6,2) NOT NULL,
	ratings DECIMAL(3,1) NOT NULL,
	ammenities VARCHAR(50) NOT NULL,
    hotel_image VARCHAR(500) NOT NULL
);

CREATE TABLE itinerarys (
    _id VARCHAR(24) NOT NULL DEFAULT generate_object_id(),
    flight_id VARCHAR(24) NOT NULL,
    hotel_id VARCHAR(24) NOT NULL,
    attraction_id VARCHAR(24) NOT NULL,
    date VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    PRIMARY KEY (_id),
    FOREIGN KEY (username) REFERENCES users(username),
    FOREIGN KEY (flight_id) REFERENCES flights(_id),
    FOREIGN KEY (hotel_id) REFERENCES hotels(_id),
    FOREIGN KEY (attraction_id) REFERENCES attractions(_id)
);

ALTER SYSTEM SET max_connections = 50;