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
var PersonDetails = /** @class */ (function (_super) {
    __extends(PersonDetails, _super);
    function PersonDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonDetails.prototype.render = function () {
        var personId = this.props.match.params.personId;
        var person = this.props.location.state.person;
        //let person = this.props.people.find(x => x.id == +personId);
        if (person === undefined) {
            return React.createElement("h1", null, "Person not found");
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null,
                "Person ",
                person.id),
            React.createElement(reactstrap_1.Table, { striped: true, hover: true, size: "sm" },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "Name"),
                        React.createElement("td", null, person.name)),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Gender"),
                        React.createElement("td", null, person.gender)),
                    React.createElement("tr", null,
                        React.createElement("td", null, "DateofBirth"),
                        React.createElement("td", null, person.dateOfBirth)),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Weight"),
                        React.createElement("td", null, person.weight)),
                    React.createElement("a", { href: "javascript: history.go(-1)" }, "Tagasi")))));
    };
    return PersonDetails;
}(React.PureComponent));
exports.default = react_redux_1.connect(function (state) { return state.people; })(PersonDetails);
//# sourceMappingURL=PeopleDetails.js.map