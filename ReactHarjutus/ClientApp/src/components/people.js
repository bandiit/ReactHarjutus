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
var People = /** @class */ (function (_super) {
    __extends(People, _super);
    function People() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            people: [
                { id: 1, name: "Luke", gender: "male", dateOfBirth: "01.12.1900", weight: 95.6, height: 180.5 },
                { id: 2, name: "Mary", gender: "female", dateOfBirth: "01.12.1850", weight: 50.6, height: 150.5 },
                { id: 3, name: "Thomas", gender: "male", dateOfBirth: "01.12.1920", weight: 95.6, height: 160.5 },
                { id: 4, name: "Sarah", gender: "female", dateOfBirth: "01.12.1930", weight: 92.0, height: 170.5 },
                { id: 5, name: "Jeff", gender: "male", dateOfBirth: "01.12.1940", weight: 120.0, height: 140.5 },
            ]
        };
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
                React.createElement("tbody", null, this.state.people.map(function (person) {
                    return React.createElement(PersonDataRow, { person: person, key: person.id, onCLickHandler: function () { return _this._changeLocation(person); } });
                })))));
    };
    return People;
}(React.PureComponent));
exports.People = People;
var PersonDataRow = function (props) { return (React.createElement("tr", { onClick: props.onCLickHandler },
    React.createElement("td", null, props.person.name),
    React.createElement("td", null, props.person.gender),
    React.createElement("td", null, props.person.dateOfBirth))); };
//# sourceMappingURL=people.js.map