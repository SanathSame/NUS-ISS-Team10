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

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS entities;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS attractions;
DROP TABLE IF EXISTS flights;

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
    _id varchar(24) NOT NULL DEFAULT generate_object_id(),
    name VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	country VARCHAR(50) NOT NULL,
    description TEXT,
	price DECIMAL(6,2) NOT NULL,
	ratings DECIMAL(3,1) NOT NULL,
	opening_hours VARCHAR(50) NOT NULL,
	type_of_attraction VARCHAR(30) NOT NULL,
    attraction_image VARCHAR(500) NOT NULL

);

create table hotels (
    _id varchar(24) NOT NULL DEFAULT generate_object_id(),
    name VARCHAR(30) NOT NULL,
	city VARCHAR(50) NOT NULL,
	country VARCHAR(50) NOT NULL,
    description TEXT,
	price DECIMAL(6,2) NOT NULL,
	ratings DECIMAL(3,1) NOT NULL,
	ammenities VARCHAR(50) NOT NULL,
    hotel_image VARCHAR(500) NOT NULL
);

create table flights (
    _id varchar(24) NOT NULL DEFAULT generate_object_id(),
	departure_city VARCHAR(50) NOT NULL,
	arrival_city VARCHAR(50) NOT NULL,
    departure_date VARCHAR(50) NOT NULL,
    departure_time VARCHAR(50) NOT NULL,
    flight_duration INT NOT NULL,
	ticket_price DECIMAL(10,2) NOT NULL
);

insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20eb', 'Wilek', '$2a$04$gFV8SwSMf9jzfx5Gax2x9eJ/o1dtxa3WMbMxbbDvN2cpzhHdn/KFy', 'wlannin0@admin.ch');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20ec', 'Neville', '$2a$04$VrmVSPIcSEgMV/kW6yo/GugiuIWDNAHYQEky0X6ic/eYyOrggKdMy', 'nlawlor1@dailymotion.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20ed', 'Alic', '$2a$04$y4G4V3/gvvBijJ0HzdqtGuSuTf4bCz3ucOsEz24T3oUtLFTquLaLG', 'astokoe2@hc360.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20ee', 'Noellyn', '$2a$04$uqmJvgdRxfS5amtuZu3VZu4ftuZZV3hMGXIX6ze/2VaagJ/E14vCW', 'nadame3@alibaba.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20ef', 'Richy', '$2a$04$fwZsy.IEwxTV9i8zIKpEGOn1xO5eWhIL8V9KefJN9Q5bxVQOtVQO6', 'rtesmond4@etsy.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f0', 'Marena', '$2a$04$WxXUU3Ni9oX5xrvpqM/RlOq5d17x8y5Gz3.H/LgZ0DmHXJpc5M.YK', 'mgoodright5@dagondesign.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f1', 'Bernice', '$2a$04$zmDsdhLN1ZhRqfcBli7K8ualPeOC1efVDp04XiolFg81rOUO/jL3a', 'brosenfarb6@dell.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f2', 'Audra', '$2a$04$wV9njvlAIh118jeBSDlkjeo4jkedwUTblbrpSAOHjNnTpXa4uIhBa', 'agillan7@epa.gov');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f3', 'Nicholle', '$2a$04$iBN1MGyUKBB8Prj52BX..eYA3lX8hUQlxENBwRMih8Ax81whJXuaW', 'ncheetham8@so-net.ne.jp');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f4', 'Malachi', '$2a$04$7ipQpGevDpXX4/BjCR0o9OZESlcc4ucZjhYj/6pHvDakNh21lVwYa', 'mleyman9@youku.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f5', 'Chuck', '$2a$04$OehNrsga3sascvMzjZYRzu5vA7/sodhrsukW0G7B4klqhUsUaWovG', 'cmarta@hostgator.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f6', 'Ulberto', '$2a$04$meeB5mXstw.agV5IbvSnWuxDcENlHoZA9V48ApMvLZ7n4wMb4eupG', 'ubrackb@time.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f7', 'Christoffer', '$2a$04$Tpovq/U29YzAiNUWL.u9JO9FJYs8UkbXo.k6loJ6QSEFMKIKQX67a', 'cbrocktonc@acquirethisname.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f8', 'Consuela', '$2a$04$muGIZQg5kWD1sH4Cdq9XtuTdRLMpGsaxf12Y2hEPhJLVv6QC8YZhC', 'chaskerd@sbwire.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f9', 'Crosby', '$2a$04$RB0RZq2S78h8AGpCFuEAoOL7xvFOeNRI61EcwEnBAp1tGwE/RJ4GC', 'czammette@yahoo.co.jp');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20fa', 'Scarlet', '$2a$04$JmBIy3ofvhH/CI45l9LJ7e2nxoI5Jsy9RWbQw/DKXHpOx9aUCYRMO', 'seaglef@rediff.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20fb', 'Olvan', '$2a$04$AvFaqnEtcyPtNTD9kiCw4e/H6P2OuOhi603Utojqz6jZvM1eC3LuC', 'owaghorneg@google.co.uk');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20fc', 'Henrieta', '$2a$04$6CUr.QH/xCCtgHZYV1xq1Oa3sgFkHls9go2u.cfXe0WO2sSpXQFbe', 'htunaclifth@a8.net');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20fd', 'Padraig', '$2a$04$dcWoybOed2TjPGKcAd5E1.d21aCpnnt9ytDckcv8jcF9.jEWe.aiq', 'pkelletti@ox.ac.uk');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20fe', 'Kandy', '$2a$04$KCwVuB8Z9oE/rqkmMxO16Om2dKWfycjHAwBIEFclNNKPh9wKts5vq', 'kguerrij@google.pl');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20ff', 'Silvan', '$2a$04$0XCIoaqWbvh4/sEAPlUQaOfSqMFkjdV./JDbRtOmMZfIJXc6PVoIu', 'sphilippk@chicagotribune.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2100', 'Cleopatra', '$2a$04$bFbaht8HQlfvJ6tGC5rHFeNbBm9Z6JqIsu.AGbZt7K1s05eacQ0Xe', 'cantonellil@merriam-webster.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2101', 'Electra', '$2a$04$7SezEGY.khASXbUMetxaJeLNj.yynbiqRB.TEI5hj0scFOqFFjyZe', 'ebouldingm@wisc.edu');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2102', 'Glenda', '$2a$04$uf9rXmcBFF3UxhEGWaHozel4qcoDPytXpw93QQxOXicChqPtWooo.', 'galderseyn@accuweather.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2103', 'Stanislas', '$2a$04$OwOXuTsf1zztA.HetDIrhO3MCBGD1gkjq33ODUxpPhBpyhYaMKpPu', 'sfrancklyno@techcrunch.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2104', 'Aila', '$2a$04$zFXQBgfk4hMzyiPp3YfVr.OuwD/JkW.h6dFI2OlJoOjE/dE4kClFe', 'ableadenp@odnoklassniki.ru');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2105', 'Cortney', '$2a$04$czqAwmN0npRojZjuZioL5O417PRLJOODyptNNto2mTb.6gWekKnxW', 'cmeanwellq@reference.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2106', 'Gwynne', '$2a$04$8a5UPYPpbJMxQ1rjBkRhseEu/FFJ6oPJ7jeVw13MvqPdsO0PRFVO2', 'glebelr@intel.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2107', 'Thurston', '$2a$04$fN7ZF2OSWshtAhTQGgoYsuAsyXtHIJeZMqWlRfKCg6V0TKoeRj80W', 'tfaloons@cafepress.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2108', 'Leese', '$2a$04$iY1meIHoNNcmEgyraikVKudpNTHp8PGXUm8HL8MSUYIOJICJ.Ao.u', 'lkeppelt@indiegogo.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2109', 'Barbabas', '$2a$04$xfc9/DLHWQqsMIN5dH7lu.jH.hafqKFP7Nd3vnC0cORoxS3x9Oy4i', 'blanstonu@dagondesign.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210a', 'Donetta', '$2a$04$oTSYm8z2GsWT4bRfOSUN1ODoagTG4Yf9WLtkV1iM4TTKgO/pqTJfW', 'dwiggamv@angelfire.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210b', 'Leilah', '$2a$04$MgilxGSXBAJ6pvDZ.DsDe.nGCk1pD.qQnUDm54yhg1yfouU5cM/Zy', 'lgiraudotw@rambler.ru');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210c', 'Frederigo', '$2a$04$wPAxM1yiaPUjHaK0MouN7.G2u06EG25Q.TL2el2q3lExyYYIom5iu', 'fzannotellix@dropbox.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210d', 'Ulrick', '$2a$04$e5KIOYUNU3l9O5xC38gWN.cChBQ/.eNbqFGHXvopArWQQ4q38klHK', 'udarkery@plala.or.jp');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210e', 'Odilia', '$2a$04$g6aiaZ.EErQhZ1uEb0mrsOPxhyNN9zo2w.CWhRtwTllEro03oEBUW', 'osharplingz@elpais.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210f', 'Nomi', '$2a$04$vyuJT30T6PAI.vFbqnOiF.OqlvCnH5jmBEV8s81Jxnem4DRSmdOIC', 'ntisun10@artisteer.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2110', 'Silvano', '$2a$04$OUILoQ91RlIZ3QOpn9XIxuHm.r26a0umz57dueBMWPWjHlC928m5C', 'sairton11@ucoz.ru');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2111', 'Merry', '$2a$04$EnmJIlRjiPsyBgEy6LprHe/KBtx8w4Tf9FjFJUHfsEH9g.YLnJY4W', 'mkettlestringe12@auda.org.au');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2112', 'Darice', '$2a$04$3LMJj/IFXwdi4ZqanItFIOQ3aq8vt4Mfwe.rwC/5zIJfyn3QvqAsq', 'diacofo13@merriam-webster.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2113', 'Melli', '$2a$04$DN5OfgKU.JT9J2c3M3K95.vmzeno9hcwtMNJO/v7halL5gvfmDQj2', 'mlilleycrop14@mysql.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2114', 'Glynda', '$2a$04$KZbZ4Aq8b3syqVyYcT.oPuM0XIgqRUhl5vL6I3tv19RFXsWrjiqTm', 'ggrealey15@discovery.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2115', 'Ginnie', '$2a$04$IBtcf0v4A83MaVvXCAREeuRB1uhntv5UhaSN0SYMic/ROVkaEpVpi', 'gbadman16@soundcloud.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2116', 'Tedie', '$2a$04$QxtBWTh5eKMiLYU1k7K4IeIUgSqt5HQp1kK2CrhEualQ29oOIrR8C', 'ttoffoloni17@theguardian.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2117', 'Babette', '$2a$04$ctdERfcYKMpEwv4PdUeuT.AiH1.6XNUZS.7I2/a1OiW6sMAUUDQuO', 'bmitkin18@reference.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2118', 'Deane', '$2a$04$wGgEYJrUz2njveRVf8jxHuGV.5SIrGCJttLu1nSMJ215zbkhdPrYm', 'degre19@businesswire.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2119', 'Reamonn', '$2a$04$VHakyBhZ3ebEcnZy4LQo6.6.DJLLpZkBUZk.oFfuINIedIyLl1f6C', 'rstrelitzki1a@baidu.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa211a', 'Aigneis', '$2a$04$d/d3niuEAJIreq/OriUElOpDsMGIWQVjMahJHYwDBXVIqFcmXtz..', 'abygrave1b@nbcnews.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa211b', 'Marven', '$2a$04$6NIJKxav510sdRN1TseGverZzwxvoHMotZTnwMDR3uXZazpAH5OjO', 'mburet1c@hugedomains.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa211c', 'Dorette', '$2a$04$RiqckewgZWBFj2jNYikcjeP.Jix16XQ3eRItgBaQ5tD0DfBH62B4G', 'drayner1d@deliciousdays.com');



insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20eb', 'Wilek', '$2a$04$gFV8SwSMf9jzfx5Gax2x9eJ/o1dtxa3WMbMxbbDvN2cpzhHdn/KFy', 'wlannin0@admin.ch');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20ec', 'Neville', '$2a$04$VrmVSPIcSEgMV/kW6yo/GugiuIWDNAHYQEky0X6ic/eYyOrggKdMy', 'nlawlor1@dailymotion.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20ed', 'Alic', '$2a$04$y4G4V3/gvvBijJ0HzdqtGuSuTf4bCz3ucOsEz24T3oUtLFTquLaLG', 'astokoe2@hc360.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20ee', 'Noellyn', '$2a$04$uqmJvgdRxfS5amtuZu3VZu4ftuZZV3hMGXIX6ze/2VaagJ/E14vCW', 'nadame3@alibaba.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20ef', 'Richy', '$2a$04$fwZsy.IEwxTV9i8zIKpEGOn1xO5eWhIL8V9KefJN9Q5bxVQOtVQO6', 'rtesmond4@etsy.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f0', 'Marena', '$2a$04$WxXUU3Ni9oX5xrvpqM/RlOq5d17x8y5Gz3.H/LgZ0DmHXJpc5M.YK', 'mgoodright5@dagondesign.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f1', 'Bernice', '$2a$04$zmDsdhLN1ZhRqfcBli7K8ualPeOC1efVDp04XiolFg81rOUO/jL3a', 'brosenfarb6@dell.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f2', 'Audra', '$2a$04$wV9njvlAIh118jeBSDlkjeo4jkedwUTblbrpSAOHjNnTpXa4uIhBa', 'agillan7@epa.gov');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f3', 'Nicholle', '$2a$04$iBN1MGyUKBB8Prj52BX..eYA3lX8hUQlxENBwRMih8Ax81whJXuaW', 'ncheetham8@so-net.ne.jp');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f4', 'Malachi', '$2a$04$7ipQpGevDpXX4/BjCR0o9OZESlcc4ucZjhYj/6pHvDakNh21lVwYa', 'mleyman9@youku.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f5', 'Chuck', '$2a$04$OehNrsga3sascvMzjZYRzu5vA7/sodhrsukW0G7B4klqhUsUaWovG', 'cmarta@hostgator.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f6', 'Ulberto', '$2a$04$meeB5mXstw.agV5IbvSnWuxDcENlHoZA9V48ApMvLZ7n4wMb4eupG', 'ubrackb@time.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f7', 'Christoffer', '$2a$04$Tpovq/U29YzAiNUWL.u9JO9FJYs8UkbXo.k6loJ6QSEFMKIKQX67a', 'cbrocktonc@acquirethisname.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f8', 'Consuela', '$2a$04$muGIZQg5kWD1sH4Cdq9XtuTdRLMpGsaxf12Y2hEPhJLVv6QC8YZhC', 'chaskerd@sbwire.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f9', 'Crosby', '$2a$04$RB0RZq2S78h8AGpCFuEAoOL7xvFOeNRI61EcwEnBAp1tGwE/RJ4GC', 'czammette@yahoo.co.jp');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20fa', 'Scarlet', '$2a$04$JmBIy3ofvhH/CI45l9LJ7e2nxoI5Jsy9RWbQw/DKXHpOx9aUCYRMO', 'seaglef@rediff.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20fb', 'Olvan', '$2a$04$AvFaqnEtcyPtNTD9kiCw4e/H6P2OuOhi603Utojqz6jZvM1eC3LuC', 'owaghorneg@google.co.uk');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20fc', 'Henrieta', '$2a$04$6CUr.QH/xCCtgHZYV1xq1Oa3sgFkHls9go2u.cfXe0WO2sSpXQFbe', 'htunaclifth@a8.net');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20fd', 'Padraig', '$2a$04$dcWoybOed2TjPGKcAd5E1.d21aCpnnt9ytDckcv8jcF9.jEWe.aiq', 'pkelletti@ox.ac.uk');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20fe', 'Kandy', '$2a$04$KCwVuB8Z9oE/rqkmMxO16Om2dKWfycjHAwBIEFclNNKPh9wKts5vq', 'kguerrij@google.pl');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20ff', 'Silvan', '$2a$04$0XCIoaqWbvh4/sEAPlUQaOfSqMFkjdV./JDbRtOmMZfIJXc6PVoIu', 'sphilippk@chicagotribune.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2100', 'Cleopatra', '$2a$04$bFbaht8HQlfvJ6tGC5rHFeNbBm9Z6JqIsu.AGbZt7K1s05eacQ0Xe', 'cantonellil@merriam-webster.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2101', 'Electra', '$2a$04$7SezEGY.khASXbUMetxaJeLNj.yynbiqRB.TEI5hj0scFOqFFjyZe', 'ebouldingm@wisc.edu');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2102', 'Glenda', '$2a$04$uf9rXmcBFF3UxhEGWaHozel4qcoDPytXpw93QQxOXicChqPtWooo.', 'galderseyn@accuweather.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2103', 'Stanislas', '$2a$04$OwOXuTsf1zztA.HetDIrhO3MCBGD1gkjq33ODUxpPhBpyhYaMKpPu', 'sfrancklyno@techcrunch.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2104', 'Aila', '$2a$04$zFXQBgfk4hMzyiPp3YfVr.OuwD/JkW.h6dFI2OlJoOjE/dE4kClFe', 'ableadenp@odnoklassniki.ru');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2105', 'Cortney', '$2a$04$czqAwmN0npRojZjuZioL5O417PRLJOODyptNNto2mTb.6gWekKnxW', 'cmeanwellq@reference.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2106', 'Gwynne', '$2a$04$8a5UPYPpbJMxQ1rjBkRhseEu/FFJ6oPJ7jeVw13MvqPdsO0PRFVO2', 'glebelr@intel.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2107', 'Thurston', '$2a$04$fN7ZF2OSWshtAhTQGgoYsuAsyXtHIJeZMqWlRfKCg6V0TKoeRj80W', 'tfaloons@cafepress.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2108', 'Leese', '$2a$04$iY1meIHoNNcmEgyraikVKudpNTHp8PGXUm8HL8MSUYIOJICJ.Ao.u', 'lkeppelt@indiegogo.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2109', 'Barbabas', '$2a$04$xfc9/DLHWQqsMIN5dH7lu.jH.hafqKFP7Nd3vnC0cORoxS3x9Oy4i', 'blanstonu@dagondesign.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210a', 'Donetta', '$2a$04$oTSYm8z2GsWT4bRfOSUN1ODoagTG4Yf9WLtkV1iM4TTKgO/pqTJfW', 'dwiggamv@angelfire.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210b', 'Leilah', '$2a$04$MgilxGSXBAJ6pvDZ.DsDe.nGCk1pD.qQnUDm54yhg1yfouU5cM/Zy', 'lgiraudotw@rambler.ru');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210c', 'Frederigo', '$2a$04$wPAxM1yiaPUjHaK0MouN7.G2u06EG25Q.TL2el2q3lExyYYIom5iu', 'fzannotellix@dropbox.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210d', 'Ulrick', '$2a$04$e5KIOYUNU3l9O5xC38gWN.cChBQ/.eNbqFGHXvopArWQQ4q38klHK', 'udarkery@plala.or.jp');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210e', 'Odilia', '$2a$04$g6aiaZ.EErQhZ1uEb0mrsOPxhyNN9zo2w.CWhRtwTllEro03oEBUW', 'osharplingz@elpais.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210f', 'Nomi', '$2a$04$vyuJT30T6PAI.vFbqnOiF.OqlvCnH5jmBEV8s81Jxnem4DRSmdOIC', 'ntisun10@artisteer.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2110', 'Silvano', '$2a$04$OUILoQ91RlIZ3QOpn9XIxuHm.r26a0umz57dueBMWPWjHlC928m5C', 'sairton11@ucoz.ru');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2111', 'Merry', '$2a$04$EnmJIlRjiPsyBgEy6LprHe/KBtx8w4Tf9FjFJUHfsEH9g.YLnJY4W', 'mkettlestringe12@auda.org.au');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2112', 'Darice', '$2a$04$3LMJj/IFXwdi4ZqanItFIOQ3aq8vt4Mfwe.rwC/5zIJfyn3QvqAsq', 'diacofo13@merriam-webster.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2113', 'Melli', '$2a$04$DN5OfgKU.JT9J2c3M3K95.vmzeno9hcwtMNJO/v7halL5gvfmDQj2', 'mlilleycrop14@mysql.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2114', 'Glynda', '$2a$04$KZbZ4Aq8b3syqVyYcT.oPuM0XIgqRUhl5vL6I3tv19RFXsWrjiqTm', 'ggrealey15@discovery.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2115', 'Ginnie', '$2a$04$IBtcf0v4A83MaVvXCAREeuRB1uhntv5UhaSN0SYMic/ROVkaEpVpi', 'gbadman16@soundcloud.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2116', 'Tedie', '$2a$04$QxtBWTh5eKMiLYU1k7K4IeIUgSqt5HQp1kK2CrhEualQ29oOIrR8C', 'ttoffoloni17@theguardian.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2117', 'Babette', '$2a$04$ctdERfcYKMpEwv4PdUeuT.AiH1.6XNUZS.7I2/a1OiW6sMAUUDQuO', 'bmitkin18@reference.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2118', 'Deane', '$2a$04$wGgEYJrUz2njveRVf8jxHuGV.5SIrGCJttLu1nSMJ215zbkhdPrYm', 'degre19@businesswire.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2119', 'Reamonn', '$2a$04$VHakyBhZ3ebEcnZy4LQo6.6.DJLLpZkBUZk.oFfuINIedIyLl1f6C', 'rstrelitzki1a@baidu.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa211a', 'Aigneis', '$2a$04$d/d3niuEAJIreq/OriUElOpDsMGIWQVjMahJHYwDBXVIqFcmXtz..', 'abygrave1b@nbcnews.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa211b', 'Marven', '$2a$04$6NIJKxav510sdRN1TseGverZzwxvoHMotZTnwMDR3uXZazpAH5OjO', 'mburet1c@hugedomains.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa211c', 'Dorette', '$2a$04$RiqckewgZWBFj2jNYikcjeP.Jix16XQ3eRItgBaQ5tD0DfBH62B4G', 'drayner1d@deliciousdays.com');



insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20b9', 'Cold Head Congestion Daytime Non-Drowsy', 'Integer a nibh. In quis justo.', 29.61, 95, '2023-12-28 15:56:58');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20ba', 'North Cough Drop', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', 12.37, 9, '2023-08-08 17:50:59');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20bb', 'Suave', 'Quisque porta volutpat erat.', 64.97, 143, '2023-07-30 01:10:51');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20bc', 'Quetiapine Fumarate', 'Mauris lacinia sapien quis libero.', 45.9, 78, '2023-03-28 05:53:39');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20bd', 'ONDANSETRON HYDROCHLORIDE', 'Nulla nisl.', 45.17, 49, '2023-08-20 17:52:29');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20be', 'Parathyroplex', 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', 91.56, 102, '2023-04-09 14:35:29');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20bf', 'Oxycodone hydrochloride and Ibuprofen', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.', 20.39, 0, '2023-04-10 16:49:20');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c0', 'PAROXETINE', null, 46.33, 53, '2023-09-01 08:05:41');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c1', 'Tikosyn', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 22.21, 52, '2023-03-26 17:07:27');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c2', 'Good sense sleep aid', 'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.', 5.9, 117, '2023-08-22 03:58:04');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c3', 'Nifedipine', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 76.11, 24, '2023-03-22 12:19:22');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c4', 'PREPOPIK', null, 49.86, 145, '2023-12-25 09:14:44');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c5', 'Lidocaine Hydrochloride and Epinephrine', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 18.85, 13, '2023-10-03 15:20:11');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c6', 'IC-Green', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', 51.88, 126, '2023-08-05 03:01:44');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c7', 'Laxative', 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.', 38.48, 86, '2023-03-26 04:43:54');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c8', 'Balmex Diaper Rash Stick', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 83.93, 92, '2023-03-18 14:18:06');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c9', 'Standardized Grass Pollen, Sweet Vernal Grass', null, 65.34, 6, '2023-02-05 05:28:15');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20ca', 'Ibuprofen and Diphenhydramine Citrate', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', 80.94, 75, '2023-04-24 05:29:21');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20cb', 'Prazosin Hydrochloride', 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 22.74, 17, '2023-09-05 15:41:45');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20cc', 'Leader Kids', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.', 68.19, 85, '2023-06-29 01:57:53');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20cd', 'Hive Away', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 34.82, 122, '2023-02-09 03:53:11');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20ce', 'Carvedilol', 'Integer a nibh.', 16.37, 93, '2023-08-23 13:58:38');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20cf', 'Levetiracetam', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 39.68, 140, '2023-01-24 23:48:38');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d0', 'RITE AID RENEWAL', 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 55.89, 26, '2023-11-29 20:16:50');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d1', 'Degree', 'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 42.71, 146, '2023-10-04 03:07:22');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d2', 'Anti-Diarrheal', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.', 3.19, 6, '2023-04-21 20:59:14');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d3', 'Hydralazine Hydrochloride', 'Duis bibendum. Morbi non quam nec dui luctus rutrum.', 63.09, 142, '2023-04-27 03:53:19');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d4', 'Ulta Sparkling Lemon Anti-Bacterial Deep Cleansing', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', 3.4, 130, '2023-12-15 01:40:44');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d5', 'DRONABINOL', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 20.1, 14, '2023-10-30 16:43:20');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d6', 'Imipramine Hydrochloride', 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 94.38, 7, '2023-10-27 12:21:36');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d7', 'Proactiv', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 19.25, 15, '2023-02-18 23:49:51');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d8', 'Sufentanil Citrate', 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', 57.18, 26, '2023-11-24 08:51:44');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d9', 'ZANG QI', 'Donec vitae nisi.', 25.24, 18, '2023-08-09 18:55:04');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20da', 'Hydrocortisone', 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.', 23.13, 36, '2023-05-15 17:56:24');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20db', 'Enoxaparin sodium', 'Nullam molestie nibh in lectus. Pellentesque at nulla.', 49.68, 73, '2023-08-05 20:15:09');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20dc', 'Allergy Eye Relief', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', 93.92, 46, '2023-01-24 21:25:15');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20dd', 'Cerebellum Thalamus B Aurum', 'Pellentesque at nulla.', 27.49, 107, '2023-10-20 09:30:01');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20de', 'PRINIVIL', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 22.03, 119, '2023-03-21 03:13:19');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20df', 'VIRACEPT', 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 82.06, 79, '2023-03-01 08:36:04');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e0', 'NEXT 1 Anti-bacterial', 'Aliquam sit amet diam in magna bibendum imperdiet.', 24.74, 44, '2023-06-28 19:35:23');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e1', 'Carbinoxamine Maleate', 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 81.89, 31, '2023-09-30 13:39:24');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e2', 'Epzicom', 'In hac habitasse platea dictumst.', 92.94, 98, '2023-10-26 06:19:19');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e3', 'American Beech', null, 73.39, 31, '2023-11-11 12:19:11');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e4', 'Strength M', null, 93.37, 54, '2023-09-21 14:50:47');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e5', 'triamcinolone acetonide', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 19.8, 66, '2023-05-20 12:06:40');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e6', 'Metoclopramide Hydrochloride', 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 13.51, 8, '2023-02-26 17:29:19');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e7', 'Escitalopram', 'Duis at velit eu est congue elementum.', 81.03, 15, '2023-11-07 13:11:10');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e8', 'CELEBREX', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', 68.73, 131, '2023-05-22 03:05:53');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e9', 'MARVEL ULTIMATE SPIDER-MAN ANTIBACTERIAL HAND WIPES', 'Praesent blandit lacinia erat.', 25.65, 93, '2023-08-20 06:34:07');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20ea', 'Banana Boat Ultra Defense Sheer Protect FPS 50 LATAM', 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.', 76.99, 149, '2023-04-10 13:05:50');



insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab89f5', 'Chatuchak Weekend Market', 'Yukhnov', 'Russia', 'felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl', 572.79, 2.2, '10:01 PM', 'Markets and Bazaars', 'https://cktravels.com/wp-content/uploads/2019/12/DSC09970-2.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab89f6', 'Bora Bora', 'Sitovo', 'Bulgaria', 'dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere', 522.81, 9.9, '12:23 PM', 'Temples and Religious Sites', 'https://www.tourist-destinations.com/wp-content/uploads/2011/05/Bora-Bora-Aerial.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab89f7', 'Versailles Gardens', 'Guangping', 'China', 'ut at dolor quis odio consequat varius integer ac leo pellentesque', 904.94, 7.6, '9:51 PM', 'Natural Wonders and Landscapes', 'https://www.tripsavvy.com/thmb/7e-cAiIkxbZ2-hNyOt44nMNg1Ms=/4163x2772/filters:no_upscale():max_bytes(150000):strip_icc()/versailles-gardens-orangerie-59787fddaad52b0011a6a0a4.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab89f8', 'Aurora Borealis Viewing Point', 'Bujanovac', 'Serbia', 'sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce', 349.17, 6.0, '8:50 AM', 'Natural Wonders and Landscapes', 'https://cdn.mos.cms.futurecdn.net/qgPxZzRrRCZ5FTN92KYbbZ.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a11', 'Mecca', 'Governor’s Harbour', 'Bahamas', 'aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in', 357.42, 1.1, '2:39 PM', 'Temples and Religious Sites', 'https://cdn.britannica.com/20/153520-050-177A78E4/Kabah-hajj-pilgrims-Saudi-Arabia-Mecca.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a12', 'Imperial Citadel of Xanadu', 'Cova da Iria', 'Portugal', 'lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci', 197.83, 5.8, '11:41 AM', 'Historical Sites', 'https://www.heritagedaily.com/wp-content/uploads/2020/06/3240px-Yuan_Shangdu-scaled.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a13', 'Great Wall of China', 'Cikadu', 'Indonesia', 'mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem', 372.48, 2.3, '8:31 PM', 'Historical Sites', 'https://th.bing.com/th/id/R.e8d280e51ab02a0360048c861d00cec8?rik=7fMSE3xG6kZWkA&riu=http%3a%2f%2fwww.onthegotours.com%2fblog%2fwp-content%2fuploads%2f2015%2f11%2fGreat-Wall-China-Tours-On-The-Go-Tours.jpg&ehk=OI7McRm1cQzjR1viIEAJeIt%2fZoagLhwNCu4nFma5qOE%3d&risl=&pid=ImgRaw&r=0');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a14', 'Eiffel Tower', 'Weixing', 'China', 'eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis', 855.68, 9.7, '10:31 PM', 'Gardens and Parks', 'https://th.bing.com/th/id/OIP.UsQ8zELRtFaib5rn_wwJdgHaLJ?rs=1&pid=ImgDetMain');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a15', 'Taj Mahal', 'Xinghua', 'China', 'blandit lacinia erat vestibulum sed magna at nunc commodo placerat', 466.96, 2.5, '11:50 PM', 'Historical Sites', 'https://lp-cms-production.imgix.net/news/2019/06/taj-mahal.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a16', 'Great Pyramid of Giza', 'Susapaya', 'Peru', 'ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor', 632.0, 5.1, '7:05 PM', 'Natural Wonders and Landscapes', 'https://th.bing.com/th/id/OIP.HEX_NEdz-whfW1VdmnLpSQAAAA?rs=1&pid=ImgDetMain');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab89f5', 'Yellowstone National Park', 'Yukhnov', 'Russia', 'felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl', 572.79, 2.2, '10:01 PM', 'Markets and Bazaars', 'https://jacksonholewildlifesafaris.com/wp-content/uploads/2019/09/yellowstone-waterfall-hero-1440x810.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab89f6', 'Christ the Redeemer', 'Sitovo', 'Bulgaria', 'dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere', 522.81, 9.9, '12:23 PM', 'Temples and Religious Sites', 'https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20231122221124_45448c583eabca7ad6be347939c641312d4ce7570209ad29d3345175aea14fec.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab89f7', 'Angkor Wat', 'Guangping', 'China', 'ut at dolor quis odio consequat varius integer ac leo pellentesque', 904.94, 7.6, '9:51 PM', 'Natural Wonders and Landscapes', 'https://upload.wikimedia.org/wikipedia/commons/d/d4/20171126_Angkor_Wat_4712_DxO.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab89f8', 'Burj Khalifa', 'Bujanovac', 'Serbia', 'sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce', 349.17, 6.0, '8:50 AM', 'Natural Wonders and Landscapes', 'https://resources.thomascook.in/images/holidays/sightSeeing/Burjkhalifadubai850.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a11', 'Acropolis of Athens', 'Governor’s Harbour', 'Bahamas', 'aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in', 357.42, 1.1, '2:39 PM', 'Temples and Religious Sites', 'https://upload.wikimedia.org/wikipedia/commons/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a12', 'Sydney Opera House', 'Cova da Iria', 'Portugal', 'lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci', 197.83, 5.8, '11:41 AM', 'Historical Sites', 'https://www.tripsavvy.com/thmb/CXxRcEw2NojPcpoaZoLjfnAdiJE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/OperaHouse-755d893182dc4811b608eb1a99792fd7.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a13', 'The Louvre', 'Cikadu', 'Indonesia', 'mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem', 372.48, 2.3, '8:31 PM', 'Historical Sites', 'https://api-www.louvre.fr/sites/default/files/2021-01/cour-napoleon-et-pyramide_1.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a14', 'Forbidden City', 'Weixing', 'China', 'eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis', 855.68, 9.7, '10:31 PM', 'Gardens and Parks', 'https://cdn.britannica.com/03/198203-050-138BB1C3/entrance-Gate-of-Divine-Might-Beijing-Forbidden.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a15', 'Neuschwanstein Castle', 'Xinghua', 'China', 'blandit lacinia erat vestibulum sed magna at nunc commodo placerat', 466.96, 2.5, '11:50 PM', 'Historical Sites', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/800px-Schloss_Neuschwanstein_2013.jpg');
insert into attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction, attraction_image) values ('661609ebfc13ae7ef9ab8a16', 'Petra', 'Susapaya', 'Peru', 'ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor', 632.0, 5.1, '7:05 PM', 'Natural Wonders and Landscapes', 'https://i.natgeofe.com/n/69e2cf60-ad59-4d20-bdd1-dc96f40ab4e8/petra-world-heritage-jordan_3x2.jpg');


insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20eb', 'Sheraton Hotels & Resorts', 'Kanḏay', 'Afghanistan', 'Tranquil coastal retreat with stunning views and luxurious amenities.', 304.01, 2.13, 'Restaurant','https://66b4fb5b0eb079420f42-f8d2ee6acac1b4bd28ecd85cc6789b99.ssl.cf1.rackcdn.com/18-Sheraton-Pool.jpg');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20ec', 'Mercure', 'Buenavista', 'Philippines', 'Escape to luxury amidst scenic landscapes and upscale amenities.', 197.1, 0.42, 'Spa','https://hotelier.com.py/wp-content/uploads/2019/09/Mercure-hotel.jpg');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20ed', 'Renaissance Hotels', 'H̱olon', 'Israel', 'Experience luxury and comfort in a scenic retreat.', 830.89, 3.8, 'Free Wi-Fi','https://cache.marriott.com/marriottassets/marriott/DALBR/dalbr-exterior-0060-hor-feat.jpg');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20ee', 'Novotel', 'Biao', 'Philippines', 'Discover elegance and tranquility in a picturesque setting.', 246.75, 3.67, 'Free Wi-Fi','https://media.glassdoor.com/l/4c/d8/a8/07/novotel.jpg');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20ef', 'ibis', 'Borgholm', 'Sweden', 'Indulge in upscale comforts amidst natural beauty.', 285.26, 4.53, 'Free Wi-Fi','https://tophotel.news/wp-content/uploads/2019/02/Ibis.jpg');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20f1', 'The Ritz-Carlton', 'Shimen', 'China', 'Luxury accommodation surrounded by breathtaking natural landscapes.', 961.2, 0.85, 'Gym','https://th.bing.com/th/id/OIP.W2DwtzssP5WOrW6fRi2kKQHaE8?rs=1&pid=ImgDetMain');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20f2', 'Candlewood Suites', 'Zemlyansk', 'Russia', 'Experience upscale amenities amidst stunning natural scenery.', 175.93, 2.31, 'Spa','https://digital.ihg.com/is/image/ihg/candlewood-suites-miami-5499069824-4x3');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20f3', 'Kerry Hotels', 'Oslo', 'Norway', 'Elegant lodging nestled in the heart of picturesque surroundings.', 839.55, 0.35, 'Spa','https://www.filmages.com/images/made/images/thumbs/Kerry_Hotel_Moment_00001_500_281.jpg');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20f4', 'Kimpton Hotels & Restaurants', 'Vysokogornyy', 'Russia', 'Discover refined comfort amidst the beauty of nature.', 969.49, 2.48, 'Gym','https://th.bing.com/th/id/OIP.k6yhWNX8UGivmLjAGfqBMgHaIJ?rs=1&pid=ImgDetMain');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20f5', 'Mandarin Oriental', 'Majunying', 'China', 'Escape to a tranquil haven offering luxury amidst scenic beauty.', 297.55, 1.91, 'Swimming Pool','https://luxurylaunches.com/wp-content/uploads/2016/03/1-The-Mandarin-Oriental-Hong-Kong%E2%80%99s-night-fa%C3%A7ade.jpg');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20f6', 'Holiday Inn', 'Bethel Town', 'Jamaica', 'Immerse in luxury amid nature serene embrace.', 715.03, 2.43, 'Gym','https://th.bing.com/th/id/OIP.IdE0W-CI8M2PVb9ABM9OFAHaFj?rs=1&pid=ImgDetMain');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20f7', 'Hotel Jen', 'Lingbeizhou', 'China', 'Luxurious hideaway nestled in scenic tranquility awaits.', 506.87, 2.55, 'Restaurant','https://2.bp.blogspot.com/-CQ_MgyYxi8M/WmA7eQo2kdI/AAAAAAAAdvA/_Ftc50yx0Z4aFVJ0a9jNHfk13pSG-fk9ACLcBGAs/s1600/jen.jpg');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20f8', 'Courtyard by Marriott', 'Rongcheng', 'China', 'Discover lavish comfort in a picturesque natural setting.', 973.08, 4.51, 'Gym','https://th.bing.com/th/id/OIP.SVA-ESO3MoCtEKfZoPsrSgHaFj?rs=1&pid=ImgDetMain');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20f9', 'Radisson Hotels', 'Hoit Taria', 'China', 'Unwind in opulent elegance amidst stunning natural landscapes.', 660.88, 4.56, 'Spa','https://th.bing.com/th/id/OIP.lsoycdmk7c3OHemDY8OhHwHaE7?rs=1&pid=ImgDetMain');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20fa', 'Pullman Hotels and Resort', 'Guanli', 'China', 'Indulge in upscale amenities amidst serene, picturesque surroundings.', 360.65, 3.96, 'Restaurant','https://www.ahstatic.com/photos/8276_ho_00_p_2048x1536.jpg');
insert into hotels (_id, name, city, country, description, price, ratings, ammenities, hotel_image) values ('65e57316fc13ae561bfa20fb', 'Four Seasons Hotel', 'El Paso', 'United States', 'Elegant lodging nestled in the heart of picturesque surroundings.', 355.14, 0.01, 'Restaurant','https://th.bing.com/th/id/OIP.7e4ArBZCOXPR94s4itEBqQHaHC?rs=1&pid=ImgDetMain');


insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('1', 'Jakarta Indonesia', 'Pattaya Thailand', '28-04-2022', '7:38 AM', 5, 801.68);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('2', 'Singapore Singapore', 'Penang Malaysia', '07-06-2022', '11:54 PM', 18, 267.36);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('3', 'Hanoi Vietnam', 'Bali Indonesia', '03-01-2022', '3:49 AM', 20, 428.59);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('4', 'Yangon Myanmar', 'Vientiane Laos', '19-05-2022', '10:09 AM', 6, 730.17);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('5', 'Hanoi Vietnam', 'Bali Indonesia', '07-08-2022', '8:31 AM', 23, 221.41);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('6', 'Singapore Singapore', 'Penang Malaysia', '04-01-2022', '2:49 AM', 8, 113.09);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('7', 'Jakarta Indonesia', 'Bandung Indonesia', '07-09-2022', '2:36 PM', 20, 97.26);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('8', 'Singapore Singapore', 'Phnom Penh Cambodia', '20-10-2022', '11:03 AM', 3, 830.27);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('9', 'Kuala Lumpur Malaysia', 'Vientiane Laos', '22-02-2022', '8:57 AM', 15, 109.99);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('10', 'Chiang Mai Thailand', 'Phnom Penh Cambodia', '27-03-2022', '5:45 PM', 17, 422.39);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('11', 'Bangkok Thailand', 'Bali Indonesia', '20-09-2022', '11:58 AM', 20, 566.15);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('12', 'Da Nang Vietnam', 'Penang Malaysia', '05-10-2022', '7:17 PM', 17, 310.35);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('13', 'Hanoi Vietnam', 'Bandung Indonesia', '01-10-2022', '10:33 AM', 4, 482.03);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('14', 'Singapore Singapore', 'Bali Indonesia', '29-08-2022', '7:23 PM', 13, 509.87);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('15', 'Siem Reap Cambodia', 'Phnom Penh Cambodia', '24-11-2022', '3:47 AM', 23, 662.18);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('16', 'Siem Reap Cambodia', 'Bali Indonesia', '26-08-2022', '4:08 AM', 18, 88.32);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('17', 'Kuala Lumpur Malaysia', 'Luang Prabang Laos', '02-05-2022', '9:17 PM', 19, 961.21);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('18', 'Kuala Lumpur Malaysia', 'Vientiane Laos', '19-01-2022', '7:38 AM', 22, 125.49);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('19', 'Yangon Myanmar', 'Bali Indonesia', '07-01-2022', '1:03 PM', 3, 936.35);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('20', 'Siem Reap Cambodia', 'Penang Malaysia', '26-09-2022', '8:57 AM', 11, 981.54);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('21', 'Hanoi Vietnam', 'Phuket Thailand', '29-07-2022', '10:49 PM', 24, 357.7);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('22', 'Yangon Myanmar', 'Boracay Philippines', '23-09-2022', '12:34 PM', 7, 861.09);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('23', 'Bangkok Thailand', 'Boracay Philippines', '25-02-2022', '10:31 PM', 13, 528.61);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('24', 'Hanoi Vietnam', 'Vientiane Laos', '03-05-2022', '2:12 PM', 7, 89.24);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('25', 'Chiang Mai Thailand', 'Phuket Thailand', '18-02-2022', '1:46 AM', 17, 585.63);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('26', 'Singapore Singapore', 'Vientiane Laos', '28-01-2022', '2:42 AM', 18, 219.03);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('27', 'Bangkok Thailand', 'Pattaya Thailand', '03-03-2022', '1:51 AM', 24, 118.98);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('28', 'Hanoi Vietnam', 'Vientiane Laos', '30-05-2022', '3:46 AM', 14, 602.79);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('29', 'Singapore Singapore', 'Phuket Thailand', '13-01-2022', '6:37 PM', 6, 599.95);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('30', 'Manila Philippines', 'Phnom Penh Cambodia', '19-05-2022', '3:52 PM', 10, 70.22);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('31', 'Chiang Mai Thailand', 'Penang Malaysia', '16-07-2022', '12:57 AM', 12, 557.77);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('32', 'Jakarta Indonesia', 'Pattaya Thailand', '02-01-2022', '1:22 AM', 8, 612.85);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('33', 'Kuala Lumpur Malaysia', 'Luang Prabang Laos', '12-04-2022', '9:28 AM', 20, 197.12);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('34', 'Jakarta Indonesia', 'Bandung Indonesia', '05-12-2022', '4:20 PM', 15, 891.58);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('35', 'Chiang Mai Thailand', 'Bandung Indonesia', '01-04-2022', '6:44 PM', 11, 277.44);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('36', 'Chiang Mai Thailand', 'Luang Prabang Laos', '14-01-2022', '7:09 AM', 9, 580.51);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('37', 'Bangkok Thailand', 'Vientiane Laos', '20-07-2022', '3:49 PM', 11, 691.75);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('38', 'Bangkok Thailand', 'Phuket Thailand', '05-01-2022', '4:47 PM', 19, 572.84);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('39', 'Chiang Mai Thailand', 'Phnom Penh Cambodia', '02-03-2022', '5:43 PM', 19, 810.91);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('40', 'Singapore Singapore', 'Pattaya Thailand', '23-09-2022', '5:53 AM', 22, 209.8);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('41', 'Manila Philippines', 'Bandung Indonesia', '04-07-2022', '8:49 AM', 16, 904.78);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('42', 'Yangon Myanmar', 'Phnom Penh Cambodia', '28-05-2022', '4:06 AM', 22, 601.59);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('43', 'Kuala Lumpur Malaysia', 'Penang Malaysia', '21-01-2022', '6:52 AM', 2, 829.5);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('44', 'Singapore Singapore', 'Vientiane Laos', '17-01-2022', '1:42 PM', 13, 523.21);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('45', 'Da Nang Vietnam', 'Vientiane Laos', '03-07-2022', '4:06 AM', 21, 947.65);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('46', 'Da Nang Vietnam', 'Phnom Penh Cambodia', '15-11-2022', '1:56 AM', 1, 175.0);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('47', 'Jakarta Indonesia', 'Luang Prabang Laos', '15-03-2022', '12:24 PM', 19, 279.33);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('48', 'Jakarta Indonesia', 'Pattaya Thailand', '05-04-2022', '5:45 AM', 21, 138.09);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('49', 'Jakarta Indonesia', 'Pattaya Thailand', '16-09-2022', '1:44 PM', 4, 72.34);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('50', 'Da Nang Vietnam', 'Bandung Indonesia', '26-06-2022', '8:55 PM', 2, 775.22);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('51', 'Kuala Lumpur Malaysia', 'Phuket Thailand', '30-03-2022', '1:49 PM', 6, 788.07);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('52', 'Da Nang Vietnam', 'Vientiane Laos', '13-08-2022', '10:39 AM', 4, 880.41);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('53', 'Siem Reap Cambodia', 'Vientiane Laos', '24-03-2022', '9:45 PM', 23, 836.26);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('54', 'Manila Philippines', 'Luang Prabang Laos', '30-08-2022', '8:44 PM', 19, 293.77);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('55', 'Chiang Mai Thailand', 'Pattaya Thailand', '07-07-2022', '9:13 PM', 22, 281.15);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('56', 'Singapore Singapore', 'Phnom Penh Cambodia', '30-01-2022', '6:36 AM', 2, 913.65);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('57', 'Kuala Lumpur Malaysia', 'Bandung Indonesia', '28-11-2022', '5:37 AM', 22, 694.42);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('58', 'Chiang Mai Thailand', 'Bandung Indonesia', '19-12-2022', '5:38 AM', 23, 308.46);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('59', 'Manila Philippines', 'Phuket Thailand', '24-08-2022', '2:25 AM', 6, 346.18);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('60', 'Manila Philippines', 'Phuket Thailand', '03-11-2022', '5:38 PM', 8, 414.77);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('61', 'Singapore Singapore', 'Bali Indonesia', '12-01-2022', '3:48 PM', 9, 799.32);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('62', 'Bangkok Thailand', 'Phnom Penh Cambodia', '22-08-2022', '6:58 AM', 13, 836.66);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('63', 'Chiang Mai Thailand', 'Pattaya Thailand', '05-02-2022', '12:48 AM', 18, 471.72);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('64', 'Yangon Myanmar', 'Vientiane Laos', '09-06-2022', '8:34 PM', 6, 245.35);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('65', 'Da Nang Vietnam', 'Bali Indonesia', '05-06-2022', '3:22 AM', 12, 691.1);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('66', 'Siem Reap Cambodia', 'Bali Indonesia', '05-12-2022', '1:00 PM', 22, 100.31);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('67', 'Jakarta Indonesia', 'Luang Prabang Laos', '22-05-2022', '3:30 PM', 6, 105.51);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('68', 'Da Nang Vietnam', 'Penang Malaysia', '30-12-2022', '1:26 PM', 8, 237.45);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('69', 'Kuala Lumpur Malaysia', 'Phnom Penh Cambodia', '15-01-2022', '12:36 AM', 6, 360.95);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('70', 'Singapore Singapore', 'Boracay Philippines', '06-05-2022', '10:45 PM', 14, 999.23);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('71', 'Chiang Mai Thailand', 'Phuket Thailand', '28-12-2022', '2:26 PM', 22, 219.49);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('72', 'Bangkok Thailand', 'Penang Malaysia', '21-01-2022', '9:50 PM', 18, 518.56);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('73', 'Bangkok Thailand', 'Bandung Indonesia', '15-10-2022', '4:04 PM', 23, 304.61);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('74', 'Hanoi Vietnam', 'Pattaya Thailand', '23-04-2022', '12:09 PM', 22, 553.92);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('75', 'Yangon Myanmar', 'Pattaya Thailand', '18-01-2022', '6:53 PM', 8, 258.45);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('76', 'Manila Philippines', 'Phnom Penh Cambodia', '13-04-2022', '7:10 PM', 5, 601.9);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('77', 'Manila Philippines', 'Bali Indonesia', '02-03-2022', '8:17 PM', 19, 130.43);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('78', 'Singapore Singapore', 'Luang Prabang Laos', '08-08-2022', '1:57 AM', 19, 893.91);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('79', 'Bangkok Thailand', 'Phuket Thailand', '13-05-2022', '6:27 AM', 1, 259.48);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('80', 'Yangon Myanmar', 'Boracay Philippines', '13-07-2022', '6:39 AM', 8, 279.7);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('81', 'Chiang Mai Thailand', 'Phnom Penh Cambodia', '18-02-2022', '4:30 PM', 11, 219.0);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('82', 'Yangon Myanmar', 'Penang Malaysia', '28-07-2022', '6:47 PM', 7, 347.73);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('83', 'Da Nang Vietnam', 'Phnom Penh Cambodia', '15-01-2022', '7:39 AM', 1, 945.74);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('84', 'Singapore Singapore', 'Boracay Philippines', '23-03-2022', '6:02 AM', 9, 670.0);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('85', 'Jakarta Indonesia', 'Phuket Thailand', '11-09-2022', '4:06 AM', 18, 628.96);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('86', 'Chiang Mai Thailand', 'Bali Indonesia', '03-02-2022', '10:59 AM', 21, 205.0);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('87', 'Yangon Myanmar', 'Phuket Thailand', '10-12-2022', '5:52 AM', 20, 651.64);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('88', 'Kuala Lumpur Malaysia', 'Luang Prabang Laos', '30-10-2022', '7:10 AM', 10, 243.27);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('89', 'Chiang Mai Thailand', 'Pattaya Thailand', '01-01-2022', '10:53 PM', 8, 786.66);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('90', 'Siem Reap Cambodia', 'Phuket Thailand', '08-11-2022', '2:18 PM', 20, 244.54);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('91', 'Chiang Mai Thailand', 'Vientiane Laos', '09-09-2022', '8:14 PM', 4, 342.39);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('92', 'Chiang Mai Thailand', 'Phnom Penh Cambodia', '15-05-2022', '2:29 PM', 5, 556.95);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('93', 'Hanoi Vietnam', 'Pattaya Thailand', '07-04-2022', '4:24 AM', 16, 614.93);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('94', 'Kuala Lumpur Malaysia', 'Phnom Penh Cambodia', '26-01-2022', '5:02 PM', 11, 595.96);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('95', 'Da Nang Vietnam', 'Vientiane Laos', '21-09-2022', '4:56 PM', 17, 271.5);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('96', 'Singapore Singapore', 'Phnom Penh Cambodia', '30-11-2022', '6:11 AM', 15, 199.23);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('97', 'Siem Reap Cambodia', 'Pattaya Thailand', '06-12-2022', '5:10 PM', 15, 705.48);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('98', 'Da Nang Vietnam', 'Phuket Thailand', '03-08-2022', '7:18 AM', 22, 287.93);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('99', 'Yangon Myanmar', 'Phnom Penh Cambodia', '15-08-2022', '4:07 PM', 15, 274.19);
insert into flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) values ('100', 'Chiang Mai Thailand', 'Phnom Penh Cambodia', '30-07-2022', '11:35 AM', 2, 292.98);
