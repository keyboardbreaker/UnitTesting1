const expect = require('chai').expect;
const timesItFive = require('./index').timesItFive; //real
const sinon = require('sinon');
let frankStub;
const proxyquire = require('proxyquire');
let timesItFive2;

describe('index', function(){
    beforeEach(() => {
        frankStub = sinon.spy();
        timesItFive2 = proxyquire('./index', { './frank': frankStub }).timesItFive;
    });

    describe('timesItFive', function(){
        it('should multiply input by 5', function(){
            expect(timesItFive(2)).to.eql(10);
        });

        it('should call frank', function(){
            timesItFive2(2);
            expect(frankStub.calledOnce).to.be.true;
            expect(frankStub.calledWith(10)).to.be.true;
        });
    });
});
