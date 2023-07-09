const lottery = require('../lottery.js');
const { assert, expect } = require('chai');


describe("Tests for Lottery", function () {

    describe("Tests for buying lottery ticket", function () {


        it("Should throw an error if buy is false", function () {

            assert.throw(() => lottery.buyLotteryTicket(5, 5, false), "Unable to buy lottery ticket!");
        });

        it("Should throw an error", function () {

            assert.throw(() => lottery.buyLotteryTicket(-1, 3, true), "Invalid input!");
            assert.throw(() => lottery.buyLotteryTicket(5, 0, true), "Invalid input!");
            assert.throw(() => lottery.buyLotteryTicket("5", 3, true), "Invalid input!");
            assert.throw(() => lottery.buyLotteryTicket(5, "3", true), "Invalid input!");
            assert.throw(() => lottery.buyLotteryTicket(5, 3, 7), "Invalid input!");
        });

        it("Should buy lottery ticket", function () {

            assert.equal(lottery.buyLotteryTicket(5, 5, true), 'You bought 5 tickets for 25$.');

        });
    });


    describe("Tests for checking lottery ticket", function () {

        it("Should throw error if ticket numbers is invalid", function () {

            let ticketNumbers = {name: "First"};
            let luckyNumbers = [13, 47, 56, 72, 1, 3];
            assert.throw(() => lottery.checkTicket(ticketNumbers, luckyNumbers), "Invalid input!");
        });


        it("Should throw an error if lucky numbers is invalid", function() {

            let ticketNumbers = [5, 10, 14, 2, 3, 4];
            let luckyNumbers = {name: "First"};
            assert.throw(() => lottery.checkTicket(ticketNumbers, luckyNumbers), "Invalid input!");
        });

        it("Should throw an error if length of ticket numbers is less than 6", function() {

            let ticketNumbers = [5, 10, 14, 2, 3];
            let luckyNumbers = [5, 10, 14, 2, 3, 4];
            assert.throw(() => lottery.checkTicket(ticketNumbers, luckyNumbers), "Invalid input!");
        });

        it("Should throw an error if length of lucky numbers is less than 6", function() {

            let ticketNumbers = [5, 10, 14, 2, 3, 4];
            let luckyNumbers = [5, 10, 14, 2, 3];
            assert.throw(() => lottery.checkTicket(ticketNumbers, luckyNumbers), "Invalid input!");
        });

        it("Should have between 3 and 5 winning numbers", function() {

            let ticketNumbers = [5, 10, 14, 2, 3, 4];
            let luckyNumbers = [5, 10, 14, 2, 3, 77];
            assert.equal(lottery.checkTicket(ticketNumbers, luckyNumbers), "Congratulations you win, check your reward!");
        });

        it("Should win the jackpot", function() {

            let ticketNumbers = [5, 10, 14, 2, 3, 4];
            let luckyNumbers = [5, 10, 14, 2, 3, 4];
            assert.equal(lottery.checkTicket(ticketNumbers, luckyNumbers), "You win the JACKPOT!!!");
        });
    });

    describe("Tests for second chance", function() {

        it("Should throw an error if input is invalid", function() {

            let number = "5";
            let secondWinningNumbers = [1,2,3,4,5,6];

            assert.throw(() => lottery.secondChance(number, secondWinningNumbers), "Invalid input!");
        });

        it("Should throw an error if second winning numbers is invalid", function() {

            let number = 5;
            let secondWinningNumbers = {name: "Pesho"};

            assert.throw(() => lottery.secondChance(number, secondWinningNumbers), "Invalid input!");
        });

        it("Should win second prize", function() {

            let number = 5;
            let secondWinningNumbers = [1, 2, 3, 4, 5, 6];

            assert.equal(lottery.secondChance(number, secondWinningNumbers),"You win our second chance prize!");
        });

        it("Should not win second prize", function() {

            let number = 10;
            let secondWinningNumbers = [1, 2, 3, 4, 5, 6];

            assert.equal(lottery.secondChance(number, secondWinningNumbers),"Sorry, your ticket didn't win!");
        });
    });
});
