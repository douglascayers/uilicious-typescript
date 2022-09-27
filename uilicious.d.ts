/**
 * Type definitions for UIlicious.
 *
 * For documentation on these functions, see:
 * https://docs.uilicious.com
 *
 * For info about declaring global type definitions, see:
 * https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
 */

/**
 * Reference properties defined in the dataset for this test run.
 */
declare const DATA: Record<string, any>;

declare namespace I {
  /**
   * Goes to the specified url, optionally opening in a new tab.
   * If the URL is valid then always returns true, regardless the HTTP status.
   */
  function goTo(url: string, options?: { newTab: boolean }): boolean;
  function goTo$(url: string, options?: { newTab: boolean }): boolean;
  /**
   * Refreshes the current page.
   */
  function refreshPage(): void;
  /**
   * Switches to the next tab if no argument provided.
   * Switches to the N'th tab if a number is provided.
   * Switches to the tab with a page title if a string is provided.
   */
  function switchTab(tab?: string | number): void;
  /**
   * Closes the current tab.
   */
  function closeTab(): void;
  /**
   * Asserts that the browser is at a specific URL.
   * You can use an absolute URL or a relative URL.
   */
  function amAt(url: string): void;
  function amAt$(url: string): boolean;
  /**
   * Clears an input field.
   *
   * Warning, as of Feb '22, if the target can't be found then
   * a random field might still be cleared anyways.
   */
  function clear(field: string): void;
  /**
   * Fills in a form field.
   * Alias for `fillField`.
   */
  function fill(field: string, value: string | number | boolean): void;
  function fill$(field: string, value: string | number | boolean): boolean;
  /**
   * Fills in a form field.
   * Alias for `fill`.
   */
  function fillField(field: string, value: string | number | boolean): void;
  function fillField$(field: string, value: string | number | boolean): boolean;
  /**
   * Asserts that the form is filled with a specific value.
   */
  function filled(field: string, value: string | number | boolean): void;
  function filled$(field: string, value: string | number | boolean): boolean;
  /**
   * Select a dropdown, checkbox, or radio button.
   */
  function select(field: string, value?: string): void;
  function select$(field: string, value?: string): boolean;
  /**
   * Asserts that a dropdown option, checkbox, or radio button is selected.
   */
  function selected(field: string, value?: string): void;
  function selected$(field: string, value?: string): boolean;
  /**
   * Deselect a dropdown option, checkbox, or a radio button.
   */
  function deselect(field: string, value?: string): void;
  function deselect$(field: string, value?: string): boolean;
  /**
   * Asserts that a dropdown option, checkbox, or radio button is NOT selected.
   */
  function deselected(field: string, value?: string): void;
  function deselected$(field: string, value?: string): boolean;
  /**
   * Upload a file.
   */
  function upload(field: string, pathToFile: string): void;
  /**
   * Click on an element.
   */
  function click(target: string): void;
  function click(target: string, x: number, y: number): void;
  function click$(target: string): boolean;
  function click$(target: string, x: number, y: number): boolean;
  /**
   * Doubleclick on an element.
   */
  function doubleClick(target: string): void;
  function doubleClick(target: string, x: number, y: number): void;
  function doubleClick$(target: string): boolean;
  function doubleClick$(target: string, x: number, y: number): boolean;
  /**
   * Right click on an element.
   */
  function rightClick(target: string): void;
  function rightClick(target: string, x: number, y: number): void;
  function rightClick$(target: string): boolean;
  function rightClick$(target: string, x: number, y: number): boolean;
  /**
   * Hover on an element.
   */
  function hoverOn(target: string): void;
  function hoverOn$(target: string): boolean;
  /**
   * Drags an element to another target element
   */
  function dragTo(element: string, target: string): void;
  function dragTo$(element: string, target: string): boolean;
  /**
   * Drags an element directionally by (x,y) pixels right and down.
   */
  function dragBy(element: string, x: number, y: number): void;
  function dragBy$(element: string, x: number, y: number): boolean;
  /**
   * Drags an element up by a given number of pixels.
   */
  function dragUp(element: string, y: number): void;
  function dragUp$(element: string, y: number): boolean;
  /**
   * Drags an element down by a given number of pixels.
   */
  function dragDown(element: string, y: number): void;
  function dragDown$(element: string, y: number): boolean;
  /**
   * Drags an element left by a given number of pixels.
   */
  function dragLeft(element: string, x: number): void;
  function dragLeft$(element: string, x: number): boolean;
  /**
   * Drags an element right by a given number of pixels.
   */
  function dragRight(element: string, x: number): void;
  function dragRight$(element: string, x: number): boolean;
  /**
   * Scrolls the page horizontally and vertically by a given number of pixels.
   */
  function scrollBy(x: number, y: number): void;
  /**
   * Scrolls the page up by a given number of pixels.
   */
  function scrollUp(y: number): void;
  /**
   * Scrolls the page down by a given number of pixels.
   */
  function scrollDown(y: number): void;
  /**
   * Scrolls the page left by a given number of pixels.
   */
  function scrollLeft(x: number): void;
  /**
   * Scrolls the page right by a given number of pixels.
   */
  function scrollRight(x: number): void;
  /**
   * Scrolls the given coordinate of the page.
   */
  function scrollTo(x: number, y: number): void;
  /**
   * Scroll to the top of the page.
   */
  function scrollToTop(): void;
  /**
   * Scroll to the bottom of the page.
   */
  function scrollToBottom(): void;
  /**
   * Type a key or a string of keys.
   * Alias for `press`.
   *
   * For special keys, spell out their name:
   *    Delete
   *    Backspace
   *    Enter
   *    Shift
   *    Control
   *    Alt
   */
  function type(key: string): void;
  /**
   * Simultaneously type two keys.
   * Example: I.type(["Shift", "a"])
   */
  function type(chord: Array<string>): void;
  /**
   * Press a key or a string of keys.
   * Alias for `type`.
   *
   * For special keys, spell out their name:
   *    Delete
   *    Backspace
   *    Enter
   *    Shift
   *    Control
   *    Alt
   */
  function press(key: string): void;
  /**
   * Simultaneously press two keys.
   * Example: I.press(["Shift", "a"])
   */
  function press(chord: Array<string>): void;
  /**
   * Presses the `Enter` key.
   * Alias for `press('Enter')`.
   */
  function pressEnter(): void;
  /**
   * Presses the `Up` arrow key.
   * Alias for `press('Up')`.
   */
  function pressUp(): void;
  /**
   * Presses the `Down` arrow key.
   * Alias for `press('Down')`.
   */
  function pressDown(): void;
  /**
   * Presses the `Left` arrow key.
   * Alias for `press('Left')`.
   */
  function pressLeft(): void;
  /**
   * Presses the `Right` key.
   * Alias for `press('Right')`.
   */
  function pressRight(): void;
  /**
   * Presses the `Tab` key.
   * Alias for `press('Tab')`.
   */
  function pressTab(): void;
  /**
   * Assert that an text or element is visible.
   */
  function see(target: string): void;
  function see$(target: string): boolean;
  /**
   * Assert that an text or element is NOT visible.
   */
  function dontSee(target: string): void;
  function dontSee$(target: string): boolean;
  /**
   * Assert the number of occurances for a text or element.
   */
  function count(target: string, n: number): void;
  /**
   * Assert the title of the current page.
   */
  function seePageTitle(title: string): void;
  function seePageTitle$(title: string): boolean;
  /**
   * Get the number of occurances of a text or element.
   */
  function getCount(target: string): number;
  /**
   * Get the text content of an element.
   */
  function getText(target: string): string | null;
  /**
   * Get the value of an input element.
   */
  function getValue(target: string): string | null;
  /**
   * Get the title of the current page.
   */
  function getPageTitle(): string;
  /**
   * Wait for a given amount of seconds.
   */
  function wait(seconds: number): void;
  /**
   * Assert the message displayed on the alert.
   */
  function seeAlert(text?: string): void;
  function seeAlert$(text?: string): boolean;
  /**
   * Press the "Ok" button (or the equivalent in other languages) on the alert.
   */
  function acceptAlert(): void;
  function acceptAlert$(): boolean;
  /**
   * Press the "Cancel" (or the equivalent in other languages) button on the alert.
   */
  function cancelAlert(): void;
  function cancelAlert$(): boolean;
  /**
   * Fill the text box on the alert.
   * Only applicable for dialog prompts.
   */
  function fillAlert(text: string): void;
  function fillAlert$(text: string): boolean;
}

