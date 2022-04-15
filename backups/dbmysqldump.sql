/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: authors
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2022-04-14 19:01:40',
  `updated_at` datetime NOT NULL DEFAULT '2022-04-14 19:01:40',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 15 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `year_of_publication` int(11) NOT NULL,
  `pages` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT '2022-04-14 19:01:40',
  `updated_at` datetime NOT NULL DEFAULT '2022-04-14 19:01:40',
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE = InnoDB AUTO_INCREMENT = 16 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books-images
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books-images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fileName` varchar(255) NOT NULL,
  `book_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `fileName` (`fileName`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `books-images_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 15 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books-statistics
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books-statistics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clicked` int(11) DEFAULT 0,
  `wishful` int(11) DEFAULT 0,
  `book_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `books-statistics_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 16 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books_authors
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books_authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `book_id` (`book_id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `books_authors_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `books_authors_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 18 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: sequelizemeta
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: authors
# ------------------------------------------------------------

INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    1,
    'Андрей Богуславский',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    2,
    'Марк Саммерфильд',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    3,
    'Дэвид Флэнаган',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    4,
    'Уэс Маккинни',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    5,
    'Брюс Эккель',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    6,
    'Гэри Маклин Холл',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    7,
    'Люк Веллинг',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    8,
    'Джереми Блум',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    9,
    'Сэмюэл Грингард',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    10,
    'Сет Гринберг',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    11,
    'Сергей Мастицкий',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    12,
    'Джон Вудкок',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    13,
    'Александр Сераков',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );
INSERT INTO
  `authors` (`id`, `name`, `created_at`, `updated_at`)
VALUES
  (
    14,
    'Тим Кедлек',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books
# ------------------------------------------------------------

INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    1,
    'Си++ и компьютерная графика',
    2003,
    351,
    'Лекции и практикум по программированию на Си++',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    2,
    'Программирование на языке Go',
    2015,
    198,
    'Книга про Go',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    3,
    'Python for Data Analysis',
    2010,
    69,
    'Книга про Python для анализа данных',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    4,
    'Thinking of Java (4th Edition)',
    2012,
    212,
    'Книга про Философию Java, 4-ое издание',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    5,
    'JavaScript Pocket Reference',
    2009,
    253,
    'Книга про JavaScript',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    6,
    'Adaptive Code via C#',
    2013,
    352,
    'Книга про C#',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    7,
    'PHP and MySQL Web Development',
    2012,
    158,
    'Книга про PHP и MySQL',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    8,
    'Статический анализ и визуализация данных с помощью R',
    2008,
    176,
    'Название говорит само за себя',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    9,
    'The Internet of Things',
    2015,
    145,
    'Книга про Интернет Вещей',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    10,
    'Sketching User Experience',
    2011,
    73,
    'Книга про создание хорошего UX',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    11,
    'InDesign CS6',
    2003,
    192,
    'Книга про программу InDesign CS6',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    12,
    'Адаптивный дизайн',
    2015,
    97,
    'Книга про адаптивный дизайн',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `year_of_publication`,
    `pages`,
    `description`,
    `created_at`,
    `updated_at`,
    `deleted_at`
  )
VALUES
  (
    13,
    'Computer coding for kids',
    2000,
    500,
    'Книга про компьютерный кодинг для детей',
    '2022-04-14 19:01:40',
    '2022-04-14 19:01:40',
    NULL
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books-images
# ------------------------------------------------------------

INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (1, '1.jpg', 1);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (2, '2.jpg', 2);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (3, '3.jpg', 3);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (4, '4.jpg', 4);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (5, '5.jpg', 5);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (6, '6.jpg', 6);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (7, '7.jpg', 7);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (8, '8.jpg', 8);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (9, '9.jpg', 9);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (10, '10.jpg', 10);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (11, '11.jpg', 11);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (12, '12.jpg', 12);
INSERT INTO
  `books-images` (`id`, `fileName`, `book_id`)
VALUES
  (13, '13.jpg', 13);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books-statistics
# ------------------------------------------------------------

INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (1, 0, 0, 1);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (2, 0, 0, 2);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (3, 0, 0, 3);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (4, 0, 0, 4);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (5, 0, 0, 5);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (6, 0, 0, 6);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (7, 0, 0, 7);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (8, 0, 0, 8);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (9, 0, 0, 9);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (10, 0, 0, 10);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (11, 0, 0, 11);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (12, 0, 0, 12);
INSERT INTO
  `books-statistics` (`id`, `clicked`, `wishful`, `book_id`)
VALUES
  (13, 0, 0, 13);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books_authors
# ------------------------------------------------------------

INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (1, 1, 1);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (2, 2, 2);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (3, 3, 4);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (4, 3, 5);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (5, 4, 5);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (6, 5, 3);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (7, 6, 3);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (8, 6, 6);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (9, 6, 7);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (10, 7, 7);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (11, 8, 11);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (12, 9, 9);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (13, 10, 10);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (14, 11, 13);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (15, 12, 14);
INSERT INTO
  `books_authors` (`id`, `book_id`, `author_id`)
VALUES
  (16, 13, 12);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: sequelizemeta
# ------------------------------------------------------------

INSERT INTO
  `sequelizemeta` (`name`)
VALUES
  ('20220414123241-init.js');

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
