var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Api;
(function (Api) {
    var path = "https://jsonplaceholder.typicode.com";
    function getPosts(max) {
        if (max === void 0) { max = 100; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(path + "/posts")
                        .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, res.json()];
                        });
                    }); })
                        .then(function (posts) {
                        return posts.map(function (x) { return new Post(x); }).slice(0, max);
                    })];
            });
        });
    }
    Api.getPosts = getPosts;
    function getUser(id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(path + "/users/" + id)
                        .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, res.json()];
                        });
                    }); })
                        .then(function (user) {
                        user = new User(user);
                        return user;
                    })];
            });
        });
    }
    Api.getUser = getUser;
    function applyData(object, data) {
        for (var key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                var v = data[key];
                object[key] = v;
            }
        }
    }
    var Post = /** @class */ (function () {
        function Post(post) {
            applyData(this, post);
        }
        Post.prototype.makeSmallContainer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var postObj, head, h3, authorSpan, a, user, body;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            postObj = document.createElement("div");
                            postObj.classList.add("post-obj");
                            postObj.setAttribute("data-id", this.id.toString());
                            postObj.setAttribute("data-userId", this.userId.toString());
                            head = document.createElement("div");
                            head.classList.add("post-head");
                            h3 = document.createElement("h3");
                            h3.classList.add("post-title");
                            h3.append(this.title);
                            authorSpan = document.createElement("span");
                            authorSpan.classList.add("post-username");
                            authorSpan.append("by ");
                            a = document.createElement("a");
                            a.href = "profile.html?userId=" + this.userId;
                            return [4 /*yield*/, getUser(this.userId)];
                        case 1:
                            user = _a.sent();
                            a.append(user.name);
                            authorSpan.append(a);
                            head.append(h3);
                            head.append(authorSpan);
                            body = document.createElement("p");
                            body.classList.add("post-body");
                            body.append(this.body);
                            postObj.append(head);
                            postObj.append(body);
                            return [2 /*return*/, postObj];
                    }
                });
            });
        };
        Post.prototype.makeBigContainer = function () {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        return Post;
    }());
    Api.Post = Post;
    var User = /** @class */ (function () {
        function User(user) {
            applyData(this, user);
        }
        return User;
    }());
    Api.User = User;
})(Api || (Api = {}));