declare namespace UI {
  /**
   * The width of the browser window, including the broswer's UI,
   * such as the menubar and addressbar, etc.
   */
  const outerWidth: number;
  /**
   * The heigth of the browser window, including the broswer's UI,
   * such as the menubar and addressbar, etc.
   */
  const outerHeight: number;
  /**
   * The width of the browser viewport.
   */
  const innerWidth: number;
  /**
   * The height of the browser viewport.
   */
  const innerHeight: number;
  /**
   * Asserts that the status code for the current page is a specific status code.
   */
  function isStatusCode(statusCode: number): boolean;
  /**
   * Asserts that the status code for the current page is NOT a specific status code.
   */
  function isNotStatusCode(statusCode: number): boolean;
  /**
   * Asserts that the status code for the current page is 200 (OK).
   */
  function is200(): boolean;
  /**
   * Asserts that the status code for the current page is NOT 200 (OK).
   */
  function isNot200(): boolean;
  /**
   * Asserts that the status code for the current page is 404 (Not Found).
   */
  function is400(): boolean;
  /**
   * Asserts that the status code for the current page is NOT 404 (Not Found).
   */
  function isNot400(): boolean;
  /**
   * Asserts that the status code for the current page is 500 (Internal Server Error).
   */
  function is500(): boolean;
  /**
   * Asserts that the status code for the current page is NOT 500 (Internal Server Error).
   */
  function isNot500(): boolean;
  /**
   * Executes Javascript on the browser and returns the result.
   *
   * Your action is ran in the context of the browser and has access
   * to the variables that are available in the browser, but no the test.
   *
   * To make test variables available to your script that runs in the browser,
   * specify them as extra arguments to the execute function.
   */
  function execute<T = void>(action: () => T): T;
  function execute<T = void, K1 = unknown>(
    action: (arg1: K1) => T,
    args: [K1],
  ): T;
  function execute<T = void, K1 = unknown, K2 = unknown>(
    action: (arg1: K1, arg2: K2) => T,
    args: [K1, K2],
  ): T;
  function execute<T = void, K1 = unknown, K2 = unknown, K3 = unknown>(
    action: (arg1: K1, arg2: K2, arg3: K3) => T,
    args: [K1, K2, K3],
  ): T;
  function execute<
    T = void,
    K1 = unknown,
    K2 = unknown,
    K3 = unknown,
    K4 = unknown,
  >(
    action: (arg1: K1, arg2: K2, arg3: K3, arg4: K4) => T,
    args: [K1, K2, K3, K4],
  ): T;
  function execute<
    T = void,
    K1 = unknown,
    K2 = unknown,
    K3 = unknown,
    K4 = unknown,
    K5 = unknown,
  >(
    action: (arg1: K1, arg2: K2, arg3: K3, arg4: K4, arg5: K5) => T,
    args: [K1, K2, K3, K4, K5],
  ): T;
  /**
   * Get the value of an attribute on an element.
   */
  function getAttribute(target: string, attribute: string): string | null;
  /**
   * Get the names and values of attributes on an element as a map.
   */
  function getAttributes(target: string): Record<string, string> | null;
  /**
   * Assert the presense or the expected value of an attribute on an element.
   */
  function hasAttribute(
    target: string,
    attribute: string,
    value?: string,
  ): boolean;
  /**
   * Assert the absense of an attribute on an element, or that the value of an attribute is not equals a given string.
   */
  function doesNotHaveAttribute(
    target: string,
    attribute: string,
    value?: string,
  ): boolean;
  /**
   * Assert the presence of a CSS class on an element.
   */
  function hasClass(target: string, clazz: string): boolean;
  /**
   * Assert the absence of a CSS class on an element.
   */
  function doesNotHaveClass(target: string, clazz: string): boolean;
  /**
   * Get the outer HTML of an element.
   */
  function getHTML(target: string): string | null;
  function getOuterHTML(target: string): string | null;
  /**
   * Get the inner HTML of an element.
   */
  function getInnerHTML(target: string): string | null;
  /**
   * Limit the test to specific parts of a page.
   */
  function context(target: string, action: () => unknown): void;
  /**
   * Resize the resolution to a specific width and height.
   * Example:
   *    I.resize('1280x960')
   *    I.resize(1280, 960)
   */
  function resize(
    resolution: string,
    options?: {
      target: 'viewport' | 'window';
    },
  ): void;
  function resize(
    width: number,
    height: number,
    options?: {
      target: 'viewport' | 'window';
    },
  ): void;
  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   */
  const LocalStorage: LocalStorage;
  type LocalStorage = {
    /**
     * Get the value of a property from local storage for the origin of the current page.
     */
    get(name: string): string | null;
    /**
     * Set a property in local storage for the origin of the current page.
     * If the value is not a string, it will be stringified before saving.
     */
    set(name: string, value: any): void;
    /**
     * Delete a property in local storage for the origin of the current page.
     */
    delete(name: string): void;
    /**
     * Delete all properties in local storage for the origin of the current page.
     */
    deleteAll(): void;
  };
  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie
   */
  const COOKIE: Cookie;
  type Cookie = {
    /**
     * Sets a cookie on the current page.
     */
    set(name: string, value: string): void;
    set(options: {
      name: string;
      value: string;
      secure?: boolean;
      httpOnly?: boolean;
      domain?: string;
      path?: string;
      maxAge?: number;
      expires?: string;
    }): void;
    /**
     * Assert that a cookie is found on the current page.
     */
    isSet(name: string): boolean;
    /**
     * Assert the value of a cookie on the current page.
     */
    isEqual(name: string, value: string): boolean;
    /**
     * Delete a cookie on the current page.
     */
    delete(name: string): void;
    /**
     * Delete all cookies found on the current page.
     */
    deleteAll(): void;
  };
}

