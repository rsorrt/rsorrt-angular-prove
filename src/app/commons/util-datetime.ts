export default class MyUtilDateTime {
  //
  static getTime(): string {
    let now = new Date();
    let time =
      now.getHours() +
      ':' +
      now.getMinutes() +
      ':' +
      now.getSeconds() +
      ':' +
      now.getMilliseconds();

    return time;
  }
}
