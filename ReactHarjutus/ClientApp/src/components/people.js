"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var react_redux_1 = require("react-redux");
var People = /** @class */ (function (_super) {
    __extends(People, _super);
    function People() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._changeLocation = function (person) {
            _this.props.history.push("/people/" + person.id, { person: person });
        };
        return _this;
    }
    People.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "People"),
            React.createElement(reactstrap_1.Table, { striped: true, hover: true, size: "sm" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "Gender"),
                        React.createElement("th", null, "Date of birth"))),
                React.createElement("tbody", null,
                    this.props.people.map(function (person) {
                        return React.createElement(PersonDataRow, { person: person, key: person.id, onCLickHandler: function () { return _this._changeLocation(person); } });
                    }),
                    this.props.people.map(function (person) {
                        return React.createElement(PersonDeleteRow, { person: person, key: person.id, onCLickHandler: function () { return _this._changeLocation(person); } });
                    })))));
    };
    return People;
}(React.PureComponent));
exports.default = react_redux_1.connect(function (state) { return state.people; })(People);
var PersonDataRow = function (props) { return (React.createElement("tr", { onClick: props.onCLickHandler },
    React.createElement("td", null, props.person.name),
    React.createElement("td", null, props.person.gender),
    React.createElement("td", null, props.person.dateOfBirth))
// <a href="javascript: delete Person[props.person.id];">Kustuta</a> //PeopleStore.Person
); };
var PersonDeleteRow = function (props) { return (
//<tr><a href="javascript: delete PeopleStore.Person[props.person.id];">Kustuta</a></tr>
React.createElement("button", { onClick: props.onCLickHandler }, "delete PeopleStore.Person[props.person.id];")
// <a href="javascript: delete Person[props.person.id];">Kustuta</a> //PeopleStore.Person
); };
//# sourceMappingURL=people.js.map