declare namespace TEST {
  /**
   * The number of seconds before a command timesout.
   * Default is 15 seconds.
   */
  let commandTimeout: number;
  /**
   * Runs another test.
   * Literally just executes whatever commands are in the file.
   * All tests run in the same scope. This means that variables with the same name in different tests will override each other.
   */
  function run(path: string): void;
  /**
   * Manually stops the test.
   */
  function stop(): void;
  /**
   * Options for the `loadDataFromCsv` function.
   */
  type LoadDataFromCsvOptions = {
    header?: string;
    dataset?: string;
    escape?: string;
    delimiter?: string;
  };
  /**
   * Result type for the `loadDataFromCsv` and `loadDataFromJson` functions.
   */
  type LoadDataResult<T> = Array<T>;
  /**
   * Loads entries from a .csv (comma-separated value) file.
   * Returns an array of JSON objects, or a single JSON object if dataset is specified.
   */
  function loadDataFromCsv<T = Record<string, any>>(
    file: string,
    dataset?: string,
  ): LoadDataResult<T>;
  function loadDataFromCsv<T = Record<string, any>>(
    file: string,
    dataset: string,
    options?: LoadDataFromCsvOptions,
  ): LoadDataResult<T>;
  function loadDataFromCsv<T = Record<string, any>>(
    file: string,
    options?: LoadDataFromCsvOptions,
  ): LoadDataResult<T>;
  /**
   * Loads data from a .json (javascript object notation) file.
   * Returns the test data as a json object. Nested data structure is supported.
   */
  function loadDataFromJson<T = Record<string, any>>(
    file: string,
  ): LoadDataResult<T>;
  /**
   * Logger.
   */
  const log: Log;
  type Log = {
    /**
     * Log a message to report.
     */
    info(message: string): void;
    /**
     * Log a message to report with pass status.
     */
    pass(message: string): void;
    /**
     * Log a message to report with fail status.
     */
    fail(message: string): void;
  };
}
