
// BoardMember that sets the following properties: name, homeState, and training.
// 1) boardMembers
// boardMember Constructor Function
//   "before all" hook:

function BoardMember (name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training
  }
   
  BoardMember.prototype.hook = function() {
    console.log(`before all ${this.name} ${this.homeState} ${this.training}` );
  };

  BoardMember.prototype.veto = function() {
    return (`No, I must disagree` );
  };

  BoardMember.prototype.approve = function() {
    return (`You can do that!`);
  };
  BoardMember.prototype.doCharity = function() {
    return (`I like to help people.`);
  };

  BoardMember.prototype.sayHi = function() {
    return (`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`);
  };
   
  BoardMember.prototype.releasePressStatement = function() {
    return (`You will see great things from Scuber.`);
  };
   
   
   
  let fadi = new BoardMember ('fadi', 'nv', 'lawyer');