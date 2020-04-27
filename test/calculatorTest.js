let chai = require('chai');
let sinon = require('sinon');
let expect = chai.expect;
let addition = require('../modules/addition');
let calculation = require('../modules/calculator');

describe('calculator Test', () => {

    it('it should calculate 2 nos', (done) => {
        let add = sinon.stub(addition, "add")
        add.withArgs(1, 4).resolves(5);
        calculation.cal(1, 4).then(function (result) {
            expect(result).to.equals(5);
            done();
        }).catch(function (err) {
            done(err);
        })
        add.restore();
    })

    it('Add twice', (done) => {
        let add = sinon.stub(addition, "add").onFirstCall().resolves(5).onCall(1).resolves(9)
        add.withArgs(sinon.match.any, sinon.match.any)
        calculation.calculate(1, 4).then(function (result) {
            expect(result).to.equals(9);
            done();
        }).catch(function (err) {
            done(err);
        })
        add.restore();
    })
})

