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
var PersonDetails = /** @class */ (function (_super) {
    __extends(PersonDetails, _super);
    function PersonDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonDetails.prototype.render = function () {
        if (this.props.location.state == undefined) {
            return React.createElement("h1", null, "Person not found");
        }
        var person = this.props.location.state.person;
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
                    React.createElement("tr", null,
                        React.createElement("td", null, "Height"),
                        React.createElement("td", null, person.height)),
                    React.createElement("a", { href: "javascript: history.go(-1)" }, "Tagasi")))));
    };
    return PersonDetails;
}(React.PureComponent));
exports.PersonDetails = PersonDetails;
//# sourceMappingURL=PersonDetails.js.map