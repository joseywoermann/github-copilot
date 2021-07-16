// a button that displays how often it has been clicked

const { Button } = require("sdk/ui/button/action");
const { Cc, Ci } = require("chrome");
const { Loader } = require("sdk/test/loader");
const { setTimeout } = require("sdk/timers");
const { data } = require("sdk/self");
const { setTimeout } = require("sdk/timers");
const { getMostRecentBrowserWindow } = require("sdk/window/utils");
const { isPrivate } = require("sdk/private-browsing");

const button = Button({
    id: "button",
    label: "Click me",
    icon: {
        16: "./icon-16.png",
        32: "./icon-32.png",
        64: "./icon-64.png",
    },
    onClick: function (state) {
        state.count++;
        this.label = "Clicked " + state.count + " times";
    },
});
