class PrintEditionItem{

	constructor (name, releaseDate, pagesCount, state = 100, type = null){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	}

	set state(stateStatus){
		if (stateStatus < 0){
			this.state = 0;
		} else if (stateStatus > 100){
			this.state = 0;
		} else {
		this._state = stateStatus;
	}
}
	get state(){
		return this._state;
	}

	fix(){
		this.state = this.state * 1.5;
	}
}


const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


class Magazine extends PrintEditionItem {
	constructor (type){
		super(type);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor (author, type){
		super(author);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor (type){
		super(type);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor (type){
		super(type);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor (type){
		super(type);
		this.type = "detective";
	}
}

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15


  class Library {
	  constructor(name, books) {
		  this.name = name;
		  this.books = [];
	  }

	  addBook(book){
		this.book = book;
		  if (state > 30){
			  this.books.push(book)
		  }
	  }
	  findBookBy(type, value){
		  this.type = type;
		  this.value = value;
		  if (this.findBookBy === true){
			  return this.book;
		  	} else {
			  return nill
			}
	  }
	  giveBookByName(bookName){
		  this.bookName = bookName;
		  if (bookName )
	  }
  }