import MyUtilDateTime from './util-datetime'; 


export default class MyLogger {
  //
  private static COLOR_RED = 'red';
  private static COLOR_GREEN = 'green';
  private static COLOR_ORANGE = 'orange';

  private static STYLE = 'color: #ffffff; padding: 3px 3px';

  public static error(msg: any) {
    this.errorColored(msg, this.COLOR_RED);
  }

  public static debug(msg: any) {
    console.log(this.getMsg(msg));
  }

  public static debugGreen(msg: any) {
    this.debugColored(msg, this.COLOR_GREEN);
  }

  public static debugOrange(msg: any) {
    this.debugColored(msg, this.COLOR_ORANGE);
  }


  
  private static debugColored(msg: any, bgColor: string) {
    console.debug('%c%s', this.getStyle(bgColor), this.getMsg(msg));
  }

  private static errorColored(msg: any, bgColor: string) {
    console.error('%c%s', this.getStyle(bgColor), this.getMsg(msg));
  }

  private static getStyle(bgColor: string): string {
    return 'background-color: ' + bgColor + ';' + this.STYLE;
  }

  private static getMsg(msg: string): string {
    return MyUtilDateTime.getTime() + '> ' + msg;
  }
}
