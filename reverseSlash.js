/**
 * Run with following from console:
 * node [location_of_this_file] "[path_you_want_to_reverse]"
 *
 * Examples:
 * #1 Double backward slash to single forward slash
 * node C:/Utils/reverseSlash.js "C:\\Users\\user\\Documents\\Coding\\JavaScriptStuff"
 * #2 backward slash to forward slash
 * node C:/Utils/reverseSlash.js "C:\Users\user\Documents\Coding\JavaScriptStuff"
 * #3 forward slash to backward slash
 * node C:/Utils/reverseSlash.js "C:/Users/user/Documents/Coding/JavaScriptStuff"
 *
 */

const argument = process.argv[2] || `N/A`;
const rawString = String.raw({ raw: argument });

if (rawString.includes("/")) {
  console.log(rawString.replace(/\//g, "\\"));
} else if (rawString.includes("\\")) {
  console.log(rawString.replace(/\\/g, "/"));
}
