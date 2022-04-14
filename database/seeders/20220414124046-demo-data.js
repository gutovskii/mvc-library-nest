'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'Си++ и компьютерная графика',
          year_of_publication: 2003,
          pages: 351,
          description: 'Лекции и практикум по программированию на Си++',
        },
        {
          title: 'Программирование на языке Go',
          year_of_publication: 2015,
          pages: 198,
          description: 'Книга про Go',
        },
        {
          title: 'Python for Data Analysis',
          year_of_publication: 2010,
          pages: 69,
          description: 'Книга про Python для анализа данных',
        },
        {
          title: 'Thinking of Java (4th Edition)',
          year_of_publication: 2012,
          pages: 212,
          description: 'Книга про Философию Java, 4-ое издание',
        },
        {
          title: 'JavaScript Pocket Reference',
          year_of_publication: 2009,
          pages: 253,
          description: 'Книга про JavaScript',
        },
        {
          title: 'Adaptive Code via C#',
          year_of_publication: 2013,
          pages: 352,
          description: 'Книга про C#',
        },
        {
          title: 'PHP and MySQL Web Development',
          year_of_publication: 2012,
          pages: 158,
          description: 'Книга про PHP и MySQL',
        },
        {
          title: 'Статический анализ и визуализация данных с помощью R',
          year_of_publication: 2008,
          pages: 176,
          description: 'Название говорит само за себя',
        },
        {
          title: 'The Internet of Things',
          year_of_publication: 2015,
          pages: 145,
          description: 'Книга про Интернет Вещей',
        },
        {
          title: 'Sketching User Experience',
          year_of_publication: 2011,
          pages: 73,
          description: 'Книга про создание хорошего UX',
        },
        {
          title: 'InDesign CS6',
          year_of_publication: 2003,
          pages: 192,
          description: 'Книга про программу InDesign CS6',
        },
        {
          title: 'Адаптивный дизайн',
          year_of_publication: 2015,
          pages: 97,
          description: 'Книга про адаптивный дизайн',
        },
        {
          title: 'Computer coding for kids',
          year_of_publication: 2000,
          pages: 500,
          description: 'Книга про компьютерный кодинг для детей',
        }
      ]
    );
    await queryInterface.bulkInsert(
      'authors',
      [
        { name: 'Андрей Богуславский' },
        { name: 'Марк Саммерфильд' },
        { name: 'Дэвид Флэнаган' },
        { name: 'Уэс Маккинни' },
        { name: 'Брюс Эккель' },
        { name: 'Гэри Маклин Холл' },
        { name: 'Люк Веллинг' },
        { name: 'Джереми Блум' },
        { name: 'Сэмюэл Грингард' },
        { name: 'Сет Гринберг' },
        { name: 'Сергей Мастицкий' },
        { name: 'Джон Вудкок' },
        { name: 'Александр Сераков' },
        { name: 'Тим Кедлек' }
      ]
    );
    await queryInterface.bulkInsert(
      'books_authors',
      [
        {
          book_id: 1,
          author_id: 1
        },
        {
          book_id: 2,
          author_id: 2
        },
        {
          book_id: 3,
          author_id: 4
        },
        {
          book_id: 3,
          author_id: 5
        },
        {
          book_id: 4,
          author_id: 5
        },
        {
          book_id: 5,
          author_id: 3
        },
        {
          book_id: 6,
          author_id: 3
        },
        {
          book_id: 6,
          author_id: 6
        },
        {
          book_id: 6,
          author_id: 7
        },
        {
          book_id: 7,
          author_id: 7
        },
        {
          book_id: 8,
          author_id: 11
        },
        {
          book_id: 9,
          author_id: 9
        },
        {
          book_id: 10,
          author_id: 10
        },
        {
          book_id: 11,
          author_id: 13
        },
        {
          book_id: 12,
          author_id: 14
        },
        {
          book_id: 13,
          author_id: 12
        },
      ]
    );
    await queryInterface.bulkInsert(
      'books-statistics',
      [
        { book_id: 1 },
        { book_id: 2 },
        { book_id: 3 },
        { book_id: 4 },
        { book_id: 5 },
        { book_id: 6 },
        { book_id: 7 },
        { book_id: 8 },
        { book_id: 9 },
        { book_id: 10 },
        { book_id: 11 },
        { book_id: 12 },
        { book_id: 13 }
      ]
    );
    await queryInterface.bulkInsert(
      'books-images',
      [
        {
          fileName: '1.jpg',
          book_id: 1
        },
        {
          fileName: '2.jpg',
          book_id: 2
        },
        {
          fileName: '3.jpg',
          book_id: 3
        },
        {
          fileName: '4.jpg',
          book_id: 4
        },
        {
          fileName: '5.jpg',
          book_id: 5
        },
        {
          fileName: '6.jpg',
          book_id: 6
        },
        {
          fileName: '7.jpg',
          book_id: 7
        },
        {
          fileName: '8.jpg',
          book_id: 8
        },
        {
          fileName: '9.jpg',
          book_id: 9
        },
        {
          fileName: '10.jpg',
          book_id: 10
        },
        {
          fileName: '11.jpg',
          book_id: 11
        },
        {
          fileName: '12.jpg',
          book_id: 12
        },
        {
          fileName: '13.jpg',
          book_id: 13
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books-images', null, {});
    await queryInterface.bulkDelete('books-statistics', null, {});
    await queryInterface.bulkDelete('books_authors', null, {});
    await queryInterface.bulkDelete('authors', null, {});
    await queryInterface.bulkDelete('books', null, { cascade: true });
  }
};
