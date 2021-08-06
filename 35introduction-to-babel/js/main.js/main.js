"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//Async iterators for big data sets

//https://jsonplaceholder.typicode.com/posts
//retrieves 100 records
//let's pretend that there are millions of records

//create an empty object
var posts = {};

//add custom iterator to it

posts[Symbol.iterator] = function () {
    var URL = "//jsonplaceholder.typicode.com/posts";
    return {
        next: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var rand, req, response, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                //async b.c we don't want the next .next() call to happen until the last is resolved. B.c we want to perform some operation on the real data i.e retrieved.
                                rand = Math.random();

                                console.log(rand);

                                if (!(rand > 0.7)) {
                                    _context.next = 4;
                                    break;
                                }

                                return _context.abrupt("return", { value: undefined, done: true });

                            case 4:
                                //above code is only to stop the .next() calls

                                //create request object
                                req = new Request(URL + ("?r=" + rand), {
                                    method: "GET",
                                    mode: "cors"
                                });
                                //fetch req

                                _context.next = 7;
                                return fetch(req);

                            case 7:
                                response = _context.sent;
                                _context.next = 10;
                                return response.json();

                            case 10:
                                data = _context.sent;

                                console.log("array of posts fetched", data);
                                return _context.abrupt("return", {
                                    value: data, done: false
                                });

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function next() {
                return _ref.apply(this, arguments);
            }

            return next;
        }()
    };
};

var output = document.getElementById("output");
var main = document.querySelector(".post-btn");

main.addEventListener("click", d);

function d(ev) {

    var iterator = posts[Symbol.iterator](); //posts is the object up above. the coustom iterator is now stored in iterator variable
    // console.log(iterator); //code doesn't work if I don't add this, no idea why
    //okk ..need to add semicolon on line 49, I think it can't differntiate the end of line as next line as an IIFY

    //we cannot use for of loop b.c it sends the next next() without earlier next() having resolved. So we need to call the .next() in an asynchronous way

    //IIFY :- Immediatly invoked function expression
    (function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return iterator.next();

                        case 2:
                            data = _context2.sent;
                            //the flow halts until we get data from iterator.next

                            if (data.value && !data.done) {
                                //if data is not undefined and done is false , do following
                                output.textContent += "\r\n" + data.value;
                                console.log("data received", data.value);
                                setTimeout(getData, 2000); //recursive function..function call itself , after certain period
                            } else {
                                //if it data.done is true means that .next() has stopped 
                                console.log("done", data.done);
                                output.textContent += "\r\n" + data.done;
                            }

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function getData() {
            return _ref2.apply(this, arguments);
        }

        return getData;
    })()();
}