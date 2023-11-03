CREATE TABLE tt_content (
	tx_rhtheme_akkordeon int(11) unsigned DEFAULT '0' NOT NULL,
);

CREATE TABLE tx_rhtheme_akkordeon (
    parentuid int(11) DEFAULT '0' NOT NULL,
    parenttable varchar(255) DEFAULT '' NOT NULL,
    title varchar(255) DEFAULT '' NOT NULL,
	text text,
    image text,
	link text
);
