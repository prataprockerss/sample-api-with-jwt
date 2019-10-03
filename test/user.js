const chai = require("chai");
const chaiHTTP = require("chai-http");
const app = require("../app");
const should = chai.should();

chai.use(chaiHTTP);
const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIifQ.AmEZR48Ww-8CBajiCMeYW0YbUHDc5zV_QQp9p2jlHr4"

describe("All User Test", () => {
    describe("get user listing", () => {
        it("Check for empty header", done => {
            // this.timeout(15000);
            let headers = {};
            chai.request(app)
                .get("/user")
                .set(headers)
                .end((err, res) => {
                    should.exist(res);
                    res.should.have.status(403);
                    res.body.should.be.a('object');
                    res.body.status.should.be.a('number');
                    res.body.status.should.be.eql(0);
                    res.body.msg.should.be.eql('Authentication token required');
                    done();
                });
        });

        it("Check for invalid token format", done => {
            // this.timeout(15000);
            let headers = {
                token: "invalidate token"
            };
            chai.request(app)
                .get("/user")
                .set(headers)
                .end((err, res) => {
                    should.exist(res);
                    res.should.have.status(401);
                    res.body.should.be.a('object');
                    res.body.status.should.be.a('number');
                    res.body.status.should.be.eql(0);
                    res.body.msg.should.be.eql('Authentication Error');
                    res.body.err.message.should.be.eql('jwt malformed');
                    done();
                });
        });
        it("Check for invalid token with proper format", done => {
            // this.timeout(15000);
            let headers = {
                token: "token.is.invalid"
            };
            chai.request(app)
                .get("/user")
                .set(headers)
                .end((err, res) => {
                    should.exist(res);
                    res.should.have.status(401);
                    res.body.should.be.a('object');
                    res.body.status.should.be.a('number');
                    res.body.status.should.be.eql(0);
                    res.body.msg.should.be.eql('Authentication Error');
                    res.body.err.message.should.be.eql('invalid token');
                    done();
                });
        });

        it("User Listing without query params", done => {
            // this.timeout(15000);
            let headers = {
                token: validToken
            };
            let query = {}
            chai.request(app)
                .get("/user")
                .set(headers)
                .query(query)
                .end((err, res) => {
                    should.exist(res);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.status.should.be.a('number');
                    res.body.status.should.be.eql(1);
                    res.body.data.should.be.a('array');
                    res.body.msg.should.be.eql('User Listing');
                    done();
                });
        });

        it("User Listing without query params", done => {
            // this.timeout(15000);
            let headers = {
                token: validToken
            };
            let query = { id : 2}
            chai.request(app)
                .get("/user")
                .set(headers)
                .query(query)
                .end((err, res) => {
                    should.exist(res);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.status.should.be.a('number');
                    res.body.status.should.be.eql(1);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(1);
                    res.body.msg.should.be.eql('User Listing');
                    done();
                });
        });

    });
    describe("User Listing ", () => {});
});
